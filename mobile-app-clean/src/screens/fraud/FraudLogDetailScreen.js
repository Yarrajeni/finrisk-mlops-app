import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function FraudLogDetailScreen({ navigation, route }) {
  const item = route?.params?.item ?? { id: 'TXN-4821', amount: '₹2,450', risk: 88, level: 'HIGH', time: '2 hours ago' };
  const riskColor = item.level === 'HIGH' ? colors.danger : item.level === 'MEDIUM' ? colors.warning : colors.success;

  const details = [
    { label: 'Transaction ID', value: item.id },
    { label: 'Amount', value: item.amount },
    { label: 'Risk Score', value: item.risk + ' / 100' },
    { label: 'Risk Level', value: item.level },
    { label: 'Timestamp', value: item.time },
    { label: 'Merchant', value: 'Online · Electronics' },
    { label: 'Location', value: 'Mumbai → Singapore' },
    { label: 'Card Type', value: 'Visa Credit — ****4821' },
    { label: 'Model Version', value: 'FraudRF v2.1' },
  ];

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Log Detail" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={riskColor} style={{ alignItems: 'center', marginBottom: 24 }}>
          <Ionicons name={item.level === 'HIGH' ? 'warning' : 'checkmark-circle'} size={52} color={riskColor} />
          <Text style={{ color: riskColor, fontSize: 28, fontWeight: '900', marginTop: 12 }}>{item.level} RISK</Text>
          <Text style={[globalStyles.cardCaption, { textAlign: 'center', marginTop: 6 }]}>Score: {item.risk}/100 · {item.time}</Text>
        </GlassCard>

        <Text style={globalStyles.sectionTitle}>Transaction Details</Text>
        {details.map((d, i) => (
          <View key={i}>
            <View style={[globalStyles.row, { paddingVertical: 12 }]}>
              <Text style={[globalStyles.cardLabel, { marginBottom: 0 }]}>{d.label}</Text>
              <Text style={{ color: colors.textPrimary, fontWeight: '600', fontSize: 14 }}>{d.value}</Text>
            </View>
            {i < details.length - 1 && <View style={globalStyles.divider} />}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
