import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const models = [
  { name: 'Credit Risk RF', accuracy: 94.2, precision: 92.1, recall: 95.8, f1: 93.9, status: 'Live', color: colors.primary },
  { name: 'Fraud Detection RF', accuracy: 96.8, precision: 94.1, recall: 97.3, f1: 95.7, status: 'Live', color: colors.danger },
  { name: 'Algo Trading MA', accuracy: 71.4, precision: 68.3, recall: 73.1, f1: 70.6, status: 'Live', color: colors.success },
];

export default function ModelPerformanceScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Model Performance" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>MLOps Dashboard</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>3 Models in Production</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Performance metrics from last CI/CD training run.</Text>
        </GlassCard>

        {models.map((m, i) => (
          <GlassCard key={i} style={{ marginBottom: 16 }} borderColor={m.color + '44'}>
            <View style={[globalStyles.row, { marginBottom: 14 }]}>
              <Text style={{ color: m.color, fontWeight: '800', fontSize: 16 }}>{m.name}</Text>
              <View style={[globalStyles.tag, { backgroundColor: colors.success + '22' }]}>
                <Text style={[globalStyles.tagText, { color: colors.success }]}>{m.status}</Text>
              </View>
            </View>
            {[['Accuracy', m.accuracy], ['Precision', m.precision], ['Recall', m.recall], ['F1 Score', m.f1]].map(([label, val]) => (
              <View key={label} style={{ marginBottom: 10 }}>
                <View style={globalStyles.row}>
                  <Text style={globalStyles.cardCaption}>{label}</Text>
                  <Text style={{ color: m.color, fontWeight: '700' }}>{val}%</Text>
                </View>
                <View style={{ height: 5, borderRadius: 3, backgroundColor: '#1E1E2E', marginTop: 4, overflow: 'hidden' }}>
                  <View style={{ width: `${val}%`, height: 5, borderRadius: 3, backgroundColor: m.color }} />
                </View>
              </View>
            ))}
          </GlassCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
