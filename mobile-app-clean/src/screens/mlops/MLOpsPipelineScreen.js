import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const pipelineSteps = [
  { step: 'Data Ingestion', status: 'completed', time: '10:00 AM' },
  { step: 'Data Preprocessing', status: 'completed', time: '10:05 AM' },
  { step: 'Feature Engineering', status: 'completed', time: '10:12 AM' },
  { step: 'Model Training (RF)', status: 'completed', time: '10:25 AM' },
  { step: 'Model Validation', status: 'completed', time: '10:28 AM' },
  { step: 'Model Deployment', status: 'completed', time: '10:30 AM' },
];

export default function MLOpsPipelineScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="MLOps Pipeline" showMenu />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.success}>
          <View style={globalStyles.row}>
            <View>
              <Text style={globalStyles.cardLabel}>Pipeline Status</Text>
              <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>Active & Healthy</Text>
            </View>
            <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: colors.success }} />
          </View>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>
            Last successful run: 2 hours ago. Total duration: 30m 14s.
          </Text>
        </GlassCard>

        <View style={{ marginTop: 25 }}>
          <Text style={globalStyles.sectionTitle}>Pipeline Workflow</Text>
          {pipelineSteps.map((item, i) => (
            <View key={i} style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 15 }}>
              <View style={{ alignItems: 'center' }}>
                <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: colors.success, alignItems: 'center', justifyContent: 'center' }}>
                  <Ionicons name="checkmark" size={16} color="#000" />
                </View>
                {i < pipelineSteps.length - 1 && (
                  <View style={{ width: 2, height: 40, backgroundColor: colors.success + '40' }} />
                )}
              </View>
              <View style={{ flex: 1, paddingTop: 2 }}>
                <Text style={{ color: colors.textPrimary, fontWeight: '700', fontSize: 16 }}>{item.step}</Text>
                <Text style={[globalStyles.cardCaption, { fontSize: 12 }]}>{item.time} · Status: {item.status}</Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity 
          style={[globalStyles.primaryButton, { marginTop: 30 }]}
          onPress={() => navigation.navigate('ModelRetraining')}
        >
          <Ionicons name="refresh" size={20} color="#000" style={{ marginRight: 8 }} />
          <Text style={globalStyles.primaryButtonText}>TRIGGER MANUAL RETRAIN</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
