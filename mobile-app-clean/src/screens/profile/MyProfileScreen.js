import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function MyProfileScreen({ navigation }) {
  const options = [
    { label: 'Payment Methods & Banks', icon: 'card', route: 'PaymentMethods' },
    { label: 'Edit Profile', icon: 'create', route: 'EditProfile' },
    { label: 'Change Password', icon: 'key', route: 'ChangePassword' },
    { label: 'Session History', icon: 'time', route: 'SessionHistory' },
    { label: 'Biometric Settings', icon: 'finger-print', route: 'BiometricSettings' },
  ];

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="My Profile" showMenu />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary} style={{ alignItems: 'center', paddingVertical: 28 }}>
          <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: colors.primary + '22', borderWidth: 2, borderColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
            <Ionicons name="person" size={40} color={colors.primary} />
          </View>
          <Text style={{ color: colors.textPrimary, fontSize: 22, fontWeight: '800' }}>Bablu Kumar</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 4 }]}>FYP — FinRisk AI Developer</Text>
          <View style={[globalStyles.tag, { backgroundColor: colors.success + '22', marginTop: 10 }]}>
            <Text style={[globalStyles.tagText, { color: colors.success }]}>Admin</Text>
          </View>
        </GlassCard>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          {[{ l: 'Scans', v: '284' }, { l: 'Assessments', v: '47' }, { l: 'Trades', v: '6' }].map((s, i) => (
            <GlassCard key={i} style={{ width: '31%', alignItems: 'center', padding: 16, marginBottom: 0 }}>
              <Text style={{ color: colors.primary, fontSize: 22, fontWeight: '800' }}>{s.v}</Text>
              <Text style={[globalStyles.cardLabel, { marginBottom: 0, marginTop: 4 }]}>{s.l}</Text>
            </GlassCard>
          ))}
        </View>

        {options.map((o, i) => (
          <TouchableOpacity key={i} onPress={() => navigation.navigate(o.route)}>
            <GlassCard style={{ marginBottom: 10 }}>
              <View style={globalStyles.row}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                  <Ionicons name={o.icon} size={22} color={colors.primary} />
                  <Text style={{ color: colors.textPrimary, fontWeight: '600', fontSize: 15 }}>{o.label}</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
              </View>
            </GlassCard>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
