import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function AboutScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="About the App" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <View style={{ alignItems: 'center', marginVertical: 30 }}>
          <View style={{ width: 100, height: 100, borderRadius: 25, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#000', fontSize: 40, fontWeight: '900' }}>FR</Text>
          </View>
          <Text style={{ color: colors.textPrimary, fontSize: 26, fontWeight: '900', marginTop: 15 }}>FinRisk AI</Text>
          <Text style={{ color: colors.primary, fontWeight: '700', fontSize: 14 }}>Version 1.0.0</Text>
        </View>

        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Overview</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 16, lineHeight: 24 }}>
            FinRisk AI is an advanced financial risk management mobile application integrated with Explainable AI (XAI). It provides real-time credit risk prediction, fraud detection, and algorithmic trading signals.
          </Text>
        </GlassCard>

        <View style={{ marginTop: 25 }}>
          <Text style={globalStyles.sectionTitle}>Development</Text>
          <Text style={globalStyles.cardCaption}>
            Developed as a Final Year Project (FYP) to demonstrate the application of Machine Learning in the financial sector.
          </Text>

          <Text style={[globalStyles.sectionTitle, { marginTop: 20 }]}>Technology Stack</Text>
          {[
            { label: 'Frontend', val: 'React Native, Expo' },
            { label: 'Backend', val: 'FastAPI, Python' },
            { label: 'ML Models', val: 'Random Forest, Scikit-Learn' },
            { label: 'Database', val: 'SQLite' },
            { label: 'Deployment', val: 'Render, GitHub Actions' },
          ].map((item, i) => (
            <View key={i} style={[globalStyles.row, { paddingVertical: 12 }]}>
              <Text style={{ color: colors.textSecondary, fontWeight: '600' }}>{item.label}</Text>
              <Text style={{ color: colors.textPrimary, fontWeight: '700' }}>{item.val}</Text>
            </View>
          ))}
        </View>

        <View style={{ marginTop: 25 }}>
          <Text style={globalStyles.sectionTitle}>Developer</Text>
          <GlassCard>
            <Text style={{ color: colors.textPrimary, fontWeight: '800', fontSize: 16 }}>Bablu Kumar</Text>
            <Text style={[globalStyles.cardCaption, { marginTop: 4 }]}>AI & Mobile Application Developer</Text>
          </GlassCard>
        </View>

        <Text style={[globalStyles.cardCaption, { textAlign: 'center', marginTop: 30, marginBottom: 20 }]}>
          © 2026 FinRisk AI. All Rights Reserved.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
