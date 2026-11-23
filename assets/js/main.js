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

  // 5. Blog Search & Category/Tag Filtering (on /blog/)
  var searchInput = document.getElementById('blog-search-input');
  var filterBtns = document.querySelectorAll('[data-filter-category]');
  var postCards = document.querySelectorAll('[data-post-card]');
  var emptyState = document.getElementById('blog-empty-state');
  var countEl = document.getElementById('blog-results-count');

  if (postCards.length > 0 && (searchInput || filterBtns.length > 0)) {
    var activeCategory = 'all';

    function applyBlogFilters() {
      var query = searchInput ? searchInput.value.trim().toLowerCase() : '';
      var visible = 0;

      postCards.forEach(function (card) {
        var cat = (card.getAttribute('data-category') || '').toLowerCase();
        var tags = (card.getAttribute('data-tags') || '').toLowerCase();
        var text = (card.getAttribute('data-search') || '').toLowerCase();

        var matchesCat = activeCategory === 'all' || cat === activeCategory;
        var matchesQuery = !query || text.indexOf(query) !== -1 || tags.indexOf(query) !== -1 || cat.indexOf(query) !== -1;

        if (matchesCat && matchesQuery) {
          card.removeAttribute('hidden');
          visible++;
        } else {
          card.setAttribute('hidden', '');
        }
      });

      if (emptyState) {
        if (visible === 0) {
          emptyState.removeAttribute('hidden');
        } else {
          emptyState.setAttribute('hidden', '');
        }
      }
      if (countEl) {
        countEl.textContent = visible + (visible === 1 ? ' article' : ' articles');
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', applyBlogFilters);
    }

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeCategory = (btn.getAttribute('data-filter-category') || 'all').toLowerCase();
        filterBtns.forEach(function (b) {
          var isSelected = b === btn;
          b.classList.toggle('is-active', isSelected);
          b.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        });
        applyBlogFilters();
      });
    });

    // Support ?category=xxx URL parameter
    try {
      var params = new URLSearchParams(window.location.search);
      var urlCat = params.get('category');
      if (urlCat) {
        var matchingBtn = document.querySelector('[data-filter-category="' + urlCat.toLowerCase() + '"]');
        if (matchingBtn) {
          matchingBtn.click();
        }
      }
    } catch (e) {}
  }
})();
