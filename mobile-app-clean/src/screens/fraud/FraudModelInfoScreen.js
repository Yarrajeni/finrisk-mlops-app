import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const stats = [
  { label: 'Accuracy', value: '96.8%', icon: 'checkmark-circle', color: colors.success },
  { label: 'Precision', value: '94.1%', icon: 'analytics', color: colors.primary },
  { label: 'Recall', value: '97.3%', icon: 'refresh-circle', color: colors.purple },
  { label: 'F1 Score', value: '95.7%', icon: 'ribbon', color: colors.warning },
];

export default function FraudModelInfoScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Fraud Model Info" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.danger}>
          <Text style={[globalStyles.cardLabel, { color: colors.danger }]}>Model Architecture</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 22, fontWeight: '800' }}>Random Forest Classifier</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 8 }]}>Trained on IEEE-CIS Fraud Detection dataset with 300 estimators and SMOTE oversampling.</Text>
        </GlassCard>
        <Text style={globalStyles.sectionTitle}>Performance Metrics</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {stats.map((s, i) => (
            <GlassCard key={i} style={{ width: '48%', alignItems: 'center', padding: 20, marginBottom: 12 }}>
              <Ionicons name={s.icon} size={28} color={s.color} />
              <Text style={{ color: s.color, fontSize: 22, fontWeight: '800', marginTop: 8 }}>{s.value}</Text>
              <Text style={[globalStyles.cardLabel, { marginBottom: 0, marginTop: 4 }]}>{s.label}</Text>
            </GlassCard>
          ))}
        </View>
        <GlassCard style={{ marginTop: 8 }}>
          <Text style={{ color: colors.primary, fontWeight: '700', marginBottom: 10 }}>Training Pipeline</Text>
          {['Data Ingestion → train_fraud_model.py', 'SMOTE Oversampling', 'Random Forest (n=300)', 'GitHub Actions CI/CD Auto-Retrain'].map((s, i) => (
            <View key={i} style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: colors.primary }} />
              <Text style={globalStyles.cardCaption}>{s}</Text>
            </View>
          ))}
        </GlassCard>
      </ScrollView>
    </SafeAreaView>
  );
}
