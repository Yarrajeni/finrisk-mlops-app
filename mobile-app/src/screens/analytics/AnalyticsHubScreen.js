import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const modules = [
  { title: 'Risk Trend', icon: 'trending-up', route: 'RiskTrendChart', color: colors.danger },
  { title: 'Fraud Trend', icon: 'shield', route: 'FraudTrendChart', color: colors.warning },
  { title: 'Heat Map', icon: 'grid', route: 'CombinedHeatMap', color: colors.primary },
  { title: 'Model Stats', icon: 'analytics', route: 'ModelPerformance', color: colors.success },
  { title: 'Confidence', icon: 'ribbon', route: 'ConfidenceTracker', color: colors.purple },
  { title: 'Data Export', icon: 'download', route: 'DataExport', color: colors.primary },
  { title: 'AI Insights', icon: 'bulb', route: 'InsightsFeed', color: colors.warning },
];

export default function AnalyticsHubScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Analytics" showMenu />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          {[{ l: 'Predictions', v: '2,841' }, { l: 'Accuracy', v: '95.6%' }, { l: 'Models', v: '3 Live' }].map((s, i) => (
            <GlassCard key={i} style={{ width: '31%', alignItems: 'center', padding: 16, marginBottom: 0 }}>
              <Text style={{ color: colors.primary, fontSize: 18, fontWeight: '800' }}>{s.v}</Text>
              <Text style={[globalStyles.cardLabel, { marginBottom: 0, marginTop: 4, fontSize: 10 }]}>{s.l}</Text>
            </GlassCard>
          ))}
        </View>

        <Text style={globalStyles.sectionTitle}>Analytics Modules</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {modules.map((m, i) => (
            <TouchableOpacity key={i} style={[globalStyles.glassCard, { width: '48%', alignItems: 'center', padding: 22, marginBottom: 12 }]} onPress={() => navigation.navigate(m.route)}>
              <Ionicons name={m.icon} size={30} color={m.color} />
              <Text style={{ color: colors.textPrimary, fontWeight: '700', marginTop: 10, fontSize: 14 }}>{m.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
