import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsHomeScreen from '../../screens/settings/SettingsHomeScreen';
import AppAppearanceScreen from '../../screens/settings/AppAppearanceScreen';
import APIConnectionScreen from '../../screens/settings/APIConnectionScreen';
import DataStorageScreen from '../../screens/settings/DataStorageScreen';
import PrivacyPolicyScreen from '../../screens/settings/PrivacyPolicyScreen';
import TermsOfServiceScreen from '../../screens/settings/TermsOfServiceScreen';
import AccessibilityScreen from '../../screens/settings/AccessibilityScreen';
import LanguageRegionScreen from '../../screens/settings/LanguageRegionScreen';

const Stack = createNativeStackNavigator();
export default function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingsHome" component={SettingsHomeScreen} />
      <Stack.Screen name="AppAppearance" component={AppAppearanceScreen} />
      <Stack.Screen name="APIConnection" component={APIConnectionScreen} />
      <Stack.Screen name="DataStorage" component={DataStorageScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="TermsOfService" component={TermsOfServiceScreen} />
      <Stack.Screen name="Accessibility" component={AccessibilityScreen} />
      <Stack.Screen name="LanguageRegion" component={LanguageRegionScreen} />
    </Stack.Navigator>
  );
}
