import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function SimulateSurgeScreen({ navigation }) {
  const [surge, setSurge] = useState('15');
  const [portfolio, setPortfolio] = useState('10000');
  const [result, setResult] = useState(null);

  const simulate = () => {
    const p = parseFloat(portfolio) || 0;
    const s = parseFloat(surge) || 0;
    const gain = p * (s / 100);
    const newVal = p + gain;
    setResult({ gain: gain.toFixed(2), newVal: newVal.toFixed(2), percent: s });
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Market Surge Sim" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Simulation Tool</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>Market Surge Simulator</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Model the impact of a price surge on your portfolio value.</Text>
        </GlassCard>

        <Text style={[globalStyles.cardLabel, { marginBottom: 8 }]}>Portfolio Value (USD)</Text>
        <TextInput
          style={globalStyles.input}
          value={portfolio}
          onChangeText={setPortfolio}
          keyboardType="numeric"
          placeholder="e.g. 10000"
          placeholderTextColor={colors.textMuted}
        />

        <Text style={[globalStyles.cardLabel, { marginBottom: 8 }]}>Surge Percentage (%)</Text>
        <TextInput
          style={globalStyles.input}
          value={surge}
          onChangeText={setSurge}
          keyboardType="numeric"
          placeholder="e.g. 15"
          placeholderTextColor={colors.textMuted}
        />

        <TouchableOpacity style={[globalStyles.primaryButton, { backgroundColor: colors.success }]} onPress={simulate}>
          <Text style={globalStyles.primaryButtonText}>Run Simulation</Text>
        </TouchableOpacity>

        {result && (
          <GlassCard borderColor={colors.success} style={{ marginTop: 20, alignItems: 'center' }}>
            <Text style={[globalStyles.cardLabel, { color: colors.success }]}>Simulation Result</Text>
            <Text style={{ color: colors.success, fontSize: 36, fontWeight: '300', marginTop: 8 }}>+${result.gain}</Text>
            <Text style={{ color: colors.textPrimary, fontSize: 18, fontWeight: '600', marginTop: 4 }}>New Value: ${result.newVal}</Text>
            <Text style={[globalStyles.cardCaption, { marginTop: 6, textAlign: 'center' }]}>A {result.percent}% surge would grow your portfolio by ${result.gain}</Text>
          </GlassCard>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
