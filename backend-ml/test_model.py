import pickle
try:
    with open('credit_model.pkl', 'rb') as f:
        credit = pickle.load(f)
    print("Credit model loaded OK")
except Exception as e:
    print(f"Credit model error: {e}")

try:
    with open('fraud_model.pkl', 'rb') as f:
        fraud = pickle.load(f)
    print("Fraud model loaded OK")
except Exception as e:
    print(f"Fraud model error: {e}")
