// ============================================================
// 🔴 UPDATE THIS URL after you deploy to Render.com
// Steps: render.com → New Web Service → connect your GitHub
//        repo (backend-ml/ folder) → get your service URL
// ============================================================
export const API_URL = 'http://localhost:8000';

// For local development, comment the line above and use:
// export const API_URL = 'http://172.25.35.86:8000';

export const ENDPOINTS = {
  login: '/auth/login',
  register: '/auth/register',
  creditDefault: '/predict/credit-default',
  fraudDetection: '/predict/fraud-detection',
  tradingSignals: '/market/trading-signals',
  simulateSurge: '/market/simulate-surge',
  history: (type) => `/history/${type}`,
  stats: '/stats',
};
