import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const themes = [
  { id: 'dark', label: 'Dark Mode', desc: 'Sleek dark theme for night usage', icon: 'moon' },
  { id: 'amoled', label: 'AMOLED Black', desc: 'Pure black for battery savings', icon: 'tablet-portrait' },
  { id: 'light', label: 'Light Mode', desc: 'Bright theme for daytime usage', icon: 'sunny' },
  { id: 'system', label: 'System Default', desc: 'Follow your device settings', icon: 'settings' },
];

export default function AppAppearanceScreen({ navigation }) {
  const [selected, setSelected] = useState('dark');

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Appearance" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Themes</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>App Appearance</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Choose a theme that best fits your preference.</Text>
        </GlassCard>

        <View style={{ marginTop: 20 }}>
          {themes.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => setSelected(item.id)}>
              <GlassCard 
                style={{ 
                  marginBottom: 12, 
                  borderColor: selected === item.id ? colors.primary : colors.border,
                  borderWidth: selected === item.id ? 2 : 1
                }}
              >
                <View style={globalStyles.row}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <Ionicons name={item.icon} size={24} color={selected === item.id ? colors.primary : colors.textMuted} />
                    <View>
                      <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '600' }}>{item.label}</Text>
                      <Text style={[globalStyles.cardCaption, { fontSize: 12 }]}>{item.desc}</Text>
                    </View>
                  </View>
                  {selected === item.id && (
                    <Ionicons name="checkmark-circle" size={24} color={colors.primary} />
                  )}
                </View>
              </GlassCard>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.sectionTitle}>Visual Effects</Text>
          <GlassCard>
            <View style={globalStyles.row}>
              <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '600' }}>Glassmorphism</Text>
              <Ionicons name="toggle" size={32} color={colors.primary} />
            </View>
            <Text style={[globalStyles.cardCaption, { marginTop: 4 }]}>Enable blur and transparency effects across the UI.</Text>
          </GlassCard>
          <GlassCard>
            <View style={globalStyles.row}>
              <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '600' }}>Animations</Text>
              <Ionicons name="toggle" size={32} color={colors.primary} />
            </View>
            <Text style={[globalStyles.cardCaption, { marginTop: 4 }]}>Enable smooth transitions and micro-animations.</Text>
          </GlassCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
