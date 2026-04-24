import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

export default function Onboarding1Screen({ navigation }) {
  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <TouchableOpacity style={s.skip} onPress={() => navigation.navigate('Login')}>
        <Text style={s.skipTxt}>Skip</Text>
      </TouchableOpacity>
      <View style={s.illustration}>
        <Ionicons name="card" size={90} color={colors.primary} />
        <View style={s.ring} />
      </View>
      <View style={s.content}>
        <View style={s.tagRow}><Text style={s.tag}>SCREEN 1 OF 3</Text></View>
        <Text style={s.title}>AI-Powered{'\n'}Credit Risk Intelligence</Text>
        <Text style={s.desc}>Our Random Forest model analyses Income, Credit Score, Debt-to-Income Ratio and Loan Amount to generate a precise default risk score — with full Explainable AI reasoning.</Text>
      </View>
      <View style={s.dots}>
        {[0,1,2].map(i => <View key={i} style={[s.dot, i===0 && s.dotActive]} />)}
      </View>
      <TouchableOpacity style={s.nextBtn} onPress={() => navigation.navigate('Onboarding2')}>
        <Text style={s.nextTxt}>Next</Text>
        <Ionicons name="arrow-forward" size={20} color={colors.textInverse} />
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', paddingTop: 60, paddingBottom: 40, paddingHorizontal: 30 },
  skip: { alignSelf: 'flex-end', padding: 8 },
  skipTxt: { color: colors.textMuted, fontSize: 15 },
  illustration: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  ring: { position: 'absolute', width: 180, height: 180, borderRadius: 90, borderWidth: 1, borderColor: colors.primaryDim },
  content: { width: '100%', marginBottom: 30 },
  tagRow: { marginBottom: 12 },
  tag: { color: colors.primary, fontSize: 11, fontWeight: '700', letterSpacing: 1.5 },
  title: { color: colors.textPrimary, fontSize: 32, fontWeight: '800', lineHeight: 40, marginBottom: 16 },
  desc: { color: colors.textSecondary, fontSize: 15, lineHeight: 24 },
  dots: { flexDirection: 'row', gap: 8, marginBottom: 24 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.textMuted },
  dotActive: { backgroundColor: colors.primary, width: 24 },
  nextBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.primary, paddingHorizontal: 32, paddingVertical: 16, borderRadius: 14, gap: 10, width: '100%', justifyContent: 'center' },
  nextTxt: { color: colors.textInverse, fontSize: 16, fontWeight: '800' },
});
