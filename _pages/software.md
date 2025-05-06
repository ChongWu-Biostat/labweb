---
layout: page
permalink: /software/
title: Software
description: Open-source software, tools, and resources developed by members in Chong Wu Lab.
nav: true
nav_order: 3
---


<!-- Introductory Text -->
<p>Our group is strongly committed to open science and reproducible research. We actively develop and maintain robust, validated, open-source software, primarily as R packages, implementing our novel statistical methodologies. These tools aim to make complex methods accessible to the broader research community.</p>

<p>A significant contribution is the <a href="https://www.gcbhub.org/" target="_blank" rel="noopener noreferrer"><strong>Global Causal Biomarker Hub (GCB Hub)</strong></a>, a comprehensive resource offering pre-computed biomarker prediction models and association results to facilitate downstream validations.</p>

{% if site.data.repositories.github_users %}
---
## PI and Lab GitHub Profile

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% comment %} Display user card (includes PI and optionally the Lab Org) {% endcomment %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

<!-- GitHub Trophies Section -->
{% if site.repo_trophies.enabled %}
  {% for user in site.data.repositories.github_users %}
    {% comment %} Only show trophies for actual users, not organizations (usually) {% endcomment %}
    {% assign is_lab_org = false %}
    {% if user == 'ChongWuLab' %} {# Adjust if your lab org name is different #}
      {% assign is_lab_org = true %}
    {% endif %}

    {% unless is_lab_org %}
      {% if site.data.repositories.github_users.size > 1 %}
        <h4 class="mt-4">{{ user }} GitHub Trophies</h4>
      {% else %}
        <h4 class="mt-4">GitHub Trophies</h4>
      {% endif %}
      <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
        {% include repository/repo_trophies.liquid username=user %}
      </div>
    {% endunless %}
  {% endfor %}
{% endif %} {# End repo_trophies check #}
{% endif %} {# End github_users check #}


{% if site.data.repositories.github_repos %}
---
## Featured Software Repositories

<p>Below are selected highlights of our software packages and resources available on GitHub. For the most up-to-date versions and comprehensive lists, please visit the individual repositories and the ChongWuLab GitHub page linked below.</p>

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %} {# End github_repos check #}

---
## Explore All Lab Software

<p>Discover all software, code, and resources developed by our lab members on the official ChongWuLab GitHub organization page:</p>
<p style="text-align: center;">
  <a href="https://github.com/ChongWuLab" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit ChongWuLab on GitHub</a>
</p>


