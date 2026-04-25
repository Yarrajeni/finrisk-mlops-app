import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TradingHomeScreen from '../../screens/trading/TradingHomeScreen';
import LivePriceChartScreen from '../../screens/trading/LivePriceChartScreen';
import MovingAverageScreen from '../../screens/trading/MovingAverageScreen';
import AISignalsFeedScreen from '../../screens/trading/AISignalsFeedScreen';
import SimulateSurgeScreen from '../../screens/trading/SimulateSurgeScreen';
import PortfolioPnLScreen from '../../screens/trading/PortfolioPnLScreen';
import AssetWatchlistScreen from '../../screens/trading/AssetWatchlistScreen';
import TradeHistoryScreen from '../../screens/trading/TradeHistoryScreen';
import BuySellSimulatorScreen from '../../screens/trading/BuySellSimulatorScreen';
import AlgoStrategyScreen from '../../screens/trading/AlgoStrategyScreen';

const Stack = createNativeStackNavigator();
export default function TradingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TradingHome" component={TradingHomeScreen} />
      <Stack.Screen name="LivePriceChart" component={LivePriceChartScreen} />
      <Stack.Screen name="MovingAverage" component={MovingAverageScreen} />
      <Stack.Screen name="AISignalsFeed" component={AISignalsFeedScreen} />
      <Stack.Screen name="SimulateSurge" component={SimulateSurgeScreen} />
      <Stack.Screen name="PortfolioPnL" component={PortfolioPnLScreen} />
      <Stack.Screen name="AssetWatchlist" component={AssetWatchlistScreen} />
      <Stack.Screen name="TradeHistory" component={TradeHistoryScreen} />
      <Stack.Screen name="BuySellSimulator" component={BuySellSimulatorScreen} />
      <Stack.Screen name="AlgoStrategy" component={AlgoStrategyScreen} />
    </Stack.Navigator>
  );
}
