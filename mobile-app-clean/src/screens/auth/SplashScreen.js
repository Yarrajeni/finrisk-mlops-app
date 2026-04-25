import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { API_URL } from '../../constants/api';

export default function SplashScreen({ navigation }) {
  const pulse = useRef(new Animated.Value(1)).current;
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 1000, useNativeDriver: true }).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1.1, duration: 900, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 900, useNativeDriver: true }),
      ])
    ).start();
    const timer = setTimeout(() => {
      if (navigation && navigation.replace) {
        navigation.replace('Onboarding1');
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, [navigation]);

  const wakeServer = async () => {
    try { await fetch(`${API_URL}/stats`); } catch (_) {}
  };

  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <Animated.View style={{ opacity: fade, alignItems: 'center' }}>
        <Animated.View style={[s.logoWrap, { transform: [{ scale: pulse }] }]}>
          <Ionicons name="shield-checkmark" size={70} color={colors.primary} />
        </Animated.View>
        <Text style={s.title}>FinRisk AI</Text>
        <Text style={s.subtitle}>Enterprise MLOps Pipeline</Text>
        <View style={s.dotRow}>
          {[0,1,2].map(i => <View key={i} style={[s.dot, i===0 && s.dotActive]} />)}
        </View>
        <Text style={s.status}>Initialising AI Models...</Text>
        <TouchableOpacity style={s.wakeBtn} onPress={wakeServer}>
          <Ionicons name="flash" size={16} color={colors.textInverse} />
          <Text style={s.wakeTxt}>Wake Server</Text>
        </TouchableOpacity>
      </Animated.View>
      <Text style={s.version}>v2.0.0 · Powered by RandomForest + FastAPI</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center' },
  logoWrap: { width: 130, height: 130, borderRadius: 65, backgroundColor: colors.primaryDim, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: colors.primary, marginBottom: 28 },
  title: { color: colors.primary, fontSize: 38, fontWeight: '900', letterSpacing: 2 },
  subtitle: { color: colors.textSecondary, fontSize: 15, marginTop: 6, letterSpacing: 0.5 },
  dotRow: { flexDirection: 'row', marginTop: 30, gap: 8 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.textMuted },
  dotActive: { backgroundColor: colors.primary, width: 24 },
  status: { color: colors.textMuted, fontSize: 13, marginTop: 20 },
  wakeBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.primary, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, marginTop: 24, gap: 6 },
  wakeTxt: { color: colors.textInverse, fontWeight: '700', fontSize: 13 },
  version: { position: 'absolute', bottom: 40, color: colors.textMuted, fontSize: 12 },
});
