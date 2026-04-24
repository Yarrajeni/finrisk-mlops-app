import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const genTxn = () => ({
  id: 'TXN-' + Math.floor(Math.random() * 9000 + 1000),
  amount: '₹' + (Math.random() * 4000 + 10).toFixed(0),
  risk: Math.floor(Math.random() * 100),
  time: 'Just now',
});

export default function LiveTransactionMonitorScreen({ navigation }) {
  const [feed, setFeed] = useState([genTxn(), genTxn(), genTxn(), genTxn(), genTxn()]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeed(prev => [genTxn(), ...prev.slice(0, 7)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const riskColor = (score) => score >= 70 ? colors.danger : score >= 40 ? colors.warning : colors.success;

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Live Monitor" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.danger} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: colors.danger }} />
          <Text style={{ color: colors.danger, fontWeight: '700', fontSize: 15 }}>LIVE — Scanning incoming transactions</Text>
        </GlassCard>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          {[{ label: 'Scanned', val: '1,284' }, { label: 'Flagged', val: '37' }, { label: 'Blocked', val: '12' }].map((s, i) => (
            <GlassCard key={i} style={{ width: '31%', alignItems: 'center', padding: 16, marginBottom: 0 }}>
              <Text style={{ color: colors.primary, fontSize: 22, fontWeight: '800' }}>{s.val}</Text>
              <Text style={[globalStyles.cardLabel, { marginBottom: 0, marginTop: 4 }]}>{s.label}</Text>
            </GlassCard>
          ))}
        </View>

        <Text style={globalStyles.sectionTitle}>Transaction Feed</Text>
        {feed.map((txn, i) => (
          <GlassCard key={i} style={{ marginBottom: 10 }} borderColor={riskColor(txn.risk) + '44'}>
            <View style={globalStyles.row}>
              <View>
                <Text style={{ color: colors.textPrimary, fontWeight: '700' }}>{txn.id}</Text>
                <Text style={globalStyles.cardCaption}>{txn.amount} · {txn.time}</Text>
              </View>
              <View style={{ alignItems: 'flex-end', gap: 4 }}>
                <Text style={{ color: riskColor(txn.risk), fontWeight: '900', fontSize: 18 }}>{txn.risk}</Text>
                <Ionicons
                  name={txn.risk >= 70 ? 'warning' : txn.risk >= 40 ? 'alert-circle' : 'checkmark-circle'}
                  size={20} color={riskColor(txn.risk)}
                />
              </View>
            </View>
          </GlassCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
