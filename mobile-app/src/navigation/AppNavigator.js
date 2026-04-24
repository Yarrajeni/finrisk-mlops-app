import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/AuthContext';
import AuthStack from './AuthStack';
import MainDrawer from './MainDrawer';

import SplashScreen from '../screens/auth/SplashScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!currentUser ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : (
          <Stack.Screen name="Main" component={MainDrawer} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
