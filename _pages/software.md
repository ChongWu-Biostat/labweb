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

<p>We provide detailed tutorials and guides for selected software packages to help users get started and utilize their full capabilities. These tutorials are hosted on our previous site and will open in a new tab.</p>

<ul>
  <li>
    <strong>glmtlp:</strong> 
    <a href="https://chongwu-biostat.github.io/personal_site_old/glmtlp.html" target="_blank" rel="noopener noreferrer">View Tutorial <i class="fas fa-external-link-alt"></i></a><br>
    R package for implementing the truncated lasso penalty under a generalized linear model framework. Similar to <a href="https://web.stanford.edu/~hastie/glmnet/glmnet_alpha.html" target="_blank" rel="noopener noreferrer">glmnet</a> but supports non-convex penalties.
  </li>
  <li>
    <strong>IWAS (Imaging-Wide Association Study):</strong> 
    <a href="https://chongwu-biostat.github.io/personal_site_old/IWAS.html" target="_blank" rel="noopener noreferrer">View Tutorial <i class="fas fa-external-link-alt"></i></a><br>
    A software for implementing Imaging-Wide Association Studies.
    <em>(Associated paper: <a href="https://www.ncbi.nlm.nih.gov/pubmed/28736311" target="_blank" rel="noopener noreferrer">Xu et al., NeuroImage 2017</a>)</em>
  </li>
  <li>
    <strong>TWAS-aSPU:</strong> 
    <a href="https://chongwu-biostat.github.io/personal_site_old/TWAS.html" target="_blank" rel="noopener noreferrer">View Tutorial <i class="fas fa-external-link-alt"></i></a><br>
    A powerful gene-based association test integrating eQTL data with GWAS data (individual-level or summary statistics).
    <em>(Associated paper: <a href="https://doi.org/10.1534/genetics.117.300270" target="_blank" rel="noopener noreferrer">Xu et al., Genetics 2017</a>)</em> 
  </li>
  <li>
    <strong>aSPUpath2:</strong> 
    <a href="https://chongwu-biostat.github.io/personal_site_old/aspupath2.html" target="_blank" rel="noopener noreferrer">View Tutorial <i class="fas fa-external-link-alt"></i></a><br>
    A pathway-based method integrating eQTL data with GWAS summary statistics, extending TWAS to pathway analysis.
    <em>(Associated paper: <a href="https://www.ncbi.nlm.nih.gov/pubmed/29411426" target="_blank" rel="noopener noreferrer">Wu & Pan, Genetic Epidemiology 2018</a>)</em> <!-- Corrected author based on CV -->
  </li>
  <li>
    <strong>egmethyl:</strong> 
    <a href="https://chongwu-biostat.github.io/personal_site_old/egmethyl.html" target="_blank" rel="noopener noreferrer">View Tutorial <i class="fas fa-external-link-alt"></i></a><br>
    A gene-based test integrating enhancer-promoter interactions and DNA methylation data with GWAS summary data.
    <em>(Associated paper: <a href="https://doi.org/10.1093/bioinformatics/btz161" target="_blank" rel="noopener noreferrer">Wu & Pan, Bioinformatics 2019</a>)</em> <!-- Corrected author based on CV -->
  </li>
</ul>


---
## Explore All Lab Software

<p>Discover all software, code, and resources developed by our lab members on the official ChongWuLab GitHub organization page:</p>
<p style="text-align: center;">
  <a href="https://github.com/ChongWuLab" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit ChongWuLab on GitHub</a>
</p>


