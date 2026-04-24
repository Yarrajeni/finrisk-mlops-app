import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const languages = [
  { id: 'en', label: 'English (US)', flag: '🇺🇸' },
  { id: 'hi', label: 'Hindi (India)', flag: '🇮🇳' },
  { id: 'es', label: 'Spanish', flag: '🇪🇸' },
  { id: 'fr', label: 'French', flag: '🇫🇷' },
  { id: 'de', label: 'German', flag: '🇩🇪' },
];

export default function LanguageRegionScreen({ navigation }) {
  const [selectedLang, setSelectedLang] = useState('en');
  const [selectedRegion, setSelectedRegion] = useState('India');

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Language & Region" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Localization</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>Region & Language</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Set your preferred language and regional format for dates and currency.</Text>
        </GlassCard>

        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.sectionTitle}>App Language</Text>
          {languages.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => setSelectedLang(item.id)}>
              <GlassCard 
                style={{ 
                  marginBottom: 10, 
                  borderColor: selectedLang === item.id ? colors.primary : colors.border,
                  borderWidth: selectedLang === item.id ? 2 : 1
                }}
              >
                <View style={globalStyles.row}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <Text style={{ fontSize: 24 }}>{item.flag}</Text>
                    <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '600' }}>{item.label}</Text>
                  </View>
                  {selectedLang === item.id && (
                    <Ionicons name="checkmark-circle" size={24} color={colors.primary} />
                  )}
                </View>
              </GlassCard>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.sectionTitle}>Regional Format</Text>
          <TouchableOpacity onPress={() => {/* Region picker logic */}}>
            <GlassCard>
              <View style={globalStyles.row}>
                <View>
                  <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '600' }}>Region</Text>
                  <Text style={[globalStyles.cardCaption, { marginTop: 2 }]}>{selectedRegion}</Text>
                </View>
                <Ionicons name="chevron-down" size={20} color={colors.textMuted} />
              </View>
            </GlassCard>
          </TouchableOpacity>

          <GlassCard style={{ marginTop: 12 }}>
            <View style={globalStyles.row}>
              <View>
                <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '600' }}>Currency Format</Text>
                <Text style={[globalStyles.cardCaption, { marginTop: 2 }]}>USD (₹)</Text>
              </View>
              <Ionicons name="chevron-down" size={20} color={colors.textMuted} />
            </View>
          </GlassCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
