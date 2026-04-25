import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function BuySellSimulatorScreen({ navigation }) {
  const [mode, setMode] = useState('BUY');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);
  const BTC_PRICE = 67412.5;
  const FEE = 0.001;

  const simulate = () => {
    const usd = parseFloat(amount) || 0;
    const btc = usd / BTC_PRICE;
    const fee = usd * FEE;
    const net = mode === 'BUY' ? btc : usd - fee;
    setResult({ btc: btc.toFixed(6), fee: fee.toFixed(2), net: net.toFixed(mode === 'BUY' ? 6 : 2), usd });
  };

  const modeColor = mode === 'BUY' ? colors.success : colors.danger;

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Buy / Sell Simulator" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={modeColor}>
          <Text style={globalStyles.cardLabel}>BTC / USDT — Market Price</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 32, fontWeight: '300' }}>₹67,412.50</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 4 }]}>0.1% fee · Simulated — no real trades</Text>
        </GlassCard>

        <View style={{ flexDirection: 'row', gap: 12, marginBottom: 24 }}>
          {['BUY', 'SELL'].map(m => (
            <TouchableOpacity key={m} onPress={() => { setMode(m); setResult(null); }}
              style={{ flex: 1, padding: 14, borderRadius: 14, backgroundColor: mode === m ? (m === 'BUY' ? colors.success : colors.danger) : colors.surface, borderWidth: 1, borderColor: m === 'BUY' ? colors.success : colors.danger, alignItems: 'center' }}>
              <Text style={{ color: mode === m ? '#000' : colors.textSecondary, fontWeight: '800', fontSize: 16 }}>{m}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={[globalStyles.cardLabel, { marginBottom: 8 }]}>Amount in USD</Text>
        <TextInput style={globalStyles.input} value={amount} onChangeText={setAmount} keyboardType="numeric" placeholder="e.g. 500" placeholderTextColor={colors.textMuted} />

        <TouchableOpacity style={[globalStyles.primaryButton, { backgroundColor: modeColor }]} onPress={simulate}>
          <Text style={globalStyles.primaryButtonText}>Simulate {mode}</Text>
        </TouchableOpacity>

        {result && (
          <GlassCard borderColor={modeColor} style={{ marginTop: 20 }}>
            <Text style={[globalStyles.cardLabel, { color: modeColor }]}>Order Preview</Text>
            {mode === 'BUY' ? (
              <>
                <Text style={{ color: colors.textPrimary, fontSize: 22, fontWeight: '700', marginTop: 8 }}>You'd receive: {result.btc} BTC</Text>
                <Text style={globalStyles.cardCaption}>For ${result.usd} · Fee: ${result.fee}</Text>
              </>
            ) : (
              <>
                <Text style={{ color: colors.textPrimary, fontSize: 22, fontWeight: '700', marginTop: 8 }}>You'd receive: ${result.net}</Text>
                <Text style={globalStyles.cardCaption}>Fee deducted: ${result.fee}</Text>
              </>
            )}
          </GlassCard>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
