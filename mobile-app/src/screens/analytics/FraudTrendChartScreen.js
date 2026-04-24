import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const weekData = [
  { day: 'Mon', count: 8 }, { day: 'Tue', count: 15 }, { day: 'Wed', count: 6 },
  { day: 'Thu', count: 21 }, { day: 'Fri', count: 18 }, { day: 'Sat', count: 11 }, { day: 'Sun', count: 9 },
];
const maxCount = Math.max(...weekData.map(d => d.count));

export default function FraudTrendChartScreen({ navigation }) {
  const total = weekData.reduce((a, d) => a + d.count, 0);
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Fraud Trend (7D)" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.warning}>
          <Text style={globalStyles.cardLabel}>Total Fraud Flags This Week</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 40, fontWeight: '300' }}>{total}</Text>
          <Text style={{ color: colors.danger, fontWeight: '700', marginTop: 4 }}>▲ +28% vs last week</Text>
        </GlassCard>

        <GlassCard>
          <Text style={globalStyles.cardLabel}>Daily Fraud Flags</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', height: 130, gap: 6, marginTop: 16, justifyContent: 'space-between' }}>
            {weekData.map((d, i) => {
              const h = (d.count / maxCount) * 110 + 10;
              return (
                <View key={i} style={{ flex: 1, alignItems: 'center' }}>
                  <Text style={{ color: colors.warning, fontSize: 10, fontWeight: '700', marginBottom: 4 }}>{d.count}</Text>
                  <View style={{ width: '100%', height: h, borderRadius: 6, backgroundColor: d.count > 15 ? colors.danger : colors.warning }} />
                  <Text style={{ color: colors.textMuted, fontSize: 10, marginTop: 4 }}>{d.day}</Text>
                </View>
              );
            })}
          </View>
        </GlassCard>

        <GlassCard borderColor={colors.danger} style={{ marginTop: 8 }}>
          <Text style={{ color: colors.danger, fontWeight: '700', marginBottom: 8 }}>Peak Day: Thursday (21 flags)</Text>
          <Text style={globalStyles.cardCaption}>High volume on Thursday correlated with an e-commerce flash sale event. Consider increasing detection sensitivity on promotional days.</Text>
        </GlassCard>
      </ScrollView>
    </SafeAreaView>
  );
}
