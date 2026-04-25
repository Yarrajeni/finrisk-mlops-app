import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Switch } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const strategies = [
  { name: 'MA Crossover (7/21)', desc: 'Buy when MA7 crosses above MA21', active: true },
  { name: 'RSI Reversal', desc: 'Buy below RSI 30, sell above RSI 70', active: false },
  { name: 'Bollinger Breakout', desc: 'Buy on upper band break with volume', active: false },
  { name: 'MACD Signal', desc: 'Trade on MACD histogram crossover', active: false },
];

const settings = [
  { label: 'Stop-Loss', value: '5%' },
  { label: 'Take-Profit', value: '15%' },
  { label: 'Max Position Size', value: '₹1,000' },
  { label: 'Scan Interval', value: '15 minutes' },
  { label: 'Asset', value: 'BTC / USDT' },
];

export default function AlgoStrategyScreen({ navigation }) {
  const [active, setActive] = useState([true, false, false, false]);

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Algo Strategy" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={[globalStyles.cardLabel, { color: colors.primary }]}>Algorithmic Strategy Engine</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>Strategy Configuration</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Enable one strategy at a time. All trades are simulated — no real execution.</Text>
        </GlassCard>

        <Text style={globalStyles.sectionTitle}>Available Strategies</Text>
        {strategies.map((s, i) => (
          <GlassCard key={i} style={{ marginBottom: 10 }} borderColor={active[i] ? colors.primary + '44' : 'transparent'}>
            <View style={globalStyles.row}>
              <View style={{ flex: 1, marginRight: 12 }}>
                <Text style={{ color: colors.textPrimary, fontWeight: '700', fontSize: 15 }}>{s.name}</Text>
                <Text style={[globalStyles.cardCaption, { marginTop: 4 }]}>{s.desc}</Text>
              </View>
              <Switch value={active[i]} onValueChange={(v) => setActive(prev => prev.map((p, j) => j === i ? v : false))}
                trackColor={{ false: '#333', true: colors.primary + '66' }} thumbColor={active[i] ? colors.primary : '#666'} />
            </View>
          </GlassCard>
        ))}

        <Text style={globalStyles.sectionTitle}>Risk Parameters</Text>
        {settings.map((s, i) => (
          <View key={i}>
            <View style={[globalStyles.row, { paddingVertical: 14 }]}>
              <Text style={globalStyles.cardCaption}>{s.label}</Text>
              <Text style={{ color: colors.primary, fontWeight: '700' }}>{s.value}</Text>
            </View>
            {i < settings.length - 1 && <View style={globalStyles.divider} />}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
