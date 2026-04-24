import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

export default function Onboarding3Screen({ navigation }) {
  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <View style={s.illustration}>
        <Ionicons name="pulse" size={90} color={colors.warning} />
        <View style={[s.ring, { borderColor: colors.warningDim }]} />
      </View>
      <View style={s.content}>
        <View style={s.tagRow}><Text style={[s.tag, { color: colors.warning }]}>SCREEN 3 OF 3</Text></View>
        <Text style={s.title}>Algorithmic{'\n'}Trading Signals</Text>
        <Text style={s.desc}>Live BTC-USD price data from Yahoo Finance drives our Moving Average Crossover model — generating real-time STRONG BUY, HOLD, or CLAIM PROFIT signals with push alerts.</Text>
      </View>
      <View style={s.dots}>
        {[0,1,2].map(i => <View key={i} style={[s.dot, i===2 && s.dotActive]} />)}
      </View>
      <TouchableOpacity style={[s.nextBtn, { backgroundColor: colors.warning }]} onPress={() => navigation.navigate('Login')}>
        <Text style={[s.nextTxt, { color: '#000' }]}>Get Started</Text>
        <Ionicons name="rocket" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', paddingTop: 60, paddingBottom: 40, paddingHorizontal: 30 },
  illustration: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  ring: { position: 'absolute', width: 180, height: 180, borderRadius: 90, borderWidth: 1 },
  content: { width: '100%', marginBottom: 30 },
  tagRow: { marginBottom: 12 },
  tag: { fontSize: 11, fontWeight: '700', letterSpacing: 1.5 },
  title: { color: colors.textPrimary, fontSize: 32, fontWeight: '800', lineHeight: 40, marginBottom: 16 },
  desc: { color: colors.textSecondary, fontSize: 15, lineHeight: 24 },
  dots: { flexDirection: 'row', gap: 8, marginBottom: 24 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.textMuted },
  dotActive: { backgroundColor: colors.warning, width: 24 },
  nextBtn: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 32, paddingVertical: 16, borderRadius: 14, gap: 10, width: '100%', justifyContent: 'center' },
  nextTxt: { fontSize: 16, fontWeight: '800' },
});
