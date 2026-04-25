import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelpCenterScreen from '../../screens/help/HelpCenterScreen';
import CreditTutorialScreen from '../../screens/help/CreditTutorialScreen';
import FraudTutorialScreen from '../../screens/help/FraudTutorialScreen';
import TradingTutorialScreen from '../../screens/help/TradingTutorialScreen';
import GlossaryScreen from '../../screens/help/GlossaryScreen';
import AboutScreen from '../../screens/help/AboutScreen';

const Stack = createNativeStackNavigator();
export default function HelpStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HelpCenter" component={HelpCenterScreen} />
      <Stack.Screen name="CreditTutorial" component={CreditTutorialScreen} />
      <Stack.Screen name="FraudTutorial" component={FraudTutorialScreen} />
      <Stack.Screen name="TradingTutorial" component={TradingTutorialScreen} />
      <Stack.Screen name="Glossary" component={GlossaryScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}
