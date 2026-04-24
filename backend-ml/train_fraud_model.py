import pickle
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

print("Initializing dataset generation for Fraud Model...")

# Features: [transaction_amount, account_age_days, is_international]
np.random.seed(99)

# Generate features for 2000 transactions
transaction_amount = np.random.uniform(5, 5000, 2000)
account_age_days = np.random.uniform(1, 3650, 2000)
is_international = np.random.choice([0, 1], p=[0.8, 0.2], size=2000)

X = np.column_stack((transaction_amount, account_age_days, is_international))

# Create Target Variable: 1 = Fraud, 0 = Legitimate
# High transactions on very new accounts, especially international, trigger risk
y = []
for i in range(2000):
    fraud_risk = 0
    if account_age_days[i] < 30: fraud_risk += 3
    if transaction_amount[i] > 1500: fraud_risk += 2
    if is_international[i] == 1: fraud_risk += 4
    
    # Threshold for fraud
    if fraud_risk + np.random.normal(0, 1.5) > 6:
        y.append(1)
    else:
        y.append(0)

y = np.array(y)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

print("Training Fraud Detection Random Forest...")
clf = RandomForestClassifier(n_estimators=100, max_depth=6, random_state=42)
clf.fit(X_train, y_train)

score = clf.score(X_test, y_test)
print(f"Fraud Model trained. Accuracy on test: {score:.2%}")

with open('fraud_model.pkl', 'wb') as f:
    pickle.dump(clf, f)

print("Exported model to fraud_model.pkl")
