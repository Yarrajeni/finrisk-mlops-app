import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Switch } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const prefs = [
  { label: 'Fraud Alerts', sub: 'Real-time fraud detection alerts', key: 'fraud' },
  { label: 'Credit Assessments', sub: 'New credit score results', key: 'credit' },
  { label: 'Trading Signals', sub: 'BUY/SELL signal notifications', key: 'trading' },
  { label: 'Model Retraining', sub: 'CI/CD pipeline completion alerts', key: 'mlops' },
  { label: 'System Health', sub: 'API uptime and error alerts', key: 'system' },
  { label: 'Weekly Reports', sub: 'Sunday digest of all activity', key: 'weekly' },
];

export default function NotificationPreferencesScreen({ navigation }) {
  const [state, setState] = useState({ fraud: true, credit: true, trading: false, mlops: true, system: true, weekly: false });

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Notification Prefs" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Preferences</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>Notification Settings</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Choose which events trigger push notifications.</Text>
        </GlassCard>

        {prefs.map((p) => (
          <GlassCard key={p.key} style={{ marginBottom: 10 }}>
            <View style={globalStyles.row}>
              <View style={{ flex: 1, marginRight: 12 }}>
                <Text style={{ color: colors.textPrimary, fontWeight: '600', fontSize: 15 }}>{p.label}</Text>
                <Text style={[globalStyles.cardCaption, { marginTop: 3 }]}>{p.sub}</Text>
              </View>
              <Switch value={state[p.key]} onValueChange={(v) => setState(prev => ({ ...prev, [p.key]: v }))}
                trackColor={{ false: '#333', true: colors.primary + '66' }} thumbColor={state[p.key] ? colors.primary : '#666'} />
            </View>
          </GlassCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
