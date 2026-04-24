import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import GlassCard from '../../components/GlassCard';
import { COLORS } from '../../theme/colors';
import { commonStyles } from '../../theme/styles';
import RiskBadge from '../../components/RiskBadge';

export default function CreditLogDetailScreen({ route }) {
  const { log } = route.params || { log: {} };

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScreenHeader title="Log Detail" showBack />
      <ScrollView contentContainerStyle={commonStyles.scrollContent}>
        <GlassCard>
           <Text style={commonStyles.cardHeader}>Transaction Timestamp</Text>
           <Text style={{color: '#FFF', fontSize: 18}}>{new Date(log.timestamp).toLocaleString()}</Text>
        </GlassCard>

        <View style={[commonStyles.glassCard, {alignItems: 'center', marginVertical: 10}]}>
           <Text style={commonStyles.cardHeader}>Risk Assessment</Text>
           <Text style={[commonStyles.cardNumber, {color: log.risk_score > 60 ? COLORS.error : COLORS.primary}]}>
              {log.risk_score}
           </Text>
           <RiskBadge score={log.risk_score} />
           <Text style={{color: '#FFF', fontSize: 20, marginTop: 20}}>{log.recommendation}</Text>
        </View>

        <GlassCard>
           <Text style={commonStyles.cardHeader}>XAI Reasoning</Text>
           <Text style={{color: '#E0E0E0', fontSize: 16, lineHeight: 24, fontStyle: 'italic'}}>
              "{log.explanation}"
           </Text>
        </GlassCard>

        <Text style={commonStyles.sectionTitle}>Input Parameters</Text>
        <View style={commonStyles.glassCard}>
           <View style={commonStyles.row}><Text style={{color: '#A0A0C0'}}>Income</Text><Text style={{color: '#FFF'}}>${log.income?.toLocaleString()}</Text></View>
           <View style={[commonStyles.row, {marginTop: 10}]}><Text style={{color: '#A0A0C0'}}>Credit Score</Text><Text style={{color: '#FFF'}}>{log.credit_score}</Text></View>
           <View style={[commonStyles.row, {marginTop: 10}]}><Text style={{color: '#A0A0C0'}}>DTI Ratio</Text><Text style={{color: '#FFF'}}>{log.debt_to_income_ratio}</Text></View>
           <View style={[commonStyles.row, {marginTop: 10}]}><Text style={{color: '#A0A0C0'}}>Loan Amount</Text><Text style={{color: '#FFF'}}>${log.loan_amount?.toLocaleString()}</Text></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
