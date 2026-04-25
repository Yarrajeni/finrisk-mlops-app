import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function CreditTutorialScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Credit Risk Tutorial" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Guide</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>Understanding Credit Risk</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Learn how our ML model predicts default probability.</Text>
        </GlassCard>

        <View style={{ marginTop: 25 }}>
          <Text style={globalStyles.sectionTitle}>What is Credit Risk?</Text>
          <Text style={globalStyles.cardCaption}>
            Credit risk refers to the possibility that a borrower will fail to meet their obligations in accordance with agreed terms. Our AI analyzes historical patterns to predict this likelihood.
          </Text>

          <Text style={[globalStyles.sectionTitle, { marginTop: 20 }]}>Key Features Used</Text>
          {[
            { title: 'Income Level', desc: 'Higher income generally correlates with lower default risk.' },
            { title: 'Loan Amount', desc: 'The size of the loan relative to income (DTI ratio).' },
            { title: 'Employment History', desc: 'Stability in employment reduces perceived risk.' },
            { title: 'Credit History', desc: 'Past repayment behavior is the strongest predictor.' },
          ].map((item, i) => (
            <GlassCard key={i} style={{ marginTop: 12, backgroundColor: colors.surfaceSolid }}>
              <Text style={{ color: colors.primary, fontWeight: '700', fontSize: 15 }}>{item.title}</Text>
              <Text style={[globalStyles.cardCaption, { marginTop: 4, fontSize: 13 }]}>{item.desc}</Text>
            </GlassCard>
          ))}

          <Text style={[globalStyles.sectionTitle, { marginTop: 25 }]}>How to Interpret Scores</Text>
          <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
            <View style={{ flex: 1, height: 80, borderRadius: 15, backgroundColor: colors.success + '20', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.success }}>
              <Text style={{ color: colors.success, fontWeight: '800' }}>0–30</Text>
              <Text style={{ color: colors.textSecondary, fontSize: 10 }}>LOW RISK</Text>
            </View>
            <View style={{ flex: 1, height: 80, borderRadius: 15, backgroundColor: colors.warning + '20', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.warning }}>
              <Text style={{ color: colors.warning, fontWeight: '800' }}>31–70</Text>
              <Text style={{ color: colors.textSecondary, fontSize: 10 }}>MEDIUM RISK</Text>
            </View>
            <View style={{ flex: 1, height: 80, borderRadius: 15, backgroundColor: colors.danger + '20', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.danger }}>
              <Text style={{ color: colors.danger, fontWeight: '800' }}>71–100</Text>
              <Text style={{ color: colors.textSecondary, fontSize: 10 }}>HIGH RISK</Text>
            </View>
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
