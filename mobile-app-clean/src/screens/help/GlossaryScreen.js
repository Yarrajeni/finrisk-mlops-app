import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const terms = [
  { term: 'AUC-ROC', definition: 'Area Under the Receiver Operating Characteristic curve. Measures model performance at all classification thresholds.' },
  { term: 'F1 Score', definition: 'The harmonic mean of precision and recall. A good measure of a model\'s accuracy on imbalanced datasets.' },
  { term: 'MA Crossover', definition: 'A technical indicator used in trading where two different moving average lines intersect.' },
  { term: 'Overfitting', definition: 'When a model learns the training data too well, including its noise, leading to poor performance on new data.' },
  { term: 'Precision', definition: 'The ratio of correctly predicted positive observations to the total predicted positives.' },
  { term: 'Recall', definition: 'The ratio of correctly predicted positive observations to all observations in actual class.' },
  { term: 'SHAP Values', definition: 'SHapley Additive exPlanations. A method to explain individual predictions of ML models.' },
  { term: 'SMOTE', definition: 'Synthetic Minority Over-sampling Technique. Used to balance classes in a dataset.' },
];

export default function GlossaryScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Glossary of Terms" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Dictionary</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>FinRisk Terminology</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Key terms used throughout the application and in ML reports.</Text>
        </GlassCard>

        <View style={{ marginTop: 25 }}>
          {terms.map((item, i) => (
            <View key={i} style={{ marginBottom: 20 }}>
              <Text style={{ color: colors.primary, fontWeight: '800', fontSize: 16 }}>{item.term}</Text>
              <Text style={[globalStyles.cardCaption, { marginTop: 4, lineHeight: 20 }]}>{item.definition}</Text>
              <View style={[globalStyles.divider, { marginTop: 15 }]} />
            </View>
          ))}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
