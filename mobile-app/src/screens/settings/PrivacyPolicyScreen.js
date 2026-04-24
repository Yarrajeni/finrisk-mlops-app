import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function PrivacyPolicyScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Privacy Policy" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Legal</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>Privacy Policy</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Last updated: April 22, 2026</Text>
        </GlassCard>

        <View style={{ marginTop: 25 }}>
          <Text style={globalStyles.sectionTitle}>Data Collection</Text>
          <Text style={globalStyles.cardCaption}>
            We value your privacy. FinRisk AI collects minimal data necessary to provide risk assessment and trading signal services. This includes transaction data provided for scanning and basic account information.
          </Text>
          
          <Text style={[globalStyles.sectionTitle, { marginTop: 20 }]}>Data Security</Text>
          <Text style={globalStyles.cardCaption}>
            All sensitive data is encrypted using industry-standard protocols (AES-256). We utilize a secure SQLite database on your device and secure HTTPS connections for all API communications.
          </Text>

          <Text style={[globalStyles.sectionTitle, { marginTop: 20 }]}>Third-Party Sharing</Text>
          <Text style={globalStyles.cardCaption}>
            We do not sell your personal data to third parties. Data processed by our ML models is anonymized and used solely for generating risk scores and performance metrics.
          </Text>

          <Text style={[globalStyles.sectionTitle, { marginTop: 20 }]}>Your Rights</Text>
          <Text style={globalStyles.cardCaption}>
            You have the right to access, export, or delete your data at any time through the "Data & Storage" section of the settings menu.
          </Text>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
