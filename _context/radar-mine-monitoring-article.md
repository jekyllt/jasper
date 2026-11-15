# Context: "Radar Mine Monitoring" website article

> Internal reference. Jekyll ignores folders that start with `_` unless they are configured, so this file is **not published**.
> Edit it whenever the article's direction changes, and keep it in sync with
> `radar-mine-monitoring/index.md` and `_data/radar_article.yml`.

| | |
|---|---|
| **Purpose** | Semi-technical, semi-marketing "what we do" article for the EarthWise website |
| **Service** | Mine Monitoring (RF + radar), standalone |
| **Audience** | Senior manager / mine leadership (one concession per article) |
| **Language** | English first (Bahasa Indonesia later) |
| **Page** | `radar-mine-monitoring/index.md` → `/radar-mine-monitoring/` |
| **Status** | Draft v0.1. Layout with dummy data and placeholders. |
| **Technical owner of visuals and data** | Nasir (radar / RF outputs O1–O10) |

---

## 1. What the article must do

1. **Make the reader feel the problem.** Name the questions the manager already has and can't get straight answers to: how much is really being worked, when a pit really opened, whether anything was cleared outside the boundary, whether survey numbers hold up.
2. **Make the reader feel ahead of others.** They walk into meetings with numbers and questions nobody else has, and the numbers survive pushback from technical staff.
3. **Show the moat without jargon overload.** The satellite data is free; turning radar into defensible numbers is the hard part, and EarthWise has that expertise.
4. **Earn trust.** Confidence on every number, plus explicit limits on what we do *not* claim.
5. **Drive one action:** request a pilot for one concession.

### Persona constraints we design around

| Persona reality | What the article does about it |
|---|---|
| Not a remote-sensing specialist | Plain language first; technical detail in short, skippable blocks |
| Little time | Hero + section 1 + section 4 must work on their own (skim path) |
| Relies on filtered internal reporting | Positions EarthWise as an *independent second view* |
| Risk-averse about being wrong in front of others | Confidence levels, validation, "what we won't tell you" |
| Wants to look expert | "Questions to put to your team" and "numbers you can defend" |

### Moat pillars (use consistently)

1. **Sees through cloud.** Radar works through the wet season, day and night.
2. **Pass-by-pass history.** Sentinel-1 now passes about every 6 days; the record goes back years.
3. **The craft.** Terrain correction, speckle filtering, orbit-consistent time series, statistical change testing, RF masking, false-alarm screening (e.g. rain on bare soil).
4. **Built for Indonesian mining.** Nickel laterite terrain, Sulawesi and Maluku cloud seasons, WIUP boundaries and permit dates.
5. **Validated and honest.** Validation against high-resolution imagery; confidence on every figure; explicit limits.

---

## 2. Tone and copy decisions

Defaults chosen for draft v0.1. Change them here first, then in the page.

| Decision | Current default | Alternatives |
|---|---|---|
| Tone | Bold but credible ("reports are filtered", never "your team lies") | Calm and consultative |
| Length | Long-form (~1,800–2,200 words) with a skim path | Short landing page (sections 0, 1, 4, 6, 9) |
| Persona naming | "Mine leadership" / "you", role-neutral enough for owners and investors | Explicitly "senior managers" |
| Example vignette | Fully fictional, labelled *illustrative* | Anonymized pilot example once results exist |
| Discretion angle | Subtle ("no site access, no data request to your team") | Explicit ("order it privately") |
| Sensitive findings | Always worded "flagged for verification", never "breach" or "illegal" | — |

**Words to avoid:** "illegal", "violation", "proof", "guarantee", "real-time", "AI magic", exact accuracy claims before validation exists.

---

## 3. Article outline (base reference)

| # | Heading / subheading (draft copy) | What it contains | Job |
|---|---|---|---|
| **0** | **Hero:** *"Know what's happening at your mine — before anyone tells you."* | One-line promise and subheadline: independent, monthly, radar-based monitoring of a single concession, through cloud and rain. One call to action: "Request a pilot for your concession." | Emotion |
| **1** | **The questions your reports can't answer** | | |
| 1.1 | The questions you already have | A short list in the manager's voice: how much is really worked, when that pit opened, anything cleared outside the boundary, whether survey numbers hold up. The reader should recognise at least one. | Emotion |
| 1.2 | Why they stay vague | Surveys are quarterly at best; drones and optical satellites are blinded by months of cloud. Every figure passes through several layers of reporting before it reaches you. | Emotion |
| 1.3 | The cost of not knowing | Being asked a question in a board meeting you can't answer. Learning about a problem from a regulator, journalist or neighbour first. | Emotion |
| **2** | **See your concession every six days — through the clouds** | | |
| 2.1 | Radar sees what cameras can't | Radar sends its own signal, so it works at night and through cloud. Plain words, with one visual: a cloudy optical image beside a clear radar image. | Moat |
| 2.2 | A record nobody inside has | Sentinel-1 passes about every six days, so every opening gets a pass-by-pass history going back years. | Emotion / Moat |
| 2.3 | Independent by design | Derived from satellites, not from company reports or declared boundaries. No site access and no data request to your team are needed. | Trust / Emotion |
| **3** | **How it works** *(semi-technical)* | | |
| 3.1 | Step 1: map the mine | A machine-learning land-cover model (optical + radar + terrain) separates pits, dumps, roads, water and vegetation. It draws the mine mask that everything else works inside. | Moat |
| 3.2 | Step 2: watch every opening | A statistical change test on each radar pass inside the mask flags when the ground changes significantly, and when it stops. | Moat |
| 3.3 | Step 3: turn pixels into decisions | Hectares, dates and active/dormant status per opening, reported against your official concession boundary. | Emotion |
| 3.4 | Step 4: check our own work | Validated against high-resolution imagery; every number carries a confidence level. | Trust |
| **4** | **What you'll know each month** | | |
| 4.1 | How much is really being worked | Active / recently idle / dormant split, in hectares and on a map. | Emotion |
| 4.2 | When each opening started | Start date per opening, compared with recorded permit dates; mismatches flagged for quiet verification. | Emotion |
| 4.3 | What's happening at the edges | Disturbance beyond the concession boundary, located on a map. | Emotion |
| 4.4 | Whether the rain really stops work | Month-by-month activity through wet and dry seasons. | Emotion |
| 4.5 | Growth, ponds and reclamation | Board-ready growth curve, pond behaviour, revegetation progress, optional carbon estimate. | Emotion |
| **5** | **Walk into the meeting already knowing** | | |
| 5.1 | A month in the life *(illustrative)* | Short fictional vignette, labelled illustrative. | Emotion (look expert) |
| 5.2 | Questions to put to your team | Every briefing ends with 3–5 specific questions drawn from the findings. | Emotion (look expert) |
| 5.3 | Numbers you can defend | Method and confidence in one line per figure. | Trust / Look expert |
| **6** | **Why this is harder than it looks** *(the moat)* | | |
| 6.1 | Free data is not free answers | Raw radar is noisy, distorted by terrain and easy to misread. | Moat |
| 6.2 | The craft behind each number | Terrain and orbit correction, noise filtering, statistical testing, masking, false-alarm screening. | Moat |
| 6.3 | Built for Indonesian mining | Nickel laterite terrain, cloud seasons, WIUP and permit records. | Moat |
| **7** | **What we won't tell you** | No tonnage, production, grade, legal or compliance judgements. Findings needing verification are labelled so. | Trust |
| **8** | **What you receive** | Monthly briefing, opening table, GIS files; delivered privately. | Action |
| **9** | **Start with one concession** | Pilot from history (2017) to this month. We only need the concession name or licence ID. Call to action. | Action |
| **10** | **FAQ** *(optional)* | GIS staff? Accuracy? Confidentiality? Team involvement? vs drone surveys? | Trust |

---

## 4. Placeholder register

Every visual or data element that depends on technical outputs has an ID. The **single source of truth** is `_data/radar_article.yml` (titles, descriptions, sources, status, dummy values). The page references elements by ID only:

```liquid
{% include ew-figure.html id="F4" %}
{% include ew-table.html id="T2" %}
{% include ew-kpis.html %}
```

To replace a placeholder with a real image, set `image:` on its entry in `_data/radar_article.yml` (path under `assets/images/radar/`) and change `status:` to `final`. The include then renders the image instead of the dashed box.

| ID | Type | Element | Section | Source output | Owner |
|---|---|---|---|---|---|
| F1 | Image | Cloudy optical vs. clear radar, same date and concession | 0 / 2.1 | S2 + S1 scene | Nasir |
| F2 | Chart | Usable optical days vs. radar passes per month | 1.2 / 2.2 | O1 + S2 cloud stats | Nasir |
| F3 | Diagram | Four-step pipeline | 3 | Design (no data dependency) | Web |
| F4 | Map | Land cover / mine mask of the concession | 3.1 | O2, O3 | Nasir |
| F5 | Map | Activity status: active / recently inactive / dormant / new | 4.1 | O4 | Nasir |
| F6 | Map | Start date per opening (coloured by date) | 4.2 | O5 | Nasir |
| F7 | Map | Disturbance outside boundary (inset) | 4.3 | O3 + WIUP | Nasir |
| F8 | Chart | Monthly activity, wet vs. dry season | 4.4 | O4, O5 | Nasir |
| F9 | Chart | Footprint growth curve (monthly + cumulative) | 4.5 | O6 | Nasir |
| F10 | Chart | Pond / settling-basin area over time | 4.5 | O7 | Nasir |
| F11 | Image | Raw vs. corrected radar (terrain + speckle) | 6.2 | S1 preprocessing | Nasir |
| F12 | Image | Monthly briefing page mock-up | 8 | Report template | Web |
| K1 | KPI panel | Footprint, active, dormant, new, outside boundary, change vs last month | 4 | O6 | Nasir |
| T1 | Table | Openings with status and dates | 4.2 | O4, O5 | Nasir |
| T2 | Table | Questions to put to your team | 5.2 | Derived from findings | Analyst |
| T3 | Table | Confidence summary (passes, accuracy, precision) | 5.3 | O1, O9 | Nasir |
| T4 | Table | Deliverables | 8 | Static | Web |

**Dummy-data rule:** all numbers in `_data/radar_article.yml` are fictional and every rendered placeholder says **DUMMY DATA**. Before publishing, set `draft: false` on the page; that hides the internal placeholder register at the bottom of the page.

---

## 5. Files in this repo

| File | Role |
|---|---|
| `radar-mine-monitoring/index.md` | Article copy (markdown + includes) |
| `_layouts/article.html` | Article layout: hero, table of contents, content, CTA, placeholder register |
| `_includes/ew-figure.html` | Figure placeholder, or the real image once `image:` is set |
| `_includes/ew-table.html` | Data-driven table |
| `_includes/ew-kpis.html` | KPI panel |
| `_includes/ew-register.html` | Internal placeholder register (draft mode only) |
| `_data/radar_article.yml` | Placeholder definitions + dummy data |
| `assets/css/earthwise-article.css` | Article styles (loaded only by the article layout) |
| `_context/radar-mine-monitoring-article.md` | This file |

---

## 6. Open decisions

1. Tone: bold vs. consultative (draft is bold-but-credible).
2. Long-form vs. short landing page.
3. Name the persona explicitly or keep it role-neutral.
4. Fictional vignette vs. anonymized pilot example.
5. Discretion angle: subtle vs. explicit.
6. CTA mechanism: email link, form (e.g. Formspree/Google Form), or WhatsApp.
7. Whether the article lives at `/radar-mine-monitoring/` or under a `/services/` path.

---

## 7. Known site issues (review of 2026-11-15)

Not fixed yet. The article does not depend on them.

1. **Theme leftovers.** The menu (`_includes/navigation.html`) still links to the Jasper demo tags and authors (Fables, Speeches, Casper, Edgar…); `_data/authors.yml`, demo images and the Ghost logo are still present; the home page title is "Finding The Way Home".
2. **`site.url` is not set** in `_config.yml`, so canonical links and social-share (Open Graph) URLs are relative and break when shared. Set `url: "https://earthwisea.github.io"`.
3. **Outdated build stack.** Jekyll 3.9 with `github-pages` 214, and the workflow uses `actions/checkout@v2` and `helaili/jekyll-action@v2`. Consider moving to GitHub's official Pages workflow.
4. **Old front-end dependencies** loaded from protocol-relative CDN URLs: jQuery 1.12, highlight.js 9.3; the share buttons include Google+.
5. **The home page is a blog index** (post list), not a service landing page.
6. **No contact mechanism yet.** The pilot CTA uses a placeholder `mailto:`.

### Preview without Ruby

The article was checked with an approximate preview (Liquid templates translated to Jinja, Python-Markdown in place of kramdown). Always confirm with a real build before publishing: `bundle exec jekyll serve`, then open `/radar-mine-monitoring/`.
