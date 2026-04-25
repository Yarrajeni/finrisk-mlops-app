import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function TradingTutorialScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Trading Tutorial" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.success}>
          <Text style={globalStyles.cardLabel}>Guide</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>AI Trading Signals</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Learn how to interpret AI-generated BUY and SELL signals.</Text>
        </GlassCard>

        <View style={{ marginTop: 25 }}>
          <Text style={globalStyles.sectionTitle}>Technical Analysis</Text>
          <Text style={globalStyles.cardCaption}>
            Our engine uses a combination of Moving Averages (MA), Relative Strength Index (RSI), and Volume analysis to identify market trends.
          </Text>

          <Text style={[globalStyles.sectionTitle, { marginTop: 20 }]}>Common Indicators</Text>
          {[
            { title: 'MA Crossover', desc: 'When a short-term average (MA7) crosses a long-term one (MA21), it signal a trend change.' },
            { title: 'Golden Cross', desc: 'A strong bullish signal where MA50 crosses above MA200.' },
            { title: 'RSI (Relative Strength Index)', desc: 'Measures the speed and change of price movements to identify overbought or oversold conditions.' },
          ].map((item, i) => (
            <GlassCard key={i} style={{ marginTop: 12, backgroundColor: colors.surfaceSolid }}>
              <Text style={{ color: colors.success, fontWeight: '700', fontSize: 15 }}>{item.title}</Text>
              <Text style={[globalStyles.cardCaption, { marginTop: 4, fontSize: 13 }]}>{item.desc}</Text>
            </GlassCard>
          ))}

          <Text style={[globalStyles.sectionTitle, { marginTop: 25 }]}>Risk Management</Text>
          <GlassCard borderColor={colors.warning}>
            <Text style={[globalStyles.cardCaption, { color: colors.textPrimary }]}>
              AI signals are probabilistic, not certain. Always use stop-loss orders and never invest more than you can afford to lose. Use our "Buy/Sell Simulator" to practice before real execution.
            </Text>
          </GlassCard>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
