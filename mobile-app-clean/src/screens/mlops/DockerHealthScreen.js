import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function DockerHealthScreen({ navigation }) {
  const containers = [
    { name: 'finrisk-fastapi-backend', image: 'bablu/backend:latest', status: 'running', cpu: '1.2%', ram: '142MB', uptime: '12d 4h' },
    { name: 'finrisk-ml-worker', image: 'bablu/ml-worker:latest', status: 'running', cpu: '0.5%', ram: '256MB', uptime: '12d 4h' },
    { name: 'finrisk-redis-cache', image: 'redis:7-alpine', status: 'running', cpu: '0.1%', ram: '12MB', uptime: '45d 1h' },
  ];

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Docker Health" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <View style={globalStyles.row}>
            <View>
              <Text style={globalStyles.cardLabel}>Infrastructure</Text>
              <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>Docker Cluster</Text>
            </View>
            <Ionicons name="cube" size={32} color={colors.primary} />
          </View>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>
            Monitoring 3 active containers on Render.com.
          </Text>
        </GlassCard>

        <View style={{ marginTop: 25 }}>
          <Text style={globalStyles.sectionTitle}>Container Status</Text>
          {containers.map((container, i) => (
            <GlassCard key={i} style={{ marginBottom: 15 }}>
              <View style={[globalStyles.row, { marginBottom: 10 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: colors.success }} />
                  <Text style={{ color: colors.textPrimary, fontWeight: '800', fontSize: 16 }}>{container.name}</Text>
                </View>
                <View style={[globalStyles.tag, { backgroundColor: colors.success + '15' }]}>
                  <Text style={[globalStyles.tagText, { color: colors.success, fontSize: 10 }]}>RUNNING</Text>
                </View>
              </View>
              
              <Text style={[globalStyles.cardCaption, { marginBottom: 12, fontSize: 12 }]}>Image: {container.image}</Text>
              
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.surfaceSolid, padding: 12, borderRadius: 10 }}>
                <View style={{ alignItems: 'center' }}>
                  <Text style={{ color: colors.textSecondary, fontSize: 10, fontWeight: '700' }}>CPU</Text>
                  <Text style={{ color: colors.primary, fontWeight: '700' }}>{container.cpu}</Text>
                </View>
                <View style={{ width: 1, backgroundColor: colors.border }} />
                <View style={{ alignItems: 'center' }}>
                  <Text style={{ color: colors.textSecondary, fontSize: 10, fontWeight: '700' }}>RAM</Text>
                  <Text style={{ color: colors.primary, fontWeight: '700' }}>{container.ram}</Text>
                </View>
                <View style={{ width: 1, backgroundColor: colors.border }} />
                <View style={{ alignItems: 'center' }}>
                  <Text style={{ color: colors.textSecondary, fontSize: 10, fontWeight: '700' }}>UPTIME</Text>
                  <Text style={{ color: colors.primary, fontWeight: '700' }}>{container.uptime}</Text>
                </View>
              </View>
            </GlassCard>
          ))}
        </View>

        <TouchableOpacity 
          style={[globalStyles.glassCard, { marginTop: 10, borderColor: colors.warning, borderWidth: 1 }]}
          onPress={() => {/* Restart containers logic */}}
        >
          <View style={[globalStyles.row, { justifyContent: 'center', gap: 10 }]}>
            <Ionicons name="refresh" size={20} color={colors.warning} />
            <Text style={{ color: colors.warning, fontWeight: '700' }}>RESTART ALL CONTAINERS</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
