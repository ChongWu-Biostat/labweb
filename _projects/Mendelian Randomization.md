---
layout: page
title: Mendelian Randomization
description: Developing novel statistical frameworks and theory to improve causal inference using genetic data as instrumental variables by correcting Winner's Curse and pleiotropy.
img: assets/img/high_dimen_ill.svg
importance: 2
category: work
related_publications: FALSE
---

Mendelian Randomization (MR) offers a powerful approach for assessing causal relationships between modifiable exposures (e.g., biomarkers, lifestyle factors) and health outcomes using observational data. By leveraging genetic variants, identified through Genome-Wide Association Studies (GWAS), as **instrumental variables (IVs)**, MR can mimic a randomized controlled trial, thereby mitigating confounding and reverse causation biases that often plague traditional epidemiological studies.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="/assets/img/IVillustrations.pdf" title="MR Assumptions Concept" class="img-fluid rounded z-depth-1" %}
        <!-- ACTION: Create/find an image illustrating MR assumptions (like the one in your sample text) and update path -->
    </div>
</div>
<div class="caption">
    Figure 1: Core assumptions for a genetic variant to be a valid instrumental variable in Mendelian Randomization. Violations lead to biased causal estimates.
</div>

### Challenges in MR with Summary Data

While promising, the validity of MR relies on key assumptions regarding the genetic IVs (Figure 1). Furthermore, standard MR applications using summary-level GWAS data face significant methodological hurdles:

1.  **Winner's Curse:** The standard practice involves selecting relevant IVs (to meet the relevance assumption) and subsequently estimating causal effects using the *same* GWAS dataset. This often leads to an overestimation of the selected IVs' effects on the exposure, a phenomenon known as the "winner's curse," which biases the final causal estimates.
2.  **Pleiotropy:** Genetic variants may influence the outcome through pathways independent of the exposure (horizontal pleiotropy), violating the exclusion restriction assumption. Accounting for widespread, potentially correlated pleiotropy is crucial for robust inference.
3.  **Measurement Error:** Effect sizes from GWAS are estimates and contain measurement error. Ignoring this, especially with weakly associated IVs, can lead to bias (often termed weak instrument bias).

### Our Contributions: Methodological Advances

Our research focuses on developing robust statistical frameworks to overcome these limitations, leading to more reliable causal inference from GWAS summary data:

#### Addressing Winner's Curse: Rerandomized IVW (RIVW)
To specifically tackle the winner's curse bias inherent in two-sample MR where IV selection and estimation use the same data, we proposed a novel framework incorporating a **rerandomization** step during IV selection. This systematic approach leads to unbiased estimates of the selected genetic variants' association effects. Building upon this, we introduced the **Rerandomized Inverse Variance Weighted (RIVW)** estimator. RIVW is provably consistent for the causal effect under these conditions. We rigorously established its asymptotic normality and developed a consistent variance estimator, enabling valid statistical inference {% cite Ma2023Breaking %}.

#### Robust Inference Under Pleiotropy & Winner's Curse: CARE
To simultaneously address winner's curse, measurement error, and widespread pleiotropy (invalid IVs), we developed **CARE (Causal Analysis with Randomized Estimators)**. This unified approach integrates the rerandomization concept with a novel **l0-constrained maximum likelihood framework** designed to robustly screen out invalid IVs with pleiotropic effects (correlated or uncorrelated), while accounting for measurement error. CARE further utilizes **bootstrap aggregation (bagging)** to handle the uncertainty in IV screening. Unlike many robust MR methods requiring specific distributional assumptions for pleiotropy or assuming perfect IV screening, CARE delivers valid causal inference under more general conditions, demonstrating improved performance in terms of bias reduction, statistical power, and coverage probability {% cite Xie2024Winner %}.

#### MR for Mediation Analysis: MAGIC
Disentangling causal pathways (e.g., Exposure -> Mediator -> Outcome) using MR presents unique challenges beyond standard two-sample MR, including combined winner's and "loser's" curse bias arising from selecting instruments for both exposure and mediator. We developed **MAGIC (Mediation Analysis with GWAS summary data Integration and bias Correction)**, a novel framework tailored for MR-based mediation analysis using summary data from potentially three different GWAS. MAGIC employs carefully designed estimating equations and bias-correction techniques to address instrument selection biases (winner's/loser's curse) and measurement error simultaneously. It provides valid joint statistical inference for both direct and mediation effects, demonstrating enhanced statistical efficiency compared to existing two-step or multivariable MR approaches {% cite Lyu2024Mediation %}.