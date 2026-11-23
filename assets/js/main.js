(function () {
  'use strict';

  // 1. Theme Toggle
  var themeBtn = document.getElementById('theme-toggle-btn');
  function syncThemeBtn(theme) {
    if (!themeBtn) return;
    themeBtn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }
  syncThemeBtn(document.documentElement.getAttribute('data-theme') || 'light');

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      syncThemeBtn(next);
      try {
        localStorage.setItem('aldisaw-theme', next);
      } catch (e) {}
    });
  }

  // 2. Mobile Navigation Drawer
  var menuBtn = document.getElementById('mobile-menu-btn');
  var drawer = document.getElementById('mobile-nav-drawer');
  if (menuBtn && drawer) {
    function setDrawer(open) {
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        drawer.removeAttribute('hidden');
      } else {
        drawer.setAttribute('hidden', '');
      }
    }

    menuBtn.addEventListener('click', function () {
      var isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      setDrawer(!isOpen);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
        setDrawer(false);
        menuBtn.focus();
      }
    });
  }

  // 3. Back to Top Button (throttled via requestAnimationFrame)
  var backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          if (window.scrollY > 400) {
            backToTop.removeAttribute('hidden');
          } else {
            backToTop.setAttribute('hidden', '');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. Copy Code Button for Article Code Blocks
  var codeBlocks = document.querySelectorAll('.prose pre');
  codeBlocks.forEach(function (pre) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-code-btn';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', 'Copy code to clipboard');
    btn.addEventListener('click', function () {
      var code = pre.querySelector('code');
      var text = code ? code.innerText : pre.innerText;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          btn.textContent = 'Copied!';
          setTimeout(function () { btn.textContent = 'Copy'; }, 1800);
        });
      }
    });
    pre.appendChild(btn);
  });

  // 5. Blog Search & Category Filtering (Single Source of Truth on /blog/)
  function initBlogSearch() {
    var searchInput = document.getElementById('blog-search-input');
    var searchForm = document.getElementById('blog-search-form');
    var clearBtn = document.getElementById('blog-clear-btn');
    var resetBtn = document.getElementById('blog-reset-btn');
    var filterBtns = Array.prototype.slice.call(document.querySelectorAll('[data-filter-category]'));
    var allArticles = Array.prototype.slice.call(document.querySelectorAll('[data-post-card]'));
    var emptyState = document.getElementById('blog-empty-state');
    var countEl = document.getElementById('blog-results-count');

    if (allArticles.length === 0 || (!searchInput && filterBtns.length === 0)) {
      return;
    }

    var selectedCategory = 'all';

    function matchesSearch(card, query) {
      if (!query) return true;
      var cardCategories = (card.getAttribute('data-categories') || card.getAttribute('data-category') || '').toLowerCase();
      var cardTags = (card.getAttribute('data-tags') || '').toLowerCase();
      var cardText = (card.getAttribute('data-search') || '').toLowerCase();
      var haystack = (cardText + ' ' + cardTags + ' ' + cardCategories).replace(/\s+/g, ' ');
      return haystack.indexOf(query) !== -1;
    }

    function matchesCategory(card, category) {
      if (category === 'all') return true;
      var cardCategories = (card.getAttribute('data-categories') || card.getAttribute('data-category') || '').toLowerCase();
      var catTokens = cardCategories.split(/\s+/).filter(Boolean);
      return catTokens.indexOf(category) !== -1;
    }

    function filterArticles(articles, query, category) {
      var q = (query || '').trim().toLowerCase().replace(/\s+/g, ' ');
      var cat = (category || 'all').trim().toLowerCase();
      return articles.filter(function (card) {
        return matchesSearch(card, q) && matchesCategory(card, cat);
      });
    }

    function renderFilteredArticles() {
      var query = searchInput ? searchInput.value : '';
      var filteredArticles = filterArticles(allArticles, query, selectedCategory);

      allArticles.forEach(function (card) {
        var isVisible = filteredArticles.indexOf(card) !== -1;
        card.classList.toggle('is-hidden', !isVisible);
        if (isVisible) {
          card.removeAttribute('hidden');
          card.style.display = '';
        } else {
          card.setAttribute('hidden', '');
          card.style.display = 'none';
        }
      });

      if (emptyState) {
        emptyState.classList.toggle('is-hidden', filteredArticles.length > 0);
        if (filteredArticles.length === 0) {
          emptyState.removeAttribute('hidden');
        } else {
          emptyState.setAttribute('hidden', '');
        }
      }

      if (countEl) {
        countEl.textContent = filteredArticles.length + (filteredArticles.length === 1 ? ' article' : ' articles');
      }

      if (clearBtn) {
        if (query.trim().length > 0) {
          clearBtn.removeAttribute('hidden');
        } else {
          clearBtn.setAttribute('hidden', '');
        }
      }
    }

    function selectCategory(cat) {
      selectedCategory = (cat || 'all').toLowerCase();
      filterBtns.forEach(function (b) {
        var isSelected = (b.getAttribute('data-filter-category') || 'all').toLowerCase() === selectedCategory;
        b.classList.toggle('is-active', isSelected);
        b.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
      });
      renderFilteredArticles();
    }

    if (searchInput) {
      searchInput.addEventListener('input', renderFilteredArticles);
    }

    if (searchForm) {
      searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        renderFilteredArticles();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        if (searchInput) {
          searchInput.value = '';
          searchInput.focus();
        }
        renderFilteredArticles();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        if (searchInput) {
          searchInput.value = '';
        }
        selectCategory('all');
      });
    }

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectCategory(btn.getAttribute('data-filter-category') || 'all');
      });
    });

    try {
      var params = new URLSearchParams(window.location.search);
      var urlCat = params.get('category');
      if (urlCat) {
        selectCategory(urlCat);
      } else {
        renderFilteredArticles();
      }
    } catch (e) {
      renderFilteredArticles();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBlogSearch);
  } else {
    initBlogSearch();
  }
})();
