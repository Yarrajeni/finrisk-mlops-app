import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreditRiskHomeScreen from '../../screens/credit/CreditRiskHomeScreen';
import NewCreditAssessmentScreen from '../../screens/credit/NewCreditAssessmentScreen';
import CreditScoreResultScreen from '../../screens/credit/CreditScoreResultScreen';
import CreditXAIScreen from '../../screens/credit/CreditXAIScreen';
import CreditHistoryScreen from '../../screens/credit/CreditHistoryScreen';
import CreditLogDetailScreen from '../../screens/credit/CreditLogDetailScreen';
import CreditModelInfoScreen from '../../screens/credit/CreditModelInfoScreen';
import CreditSimulatorScreen from '../../screens/credit/CreditSimulatorScreen';
import BatchAssessmentScreen from '../../screens/credit/BatchAssessmentScreen';
import CreditReportPreviewScreen from '../../screens/credit/CreditReportPreviewScreen';

const Stack = createNativeStackNavigator();
export default function CreditStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CreditHome" component={CreditRiskHomeScreen} />
      <Stack.Screen name="CreditAssessmentForm" component={NewCreditAssessmentScreen} />
      <Stack.Screen name="CreditResult" component={CreditScoreResultScreen} />
      <Stack.Screen name="CreditXAI" component={CreditXAIScreen} />
      <Stack.Screen name="CreditHistory" component={CreditHistoryScreen} />
      <Stack.Screen name="CreditLogDetail" component={CreditLogDetailScreen} />
      <Stack.Screen name="CreditModelInfo" component={CreditModelInfoScreen} />
      <Stack.Screen name="CreditSimulator" component={CreditSimulatorScreen} />
      <Stack.Screen name="BatchCredit" component={BatchAssessmentScreen} />
      <Stack.Screen name="CreditReport" component={CreditReportPreviewScreen} />
    </Stack.Navigator>
  );
}
