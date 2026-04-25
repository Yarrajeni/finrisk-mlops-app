import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FraudDetectionHomeScreen from '../../screens/fraud/FraudDetectionHomeScreen';
import NewFraudScanScreen from '../../screens/fraud/NewFraudScanScreen';
import FraudResultScreen from '../../screens/fraud/FraudResultScreen';
import FraudXAIScreen from '../../screens/fraud/FraudXAIScreen';
import FraudHistoryScreen from '../../screens/fraud/FraudHistoryScreen';
import FraudLogDetailScreen from '../../screens/fraud/FraudLogDetailScreen';
import FraudModelInfoScreen from '../../screens/fraud/FraudModelInfoScreen';
import TransactionRulesScreen from '../../screens/fraud/TransactionRulesScreen';
import LiveTransactionMonitorScreen from '../../screens/fraud/LiveTransactionMonitorScreen';
import FraudAlertSettingsScreen from '../../screens/fraud/FraudAlertSettingsScreen';

const Stack = createNativeStackNavigator();
export default function FraudStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FraudHome" component={FraudDetectionHomeScreen} />
      <Stack.Screen name="NewScan" component={NewFraudScanScreen} />
      <Stack.Screen name="FraudResult" component={FraudResultScreen} />
      <Stack.Screen name="FraudXAI" component={FraudXAIScreen} />
      <Stack.Screen name="FraudHistory" component={FraudHistoryScreen} />
      <Stack.Screen name="FraudLogDetail" component={FraudLogDetailScreen} />
      <Stack.Screen name="FraudModelInfo" component={FraudModelInfoScreen} />
      <Stack.Screen name="FlaggingRules" component={TransactionRulesScreen} />
      <Stack.Screen name="LiveMonitor" component={LiveTransactionMonitorScreen} />
      <Stack.Screen name="AlertSettings" component={FraudAlertSettingsScreen} />
    </Stack.Navigator>
  );
}
