from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import pickle
import numpy as np
import yfinance as yf
from sqlalchemy import create_engine, Column, Integer, Float, String, DateTime
from sqlalchemy.orm import declarative_base, sessionmaker, Session
from datetime import datetime
import hashlib
import random

# --- GLOBALS & DB ---
SQLALCHEMY_DATABASE_URL = "sqlite:///./risk_history.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password_hash = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

class RiskAssessmentLog(Base):
    __tablename__ = "risk_logs"
    id = Column(Integer, primary_key=True, index=True)
    timestamp = Column(DateTime, default=datetime.utcnow)
    income = Column(Float)
    credit_score = Column(Integer)
    debt_to_income_ratio = Column(Float)
    loan_amount = Column(Float)
    risk_score = Column(Integer)
    recommendation = Column(String)
    confidence = Column(Float)
    explanation = Column(String)

class FraudAssessmentLog(Base):
    __tablename__ = "fraud_logs"
    id = Column(Integer, primary_key=True, index=True)
    timestamp = Column(DateTime, default=datetime.utcnow)
    transaction_amount = Column(Float)
    account_age_days = Column(Integer)
    is_international = Column(Integer)
    fraud_risk_score = Column(Integer)
    recommendation = Column(String)
    confidence = Column(Float)
    explanation = Column(String)

Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try: yield db
    finally: db.close()

# Seed database with admin user
with SessionLocal() as db:
    admin = db.query(User).filter(User.username == "admin").first()
    if not admin:
        db.add(User(username="admin", password_hash=hashlib.sha256("admin123".encode()).hexdigest()))
        db.commit()

SIMULATE_SURGE_ACTIVATE = False

# --- APP SETUP ---
app = FastAPI(title="Financial Risk MLOps API", version="6.0.0")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

try:
    with open("credit_model.pkl", "rb") as f: credit_model = pickle.load(f)
except: credit_model = None
try:
    with open("fraud_model.pkl", "rb") as f: fraud_model = pickle.load(f)
except: fraud_model = None

# --- SCHEMAS ---
class AuthProfile(BaseModel):
    username: str
    password: str

class CreditProfile(BaseModel):
    income: float; credit_score: int; debt_to_income_ratio: float; loan_amount: float

class FraudProfile(BaseModel):
    transaction_amount: float; account_age_days: int; is_international: int

# --- PHASE 6: AUTHENTICATION API ---
def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()

@app.post("/auth/register")
def register_user(profile: AuthProfile, db: Session = Depends(get_db)):
    if db.query(User).filter(User.username == profile.username).first():
        raise HTTPException(status_code=400, detail="Username already registered")
    
    new_user = User(username=profile.username, password_hash=hash_password(profile.password))
    db.add(new_user)
    db.commit()
    return {"message": "Account created successfully", "username": new_user.username}

@app.post("/auth/login")
def login_user(profile: AuthProfile, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == profile.username).first()
    if not user or user.password_hash != hash_password(profile.password):
        raise HTTPException(status_code=401, detail="Invalid username or password")
    # For a FYP, returning the username acts as our strict access token session hook.
    return {"message": "Login successful", "token": user.username, "account_created": user.created_at}


# --- EXISTING AI ENDPOINTS ---
@app.post("/predict/credit-default")
def predict_credit_default(profile: CreditProfile, db: Session = Depends(get_db)):
    if credit_model is None: raise HTTPException(status_code=500, detail="Model not loaded.")
    features = np.array([[profile.income, profile.credit_score, profile.debt_to_income_ratio, profile.loan_amount]])
    prediction = credit_model.predict(features)[0]
    probabilities = credit_model.predict_proba(features)[0]
    score = int(probabilities[1] * 100)
    recommendation = "High Risk - AI flagged for default" if prediction == 1 else "Low Risk - Approved"
    confidence = round(max(probabilities), 2)
    explanation = "Model analysis normal."
    if score > 60:
        factors = []
        if profile.credit_score < 620: factors.append("Critical Credit Score")
        if profile.debt_to_income_ratio > 0.4: factors.append("Excessive DTI Ratio")
        if profile.loan_amount > profile.income * 0.4: factors.append("High Loan-to-Income request")
        explanation = "Alert triggered by: " + ", ".join(factors) if factors else "Unusual mathematical matrix footprint."
    db.add(RiskAssessmentLog(
        income=profile.income, credit_score=profile.credit_score, debt_to_income_ratio=profile.debt_to_income_ratio, loan_amount=profile.loan_amount,
        risk_score=score, recommendation=recommendation, confidence=confidence, explanation=explanation
    ))
    db.commit()
    return {"risk_score": score, "recommendation": recommendation, "confidence": confidence, "explanation": explanation}

@app.post("/predict/fraud-detection")
def predict_fraud(profile: FraudProfile, db: Session = Depends(get_db)):
    if fraud_model is None: raise HTTPException(status_code=500, detail="Model not loaded.")
    features = np.array([[profile.transaction_amount, profile.account_age_days, profile.is_international]])
    prediction = fraud_model.predict(features)[0]
    probabilities = fraud_model.predict_proba(features)[0]
    score = int(probabilities[1] * 100)
    recommendation = "Fraud Alert - Transaction Blocked" if prediction == 1 else "Safe - Transaction Approved"
    confidence = round(max(probabilities), 2)
    explanation = "Standard transaction pattern."
    if score > 60:
        factors = []
        if profile.account_age_days < 30: factors.append("New Account Velocity")
        if profile.is_international == 1: factors.append("Foreign IP Mismatch")
        if profile.transaction_amount > 1500: factors.append("Anomalous Value")
        explanation = "Suspicion factors: " + ", ".join(factors) if factors else "Irregular temporal behavior."
    db.add(FraudAssessmentLog(
        transaction_amount=profile.transaction_amount, account_age_days=profile.account_age_days,
        is_international=profile.is_international, fraud_risk_score=score, 
        recommendation=recommendation, confidence=confidence, explanation=explanation
    ))
    db.commit()
    return {"fraud_risk_score": score, "recommendation": recommendation, "confidence": confidence, "explanation": explanation}

import time
last_trading_cache = None
last_trading_time = 0

@app.get("/market/trading-signals")
def get_trading_signals():
    global SIMULATE_SURGE_ACTIVATE, last_trading_cache, last_trading_time
    
    # Return cached data if recent (prevent thread starving)
    if last_trading_cache and (time.time() - last_trading_time < 30) and not SIMULATE_SURGE_ACTIVATE:
        return last_trading_cache
        
    try:
        current_vix = 18.5
        short_ma = 44000.00
        long_ma = 46000.00
        current_price = 45000.00
        
        try:
            ticker = yf.Ticker("BTC-USD")
            data = ticker.history(period="1mo")
            if not data.empty:
                current_price = data['Close'].iloc[-1]
                short_ma = data['Close'].tail(5).mean()
                long_ma = data['Close'].tail(20).mean()
        except Exception:
            pass

        action = "HOLD POSITION"; color = "#FFD700"
        
        if SIMULATE_SURGE_ACTIVATE:
            current_price = current_price * 1.15
            action = "CLAIM PROFIT / SELL"; color = "#00E5FF"
            SIMULATE_SURGE_ACTIVATE = False 
        else:
            if short_ma > long_ma * 1.02:
                action = "CLAIM PROFIT / SELL"; color = "#00E5FF"
            elif current_price < long_ma * 0.95:
                action = "STRONG BUY"; color = "#34C759"

        result = {
            "asset": "BITCOIN (BTC-USD)", "current_price": round(current_price, 2), "short_ma": round(short_ma, 2),
            "long_ma": round(long_ma, 2), "action": action, "color": color, "timestamp": datetime.utcnow().isoformat()
        }
        
        last_trading_cache = result
        last_trading_time = time.time()
        return result
    except Exception as e: return {"action": "ERROR", "error": str(e)}

@app.post("/market/simulate-surge")
def simulate_surge():
    global SIMULATE_SURGE_ACTIVATE
    SIMULATE_SURGE_ACTIVATE = True
    return {"status": "Surge simulation activated."}

@app.get("/history/{model_type}")
def get_history(model_type: str, db: Session = Depends(get_db)):
    if model_type == 'credit': return db.query(RiskAssessmentLog).order_by(RiskAssessmentLog.timestamp.desc()).limit(10).all()
    elif model_type == 'fraud': return db.query(FraudAssessmentLog).order_by(FraudAssessmentLog.timestamp.desc()).limit(10).all()
    return []

@app.get("/stats")
def get_stats(db: Session = Depends(get_db)):
    credit_logs = db.query(RiskAssessmentLog).all()
    fraud_logs = db.query(FraudAssessmentLog).all()
    return {
        "total_assessments": len(credit_logs) + len(fraud_logs),
        "avg_credit_risk": int(sum([log.risk_score for log in credit_logs]) / max(len(credit_logs), 1)),
        "avg_fraud_risk": int(sum([log.fraud_risk_score for log in fraud_logs]) / max(len(fraud_logs), 1))
    }
