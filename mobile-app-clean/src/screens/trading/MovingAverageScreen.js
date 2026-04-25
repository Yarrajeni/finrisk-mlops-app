import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const maData = [
  { period: 'MA 7', value: '₹66,120', signal: 'Bullish', color: colors.success },
  { period: 'MA 14', value: '₹64,880', signal: 'Bullish', color: colors.success },
  { period: 'MA 21', value: '₹63,200', signal: 'Bullish', color: colors.success },
  { period: 'MA 50', value: '₹59,400', signal: 'Strong Buy', color: colors.primary },
  { period: 'MA 200', value: '₹48,900', signal: 'Strong Buy', color: colors.primary },
];

export default function MovingAverageScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Moving Averages" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.success}>
          <Text style={globalStyles.cardLabel}>MA Crossover Signal</Text>
          <Text style={{ color: colors.success, fontSize: 28, fontWeight: '800' }}>🟢 STRONG BUY</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>MA7 crossed above MA21 — Golden Cross detected on April 20</Text>
        </GlassCard>

        <Text style={globalStyles.sectionTitle}>Moving Average Table</Text>
        {maData.map((m, i) => (
          <GlassCard key={i} style={{ marginBottom: 10 }}>
            <View style={globalStyles.row}>
              <View>
                <Text style={{ color: colors.textPrimary, fontWeight: '700', fontSize: 16 }}>{m.period}</Text>
                <Text style={[globalStyles.cardCaption, { marginTop: 3 }]}>{m.value}</Text>
              </View>
              <View style={[globalStyles.tag, { backgroundColor: m.color + '22' }]}>
                <Text style={[globalStyles.tagText, { color: m.color }]}>{m.signal}</Text>
              </View>
            </View>
          </GlassCard>
        ))}

        <GlassCard borderColor={colors.warning} style={{ marginTop: 8 }}>
          <Text style={{ color: colors.warning, fontWeight: '700', marginBottom: 8 }}>Strategy Insight</Text>
          <Text style={globalStyles.cardCaption}>Price is trading above all key moving averages. The MA7/MA21 golden cross suggests continued upward momentum. Consider setting stop-loss at MA21 (₹63,200).</Text>
        </GlassCard>
      </ScrollView>
    </SafeAreaView>
  );
}
