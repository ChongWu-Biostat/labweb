---
layout: page
title: Causal Inference
description: Developing novel statistical frameworks and theory for estimating treatment effects and understanding causality from observational data.
img: assets/img/high_dimen_ill.png
importance: 3
category: work
related_publications: FALSE
---

Drawing valid causal conclusions from observational data (like electronic health records or biobanks) is a central challenge in biomedical research. While such data offers immense potential, inherent issues like confounding can easily lead to biased findings and incorrect conclusions. Our research focuses on developing and applying rigorous, statistically sound methods to overcome these challenges, enabling more reliable estimation of treatment effects and understanding of causal pathways.

We concentrate on two key areas within causal inference: optimizing propensity score estimation for better confounding control and efficiently estimating heterogeneous treatment effects across diverse subpopulations.


### Nonparametric Propensity Score Estimation with Optimized Balance (LBC-Net)

Propensity scores (PS) are widely used to control for confounding by balancing covariates between treatment groups. However, standard methods like logistic regression often suffer from model misspecification, leading to poor covariate balance and unstable inverse probability of treatment weights (IPTW), especially with high-dimensional covariates or poor overlap.

To address this, we developed **LBC-Net (Local Balance with Calibration implemented by Neural Networks)**. This approach is grounded in a novel theoretical characterization of propensity scores based on two fundamental conditions:
1.  **Local Balance:** Ensuring conditional independence of covariates and treatment assignment across a dense grid of the estimated score.
2.  **Local Calibration:** Guaranteeing the score accurately reflects the true propensity score locally.

LBC-Net utilizes a neural network framework with a carefully designed loss function that directly incorporates these conditions. This allows for:
*   Nonparametric estimation, reducing sensitivity to model misspecification.
*   Direct optimization of local (and consequently global) covariate balance.
*   Stabilization of weights, yielding more robust treatment effect estimates.

We demonstrated the practical utility of LBC-Net in a case study examining the effect of erythrocyte-to-platelet ratio (EPR) changes on sepsis outcomes using the MIMIC-IV database, showcasing improved balance and robust estimation compared to standard methods {% cite Peng2024Deep %}.




### Efficient Estimation of Heterogeneous Treatment Effects (iTMLE)

Understanding how treatment effects vary across different patient subgroups (Heterogeneous Treatment Effects, HTE) is crucial for personalized medicine. Estimating these effects simultaneously for multiple, potentially overlapping subgroups presents statistical challenges, including computational inefficiency and instability when subgroup probabilities or treatment propensities are near zero or one (practical positivity violations).

We developed an efficient, one-step **iterative Targeted Maximum Likelihood Estimator (iTMLE)** specifically designed for simultaneous HTE estimation across multiple subgroups. Key advantages include:
*   **Efficiency:** Achieves the semiparametric efficiency bound for estimating subgroup-specific effects.
*   **Robustness:** Incorporates variations robust to the presence of small estimated propensity scores, enhancing stability in finite samples.
*   **Simultaneous Inference:** Allows for the construction of valid simultaneous confidence intervals and powerful multiple testing procedures by leveraging the joint distribution of the subgroup estimates.

In simulations and a case study analyzing the effect of a statin-proxy genetic variant (rs12916-T) on Alzheimer's disease risk in UK Biobank subgroups, our iTMLE approach demonstrated substantial improvements in bias, variance, and statistical power compared to conventional one-group-at-a-time methods and double machine learning {% cite Wei2023Efficient %}.