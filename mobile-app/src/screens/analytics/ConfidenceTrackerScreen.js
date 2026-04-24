import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const history = [
  { date: 'Apr 22', credit: 94.2, fraud: 96.8, trading: 71.4 },
  { date: 'Apr 15', credit: 93.8, fraud: 95.9, trading: 70.1 },
  { date: 'Apr 08', credit: 92.5, fraud: 95.1, trading: 68.7 },
  { date: 'Apr 01', credit: 91.2, fraud: 94.4, trading: 67.3 },
];

export default function ConfidenceTrackerScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Confidence Tracker" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.purple}>
          <Text style={globalStyles.cardLabel}>Model Confidence Over Time</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>4-Week Tracking</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>All models show improving confidence after each retraining cycle.</Text>
        </GlassCard>

        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 20 }}>
          {[['Credit', colors.primary], ['Fraud', colors.danger], ['Trading', colors.success]].map(([l, c]) => (
            <View key={l} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: c }} />
              <Text style={globalStyles.cardCaption}>{l}</Text>
            </View>
          ))}
        </View>

        {history.map((h, i) => (
          <GlassCard key={i} style={{ marginBottom: 12 }}>
            <Text style={{ color: colors.textPrimary, fontWeight: '700', marginBottom: 12 }}>{h.date}</Text>
            {[['Credit RF', h.credit, colors.primary], ['Fraud RF', h.fraud, colors.danger], ['Algo Trading', h.trading, colors.success]].map(([label, val, c]) => (
              <View key={label} style={{ marginBottom: 8 }}>
                <View style={globalStyles.row}>
                  <Text style={globalStyles.cardCaption}>{label}</Text>
                  <Text style={{ color: c, fontWeight: '700' }}>{val}%</Text>
                </View>
                <View style={{ height: 4, borderRadius: 2, backgroundColor: '#1E1E2E', marginTop: 3, overflow: 'hidden' }}>
                  <View style={{ width: `${val}%`, height: 4, backgroundColor: c, borderRadius: 2 }} />
                </View>
              </View>
            ))}
          </GlassCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
