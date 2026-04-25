import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

export default function Onboarding2Screen({ navigation }) {
  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <TouchableOpacity style={s.skip} onPress={() => navigation.navigate('Login')}>
        <Text style={s.skipTxt}>Skip</Text>
      </TouchableOpacity>
      <View style={s.illustration}>
        <Ionicons name="shield-half" size={90} color={colors.danger} />
        <View style={[s.ring, { borderColor: colors.dangerDim }]} />
      </View>
      <View style={s.content}>
        <View style={s.tagRow}><Text style={[s.tag, { color: colors.danger }]}>SCREEN 2 OF 3</Text></View>
        <Text style={s.title}>Real-Time{'\n'}Fraud AI Detection</Text>
        <Text style={s.desc}>Unlike Robinhood or Fidelity, our Fraud Detection model scores every transaction instantly — analysing amount, account age, and international status with XAI breakdown.</Text>
      </View>
      <View style={s.dots}>
        {[0,1,2].map(i => <View key={i} style={[s.dot, i===1 && s.dotActive]} />)}
      </View>
      <TouchableOpacity style={[s.nextBtn, { backgroundColor: colors.danger }]} onPress={() => navigation.navigate('Onboarding3')}>
        <Text style={s.nextTxt}>Next</Text>
        <Ionicons name="arrow-forward" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', paddingTop: 60, paddingBottom: 40, paddingHorizontal: 30 },
  skip: { alignSelf: 'flex-end', padding: 8 },
  skipTxt: { color: colors.textMuted, fontSize: 15 },
  illustration: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  ring: { position: 'absolute', width: 180, height: 180, borderRadius: 90, borderWidth: 1, borderColor: colors.dangerDim },
  content: { width: '100%', marginBottom: 30 },
  tagRow: { marginBottom: 12 },
  tag: { fontSize: 11, fontWeight: '700', letterSpacing: 1.5 },
  title: { color: colors.textPrimary, fontSize: 32, fontWeight: '800', lineHeight: 40, marginBottom: 16 },
  desc: { color: colors.textSecondary, fontSize: 15, lineHeight: 24 },
  dots: { flexDirection: 'row', gap: 8, marginBottom: 24 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.textMuted },
  dotActive: { backgroundColor: colors.danger, width: 24 },
  nextBtn: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 32, paddingVertical: 16, borderRadius: 14, gap: 10, width: '100%', justifyContent: 'center' },
  nextTxt: { color: '#fff', fontSize: 16, fontWeight: '800' },
});
