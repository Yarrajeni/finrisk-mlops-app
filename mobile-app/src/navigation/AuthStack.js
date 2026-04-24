import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/auth/SplashScreen';
import Onboarding1Screen from '../screens/auth/Onboarding1Screen';
import Onboarding2Screen from '../screens/auth/Onboarding2Screen';
import Onboarding3Screen from '../screens/auth/Onboarding3Screen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import EmailVerifyScreen from '../screens/auth/EmailVerifyScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding1" component={Onboarding1Screen} />
      <Stack.Screen name="Onboarding2" component={Onboarding2Screen} />
      <Stack.Screen name="Onboarding3" component={Onboarding3Screen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="EmailVerify" component={EmailVerifyScreen} />
    </Stack.Navigator>
  );
}
