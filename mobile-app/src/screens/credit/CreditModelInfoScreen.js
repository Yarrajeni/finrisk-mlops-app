import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import GlassCard from '../../components/GlassCard';
import { COLORS } from '../../theme/colors';
import { commonStyles } from '../../theme/styles';
import { Ionicons } from '@expo/vector-icons';

export default function CreditModelInfoScreen() {
  return (
    <SafeAreaView style={commonStyles.container}>
      <ScreenHeader title="Model Architecture" showBack />
      <ScrollView contentContainerStyle={commonStyles.scrollContent}>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Ionicons name="hardware-chip-outline" size={80} color={COLORS.primary} />
          <Text style={[commonStyles.sectionTitle, {textAlign: 'center', marginTop: 10}]}>Random Forest Classifier</Text>
        </View>

        <GlassCard>
           <Text style={commonStyles.cardHeader}>Training Dataset</Text>
           <Text style={{color: '#FFF', fontSize: 16}}>50,000+ Synthetic Credit Records</Text>
           <Text style={[commonStyles.cardCaption, {marginTop: 5}]}>Balanced for Debt-to-Income and Score factors.</Text>
        </GlassCard>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
           <View style={[commonStyles.glassCard, {width: '48%', alignItems: 'center'}]}>
              <Text style={commonStyles.cardHeader}>Accuracy</Text>
              <Text style={{color: COLORS.primary, fontSize: 24, fontWeight: 'bold'}}>98.2%</Text>
           </View>
           <View style={[commonStyles.glassCard, {width: '48%', alignItems: 'center'}]}>
              <Text style={commonStyles.cardHeader}>Latency</Text>
              <Text style={{color: COLORS.secondary, fontSize: 24, fontWeight: 'bold'}}>120ms</Text>
           </View>
        </View>

        <Text style={commonStyles.sectionTitle}>Hyperparameters</Text>
        <View style={commonStyles.glassCard}>
           <Text style={{color: '#FFF'}}>n_estimators: 100</Text>
           <Text style={{color: '#FFF', marginTop: 5}}>max_depth: 10</Text>
           <Text style={{color: '#FFF', marginTop: 5}}>random_state: 42</Text>
        </View>

        <View style={[commonStyles.glassCard, {marginTop: 20}]}>
           <Text style={commonStyles.cardCaption}>
             The model is automatically retrained every 24 hours via the MLOps pipeline if significant data drift is detected.
           </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
