import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import DashboardStack from './stacks/DashboardStack';
import CreditStack from './stacks/CreditStack';
import FraudStack from './stacks/FraudStack';
import TradingStack from './stacks/TradingStack';
import AnalyticsStack from './stacks/AnalyticsStack';

const Tab = createBottomTabNavigator();

const tabIcons = {
  Dashboard: ['home', 'home-outline'],
  Credit: ['card', 'card-outline'],
  Fraud: ['shield', 'shield-outline'],
  Trading: ['pulse', 'pulse-outline'],
  Analytics: ['bar-chart', 'bar-chart-outline'],
};

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.tabBar,
          borderTopColor: '#1F1F2E',
          borderTopWidth: 1,
          height: 80,
          paddingBottom: 10,
          paddingTop: 8,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: { fontSize: 10, fontWeight: '700' },
        tabBarIcon: ({ focused, color }) => {
          const [active, inactive] = tabIcons[route.name];
          return <Ionicons name={focused ? active : inactive} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardStack} />
      <Tab.Screen name="Credit" component={CreditStack} />
      <Tab.Screen name="Fraud" component={FraudStack} />
      <Tab.Screen name="Trading" component={TradingStack} />
      <Tab.Screen name="Analytics" component={AnalyticsStack} />
    </Tab.Navigator>
  );
}
