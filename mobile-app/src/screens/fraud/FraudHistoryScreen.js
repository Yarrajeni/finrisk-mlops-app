import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const history = [
  { id: 'TXN-4821', amount: '₹2,450', risk: 88, level: 'HIGH', time: '2 hours ago' },
  { id: 'TXN-4820', amount: '₹120', risk: 12, level: 'LOW', time: '5 hours ago' },
  { id: 'TXN-4819', amount: '₹780', risk: 55, level: 'MEDIUM', time: 'Yesterday' },
  { id: 'TXN-4818', amount: '₹3,100', risk: 92, level: 'HIGH', time: 'Yesterday' },
  { id: 'TXN-4817', amount: '₹45', risk: 8, level: 'LOW', time: '2 days ago' },
  { id: 'TXN-4816', amount: '₹660', risk: 41, level: 'MEDIUM', time: '3 days ago' },
];

const riskColor = (level) => level === 'HIGH' ? colors.danger : level === 'MEDIUM' ? colors.warning : colors.success;

export default function FraudHistoryScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Fraud History" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <View style={[globalStyles.row, { marginBottom: 20 }]}>
          <Text style={globalStyles.sectionTitle}>All Scans</Text>
          <View style={[globalStyles.tag, { backgroundColor: colors.danger + '22' }]}>
            <Text style={[globalStyles.tagText, { color: colors.danger }]}>{history.length} Records</Text>
          </View>
        </View>

        {history.map((item, i) => (
          <TouchableOpacity key={i} onPress={() => navigation.navigate('FraudLogDetail', { item })}>
            <GlassCard style={{ marginBottom: 10 }} borderColor={riskColor(item.level) + '44'}>
              <View style={globalStyles.row}>
                <View>
                  <Text style={{ color: colors.textPrimary, fontWeight: '700', fontSize: 15 }}>{item.id}</Text>
                  <Text style={[globalStyles.cardCaption, { marginTop: 2 }]}>Amount: {item.amount} · {item.time}</Text>
                </View>
                <View style={{ alignItems: 'flex-end', gap: 6 }}>
                  <View style={[globalStyles.tag, { backgroundColor: riskColor(item.level) + '22' }]}>
                    <Text style={[globalStyles.tagText, { color: riskColor(item.level) }]}>{item.level}</Text>
                  </View>
                  <Text style={{ color: riskColor(item.level), fontWeight: '800', fontSize: 16 }}>{item.risk}</Text>
                </View>
              </View>
            </GlassCard>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
