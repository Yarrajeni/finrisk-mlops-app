import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const insights = [
  { icon: 'trending-up', color: colors.danger, title: 'Credit Risk Rising', time: '2h ago', body: 'Average credit risk score increased by 12% this week. High-income segment showing unusual default probability spikes — model confidence: 94%.' },
  { icon: 'shield', color: colors.warning, title: 'Fraud Spike Detected', time: '5h ago', body: 'Thursday saw 21 fraud flags — 3× the daily average. Correlated with a flash sale event. Recommend enabling stricter velocity rules during promotional periods.' },
  { icon: 'flash', color: colors.success, title: 'BTC Golden Cross Confirmed', time: '8h ago', body: 'MA7 crossed above MA21 with volume confirmation. Historical accuracy of this signal for BTC: 78% bullish over next 14 days.' },
  { icon: 'analytics', color: colors.primary, title: 'Model Retrained Successfully', time: '1 day ago', body: 'Credit Risk model retrained on 2,841 new samples. Accuracy improved from 93.8% to 94.2%. Deployed via GitHub Actions CI/CD pipeline.' },
];

export default function InsightsFeedScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="AI Insights" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>AI Summary Engine</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>Smart Insights Feed</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Auto-generated summaries from all model outputs and risk events.</Text>
        </GlassCard>

        {insights.map((ins, i) => (
          <GlassCard key={i} style={{ marginBottom: 14 }} borderColor={ins.color + '44'}>
            <View style={[globalStyles.row, { marginBottom: 10 }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <View style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: ins.color + '22', alignItems: 'center', justifyContent: 'center' }}>
                  <Ionicons name={ins.icon} size={18} color={ins.color} />
                </View>
                <Text style={{ color: ins.color, fontWeight: '700', fontSize: 15 }}>{ins.title}</Text>
              </View>
              <Text style={globalStyles.cardCaption}>{ins.time}</Text>
            </View>
            <Text style={globalStyles.cardCaption}>{ins.body}</Text>
          </GlassCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
