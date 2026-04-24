import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const prices = [62100, 63400, 61800, 65200, 67100, 66400, 67412];
const maxP = Math.max(...prices);
const minP = Math.min(...prices);

export default function LivePriceChartScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Live Price Chart" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.success}>
          <Text style={globalStyles.cardLabel}>BTC / USDT — 7-Day</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 32, fontWeight: '300' }}>₹67,412.50</Text>
          <Text style={{ color: colors.success, fontWeight: '700', marginTop: 4 }}>▲ +8.55% this week</Text>
        </GlassCard>

        {/* ASCII-style bar chart */}
        <GlassCard style={{ paddingBottom: 10 }}>
          <Text style={globalStyles.cardLabel}>Price History (7D)</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', height: 120, gap: 8, justifyContent: 'space-between', marginTop: 12 }}>
            {prices.map((p, i) => {
              const h = ((p - minP) / (maxP - minP)) * 100 + 20;
              const isLast = i === prices.length - 1;
              return (
                <View key={i} style={{ flex: 1, alignItems: 'center' }}>
                  <View style={{ width: '100%', height: h, borderRadius: 6, backgroundColor: isLast ? colors.success : colors.success + '55' }} />
                  <Text style={{ color: colors.textMuted, fontSize: 10, marginTop: 4 }}>D{i + 1}</Text>
                </View>
              );
            })}
          </View>
          <View style={[globalStyles.row, { marginTop: 12 }]}>
            <Text style={globalStyles.cardCaption}>Low: ₹61,800</Text>
            <Text style={globalStyles.cardCaption}>High: ₹67,412</Text>
          </View>
        </GlassCard>

        {[
          { label: 'RSI (14)', value: '62.4', status: 'Neutral' },
          { label: 'MACD', value: '+284', status: 'Bullish' },
          { label: 'Bollinger Band', value: 'Upper', status: 'Overbought' },
          { label: 'Volume (24h)', value: '₹32.4B', status: 'High' },
        ].map((ind, i) => (
          <GlassCard key={i} style={{ marginBottom: 10 }}>
            <View style={globalStyles.row}>
              <Text style={{ color: colors.textPrimary, fontWeight: '600' }}>{ind.label}</Text>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: colors.success, fontWeight: '800', fontSize: 16 }}>{ind.value}</Text>
                <Text style={globalStyles.cardCaption}>{ind.status}</Text>
              </View>
            </View>
          </GlassCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
