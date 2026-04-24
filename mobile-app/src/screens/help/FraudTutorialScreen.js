import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function FraudTutorialScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Fraud AI Tutorial" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.danger}>
          <Text style={globalStyles.cardLabel}>Guide</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>AI Fraud Detection</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Learn how we protect your account from suspicious activities.</Text>
        </GlassCard>

        <View style={{ marginTop: 25 }}>
          <Text style={globalStyles.sectionTitle}>Real-time Monitoring</Text>
          <Text style={globalStyles.cardCaption}>
            Our Random Forest model scans transactions in real-time, comparing them against millions of known fraud patterns and your unique spending behavior.
          </Text>

          <Text style={[globalStyles.sectionTitle, { marginTop: 20 }]}>Anomalies Detected</Text>
          {[
            { title: 'Geographic Shifts', desc: 'Sudden transactions from unexpected locations.' },
            { title: 'Velocity Spikes', desc: 'Too many transactions in a very short period.' },
            { title: 'Amount Deviations', desc: 'Transactions significantly larger than your average.' },
            { title: 'Merchant Risk', desc: 'Transactions at high-risk or blacklisted categories.' },
          ].map((item, i) => (
            <GlassCard key={i} style={{ marginTop: 12, backgroundColor: colors.surfaceSolid }}>
              <Text style={{ color: colors.danger, fontWeight: '700', fontSize: 15 }}>{item.title}</Text>
              <Text style={[globalStyles.cardCaption, { marginTop: 4, fontSize: 13 }]}>{item.desc}</Text>
            </GlassCard>
          ))}

          <Text style={[globalStyles.sectionTitle, { marginTop: 25 }]}>Security Tips</Text>
          <GlassCard borderColor={colors.warning}>
            <Text style={[globalStyles.cardCaption, { color: colors.textPrimary }]}>
              • Always use Biometric Login for added security.{"\n"}
              • Review your "Fraud Logs" daily for any unauthorized flags.{"\n"}
              • Enable "Push Notifications" for instant fraud alerts.{"\n"}
              • Keep your API keys private and never share them.
            </Text>
          </GlassCard>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
