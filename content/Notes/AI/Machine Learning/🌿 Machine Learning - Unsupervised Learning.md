---
created: 2025-06-09
updated: 2025-10-27
type: garden
topic:
  - AI, Machine Learning
dg-publish: true
---
Unsupervised machine learning is a class of techniques used to identify patterns, structures and groupings (clusters) within datasets. Crucially, unlike supervised machine learning, it does not require prior labelling.

There are two primary pillars of unsupervised machine learning: Clustering and Dimension Reduction. 
# Clustering

Clustering groups similar data points together.

- **K-Means:** partitions data into _k_ non-overlapping clusters. It minimizes the variance within clusters based on centroids. It is efficient but sensitive to outliers and assumes clusters are spherical,,.
- **DBSCAN:** A density-based algorithm that groups points closely packed together. It can find clusters of arbitrary shapes and identifies outliers as noise,.
- **HDBSCAN:** A hierarchical version of DBSCAN that adapts to varying densities and does not require a parameter for neighborhood radius,.
- **Hierarchical Clustering:** Builds a tree of clusters (dendrogram) using either a bottom-up (agglomerative) or top-down (divisive) approach,.
# Dimensionality Reduction

These techniques reduce the number of features in a dataset while retaining critical information, aiding in visualization and computational efficiency.

- **Principal Component Analysis (PCA):** A linear technique that projects data onto orthogonal axes (principal components) that explain the most variance,.
- **t-SNE:** A non-linear technique good for visualizing high-dimensional clusters in 2D or 3D. It focuses on preserving local similarities.
- **UMAP:** A manifold learning technique that preserves both local and global structures, often faster and more scalable than t-SNE.