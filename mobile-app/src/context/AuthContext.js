import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in (Simulated for now, could use AsyncStorage)
    const checkLogin = async () => {
      try {
        // In a real app, we'd check AsyncStorage here
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
      }
    };
    checkLogin();
  }, []);

  const login = (token, username) => {
    setUserToken(token);
    setCurrentUser(username);
  };

  const logout = () => {
    setUserToken(null);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, currentUser, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

