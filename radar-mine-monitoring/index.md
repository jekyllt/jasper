---
layout: article
title: "Know what's happening at your mine, before anyone tells you."
description: "Independent, monthly, radar-based monitoring of a single mining concession, through cloud and rain."
permalink: /radar-mine-monitoring/
navigation: true
current: radar
class: "page-template article-template"   # body class (layout front matter is not merged into page in Jekyll 3)
draft: true            # true = show draft banner + placeholder register; set false to publish

eyebrow: "Radar Mine Monitoring"
lede: "Independent monthly monitoring of your concession from satellite radar, which sees through cloud, day and night. Hectares, dates and activity for every opening, with a confidence level on every number."
cta_label: "Request a pilot for your concession"
cta_url: "#pilot"
cta_secondary_label: "See what you'll know"
cta_secondary_url: "#insights"
cta_band_title: "See your concession through the clouds."
cta_band_text: "Tell us the concession name or licence number. We build its history back to 2017 and send your first briefing."
hero_figure: F1

toc:
  - { id: questions,    label: "The questions your reports can't answer" }
  - { id: radar,        label: "Every six days, through the clouds" }
  - { id: how,          label: "How it works" }
  - { id: insights,     label: "What you'll know each month" }
  - { id: meeting,      label: "Walk into the meeting already knowing" }
  - { id: moat,         label: "Why this is harder than it looks" }
  - { id: limits,       label: "What we won't tell you" }
  - { id: deliverables, label: "What you receive" }
  - { id: pilot,        label: "Start with one concession" }
  - { id: faq,          label: "Questions you may have" }
---

## The questions your reports can't answer {#questions}

You are responsible for a mine worth more than any report written about it. Yet some of the simplest questions about it still don't have a straight answer.
{: .ew-intro}

### The questions you already have

<ul class="ew-qlist">
<li>How much of our footprint is actually being worked right now?</li>
<li>When did that pit really open, and was it before the permit?</li>
<li>Has anything been cleared outside our boundary?</li>
<li>Did work really slow down in the wet season, or did the reports just say so?</li>
<li>Do our survey hectares match what anyone can see from space?</li>
</ul>

If even one of these sounds familiar, read on.

### Why they stay vague

Ground surveys arrive quarterly at best. Drones need people on site and decent weather. Optical satellites, the kind behind the maps on your phone, see nothing through cloud, and over Sulawesi and Maluku the cloud can stay for weeks.

The figures that do reach you have passed through contractors, site teams and department heads first. Each layer summarises, rounds and, sometimes, softens.

{% include ew-figure.html id="F2" %}

### The cost of not knowing

It is the question in the board meeting you can't answer on the spot. It is hearing about a problem at the edge of your concession from a regulator, a journalist or a neighbour, before your own team mentions it. In both cases the facts were visible from orbit all along. Nobody was looking.

## See your concession every six days, through the clouds {#radar}

### Radar sees what cameras can't

Satellite radar doesn't wait for sunlight or clear skies. It sends its own microwave signal to the ground and measures what comes back, through cloud, haze, smoke and darkness. Freshly dug ground, compacted haul roads, standing water and forest each return the signal differently, and the return changes when the ground changes.

### A record nobody inside has

The European Sentinel-1 radar satellites pass over your concession about every six days, and the archive goes back years. That gives a pass-by-pass history of every opening, through every wet season. No survey programme can rebuild that after the fact.

### Independent by design

Everything we report comes from satellite observation and your official concession boundary from public records. None of it comes from company reports, contractor logs or declared boundaries. We need no site access and no data from your team to start.

## How it works {#how}

Two techniques, each doing what it does best. **Machine learning tells us where the mine is. Radar tells us what is happening inside it, and when.**
{: .ew-intro}

{% include ew-figure.html id="F3" %}

### Step 1: Map the mine

A machine-learning model reads optical, radar and terrain data together and classifies every 10-metre pixel of the concession: pits and bare ground, waste and tailings, roads and infrastructure, water, vegetation and revegetation. The result is the mine footprint, the mask every later step works inside, so farms, floods and seasonal vegetation are never mistaken for mining.

{% include ew-figure.html id="F4" %}

### Step 2: Watch every opening

On every radar pass, we run a statistical change test across the footprint. It asks one question of each pixel: has the ground surface changed more than radar noise alone can explain? Each answer comes with a significance level, so a flagged change is a measured result, not a visual impression.

### Step 3: Turn pixels into decisions

Changes are grouped into openings and summarised the way you think about the mine: hectares, start date, last activity, and a status for every opening (active, recently inactive, dormant or new). Everything is reported against your official concession boundary.

### Step 4: Check our own work

Results are validated against independent high-resolution imagery. Every figure carries a confidence level and the number of satellite passes behind it, so you always know how hard you can lean on a number.

<div class="ew-techbox" markdown="1">
**For your technical team.** Random Forest land-cover classification on Sentinel-2, Sentinel-1 and terrain features. Sentinel-1 GRD time series kept to one relative orbit each, with radiometric terrain flattening and speckle filtering. Sequential omnibus likelihood-ratio change detection on dual-polarisation (VV/VH) data. Validation against a stratified reference sample. Full method notes come with every delivery.
</div>

## What you'll know each month {#insights}

Every month you receive a short briefing on your concession. This is the kind of panel it opens with.
{: .ew-intro}

{% include ew-kpis.html %}

### How much is really being worked

Most mines are bigger than their working face. We split the footprint into active, recently idle and dormant openings, so you can see how much of your licensed land is actually being worked, and how much has quietly stopped.

{% include ew-figure.html id="F5" %}

### When each opening started

Every opening gets a start date from its own radar history, independent of internal records. Where that date falls before the recorded permit start, we flag it so you can verify it quietly, before anyone else asks.

{% include ew-figure.html id="F6" %}

{% include ew-table.html id="T1" %}

### What's happening at the edges

Disturbance doesn't always respect a boundary line. We map any change beyond your concession limits and size it in hectares, whoever caused it: your contractor, a neighbour or someone else.

{% include ew-figure.html id="F7" %}

### Whether the rain really stops work

"The rain slowed us down" is one of the most common lines in a mine report. Radar sees through the same rain, so month by month you can see how much activity really dropped, and when it picked up again.

{% include ew-figure.html id="F8" %}

### Growth, ponds and reclamation

A growth curve back to 2017, ready for the board. How ponds and settling basins behave through the wet season. How much disturbed land is actually revegetating. And, if you need it, an estimate of the carbon released by land clearing.

{% include ew-figure.html id="F9" %}

{% include ew-figure.html id="F10" %}

## Walk into the meeting already knowing {#meeting}

### A month in the life

<div class="ew-vignette" markdown="1">
*Illustrative scenario. The concession, names and numbers are fictional.*

It is the first Monday of the month. Before the operations review, the general manager opens her EarthWise briefing on her phone. The footprint grew 2.3%, in line with plan. Two things stand out. Opening B-11 has shown no activity for eight months, although the last site report listed it as ongoing. And three new openings appeared on the eastern side in the past few weeks.

In the meeting she doesn't present numbers. She asks two questions. The room goes quiet. Then someone promises an answer by Friday.
</div>

### Questions to put to your team

Every briefing ends with three to five specific questions drawn from the month's findings. You arrive with the question, not just the answer.

{% include ew-table.html id="T2" %}

### Numbers you can defend

When your technical staff push back, and good ones will, the method and confidence behind each figure are already on the page: how many satellite passes, how accurate the last validation was, how precise each date is.

{% include ew-table.html id="T3" %}

## Why this is harder than it looks {#moat}

### Free data is not free answers

The satellite data we use is public. Anyone can download it. Very few teams can turn it into a number a mine manager will put in front of a board. Raw radar is grainy with "speckle", hillsides look brighter or darker purely because of the viewing angle, and wet bare soil can look like fresh digging. Read naively, it produces confident-looking maps that are wrong.

{% include ew-figure.html id="F11" %}

### The craft behind each number

Every figure rests on a chain of decisions: correcting for terrain and orbit geometry, filtering speckle without blurring pit edges, keeping each time series to a single viewing angle, testing change statistically instead of eyeballing it, masking out everything that isn't mine, and screening out false alarms such as rain on bare ground. Skip one step and the numbers drift. That chain is what EarthWise does.

### Built for Indonesian mining

Our methods are tuned for nickel laterite on steep ridges, for the cloud seasons of Sulawesi and Maluku, and for Indonesia's official concession and permit records. This is not a generic global dashboard with your coordinates typed in.

## What we won't tell you {#limits}

<div class="ew-limits" markdown="1">
- We don't estimate tonnage, production or ore grade.
- We don't make legal, permitting or compliance judgements.
- Where a finding needs checking on the ground or in the records, we say so plainly: **flagged for verification**.
</div>

Clear limits are what make the rest of the numbers worth trusting.

## What you receive {#deliverables}

Everything is delivered privately, to the people you name.

<div class="ew-split">
{% include ew-table.html id="T4" %}
{% include ew-figure.html id="F12" %}
</div>

## Start with one concession {#pilot}

A pilot covers one concession, from its history to this month.

1. **You name the concession.** The name or licence number is enough; the boundary comes from public records.
2. **We build its history.** Land cover and radar activity from 2017 to today, checked against independent high-resolution imagery.
3. **You receive your first briefing**, with a walkthrough of what we found and how far each number can be trusted.

<p><a class="ew-btn" href="mailto:hello@example.com?subject=Radar%20mine%20monitoring%20pilot">Request a pilot</a> <span class="ew-note">&nbsp;Placeholder contact. Replace with the real address or form.</span></p>

## Questions you may have {#faq}

<div class="ew-faq">
<details><summary>Do I need GIS staff to use this?</summary><p>No. The briefing is written for decision-makers. GIS files are included for your technical team if you want them.</p></details>
<details><summary>How accurate is it?</summary><p>Every pilot includes a validation against independent high-resolution imagery, and the result is reported in every briefing. We publish the number rather than promise one.</p></details>
<details><summary>Is it confidential?</summary><p>Yes. Briefings go only to the people you name.</p></details>
<details><summary>Does my team need to be involved?</summary><p>Not to start. The analysis uses satellite data and public concession records. Later you can share survey figures so we can compare them side by side.</p></details>
<details><summary>How is this different from drone surveys?</summary><p>A drone gives a detailed snapshot whenever someone flies it in good weather. Radar gives a continuous record every few days, back to 2017, with nobody on site. The two work well together.</p></details>
</div>
