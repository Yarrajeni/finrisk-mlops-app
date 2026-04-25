import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Switch } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const alertSettings = [
  { label: 'Push Notifications', sub: 'Alert me when fraud is detected', key: 'push' },
  { label: 'High Risk Alerts Only', sub: 'Only notify for score ≥ 70', key: 'highOnly' },
  { label: 'Email Alerts', sub: 'Send a summary to registered email', key: 'email' },
  { label: 'Sound Alert', sub: 'Play sound on fraud detection', key: 'sound' },
  { label: 'Vibration', sub: 'Vibrate on fraud flag', key: 'vibration' },
  { label: 'Daily Digest', sub: 'Daily fraud summary at 8 AM', key: 'digest' },
];

export default function FraudAlertSettingsScreen({ navigation }) {
  const [settings, setSettings] = useState({ push: true, highOnly: false, email: true, sound: true, vibration: true, digest: false });
  const toggle = (key) => setSettings(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Alert Settings" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.danger}>
          <Text style={[globalStyles.cardLabel, { color: colors.danger }]}>Notification Preferences</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>Fraud Alert Config</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Control how and when you receive fraud detection alerts.</Text>
        </GlassCard>

        {alertSettings.map((item, i) => (
          <GlassCard key={i} style={{ marginBottom: 10 }}>
            <View style={globalStyles.row}>
              <View style={{ flex: 1, marginRight: 12 }}>
                <Text style={{ color: colors.textPrimary, fontWeight: '600', fontSize: 15 }}>{item.label}</Text>
                <Text style={[globalStyles.cardCaption, { marginTop: 3 }]}>{item.sub}</Text>
              </View>
              <Switch
                value={settings[item.key]}
                onValueChange={() => toggle(item.key)}
                trackColor={{ false: '#333', true: colors.danger + '66' }}
                thumbColor={settings[item.key] ? colors.danger : '#666'}
              />
            </View>
          </GlassCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
