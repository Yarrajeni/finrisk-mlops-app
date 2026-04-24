import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function BiometricSettingsScreen({ navigation }) {
  const [faceId, setFaceId] = useState(false);
  const [fingerprint, setFingerprint] = useState(true);
  const [autoLock, setAutoLock] = useState(true);

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Biometric Settings" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary} style={{ alignItems: 'center', paddingVertical: 28 }}>
          <Ionicons name="finger-print" size={60} color={colors.primary} />
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800', marginTop: 14 }}>Biometric Authentication</Text>
          <Text style={[globalStyles.cardCaption, { textAlign: 'center', marginTop: 8 }]}>Use biometrics for fast, secure app access without entering your password.</Text>
        </GlassCard>

        {[
          { label: 'Fingerprint Login', sub: 'Unlock app with fingerprint', val: fingerprint, set: setFingerprint, icon: 'finger-print' },
          { label: 'Face ID', sub: 'Unlock app with face recognition', val: faceId, set: setFaceId, icon: 'scan' },
          { label: 'Auto-Lock (5 min)', sub: 'Lock app after 5 min of inactivity', val: autoLock, set: setAutoLock, icon: 'lock-closed' },
        ].map((item, i) => (
          <GlassCard key={i} style={{ marginBottom: 10 }}>
            <View style={globalStyles.row}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 }}>
                <Ionicons name={item.icon} size={22} color={colors.primary} />
                <View style={{ flex: 1 }}>
                  <Text style={{ color: colors.textPrimary, fontWeight: '600', fontSize: 15 }}>{item.label}</Text>
                  <Text style={[globalStyles.cardCaption, { marginTop: 2 }]}>{item.sub}</Text>
                </View>
              </View>
              <Switch value={item.val} onValueChange={item.set} trackColor={{ false: '#333', true: colors.primary + '66' }} thumbColor={item.val ? colors.primary : '#666'} />
            </View>
          </GlassCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
