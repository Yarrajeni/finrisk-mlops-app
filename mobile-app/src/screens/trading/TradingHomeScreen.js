import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const tools = [
  { title: 'Live Chart', icon: 'bar-chart', route: 'LivePriceChart' },
  { title: 'Moving Avg', icon: 'trending-up', route: 'MovingAverage' },
  { title: 'AI Signals', icon: 'flash', route: 'AISignalsFeed' },
  { title: 'Simulate', icon: 'rocket', route: 'SimulateSurge' },
  { title: 'Portfolio P&L', icon: 'wallet', route: 'PortfolioPnL' },
  { title: 'Watchlist', icon: 'star', route: 'AssetWatchlist' },
  { title: 'Trade Log', icon: 'list', route: 'TradeHistory' },
  { title: 'Buy / Sell', icon: 'swap-horizontal', route: 'BuySellSimulator' },
  { title: 'Algo Config', icon: 'settings', route: 'AlgoStrategy' },
];

export default function TradingHomeScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Trading" showMenu />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.success}>
          <Text style={[globalStyles.cardLabel, { color: colors.success }]}>BTC / USDT · Live</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 36, fontWeight: '300', letterSpacing: -1 }}>₹67,412.50</Text>
          <View style={globalStyles.row}>
            <Text style={{ color: colors.success, fontWeight: '700', fontSize: 15 }}>▲ +2.34% today</Text>
            <View style={[globalStyles.tag, { backgroundColor: colors.success + '22' }]}>
              <Text style={[globalStyles.tagText, { color: colors.success }]}>BUY SIGNAL</Text>
            </View>
          </View>
        </GlassCard>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          {[{ l: '24h High', v: '₹68,120' }, { l: '24h Low', v: '₹65,890' }, { l: 'Volume', v: '₹32.4B' }].map((s, i) => (
            <GlassCard key={i} style={{ width: '31%', alignItems: 'center', padding: 14, marginBottom: 0 }}>
              <Text style={{ color: colors.textPrimary, fontWeight: '700', fontSize: 14 }}>{s.v}</Text>
              <Text style={[globalStyles.cardLabel, { marginBottom: 0, marginTop: 4, fontSize: 10 }]}>{s.l}</Text>
            </GlassCard>
          ))}
        </View>

        <Text style={globalStyles.sectionTitle}>Trading Tools</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {tools.map((t, i) => (
            <TouchableOpacity key={i} style={[globalStyles.glassCard, { width: '31%', alignItems: 'center', padding: 16, marginBottom: 12 }]} onPress={() => navigation.navigate(t.route)}>
              <Ionicons name={t.icon} size={26} color={colors.success} />
              <Text style={{ color: colors.textPrimary, fontSize: 12, fontWeight: '600', marginTop: 8, textAlign: 'center' }}>{t.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
