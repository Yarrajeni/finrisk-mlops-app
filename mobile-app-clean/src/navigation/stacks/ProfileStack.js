import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyProfileScreen from '../../screens/profile/MyProfileScreen';
import EditProfileScreen from '../../screens/profile/EditProfileScreen';
import ChangePasswordScreen from '../../screens/profile/ChangePasswordScreen';
import SessionHistoryScreen from '../../screens/profile/SessionHistoryScreen';
import BiometricSettingsScreen from '../../screens/profile/BiometricSettingsScreen';
import PaymentMethodsScreen from '../../screens/profile/PaymentMethodsScreen';

const Stack = createNativeStackNavigator();
export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyProfile" component={MyProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="SessionHistory" component={SessionHistoryScreen} />
      <Stack.Screen name="BiometricSettings" component={BiometricSettingsScreen} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
    </Stack.Navigator>
  );
}
