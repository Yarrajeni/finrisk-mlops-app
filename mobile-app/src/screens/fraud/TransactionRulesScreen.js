import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const rules = [
  { rule: 'Amount > ₹5,000', severity: 'HIGH', enabled: true },
  { rule: 'New device + foreign country', severity: 'HIGH', enabled: true },
  { rule: '3+ transactions in 10 min', severity: 'MEDIUM', enabled: true },
  { rule: 'Merchant category mismatch', severity: 'MEDIUM', enabled: false },
  { rule: 'Night-time transaction (1–5 AM)', severity: 'LOW', enabled: true },
  { rule: 'Amount ends in round number', severity: 'LOW', enabled: false },
];

const sev = (s) => s === 'HIGH' ? colors.danger : s === 'MEDIUM' ? colors.warning : colors.success;

export default function TransactionRulesScreen({ navigation }) {
  const [switches, setSwitches] = React.useState(rules.map(r => r.enabled));
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Flagging Rules" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.danger}>
          <Text style={[globalStyles.cardLabel, { color: colors.danger }]}>Rule Engine</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>Transaction Flagging Rules</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Toggle rules that automatically flag suspicious transactions for review.</Text>
        </GlassCard>
        {rules.map((item, i) => (
          <GlassCard key={i} style={{ marginBottom: 10 }} borderColor={sev(item.severity) + '33'}>
            <View style={globalStyles.row}>
              <View style={{ flex: 1, marginRight: 12 }}>
                <Text style={{ color: colors.textPrimary, fontWeight: '600', fontSize: 14 }}>{item.rule}</Text>
                <View style={[globalStyles.tag, { backgroundColor: sev(item.severity) + '22', marginTop: 6 }]}>
                  <Text style={[globalStyles.tagText, { color: sev(item.severity) }]}>{item.severity}</Text>
                </View>
              </View>
              <Switch
                value={switches[i]}
                onValueChange={(v) => setSwitches(prev => { const n = [...prev]; n[i] = v; return n; })}
                trackColor={{ false: '#333', true: sev(item.severity) + '66' }}
                thumbColor={switches[i] ? sev(item.severity) : '#666'}
              />
            </View>
          </GlassCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
