import pickle
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

print("Initializing dataset generation...")

# We simulate some synthetic data. Features: [income, credit_score, dti, loan_amount]
# This simulates 1000 users.
np.random.seed(42)

# Generate features
incomes = np.random.uniform(20000, 200000, 1000)
credit_scores = np.random.uniform(300, 850, 1000)
dtis = np.random.uniform(0.01, 0.80, 1000)
loan_amounts = np.random.uniform(1000, 100000, 1000)

X = np.column_stack((incomes, credit_scores, dtis, loan_amounts))

# Let's create a target variable (1 = default, 0 = safe).
# High DTI, Low Credit Score, and High Loan-to-Income ratio increase risk of default.
y = []
for i in range(1000):
    risk_points = 0
    if credit_scores[i] < 600: risk_points += 2
    if dtis[i] > 0.4: risk_points += 2
    if loan_amounts[i] / incomes[i] > 0.5: risk_points += 2
    # Add a little noise
    if risk_points + np.random.normal(0, 1) > 2.5:
        y.append(1)
    else:
        y.append(0)

y = np.array(y)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

print("Training Random Forest Classifier on financial data...")
clf = RandomForestClassifier(n_estimators=100, max_depth=5, random_state=42)
clf.fit(X_train, y_train)

score = clf.score(X_test, y_test)
print(f"Model trained successfully. Accuracy on test set: {score:.2%}")

# Export the model
with open('credit_model.pkl', 'wb') as f:
    pickle.dump(clf, f)

print("Exported model to credit_model.pkl")
