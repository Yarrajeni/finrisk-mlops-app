import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import GlassCard from '../../components/GlassCard';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';

export default function RiskScoreGaugeScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Risk Score Gauge" navigation={navigation} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <View style={styles.gaugeContainer}>
           <View style={[styles.gaugeBackground, { borderTopColor: colors.danger, borderRightColor: colors.warning, borderBottomColor: colors.primary, borderLeftColor: colors.primary }]}>
              <View style={[styles.gaugeValue, {transform: [{rotate: '45deg'}]}]} />
           </View>
           <Text style={styles.gaugeScore}>72</Text>
           <Text style={[styles.gaugeLabel, { color: colors.textSecondary }]}>Moderate Risk</Text>
        </View>

        <GlassCard>
          <Text style={globalStyles.cardHeader}>Analysis Breakdown</Text>
          <View style={styles.statItem}>
             <Text style={styles.statLabel}>Market Volatility</Text>
             <Text style={[styles.statValue, {color: colors.danger}]}>High</Text>
          </View>
          <View style={styles.statItem}>
             <Text style={styles.statLabel}>Credit Stability</Text>
             <Text style={[styles.statValue, {color: colors.primary}]}>Stable</Text>
          </View>
          <View style={styles.statItem}>
             <Text style={styles.statLabel}>Fraud Probability</Text>
             <Text style={[styles.statValue, {color: colors.warning}]}>Medium</Text>
          </View>
        </GlassCard>

        <Text style={globalStyles.sectionTitle}>Model Confidence</Text>
        <GlassCard>
           <Text style={globalStyles.cardCaption}>
             The current risk score is calculated using 12 separate ML models with a combined confidence score of 94.2%.
           </Text>
        </GlassCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gaugeContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  gaugeBackground: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 15,
    borderColor: '#1F1F2E',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '-45deg'}],
  },
  gaugeValue: {
    width: 10,
    height: 90,
    backgroundColor: '#FFF',
    borderRadius: 5,
    position: 'absolute',
    top: 5,
  },
  gaugeScore: {
    position: 'absolute',
    color: '#FFF',
    fontSize: 60,
    fontWeight: 'bold',
    top: 60,
  },
  gaugeLabel: {
    position: 'absolute',
    fontSize: 18,
    top: 130,
  },
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  statLabel: {
    color: '#A0A0C0',
    fontSize: 16,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});
