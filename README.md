# FinRisk AI: Enterprise MLOps Pipeline

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React Native](https://img.shields.io/badge/Frontend-React_Native_Expo-61DAFB.svg)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688.svg)
![Machine Learning](https://img.shields.io/badge/AI-Scikit_Learn-F7931E.svg)

**FinRisk AI** is a full-stack, production-ready mobile application designed to demonstrate advanced Machine Learning Operations (MLOps) in the financial sector. Built as a comprehensive final year project, it features real-time fraud detection, credit risk assessment, and algorithmic trading signals, all governed by an Explainable AI (XAI) engine.

## 🌟 Key Features

1. **Explainable AI (XAI)**: Unlike "black-box" models, FinRisk AI explicitly details *why* a transaction was flagged for fraud or why a credit application was denied (e.g., "Anomalous Value", "High Loan-to-Income Request").
2. **Real-Time Fraud Detection**: Processes simulated transactions and assigns a risk score from 1-100 using a trained Random Forest classifier.
3. **Credit Risk Assessment**: Evaluates user financial metrics (Income, Debt-to-Income, Credit Score) to predict default probability.
4. **Algorithmic Trading Dashboard**: Simulates live market data and moving averages to generate "Buy/Sell" signals.
5. **Secure Local Storage**: Utilizes SQLite for persistent, fast storage of risk logs and user sessions.

## 🏗 System Architecture

The project is divided into two primary environments:

*   **Frontend (`/mobile-app`)**: A cross-platform mobile application built with **React Native (Expo)**. It uses custom UI components, React Navigation 7, and Reanimated for smooth transitions and data visualization.
*   **Backend (`/backend-ml`)**: A high-performance Python API built with **FastAPI**. It serves pre-trained scikit-learn models (`.pkl` files) and manages the SQLite database (`risk_history.db`).

## 🚀 Getting Started

### Prerequisites
*   Node.js & npm
*   Python 3.10+
*   Expo Go app on your mobile device (or Android/iOS emulator)

### 1. Start the Backend AI Server
Navigate to the backend directory, activate your virtual environment, and start the FastAPI server:

```bash
cd backend-ml
# Activate virtual environment (Windows)
venv\Scripts\activate
# Start the server
uvicorn main:app --host 127.0.0.1 --port 8000
```
*The server will run on http://127.0.0.1:8000*

### 2. Start the Mobile App
Open a new terminal, navigate to the frontend directory, and start the Expo bundler:

```bash
cd mobile-app
# Install dependencies (if you haven't already)
npm install
# Start the Expo server with a clean cache
npx expo start -c
```
*Scan the generated QR code using the Expo Go app on your phone.*

## 🧪 MLOps & Model Training

This project emphasizes proper MLOps practices. The AI models are trained using automated scripts (`train_model.py`, `train_fraud_model.py`) that process financial datasets and export serialized `.pkl` files. 

**To retrain the models:**
```bash
cd backend-ml
python train_model.py
python train_fraud_model.py
```

Continuous Integration (CI) is configured via **GitHub Actions** (`.github/workflows/mlops.yml`), which automatically runs linting and basic unit tests on every push.

---
*Developed for Final Year Project Submission.*
