import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function TermsOfServiceScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Terms of Service" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Legal</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>Terms of Service</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Last updated: April 22, 2026</Text>
        </GlassCard>

        <View style={{ marginTop: 25 }}>
          <Text style={globalStyles.sectionTitle}>1. Acceptance of Terms</Text>
          <Text style={globalStyles.cardCaption}>
            By accessing or using FinRisk AI, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </Text>
          
          <Text style={[globalStyles.sectionTitle, { marginTop: 20 }]}>2. Use License</Text>
          <Text style={globalStyles.cardCaption}>
            Permission is granted to temporarily use the application for personal, non-commercial assessment and educational purposes only.
          </Text>

          <Text style={[globalStyles.sectionTitle, { marginTop: 20 }]}>3. Disclaimer</Text>
          <Text style={globalStyles.cardCaption}>
            The risk scores and trading signals provided by this application are for informational purposes only. FinRisk AI does not guarantee accuracy and is not responsible for financial decisions made based on its output.
          </Text>

          <Text style={[globalStyles.sectionTitle, { marginTop: 20 }]}>4. Limitations</Text>
          <Text style={globalStyles.cardCaption}>
            In no event shall FinRisk AI or its developers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the application.
          </Text>

          <Text style={[globalStyles.sectionTitle, { marginTop: 20 }]}>5. Governing Law</Text>
          <Text style={globalStyles.cardCaption}>
            These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which the developer resides.
          </Text>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
