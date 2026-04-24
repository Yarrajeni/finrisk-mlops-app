import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Animated, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function GrokScannerScreen({ navigation }) {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);
  const scanAnim = new Animated.Value(0);

  const startScan = () => {
    setScanning(true);
    setResult(null);
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnim, { toValue: 1, duration: 1500, easing: Easing.linear, useNativeDriver: true }),
        Animated.timing(scanAnim, { toValue: 0, duration: 0, useNativeDriver: true })
      ])
    ).start();

    setTimeout(() => {
      setScanning(false);
      scanAnim.stopAnimation();
      setResult({
        wisdom_score: 98,
        insight: "Structural financial integrity confirmed. Systemic risk at 0.02%. The 'Grok' analysis indicates a highly resilient capital structure with optimal liquidity ratios.",
        anomalies: 0,
        verdict: "ULTRA SECURE"
      });
    }, 4500);
  };

  const translateY = scanAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200]
  });

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Grok Intelligence" showMenu />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <View style={globalStyles.row}>
            <View>
              <Text style={globalStyles.cardLabel}>Deep AI Analysis</Text>
              <Text style={{ color: colors.textPrimary, fontSize: 24, fontWeight: '900' }}>Grok Scanner</Text>
            </View>
            <Ionicons name="eye" size={32} color={colors.primary} />
          </View>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>
            Advanced multi-vector intelligence scan using the Grok-1 architecture simulation.
          </Text>
        </GlassCard>

        <View style={{ alignItems: 'center', marginVertical: 30 }}>
          <View style={{ width: 250, height: 250, borderRadius: 125, borderWidth: 2, borderColor: scanning ? colors.primary : '#2E2E3E', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {scanning && (
              <Animated.View style={{ 
                position: 'absolute', top: 0, left: 0, right: 0, height: 4, 
                backgroundColor: colors.primary, 
                transform: [{ translateY }],
                shadowColor: colors.primary, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1, shadowRadius: 10, elevation: 10
              }} />
            )}
            <Ionicons name="analytics" size={80} color={scanning ? colors.primary : colors.textMuted} />
            {scanning && (
              <Text style={{ color: colors.primary, fontWeight: '800', marginTop: 10, letterSpacing: 2 }}>GROKKING...</Text>
            )}
          </View>
        </View>

        {!scanning && !result && (
          <TouchableOpacity style={globalStyles.primaryButton} onPress={startScan}>
            <Ionicons name="scan-outline" size={20} color="#000" style={{ marginRight: 8 }} />
            <Text style={globalStyles.primaryButtonText}>INITIATE DEEP SCAN</Text>
          </TouchableOpacity>
        )}

        {result && (
          <Animated.View>
            <GlassCard borderColor={colors.success}>
              <View style={globalStyles.row}>
                <Text style={{ color: colors.textPrimary, fontSize: 18, fontWeight: '800' }}>Grok Wisdom Score</Text>
                <Text style={{ color: colors.success, fontSize: 28, fontWeight: '900' }}>{result.wisdom_score}%</Text>
              </View>
              <View style={[globalStyles.divider, { marginVertical: 12 }]} />
              <Text style={{ color: colors.textSecondary, fontSize: 14, lineHeight: 22, fontStyle: 'italic' }}>
                "{result.insight}"
              </Text>
            </GlassCard>

            <View style={{ flexDirection: 'row', gap: 10, marginTop: 15 }}>
              <GlassCard style={{ flex: 1, alignItems: 'center' }}>
                <Text style={globalStyles.cardLabel}>Anomalies</Text>
                <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>{result.anomalies}</Text>
              </GlassCard>
              <GlassCard style={{ flex: 1, alignItems: 'center' }} borderColor={colors.success}>
                <Text style={globalStyles.cardLabel}>Verdict</Text>
                <Text style={{ color: colors.success, fontSize: 14, fontWeight: '800' }}>{result.verdict}</Text>
              </GlassCard>
            </View>

            <TouchableOpacity style={[globalStyles.glassCard, { marginTop: 20, alignItems: 'center' }]} onPress={() => setResult(null)}>
              <Text style={{ color: colors.primary, fontWeight: '700' }}>RESET SCANNER</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
