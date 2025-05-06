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


{% if site.data.repositories.github_repos %}
---
## Featured Software Repositories

<p>Below are selected highlights of our software packages and resources available on GitHub. For the most up-to-date versions and comprehensive lists, please visit the individual repositories and the ChongWuLab GitHub page linked below.</p>

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

---
## Software Tutorials & Guides

<p>We provide detailed tutorials and guides for selected software packages to help users get started and utilize their full capabilities. These tutorials will open in a new tab and retain their original formatting.</p>

<ul>
  <li>
    <strong>IWAS (Imaging-Wide Association Study):</strong> 
    <a href="{{ '/tutorials/IWAS.html' | relative_url }}" target="_blank" rel="noopener noreferrer">View Tutorial <i class="fas fa-external-link-alt"></i></a><br>
    A tool for performing an image-wide association study by incorporating imaging endophenotypes as weights into GWAS.
    <em>(Associated paper: Xu et al., NeuroImage 2017)</em>
  </li>

---
## Explore All Lab Software

<p>Discover all software, code, and resources developed by our lab members on the official ChongWuLab GitHub organization page:</p>
<p style="text-align: center;">
  <a href="https://github.com/ChongWuLab" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit ChongWuLab on GitHub</a>
</p>


