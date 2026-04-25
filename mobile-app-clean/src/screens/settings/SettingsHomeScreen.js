import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const settingsOptions = [
  { label: 'App Appearance', icon: 'color-palette', route: 'AppAppearance' },
  { label: 'API Connection', icon: 'globe', route: 'APIConnection' },
  { label: 'Data & Storage', icon: 'server', route: 'DataStorage' },
  { label: 'Language & Region', icon: 'language', route: 'LanguageRegion' },
  { label: 'Accessibility', icon: 'body', route: 'Accessibility' },
  { label: 'Privacy Policy', icon: 'shield-checkmark', route: 'PrivacyPolicy' },
  { label: 'Terms of Service', icon: 'document-text', route: 'TermsOfService' },
];

export default function SettingsHomeScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Settings" showMenu />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Configuration</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>App Settings</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Customize your experience and manage application data.</Text>
        </GlassCard>

        <View style={{ marginTop: 20 }}>
          {settingsOptions.map((item, i) => (
            <TouchableOpacity key={i} onPress={() => navigation.navigate(item.route)}>
              <GlassCard style={{ marginBottom: 12 }}>
                <View style={globalStyles.row}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: colors.primary + '15', alignItems: 'center', justifyContent: 'center' }}>
                      <Ionicons name={item.icon} size={22} color={colors.primary} />
                    </View>
                    <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '600' }}>{item.label}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
                </View>
              </GlassCard>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity 
          style={[globalStyles.dangerButton, { marginTop: 10, opacity: 0.8 }]}
          onPress={() => {/* Logout logic */}}
        >
          <Ionicons name="log-out" size={20} color="#FFF" style={{ marginRight: 8 }} />
          <Text style={{ color: '#FFF', fontWeight: '800' }}>LOGOUT</Text>
        </TouchableOpacity>

        <Text style={[globalStyles.cardCaption, { textAlign: 'center', marginTop: 30, color: colors.textMuted }]}>
          FinRisk AI v1.0.0 (Production)
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
