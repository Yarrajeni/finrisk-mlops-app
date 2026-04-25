import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const holdings = [
  { asset: 'Bitcoin', ticker: 'BTC', amount: '0.142', value: 9572.6, change: 8.55, cost: 8820 },
  { asset: 'Ethereum', ticker: 'ETH', amount: '2.5', value: 8025, change: -2.1, cost: 8200 },
  { asset: 'Solana', ticker: 'SOL', amount: '48', value: 8064, change: 12.4, cost: 7200 },
  { asset: 'BNB', ticker: 'BNB', amount: '18', value: 7416, change: 3.2, cost: 7180 },
];

export default function PortfolioPnLScreen({ navigation }) {
  const totalValue = holdings.reduce((a, h) => a + h.value, 0);
  const totalCost = holdings.reduce((a, h) => a + h.cost, 0);
  const totalPnL = totalValue - totalCost;
  const pnlPct = ((totalPnL / totalCost) * 100).toFixed(2);

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Portfolio P&L" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={totalPnL >= 0 ? colors.success : colors.danger}>
          <Text style={globalStyles.cardLabel}>Total Portfolio Value</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 38, fontWeight: '300' }}>${totalValue.toLocaleString()}</Text>
          <View style={globalStyles.row}>
            <Text style={{ color: totalPnL >= 0 ? colors.success : colors.danger, fontWeight: '700', fontSize: 16 }}>
              {totalPnL >= 0 ? '▲' : '▼'} ${Math.abs(totalPnL).toFixed(0)} ({pnlPct}%)
            </Text>
            <Text style={globalStyles.cardCaption}>vs. cost basis</Text>
          </View>
        </GlassCard>

        <Text style={globalStyles.sectionTitle}>Holdings</Text>
        {holdings.map((h, i) => {
          const pnl = h.value - h.cost;
          const pnlC = pnl >= 0 ? colors.success : colors.danger;
          return (
            <GlassCard key={i} style={{ marginBottom: 10 }}>
              <View style={globalStyles.row}>
                <View>
                  <Text style={{ color: colors.textPrimary, fontWeight: '700', fontSize: 16 }}>{h.asset}</Text>
                  <Text style={globalStyles.cardCaption}>{h.amount} {h.ticker}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={{ color: colors.textPrimary, fontWeight: '700', fontSize: 16 }}>${h.value.toLocaleString()}</Text>
                  <Text style={{ color: pnlC, fontWeight: '600', fontSize: 13 }}>
                    {pnl >= 0 ? '+' : ''}${pnl.toFixed(0)} ({h.change > 0 ? '+' : ''}{h.change}%)
                  </Text>
                </View>
              </View>
            </GlassCard>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
