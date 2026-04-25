import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const weekData = [
  { day: 'Mon', score: 42 }, { day: 'Tue', score: 58 }, { day: 'Wed', score: 51 },
  { day: 'Thu', score: 67 }, { day: 'Fri', score: 74 }, { day: 'Sat', score: 63 }, { day: 'Sun', score: 55 },
];
const maxScore = Math.max(...weekData.map(d => d.score));

const riskColor = (s) => s >= 70 ? colors.danger : s >= 50 ? colors.warning : colors.success;

export default function RiskTrendChartScreen({ navigation }) {
  const avg = (weekData.reduce((a, d) => a + d.score, 0) / weekData.length).toFixed(1);
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Risk Trend (7D)" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.danger}>
          <Text style={globalStyles.cardLabel}>Weekly Avg Risk Score</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 40, fontWeight: '300' }}>{avg}</Text>
          <Text style={{ color: colors.warning, fontWeight: '700', marginTop: 4 }}>▲ +12% vs last week</Text>
        </GlassCard>

        <GlassCard style={{ paddingBottom: 16 }}>
          <Text style={globalStyles.cardLabel}>Daily Risk Score</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', height: 130, gap: 6, marginTop: 16, justifyContent: 'space-between' }}>
            {weekData.map((d, i) => {
              const h = (d.score / maxScore) * 110 + 10;
              return (
                <View key={i} style={{ flex: 1, alignItems: 'center' }}>
                  <Text style={{ color: riskColor(d.score), fontSize: 10, fontWeight: '700', marginBottom: 4 }}>{d.score}</Text>
                  <View style={{ width: '100%', height: h, borderRadius: 6, backgroundColor: riskColor(d.score) }} />
                  <Text style={{ color: colors.textMuted, fontSize: 10, marginTop: 4 }}>{d.day}</Text>
                </View>
              );
            })}
          </View>
        </GlassCard>

        {weekData.map((d, i) => (
          <GlassCard key={i} style={{ marginBottom: 8 }}>
            <View style={globalStyles.row}>
              <Text style={{ color: colors.textPrimary, fontWeight: '600' }}>{d.day}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <View style={{ width: 80, height: 6, borderRadius: 3, backgroundColor: '#1E1E2E', overflow: 'hidden' }}>
                  <View style={{ width: `${d.score}%`, height: 6, borderRadius: 3, backgroundColor: riskColor(d.score) }} />
                </View>
                <Text style={{ color: riskColor(d.score), fontWeight: '800', width: 28 }}>{d.score}</Text>
              </View>
            </View>
          </GlassCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
