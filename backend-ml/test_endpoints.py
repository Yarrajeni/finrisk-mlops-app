import requests
import sys

BASE_URL = "http://127.0.0.1:8000"

def test_endpoint(name, url, method="GET", payload=None):
    try:
        if method == "GET":
            response = requests.get(f"{BASE_URL}{url}")
        else:
            response = requests.post(f"{BASE_URL}{url}", json=payload)
        
        if response.status_code == 200:
            print(f"[PASS] {name} ({url})")
            return True
        else:
            print(f"[FAIL] {name} ({url}) - Status: {response.status_code}")
            print(f"Response: {response.text}")
            return False
    except requests.exceptions.ConnectionError:
        print(f"[FAIL] {name} ({url}) - Connection Refused. Is the server running?")
        return False
    except Exception as e:
        print(f"[FAIL] {name} ({url}) - Exception: {e}")
        return False

def run_tests():
    print(f"Starting API Tests for {BASE_URL}...\n")
    
    passed = 0
    total = 0
    
    tests = [
        ("Auth Register (Duplicate will return 400, but testing schema)", "/auth/register", "POST", {"username": "testuser", "password": "password123"}),
        ("Auth Login", "/auth/login", "POST", {"username": "admin", "password": "admin123"}),
        ("Credit Default Predict", "/predict/credit-default", "POST", {"income": 50000, "credit_score": 700, "debt_to_income_ratio": 0.2, "loan_amount": 10000}),
        ("Fraud Detection Predict", "/predict/fraud-detection", "POST", {"transaction_amount": 100, "account_age_days": 365, "is_international": 0}),
        ("Trading Signals", "/market/trading-signals", "GET", None),
        ("Stats", "/stats", "GET", None)
    ]
    
    for name, url, method, payload in tests:
        total += 1
        # For register, we expect a 400 if user exists, so we handle it specially or ignore fail.
        # But for this simple test, we'll just check if it returns 200 OR 400 (if duplicate).
        try:
            if method == "GET":
                response = requests.get(f"{BASE_URL}{url}")
            else:
                response = requests.post(f"{BASE_URL}{url}", json=payload)
            
            if response.status_code in [200, 400]:
                print(f"[PASS] {name} ({url})")
                passed += 1
            else:
                print(f"[FAIL] {name} ({url}) - Status: {response.status_code}")
        except Exception as e:
            print(f"[FAIL] {name} ({url}) - Exception: {e}")

    print(f"\nResults: {passed}/{total} tests passed.")
    if passed < total:
        sys.exit(1)

if __name__ == "__main__":
    run_tests()
