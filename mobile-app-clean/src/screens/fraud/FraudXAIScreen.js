import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const features = [
  { name: 'Transaction Velocity', impact: 0.31, direction: 'positive' },
  { name: 'Geographic Distance', impact: 0.24, direction: 'positive' },
  { name: 'Time of Day', impact: 0.18, direction: 'positive' },
  { name: 'Amount vs. Avg', impact: 0.14, direction: 'positive' },
  { name: 'Merchant Category', impact: 0.08, direction: 'negative' },
  { name: 'Card Present Flag', impact: 0.05, direction: 'negative' },
];

export default function FraudXAIScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="XAI Breakdown" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.danger}>
          <Text style={[globalStyles.cardLabel, { color: colors.danger }]}>Explainability Method</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 22, fontWeight: '800' }}>SHAP Feature Values</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Each bar shows how much each feature pushed the fraud score UP (red) or DOWN (green).</Text>
        </GlassCard>

        <Text style={globalStyles.sectionTitle}>Feature Contributions</Text>
        {features.map((f, i) => (
          <GlassCard key={i} style={{ marginBottom: 10 }}>
            <View style={globalStyles.row}>
              <Text style={{ color: colors.textPrimary, fontSize: 14, fontWeight: '600', flex: 1 }}>{f.name}</Text>
              <Text style={{ color: f.direction === 'positive' ? colors.danger : colors.success, fontWeight: '800', fontSize: 14 }}>
                {f.direction === 'positive' ? '+' : '-'}{(f.impact * 100).toFixed(0)}%
              </Text>
            </View>
            <View style={{ height: 8, borderRadius: 4, backgroundColor: colors.surfaceElevated ?? '#1E1E2E', marginTop: 10, overflow: 'hidden' }}>
              <View style={{ width: `${f.impact * 100}%`, height: 8, borderRadius: 4, backgroundColor: f.direction === 'positive' ? colors.danger : colors.success }} />
            </View>
          </GlassCard>
        ))}

        <GlassCard borderColor={colors.warning} style={{ marginTop: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <Ionicons name="bulb" size={20} color={colors.warning} />
            <Text style={{ color: colors.warning, fontWeight: '700', fontSize: 15 }}>Model Insight</Text>
          </View>
          <Text style={globalStyles.cardCaption}>High transaction velocity combined with a geographic anomaly accounts for 55% of the fraud score. Reduce cross-border transaction frequency to lower risk.</Text>
        </GlassCard>
      </ScrollView>
    </SafeAreaView>
  );
}
