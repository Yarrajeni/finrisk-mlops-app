import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import ScreenHeader from '../../components/ScreenHeader';
import RiskBadge from '../../components/RiskBadge';

export default function CreditScoreResultScreen({ route, navigation }) {
  const { result } = route.params || { result: {} };
  const isHighRisk = result.risk_score > 65;

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Inference Result" navigation={navigation} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <View style={[globalStyles.glassCard, { borderColor: isHighRisk ? colors.danger : colors.primary, alignItems: 'center', paddingVertical: 40 }]}>
          <Text style={globalStyles.cardHeader}>Risk Score</Text>
          <Text style={[globalStyles.cardValue, { color: isHighRisk ? colors.danger : colors.primary, fontSize: 64, fontWeight: '800' }]}>
            {result.risk_score}
          </Text>
          <RiskBadge score={result.risk_score} />
          <Text style={{ color: '#FFF', fontSize: 18, marginTop: 20, textAlign: 'center' }}>
            {result.recommendation}
          </Text>
        </View>

        <TouchableOpacity 
          style={[globalStyles.glassCard, { marginTop: 20 }]}
          onPress={() => navigation.navigate('CreditXAI', { explanation: result.explanation })}
        >
          <View style={globalStyles.row}>
            <View style={{flex: 1}}>
              <Text style={globalStyles.cardHeader}>Explainable AI (XAI)</Text>
              <Text style={{color: '#E0E0E0', fontStyle: 'italic', marginTop: 5}} numberOfLines={2}>
                {result.explanation}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={colors.primary} />
          </View>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
          <TouchableOpacity 
            style={[globalStyles.submitButton, {width: '48%', backgroundColor: '#2E2E3E'}]}
            onPress={() => navigation.navigate('CreditHome')}
          >
            <Text style={[globalStyles.submitButtonText, {color: '#FFF'}]}>Done</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[globalStyles.submitButton, {width: '48%'}]}
            onPress={() => navigation.navigate('ReportPreview')}
          >
            <Text style={globalStyles.submitButtonText}>View Report</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
