import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardHomeScreen from '../../screens/dashboard/DashboardHomeScreen';
import GlobalRiskHeatmapScreen from '../../screens/dashboard/GlobalRiskHeatmapScreen';
import PortfolioOverviewScreen from '../../screens/dashboard/PortfolioOverviewScreen';
import RiskScoreGaugeScreen from '../../screens/dashboard/RiskScoreGaugeScreen';
import SystemHealthScreen from '../../screens/dashboard/SystemHealthScreen';
import NewsFeedScreen from '../../screens/dashboard/NewsFeedScreen';

const Stack = createNativeStackNavigator();
export default function DashboardStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DashboardHome" component={DashboardHomeScreen} />
      <Stack.Screen name="GlobalRiskHeatmap" component={GlobalRiskHeatmapScreen} />
      <Stack.Screen name="PortfolioOverview" component={PortfolioOverviewScreen} />
      <Stack.Screen name="RiskScoreGauge" component={RiskScoreGaugeScreen} />
      <Stack.Screen name="SystemHealth" component={SystemHealthScreen} />
      <Stack.Screen name="NewsFeed" component={NewsFeedScreen} />
    </Stack.Navigator>
  );
}
