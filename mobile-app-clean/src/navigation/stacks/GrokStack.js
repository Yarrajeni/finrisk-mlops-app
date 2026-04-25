import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GrokScannerScreen from '../../screens/grok/GrokScannerScreen';

const Stack = createNativeStackNavigator();

export default function GrokStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GrokScanner" component={GrokScannerScreen} />
    </Stack.Navigator>
  );
}
