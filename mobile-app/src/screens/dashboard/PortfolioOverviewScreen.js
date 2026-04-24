import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import GlassCard from '../../components/GlassCard';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import { Ionicons } from '@expo/vector-icons';

export default function PortfolioOverviewScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Portfolio Overview" navigation={navigation} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard>
          <Text style={globalStyles.cardHeader}>Total Portfolio Value</Text>
          <Text style={globalStyles.cardValue}>₹1,240,500</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="trending-up" size={20} color={colors.primary} />
            <Text style={{color: colors.primary, marginLeft: 5, fontSize: 16}}>+12.5% this month</Text>
          </View>
        </GlassCard>

        <Text style={globalStyles.sectionTitle}>Asset Allocation</Text>
        <View style={globalStyles.glassCard}>
           <View style={globalStyles.row}>
             <Text style={{color: '#FFF', fontSize: 18}}>Stocks</Text>
             <Text style={{color: colors.primary, fontSize: 18, fontWeight: 'bold'}}>45%</Text>
           </View>
           <View style={[globalStyles.barContainer, {marginTop: 10}]}><View style={[globalStyles.barFill, {width: '45%', backgroundColor: colors.primary}]} /></View>
        </View>

        <View style={[globalStyles.glassCard, {marginTop: 10}]}>
           <View style={globalStyles.row}>
             <Text style={{color: '#FFF', fontSize: 18}}>Crypto</Text>
             <Text style={{color: colors.warning, fontSize: 18, fontWeight: 'bold'}}>30%</Text>
           </View>
           <View style={[globalStyles.barContainer, {marginTop: 10}]}><View style={[globalStyles.barFill, {width: '30%', backgroundColor: colors.warning}]} /></View>
        </View>

        <View style={[globalStyles.glassCard, {marginTop: 10}]}>
           <View style={globalStyles.row}>
             <Text style={{color: '#FFF', fontSize: 18}}>Bonds</Text>
             <Text style={{color: colors.secondary, fontSize: 18, fontWeight: 'bold'}}>25%</Text>
           </View>
           <View style={[globalStyles.barContainer, {marginTop: 10}]}><View style={[globalStyles.barFill, {width: '25%', backgroundColor: colors.secondary}]} /></View>
        </View>

        <Text style={[globalStyles.sectionTitle, {marginTop: 20}]}>Risk Assessment</Text>
        <View style={[globalStyles.glassCard, {borderColor: colors.primary}]}>
          <Text style={globalStyles.cardCaption}>
            Your portfolio is currently diversified across high-growth assets and stable bonds. AI models suggest maintaining current allocation to mitigate market volatility.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
