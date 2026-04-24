import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Switch } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function AccessibilityScreen({ navigation }) {
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Accessibility" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Accessibility</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>User Experience</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Customize the app to better suit your visual and interactive needs.</Text>
        </GlassCard>

        <View style={{ marginTop: 20 }}>
          {[
            { label: 'Large Text', sub: 'Increase font size across the app', val: largeText, set: setLargeText },
            { label: 'High Contrast', sub: 'Increase contrast for better visibility', val: highContrast, set: setHighContrast },
            { label: 'Screen Reader Support', sub: 'Optimize UI for screen reading tools', val: screenReader, set: setScreenReader },
            { label: 'Reduce Motion', sub: 'Disable complex UI animations', val: reduceMotion, set: setReduceMotion },
          ].map((item, i) => (
            <GlassCard key={i} style={{ marginBottom: 12 }}>
              <View style={globalStyles.row}>
                <View style={{ flex: 1, marginRight: 10 }}>
                  <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '600' }}>{item.label}</Text>
                  <Text style={[globalStyles.cardCaption, { fontSize: 12, marginTop: 2 }]}>{item.sub}</Text>
                </View>
                <Switch 
                  value={item.val} 
                  onValueChange={item.set} 
                  trackColor={{ false: colors.border, true: colors.primary + '80' }}
                  thumbColor={item.val ? colors.primary : colors.textMuted}
                />
              </View>
            </GlassCard>
          ))}
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.sectionTitle}>Haptic Feedback</Text>
          <GlassCard>
            <View style={globalStyles.row}>
              <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '600' }}>Haptics</Text>
              <Switch value={true} trackColor={{ false: colors.border, true: colors.primary + '80' }} />
            </View>
            <Text style={[globalStyles.cardCaption, { marginTop: 4 }]}>Vibrate on success, error, and navigation events.</Text>
          </GlassCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
