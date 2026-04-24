import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import GlassCard from '../../components/GlassCard';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import { Ionicons } from '@expo/vector-icons';

export default function SystemHealthScreen({ navigation }) {
  const systems = [
    { name: 'Auth Server', status: 'Healthy', latency: '45ms', icon: 'key-outline', color: colors.primary },
    { name: 'Credit ML Model', status: 'Healthy', latency: '120ms', icon: 'card-outline', color: colors.primary },
    { name: 'Fraud AI Engine', status: 'Healthy', latency: '85ms', icon: 'shield-outline', color: colors.primary },
    { name: 'Trading API', status: 'Healthy', latency: '60ms', icon: 'pulse-outline', color: colors.primary },
    { name: 'Database (SQLite)', status: 'Optimal', latency: '12ms', icon: 'server-outline', color: colors.secondary },
  ];

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="System Health" navigation={navigation} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard>
           <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 15, height: 15, borderRadius: 8, backgroundColor: colors.primary, marginRight: 10}} />
              <Text style={{color: colors.primary, fontSize: 18, fontWeight: 'bold'}}>All Systems Operational</Text>
           </View>
           <Text style={[globalStyles.cardCaption, {marginTop: 10}]}>Last System Audit: {new Date().toLocaleTimeString()}</Text>
        </GlassCard>

        <Text style={globalStyles.sectionTitle}>Infrastructure Logs</Text>
        {systems.map((sys, index) => (
          <View key={index} style={[globalStyles.glassCard, {marginBottom: 10}]}>
             <View style={globalStyles.row}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                   <Ionicons name={sys.icon} size={24} color={sys.color} style={{marginRight: 15}} />
                   <View>
                      <Text style={{color: '#FFF', fontSize: 16, fontWeight: 'bold'}}>{sys.name}</Text>
                      <Text style={{color: '#A0A0C0', fontSize: 12}}>{sys.status}</Text>
                   </View>
                </View>
                <Text style={{color: colors.textSecondary, fontSize: 14}}>{sys.latency}</Text>
             </View>
          </View>
        ))}

        <View style={[globalStyles.glassCard, {marginTop: 20, backgroundColor: 'rgba(0, 229, 255, 0.05)'}]}>
           <Text style={globalStyles.cardHeader}>Server Load</Text>
           <View style={{ height: 6, backgroundColor: colors.surface, borderRadius: 3, marginTop: 10, overflow: 'hidden' }}>
              <View style={{ width: '32%', height: '100%', backgroundColor: colors.primary }} />
           </View>
           <Text style={[globalStyles.cardCaption, {marginTop: 8}]}>Peak capacity utilization: 32%</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
