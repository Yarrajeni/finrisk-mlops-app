import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnalyticsHubScreen from '../../screens/analytics/AnalyticsHubScreen';
import RiskTrendChartScreen from '../../screens/analytics/RiskTrendChartScreen';
import FraudTrendChartScreen from '../../screens/analytics/FraudTrendChartScreen';
import CombinedHeatMapScreen from '../../screens/analytics/CombinedHeatMapScreen';
import ModelPerformanceScreen from '../../screens/analytics/ModelPerformanceScreen';
import ConfidenceTrackerScreen from '../../screens/analytics/ConfidenceTrackerScreen';
import DataExportScreen from '../../screens/analytics/DataExportScreen';
import InsightsFeedScreen from '../../screens/analytics/InsightsFeedScreen';

const Stack = createNativeStackNavigator();
export default function AnalyticsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AnalyticsHub" component={AnalyticsHubScreen} />
      <Stack.Screen name="RiskTrendChart" component={RiskTrendChartScreen} />
      <Stack.Screen name="FraudTrendChart" component={FraudTrendChartScreen} />
      <Stack.Screen name="CombinedHeatMap" component={CombinedHeatMapScreen} />
      <Stack.Screen name="ModelPerformance" component={ModelPerformanceScreen} />
      <Stack.Screen name="ConfidenceTracker" component={ConfidenceTrackerScreen} />
      <Stack.Screen name="DataExport" component={DataExportScreen} />
      <Stack.Screen name="InsightsFeed" component={InsightsFeedScreen} />
    </Stack.Navigator>
  );
}
