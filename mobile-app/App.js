import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <StatusBar barStyle="light-content" backgroundColor="#0D0D12" />
        <AppNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
