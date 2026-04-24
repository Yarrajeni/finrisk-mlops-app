import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import GlassCard from '../../components/GlassCard';
import { COLORS } from '../../theme/colors';
import { commonStyles } from '../../theme/styles';

export default function CreditSimulatorScreen() {
  const [income, setIncome] = useState('50000');
  const [score, setScore] = useState('700');

  // Simple local simulation logic
  const simulatedRisk = Math.max(0, Math.min(100, 100 - (parseInt(score) / 850 * 100) + (parseInt(income) < 30000 ? 20 : 0))).toFixed(0);

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScreenHeader title="Risk Simulator" showBack />
      <ScrollView contentContainerStyle={commonStyles.scrollContent}>
        <View style={[commonStyles.glassCard, {alignItems: 'center', paddingVertical: 30}]}>
           <Text style={commonStyles.cardHeader}>Simulated Risk Score</Text>
           <Text style={[commonStyles.cardNumber, {color: simulatedRisk > 60 ? COLORS.error : COLORS.primary}]}>
              {simulatedRisk}
           </Text>
           <View style={commonStyles.barContainer}><View style={[commonStyles.barFill, {width: `${simulatedRisk}%`, backgroundColor: simulatedRisk > 60 ? COLORS.error : COLORS.primary}]} /></View>
        </View>

        <Text style={commonStyles.sectionTitle}>Adjust Variables</Text>
        
        <Text style={styles.label}>Annual Income: ${income}</Text>
        <TextInput 
          style={commonStyles.input} 
          keyboardType="numeric" 
          value={income} 
          onChangeText={setIncome} 
        />

        <Text style={styles.label}>Credit Score: {score}</Text>
        <TextInput 
          style={commonStyles.input} 
          keyboardType="numeric" 
          value={score} 
          onChangeText={setScore} 
        />

        <View style={[commonStyles.glassCard, {marginTop: 30}]}>
           <Text style={commonStyles.cardCaption}>
             This is a real-time local simulator. For official AI inference, use the "New Assessment" tool which connects to the cloud-hosted Random Forest model.
           </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  label: {
    color: '#A0A0C0',
    fontSize: 14,
    marginBottom: 8,
    marginTop: 10,
  }
});
