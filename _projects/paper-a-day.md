---
layout: page
title: One Paper a Day
description: Documentation of my 2025 resolution to read one scientific publication per day
img: assets/img/paper-a-day_bookshelf.jpg
importance: 3
category:
related_publications: false
pretty_table: true
---

{% assign papers_read = 0 %}
{% for paper in site.data.paper-a-day %}
  {% if paper.date and paper.date contains "2025" %}
    {% assign papers_read = papers_read | plus: 1 %}
  {% endif %}
{% endfor %}

For 2025 my resolution is to become a better reader and more informed scientist by challenging myself to [read one paper per day](https://medium.com/@samuelwestwood/read-one-paper-each-day-for-one-year-go-on-i-dare-you-989329d14c61) on average. This is where I document my progress.

<div class="loading-bar-bg">
  <div class="loading-bar" style="width: {{ papers_read | divided_by: 3.65 | at_most: 100 }}%"></div><div class="loading-bar-label">{{ papers_read }}/365 Papers</div>
</div>

My goal is to get an overview of what is currently going on in different areas in the life sciences, improve my critical evaluation/thinking skills and become more versed in reading scientific literature in general.

I don't count papers that I only briefly skimmed or had to read anyways for courses or literature research.

<table
  data-height="600"
  data-pagination="true"
  data-search="true"
  data-toggle="table"
  data-url="{{ '/assets/json/paper-a-day.json' | relative_url }}"
>
  <thead>
    <tr>
      <th data-field="date" data-width="10" data-width-unit="%" data-halign="left" data-align="left" data-sortable="true">Date</th>
      <th data-field="title" data-width="75" data-width-unit="%" data-halign="center" data-align="left">Title</th>
      <th data-field="sdoi" data-width="10" data-width-unit="%" data-halign="center" data-align="center" data-formatter="linkFormatter" data-title-tooltip="10/...">sDOI</th>
    </tr>
  </thead>
</table>

<script>
  function linkFormatter(value, row) {
    return '<a href="https://doi.org/' + value + '" target="_blank">' + value.slice(3) + '</a>'
  }
</script>

<style>
  .loading-bar-bg {
    border-radius: 0.25rem;
    background-color: var(--global-code-bg-color);
    position: relative;
    margin-bottom: 15px;
  }
  .loading-bar {
    border-radius: 0.25rem;
    height: 24px;

    background-color: var(--global-theme-color);
  }
  .loading-bar-label {
    position: absolute;
    top: 0;
    width: 100%;
    text-align: center;
    font-weight: bold;
  }
  .fixed-table-border {
    border-left: 1px solid var(--global-divider-color) !important;
    border-right: 1px solid var(--global-divider-color) !important;
  }
  .fixed-table-container {
    border-bottom: 1px solid var(--global-divider-color) !important;
  }
</style>
