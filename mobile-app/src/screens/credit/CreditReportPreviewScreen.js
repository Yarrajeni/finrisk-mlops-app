import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import GlassCard from '../../components/GlassCard';
import { COLORS } from '../../theme/colors';
import { commonStyles } from '../../theme/styles';
import { Ionicons } from '@expo/vector-icons';

export default function CreditReportPreviewScreen() {
  return (
    <SafeAreaView style={commonStyles.container}>
      <ScreenHeader title="Report Preview" showBack />
      <ScrollView contentContainerStyle={commonStyles.scrollContent}>
        <View style={styles.reportSheet}>
           <View style={styles.reportHeader}>
              <Ionicons name="shield-checkmark" size={40} color="#000" />
              <View>
                 <Text style={styles.reportTitle}>FinRisk AI Report</Text>
                 <Text style={styles.reportMeta}>Generated: {new Date().toLocaleDateString()}</Text>
              </View>
           </View>

           <View style={styles.divider} />

           <Text style={styles.sectionHeading}>Executive Summary</Text>
           <Text style={styles.bodyText}>
              Applicant shows a high probability of credit default based on current market volatility and debt-to-income ratio. Immediate review recommended.
           </Text>

           <View style={styles.statBox}>
              <Text style={styles.statValue}>72 / 100</Text>
              <Text style={styles.statLabel}>AGGREGATE RISK SCORE</Text>
           </View>

           <Text style={styles.sectionHeading}>Risk Factors</Text>
           <Text style={styles.bodyText}>• Low Credit Score Correlation</Text>
           <Text style={styles.bodyText}>• High Debt Exposure</Text>
           <Text style={styles.bodyText}>• Market Sector Instability</Text>
        </View>

        <TouchableOpacity style={[commonStyles.submitButton, {marginTop: 30}]}>
           <Ionicons name="download-outline" size={24} color="#000" style={{marginRight: 10}} />
           <Text style={commonStyles.submitButtonText}>Download PDF</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[commonStyles.submitButton, {marginTop: 15, backgroundColor: '#2E2E3E'}]}>
           <Text style={[commonStyles.submitButtonText, {color: '#FFF'}]}>Share Report</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  reportSheet: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 24,
    minHeight: 400,
  },
  reportHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  reportTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  reportMeta: {
    color: '#666',
    fontSize: 12,
    marginLeft: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 15,
  },
  sectionHeading: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  bodyText: {
    color: '#444',
    fontSize: 14,
    lineHeight: 20,
  },
  statBox: {
    backgroundColor: '#F8F9FA',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  statValue: {
    color: COLORS.error,
    fontSize: 32,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#666',
    fontSize: 10,
    marginTop: 5,
  }
});
