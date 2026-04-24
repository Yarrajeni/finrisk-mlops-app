import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import GlassCard from '../../components/GlassCard';
import { COLORS } from '../../theme/colors';
import { commonStyles } from '../../theme/styles';

export default function GlobalRiskHeatmapScreen() {
  return (
    <SafeAreaView style={commonStyles.container}>
      <ScreenHeader title="Global Risk Heatmap" showBack />
      <ScrollView contentContainerStyle={commonStyles.scrollContent}>
        <GlassCard>
          <Text style={commonStyles.cardHeader}>Risk Concentration by Region</Text>
          <View style={styles.mapMockup}>
             {/* Mocking a heatmap with colored boxes */}
             <View style={[styles.region, {backgroundColor: COLORS.error, top: '20%', left: '10%'}]}><Text style={styles.regionText}>NA</Text></View>
             <View style={[styles.region, {backgroundColor: COLORS.warning, top: '50%', left: '25%'}]}><Text style={styles.regionText}>SA</Text></View>
             <View style={[styles.region, {backgroundColor: COLORS.primary, top: '15%', left: '45%'}]}><Text style={styles.regionText}>EU</Text></View>
             <View style={[styles.region, {backgroundColor: COLORS.error, top: '40%', left: '65%'}]}><Text style={styles.regionText}>AS</Text></View>
             <View style={[styles.region, {backgroundColor: COLORS.primary, top: '70%', left: '75%'}]}><Text style={styles.regionText}>OC</Text></View>
          </View>
          <View style={styles.legend}>
            <View style={styles.legendItem}><View style={[styles.dot, {backgroundColor: COLORS.error}]} /><Text style={styles.legendText}>High Risk</Text></View>
            <View style={styles.legendItem}><View style={[styles.dot, {backgroundColor: COLORS.warning}]} /><Text style={styles.legendText}>Medium Risk</Text></View>
            <View style={styles.legendItem}><View style={[styles.dot, {backgroundColor: COLORS.primary}]} /><Text style={styles.legendText}>Low Risk</Text></View>
          </View>
        </GlassCard>

        <Text style={commonStyles.sectionTitle}>Regional Breakdown</Text>
        <View style={commonStyles.glassCard}>
           <Text style={{color: '#FFF', fontSize: 16}}>North America: 85% Volatility</Text>
           <View style={[commonStyles.barContainer, {marginTop: 10}]}><View style={[commonStyles.barFill, {width: '85%', backgroundColor: COLORS.error}]} /></View>
        </View>
        <View style={[commonStyles.glassCard, {marginTop: 10}]}>
           <Text style={{color: '#FFF', fontSize: 16}}>Asia Pacific: 60% Volatility</Text>
           <View style={[commonStyles.barContainer, {marginTop: 10}]}><View style={[commonStyles.barFill, {width: '60%', backgroundColor: COLORS.warning}]} /></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mapMockup: {
    height: 250,
    backgroundColor: '#161622',
    borderRadius: 12,
    marginVertical: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  region: {
    position: 'absolute',
    width: 50,
    height: 30,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  regionText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  legendText: {
    color: '#A0A0C0',
    fontSize: 12,
  }
});
