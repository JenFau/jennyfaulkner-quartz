---
dg-publish: true
---
In supervised learning, models are trained on labeled data, meaning the input data is paired with the correct output. The goal is to learn a mapping function to predict labels for new, unseen data.
## Regression

Regression is used to predict continuous numerical values (e.g., CO2 emissions, house prices),.

- **Simple Linear Regression:** Models the relationship between a single independent variable and a dependent variable using a straight line. It minimizes the residual error (Mean Squared Error) between predicted and actual values.
- **Multiple Linear Regression:** Uses two or more independent variables to estimate the target. It is useful for understanding the impact of various features but requires care to avoid overfitting or issues with correlated variables (collinearity),.
- **Non-Linear/Polynomial Regression:** Models complex relationships (e.g., exponential growth) where data does not follow a straight line. It fits data to polynomial expressions (curves) rather than straight lines.

## Classification

Classification predicts categorical labels (class membership), such as determining if a transaction is fraudulent or if a tumor is benign,.

- **Logistic Regression:** A binary classifier that predicts the probability of an observation belonging to a class (e.g., 0 or 1). It uses a sigmoid function to map predictions to a probability score between 0 and 1,. It can be extended to multi-class problems using strategies like **One-vs-All (OvA)** or **One-vs-One (OvO)**,.
- **K-Nearest Neighbors (KNN):** Classifies a data point based on the majority class of its 'k' nearest neighbors. It relies on distance metrics and data normalization is crucial for performance,.
- **Decision Trees:** A flowchart-like structure where internal nodes represent tests on features and leaf nodes represent class labels. They are interpretable but prone to overfitting unless pruned,.
- **Support Vector Machines (SVM):** Finds a hyperplane that maximizes the margin (distance) between two classes. It is effective in high-dimensional spaces,.
- **Ensemble Models:** Combine multiple models to improve performance. **Random Forest** uses "bagging" (averaging multiple decision trees) to reduce variance. **XGBoost** uses "boosting" to sequentially correct errors of weak learners.
Note that, at least in some circumstances, it is possible to undertake [[🌱 Classification with Python and OpenAI]] rather than training a ML model. 
## Bias and Variance

- Bias refers to the accuracy of a model's predictions, with low bias indicating high accuracy. High bias can lead to underfitting.
- Variance measures the precision of predictions, with high variance indicating sensitivity to training data, which can lead to overfitting.
- As model complexity increases, bias decreases while variance increases. The goal is to find a balance where both bias and variance are minimized for optimal performance.
- Weak learners have high bias and low variance, while strong learners exhibit low bias and high variance.
- Bagging (e.g., Random Forests) reduces variance by averaging predictions from multiple models trained on bootstrapped datasets.
- Boosting builds a series of weak learners to correct errors from previous models, effectively reducing bias and improving accuracy. Popular algorithms include Gradient Boosting and AdaBoost.

Sources: 
 [LinkedIn Learning: Artificial Intelligence Foundations Machine Learning](https://www.linkedin.com/learning-login/share?forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fartificial-intelligence-foundations-machine-learning-22345868%3Ftrk%3Dshare_ent_url%26shareId%3DijJKBy%252FVRb%252Bt7Y0J2U0Q9w%253D%253D)
- Said Business School Oxford AI Course, Module 2
- https://www.coursera.org/learn/machine-learning-with-python/




