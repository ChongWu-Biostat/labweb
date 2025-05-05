---
layout: page
permalink: /research/
title: Research
description:  Exploring causal inference, statistical genetics, machine learning, AI, and their application to biomedical challenges like prostate cancer and pancreatic cancer.
nav: true
nav_order: 1
---


Our research focuses on developing and applying novel statistical and computational methodologies to tackle complex challenges in genetics, genomics, and biomedical science. We leverage causal inference, machine learning, integrative multi-omics analysis, and AI to gain deeper insights into disease mechanisms, identify biomarkers, improve risk prediction, and enhance drug discovery.

---

<div class="row mt-4 align-items-center">
    <div class="col-md-4">
        {% include figure.liquid path="/assets/img/IVillustrations.png" class="img-fluid rounded z-depth-1" %}
        <!-- Using IVillustrations.png for testing -->
    </div>
    <div class="col-md-8">
        <h2 class="mt-0">Causal Inference and Mendelian Randomization</h2>
        <p>
        We develop novel methods for causal inference from observational data. A major focus is **Mendelian Randomization (MR)**, using genetic variants as instrumental variables to probe causal effects while minimizing confounding. We have developed novel techniques to address key MR challenges like the winner's curse bias arising from IV selection (RIVW; Ma et al., <a href="https://projecteuclid.org/journals/annals-of-statistics/volume-51/issue-1/Breaking-the-winners-curse-in-Mendelian-randomization--Rerandomized-inverse/10.1214/22-AOS2247.short" target="_blank" rel="noopener noreferrer"><i>Annals of Statistics</i> 2023</a>) and widespread pleiotropy (CARE; Xie et al., <a href="https://arxiv.org/abs/2309.04957" target="_blank" rel="noopener noreferrer"><i>arXiv</i> 2023</a>). Beyond MR, our work includes efficient estimation of **Heterogeneous Treatment Effects** using iterative Targeted Maximum Likelihood Estimation (iTMLE; Wei et al., <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/biom.13679" target="_blank" rel="noopener noreferrer"><i>Biometrics</i> 2023</a>) and robust, nonparametric **Propensity Score Estimation** through deep learning that directly optimize covariate balance (Peng et al., <a href="https://arxiv.org/abs/2404.04794" target="_blank" rel="noopener noreferrer"><i>arXiv</i> 2024</a>).
        </p>
    </div>
</div>

---

<div class="row mt-4 align-items-center">
    <div class="col-md-4">
        {% include figure.liquid path="/assets/img/SUMMIT.jpg" class="img-fluid rounded z-depth-1" %}
        <!-- Using IVillustrations.png for testing -->
        <!-- ACTION: Replace with your actual statgen/multi-omics image path -->
    </div>
    <div class="col-md-8">
        <h2 class="mt-0">Statistical Genetics and Integrative Analysis</h2>
        <p>
        Our group pioneers statistical methods for integrating diverse high-dimensional data (GWAS, eQTL, epigenomics, proteomics) to elucidate disease mechanisms. We develop computationally efficient approaches for multi-omics integration, including advanced imputation techniques (SUMMIT; Zhang et al., <a href="https://www.nature.com/articles/s41467-022-34114-x" target="_blank" rel="noopener noreferrer"><i>Nature Communications</i> 2022</a>), incorporating regulatory elements like enhancers and mQTLs (Wu & Pan, <a href="https://academic.oup.com/genetics/article/209/3/699/5935013" target="_blank" rel="noopener noreferrer"><i>Genetics</i> 2018</a>; <a href="https://academic.oup.com/bioinformatics/article/35/19/3576/5429240" target="_blank" rel="noopener noreferrer"><i>Bioinformatics</i> 2019</a>), powerful fine-mapping strategies (FOGS; Wu & Pan, <a href="https://link.springer.com/article/10.1007/s00439-019-02080-9" target="_blank" rel="noopener noreferrer"><i>Human Genetics</i> 2020</a>), and pathway analysis methods (Wu & Pan, <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/gepi.22111" target="_blank" rel="noopener noreferrer"><i>Genetic Epidemiology</i> 2018</a>). These methods aim to identify novel disease-associated genes and pathways from complex data landscapes.
        </p>
        <!-- ACTION: Refine this description -->
    </div>
</div>

---

<div class="row mt-4 align-items-center">
    <div class="col-md-4">
        {% include figure.liquid path="/assets/img/ai_for_science.png" class="img-fluid rounded z-depth-1" %}
        <!-- Using IVillustrations.png for testing -->
        <!-- ACTION: Replace with your actual ML/AI image path -->
    </div>
    <div class="col-md-8">
        <h2 class="mt-0">Machine Learning and AI for Science</h2>
        <p>
        We leverage machine learning and artificial intelligence to advance scientific discovery. Our research includes developing and benchmarking deep learning models for genomics (e.g., DNA foundation models; Feng et al., <a href="https://www.biorxiv.org/content/10.1101/2024.08.09.607375v1" target="_blank" rel="noopener noreferrer"><i>bioRxiv</i> 2024</a>), applying large language models to clinical data, exploring AI for drug discovery, and creating efficient algorithms for tasks like penalized regression-based clustering (PRclust; Wu et al., <a href="http://jmlr.org/papers/v17/15-565.html" target="_blank" rel="noopener noreferrer"><i>JMLR</i> 2016</a>). These approaches aim to extract deeper insights and predictive power from complex biological and clinical data.
        </p>
        <!-- ACTION: Refine this description -->
    </div>
</div>

---

<div class="row mt-4 align-items-center">
    <div class="col-md-4">
        {% include figure.liquid path="/assets/img/prs.png" class="img-fluid rounded z-depth-1" %}
        <!-- Using IVillustrations.png for testing -->
        <!-- ACTION: Replace with your actual risk prediction image path -->
    </div>
    <div class="col-md-8">
        <h2 class="mt-0">Disease Risk Prediction</h2>
        <p>
         A key focus is enhancing disease risk prediction using **Polygenic Risk Scores (PRS)**. We develop methods to integrate multi-omics data and genetically predicted biomarkers with PRS (Wu et al., <a href="https://onlinelibrary.wiley.com/doi/10.1002/cac2.12239" target="_blank" rel="noopener noreferrer"><i>Cancer Communications</i> 2021b</a>) and evaluate strategies to improve the accuracy and clinical utility of PRS for complex diseases like coronary artery disease, comparing performance against standard clinical risk models (King et al., <a href="https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-022-02583-x" target="_blank" rel="noopener noreferrer"><i>BMC Medicine</i> 2022</a>). Our goal is to contribute to more personalized prevention and early detection strategies.
        </p>
        <!-- ACTION: Refine this description -->
    </div>
</div>

---

<div class="row mt-4 align-items-center">
    <div class="col-md-4">
        {% include figure.liquid path="/assets/img/team_work.png" class="img-fluid rounded z-depth-1" %}
        <!-- Using IVillustrations.png for testing -->
        <!-- ACTION: Replace with your actual collaboration/application image path -->
    </div>
    <div class="col-md-8">
        <h2 class="mt-0">Applications and Collaborations</h2>
        <p>
        Our methodological work is deeply integrated with real-world biomedical research through close collaborations with epidemiologists, geneticists, and clinicians at MD Anderson and other institutions. These partnerships have led to impactful studies identifying putative causal genes for COVID-19 severity (Wu et al., <a href="https://www.gimjournal.org/article/S1098-3600(21)00934-4/fulltext" target="_blank" rel="noopener noreferrer"><i>Genetics in Medicine</i> 2021c</a>), improving risk prediction for prostate cancer (Wu et al., <a href="https://onlinelibrary.wiley.com/doi/10.1002/cac2.12239" target="_blank" rel="noopener noreferrer"><i>Cancer Communications</i> 2021b</a>), and advancing our understanding of Alzheimer's disease (Wu et al., <a href="https://academic.oup.com/bioinformatics/article/37/14/1933/6124365" target="_blank" rel="noopener noreferrer"><i>Bioinformatics</i> 2021a</a>) and pancreatic cancer (Liu et al., <a href="https://aacrjournals.org/cancerres/article/80/20/4346/645433/A-Transcriptome-Wide-Association-Study-Identifies" target="_blank" rel="noopener noreferrer"><i>Cancer Research</i> 2020</a>). This ensures our statistical tools address critical scientific needs.
        </p>
        <!-- ACTION: Refine this description -->
    </div>
</div>



---

<!-- REVISED Software Section -->
<div class="row mt-4 align-items-center">
    <div class="col-md-4">
        {% include figure.liquid path="/assets/img/gcb.jpg" class="img-fluid rounded z-depth-1" %}
        <!-- ACTION: Replace with actual Software/Code/GCBHub image -->
    </div>
    <div class="col-md-8">
        <h2 class="mt-0">Software and Resource Development</h2>
        <p>
        A cornerstone of our research is the commitment to open science and reproducibility. We actively develop and maintain robust, validated, open-source software implementing our novel methods, primarily as R packages (e.g., MiSPU, GLMaSPU, prclust, FOGS, CMO). We prioritize user-friendliness, providing comprehensive documentation and tutorials to make complex statistical tools accessible. An example is the <a href="https://www.gcbhub.org/" target="_blank" rel="noopener noreferrer"><b>Genomic Control of Biomarkers Hub (GCB Hub)</b></a>, a comprehensive resource offering pre-computed biomarker prediction models (proteins) across diverse ancestries and protein-trait associations across several biobanks such as MVP and Finngene. Our group's software and detailed resources are available on our <a href="/software/">Software page</a>. <!-- ACTION: Update link if needed -->
        </p>
    </div>
</div>

---

<div class="row mt-4 align-items-center">
    <div class="col-md-4">
        {% include figure.liquid path="/assets/img/high_dimen_ill.png" class="img-fluid rounded z-depth-1" %}
        <!-- ACTION: Replace with actual High-Dim Inference image -->
    </div>
    <div class="col-md-8">
        <h2 class="mt-0">High-Dimensional Statistical Inference</h2>
        <p>
        We develop theoretically sound and powerful methods for statistical inference in high-dimensional settings (p >> n). Key contributions include adaptive tests for high-dimensional parameters in GLMs, accommodating both low- and high-dimensional nuisance parameters (aiSPU; Wu et al., <a href="https://projecteuclid.org/journals/statistica-sinica/volume-29/issue-4/An-adaptive-test-on-high-dimensional-parameters-in-generalized-linear/10.5705/ss.202017.0303.full" target="_blank" rel="noopener noreferrer"><i>Statistica Sinica</i> 2019</a>; <a href="http://jmlr.org/papers/v21/18-800.html" target="_blank" rel="noopener noreferrer"><i>JMLR</i> 2020</a>), and novel testing procedures based on asymptotically independent U-statistics (He et al., <a href="https://projecteuclid.org/journals/annals-of-statistics/volume-49/issue-1/Asymptotically-independent-U-statistics-in-high-dimensional-testing/10.1214/20-AOS1986.full" target="_blank" rel="noopener noreferrer"><i>Annals of Statistics</i> 2021</a>). These methods enhance statistical power and control Type 1 error rates in complex genomic and biomedical analyses, including applications to microbiome data (Wu et al., <a href="https://genomemedicine.biomedcentral.com/articles/10.1186/s13073-016-0302-3" target="_blank" rel="noopener noreferrer"><i>Genome Medicine</i> 2016</a>).
        </p>
    </div>
</div>


---

<div class="row mt-4 align-items-center">
    <div class="col-md-4">
        {% include figure.liquid path="/assets/img/other_work.png" class="img-fluid rounded z-depth-1" %}
        <!-- Using IVillustrations.png for testing -->
        <!-- ACTION: Replace with your actual 'other'/software image path -->
    </div>
    <div class="col-md-8">
        <h2 class="mt-0">Others Research Areas</h2>
        <p>
         Beyond the core areas above, our research extends to developing advanced statistical methodologies for **meta-analysis**, enabling robust evidence synthesis across studies (e.g., Meng et al., <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/sim.9995" target="_blank" rel="noopener noreferrer"><i>Statistics in Medicine</i> 2024</a>). We are also actively engaged in creating novel analytical approaches for **spatial transcriptomics** data, aiming to delineate complex tissue heterogeneity and cell-cell interactions (e.g., Lyu et al., <a href="https://academic.oup.com/bioinformatics/article/40/4/btae186/7640755" target="_blank" rel="noopener noreferrer"><i>Bioinformatics</i> 2024</a>). 
        </p>
        <!-- ACTION: Refine this description -->
    </div>
</div>
