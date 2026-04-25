import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function FraudResultScreen({ navigation, route }) {
  const score = route?.params?.score ?? 72;
  const riskLevel = score >= 70 ? 'HIGH' : score >= 40 ? 'MEDIUM' : 'LOW';
  const riskColor = score >= 70 ? colors.danger : score >= 40 ? colors.warning : colors.success;

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Fraud Result" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={riskColor} style={{ alignItems: 'center', marginBottom: 24 }}>
          <View style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: riskColor + '22', borderWidth: 3, borderColor: riskColor, alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <Text style={{ color: riskColor, fontSize: 36, fontWeight: '800' }}>{score}</Text>
          </View>
          <Text style={{ color: riskColor, fontSize: 22, fontWeight: '800', letterSpacing: 2, textTransform: 'uppercase' }}>{riskLevel} RISK</Text>
          <Text style={[globalStyles.sectionSubtitle, { textAlign: 'center', marginTop: 8 }]}>Fraud probability score based on 18 transaction features</Text>
        </GlassCard>

        <Text style={globalStyles.sectionTitle}>Risk Factors</Text>
        {[
          { label: 'Transaction Velocity', value: 'High', icon: 'speedometer', color: colors.danger },
          { label: 'Geographic Anomaly', value: 'Detected', icon: 'location', color: colors.danger },
          { label: 'Device Fingerprint', value: 'New Device', icon: 'phone-portrait', color: colors.warning },
          { label: 'Amount Pattern', value: 'Unusual', icon: 'trending-up', color: colors.warning },
        ].map((item, i) => (
          <GlassCard key={i} style={{ marginBottom: 12 }}>
            <View style={globalStyles.row}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Ionicons name={item.icon} size={22} color={item.color} />
                <Text style={{ color: colors.textPrimary, fontSize: 15, fontWeight: '600' }}>{item.label}</Text>
              </View>
              <View style={[globalStyles.tag, { backgroundColor: item.color + '22' }]}>
                <Text style={[globalStyles.tagText, { color: item.color }]}>{item.value}</Text>
              </View>
            </View>
          </GlassCard>
        ))}

        <TouchableOpacity style={[globalStyles.primaryButton, { backgroundColor: colors.danger, marginTop: 8 }]} onPress={() => navigation.navigate('FraudXAI')}>
          <Ionicons name="analytics" size={20} color="#000" style={{ marginRight: 8 }} />
          <Text style={globalStyles.primaryButtonText}>View XAI Breakdown</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[globalStyles.primaryButton, { marginTop: 12, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border }]} onPress={() => navigation.navigate('FraudHome')}>
          <Text style={{ color: colors.textPrimary, fontWeight: '700' }}>Back to Dashboard</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
