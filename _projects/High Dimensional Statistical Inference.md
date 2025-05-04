---
layout: page
title: High Dimensional Statistical Inference
description: Developing adaptive and robust methods for drawing conclusions from complex, high-dimensional datasets.
img: assets/img/high_dimen_ill.png
importance: 1
category: work
related_publications: FALSE
---


Modern scientific research, particularly in genomics, bioinformatics, and clinical studies, frequently generates datasets where the number of measured features (e.g., genes, proteins, CpG sites) far exceeds the number of samples. This "high-dimensional" setting poses significant challenges for traditional statistical inference methods. Our work focuses on developing novel, adaptive, and theoretically sound statistical tests designed to maintain high power and control error rates in these complex scenarios, particularly within the framework of Generalized Linear Models (GLMs).


### Adaptive Global Testing in GLMs

A primary contribution of our research is the development and theoretical justification of adaptive testing procedures for high-dimensional parameters.

**1. Handling Low-Dimensional Nuisance Parameters:**
We initially proposed an adaptive test for globally assessing high-dimensional parameters within GLMs while accounting for low-dimensional nuisance parameters. A key advantage of this approach is its adaptivity; the test automatically adjusts to underlying signal structures, thereby maintaining high statistical power across diverse high-dimensional alternative hypotheses. We rigorously established its asymptotic null distribution, enabling accurate p-value calculation **[Wu et al., 2019, Statistica Sinica]**.

**2. Addressing High-Dimensional Nuisance Parameters:**
Building upon this, we extended the adaptive testing framework to the more challenging scenario involving high-dimensional nuisance parameters. We introduced the **adaptive interaction Sum of Powered Score (aiSPU)** test. This method innovatively integrates a non-convex penalty function with the adaptive testing philosophy. The aiSPU test effectively controls Type I error rates at nominal levels while demonstrating superior statistical power across a broad spectrum of alternatives compared to existing methods. We have also characterized its asymptotic behavior under both the null and local alternative hypotheses **[Wu et al., 2020, JMLR]**.

### Unbiased Estimation via U-Statistics

A subtle but critical challenge in developing score-based tests is that their expectations under the null hypothesis may not be zero, complicating the accurate estimation of the null distribution.

To overcome this, we constructed a family of **U-statistics** designed as unbiased estimators for the lp-norms of the high-dimensional features of interest. A key theoretical insight is that U-statistics of different finite orders are asymptotically independent and normally distributed under the null hypothesis. Leveraging this property, we proposed a powerful adaptive testing procedure that optimally combines p-values derived from U-statistics of varying orders. This framework is notably general, applicable to testing vector means, covariance matrices, and regression coefficients in GLMs, offering a versatile tool for high-dimensional inference **[He, Xu, Wu, and Pan, 2021, Annals of Statistics]**.


### Application to Human Microbiome Association Studies

The principles of adaptive testing are particularly relevant in human microbiome studies, which aim to detect associations between microbiome composition (often represented by high-dimensional taxa counts) and host traits or diseases. Many existing methods struggle with efficient variable selection or weighting in this context, potentially leading to reduced statistical power.

To address these limitations, we developed a powerful, data-driven **adaptive association test specifically for microbiome data**. This approach improves statistical power by weighting the importance of different microbial taxa in a data-adaptive manner, effectively prioritizing signals within the complex microbial community structure **[Wu et al., 2016, Genome Medicine]**.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="/assets/img/human_microbiome.png" title="Conceptual illustration of high dimensions" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1: Conceptual illustration of adaptive association test specifically for microbiome data.
</div>
---

This line of research provides robust and powerful statistical tools essential for making reliable discoveries from contemporary high-dimensional biological and clinical data.

*(Full citations can be found on the [Publications](labweb/publications/) page.)* 