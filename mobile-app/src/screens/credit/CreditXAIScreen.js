import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import GlassCard from '../../components/GlassCard';
import { COLORS } from '../../theme/colors';
import { commonStyles } from '../../theme/styles';
import { Ionicons } from '@expo/vector-icons';

export default function CreditXAIScreen({ route }) {
  const { explanation } = route.params || { explanation: "No explanation provided." };

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScreenHeader title="XAI Explanation" showBack />
      <ScrollView contentContainerStyle={commonStyles.scrollContent}>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Ionicons name="eye-outline" size={80} color={COLORS.primary} />
          <Text style={[commonStyles.sectionTitle, {textAlign: 'center', marginTop: 10}]}>Model Transparency</Text>
        </View>

        <GlassCard>
          <Text style={commonStyles.cardHeader}>Why this score?</Text>
          <Text style={{color: '#E0E0E0', fontSize: 18, lineHeight: 28, fontStyle: 'italic'}}>
            "{explanation}"
          </Text>
        </GlassCard>

        <Text style={[commonStyles.sectionTitle, {fontSize: 20, marginTop: 30}]}>Feature Importance</Text>
        <FeatureBar label="Credit Score" importance={0.85} color={COLORS.primary} />
        <FeatureBar label="Debt-to-Income" importance={0.65} color={COLORS.warning} />
        <FeatureBar label="Loan Amount" importance={0.45} color={COLORS.secondary} />
        <FeatureBar label="Annual Income" importance={0.30} color={COLORS.accent} />

        <View style={[commonStyles.glassCard, {marginTop: 30, backgroundColor: 'rgba(255, 255, 255, 0.05)'}]}>
           <Text style={commonStyles.cardCaption}>
             This explanation is generated using SHAP (SHapley Additive exPlanations) values to identify which factors contributed most to the final risk score.
           </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const FeatureBar = ({ label, importance, color }) => (
  <View style={{marginVertical: 10}}>
    <View style={commonStyles.row}>
      <Text style={{color: '#FFF', fontSize: 16}}>{label}</Text>
      <Text style={{color: color, fontWeight: 'bold'}}>{(importance * 100).toFixed(0)}%</Text>
    </View>
    <View style={commonStyles.barContainer}>
      <View style={[commonStyles.barFill, {width: `${importance * 100}%`, backgroundColor: color}]} />
    </View>
  </View>
);
