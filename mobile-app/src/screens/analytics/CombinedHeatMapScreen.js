import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const heatData = [
  ['H', 'M', 'L', 'L', 'M', 'H', 'M'],
  ['M', 'H', 'H', 'M', 'L', 'M', 'L'],
  ['L', 'M', 'H', 'H', 'H', 'M', 'M'],
  ['M', 'L', 'M', 'H', 'M', 'L', 'H'],
];
const rows = ['Credit', 'Fraud', 'Trading', 'Market'];
const cols = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const cellColor = (v) => v === 'H' ? colors.danger : v === 'M' ? colors.warning : colors.success;

export default function CombinedHeatMapScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Combined Heat Map" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Cross-Domain Risk Heatmap</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>7-Day Overview</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Combined risk signals across Credit, Fraud, Trading, and Market domains.</Text>
        </GlassCard>

        <GlassCard>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 8, gap: 6 }}>
            {cols.map(c => <Text key={c} style={{ color: colors.textMuted, fontSize: 10, width: 30, textAlign: 'center' }}>{c}</Text>)}
          </View>
          {heatData.map((row, ri) => (
            <View key={ri} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, gap: 6 }}>
              <Text style={{ color: colors.textSecondary, fontSize: 12, width: 52 }}>{rows[ri]}</Text>
              {row.map((cell, ci) => (
                <View key={ci} style={{ width: 30, height: 30, borderRadius: 6, backgroundColor: cellColor(cell), alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: '#000', fontSize: 10, fontWeight: '800' }}>{cell}</Text>
                </View>
              ))}
            </View>
          ))}
        </GlassCard>

        <View style={{ flexDirection: 'row', gap: 12, marginTop: 8 }}>
          {[['H', colors.danger, 'High'], ['M', colors.warning, 'Medium'], ['L', colors.success, 'Low']].map(([l, c, label]) => (
            <View key={l} style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <View style={{ width: 16, height: 16, borderRadius: 4, backgroundColor: c }} />
              <Text style={globalStyles.cardCaption}>{label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
