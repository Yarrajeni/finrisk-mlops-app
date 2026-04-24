import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const workflowRuns = [
  { id: '#482', name: 'ML Training Pipeline', status: 'success', time: '2h ago', duration: '12m 4s' },
  { id: '#481', name: 'Backend CI/CD Deploy', status: 'success', time: '5h ago', duration: '4m 30s' },
  { id: '#480', name: 'Frontend Lint & Test', status: 'success', time: 'Yesterday', duration: '2m 15s' },
  { id: '#479', name: 'ML Training Pipeline', status: 'failure', time: '2 days ago', duration: '1m 10s' },
  { id: '#478', name: 'Mobile App Build', status: 'success', time: '3 days ago', duration: '18m 50s' },
];

export default function GitHubActionsScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="GitHub Actions" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <View style={globalStyles.row}>
            <View>
              <Text style={globalStyles.cardLabel}>CI/CD Status</Text>
              <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>Workflow Monitor</Text>
            </View>
            <Ionicons name="logo-github" size={32} color={colors.textPrimary} />
          </View>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>
            Monitoring actions from bablu/antigravity repository.
          </Text>
        </GlassCard>

        <View style={{ marginTop: 25 }}>
          <Text style={globalStyles.sectionTitle}>Recent Runs</Text>
          {workflowRuns.map((run, i) => (
            <GlassCard key={i} style={{ marginBottom: 12 }}>
              <View style={globalStyles.row}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                  <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: run.status === 'success' ? colors.success : colors.danger }} />
                  <View>
                    <Text style={{ color: colors.textPrimary, fontWeight: '700', fontSize: 15 }}>{run.name}</Text>
                    <Text style={[globalStyles.cardCaption, { fontSize: 12 }]}>{run.id} · {run.time}</Text>
                  </View>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={{ color: colors.textSecondary, fontSize: 12, fontWeight: '600' }}>{run.duration}</Text>
                  <View style={[globalStyles.tag, { backgroundColor: (run.status === 'success' ? colors.success : colors.danger) + '15', marginTop: 4 }]}>
                    <Text style={[globalStyles.tagText, { color: run.status === 'success' ? colors.success : colors.danger, fontSize: 10 }]}>
                      {run.status.toUpperCase()}
                    </Text>
                  </View>
                </View>
              </View>
            </GlassCard>
          ))}
        </View>

        <TouchableOpacity 
          style={[globalStyles.glassCard, { marginTop: 10, alignItems: 'center' }]}
          onPress={() => {/* Link to GitHub */}}
        >
          <Text style={{ color: colors.primary, fontWeight: '700' }}>VIEW REPOSITORY ON GITHUB</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
