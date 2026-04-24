import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function DataStorageScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Data & Storage" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Storage Usage</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 32, fontWeight: '300' }}>124.5 MB</Text>
          <View style={{ height: 6, backgroundColor: colors.border, borderRadius: 3, marginTop: 15, overflow: 'hidden' }}>
            <View style={{ width: '40%', height: '100%', backgroundColor: colors.primary }} />
          </View>
          <View style={[globalStyles.row, { marginTop: 8 }]}>
            <Text style={globalStyles.cardCaption}>40% of 300MB allocated</Text>
            <Text style={globalStyles.cardCaption}>Free: 175.5 MB</Text>
          </View>
        </GlassCard>

        <View style={{ marginTop: 25 }}>
          <Text style={globalStyles.sectionTitle}>Local Data</Text>
          {[
            { label: 'SQLite Database', size: '12.4 MB', icon: 'server' },
            { label: 'Cached Images', size: '84.2 MB', icon: 'images' },
            { label: 'Model Artifacts', size: '22.1 MB', icon: 'analytics' },
            { label: 'App Logs', size: '5.8 MB', icon: 'list' },
          ].map((item, i) => (
            <GlassCard key={i} style={{ marginBottom: 12 }}>
              <View style={globalStyles.row}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                  <Ionicons name={item.icon} size={22} color={colors.primary} />
                  <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '600' }}>{item.label}</Text>
                </View>
                <Text style={{ color: colors.textSecondary, fontWeight: '700' }}>{item.size}</Text>
              </View>
            </GlassCard>
          ))}
        </View>

        <View style={{ marginTop: 25 }}>
          <Text style={globalStyles.sectionTitle}>Actions</Text>
          <TouchableOpacity style={[globalStyles.glassCard, { marginBottom: 12 }]}>
            <View style={globalStyles.row}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Ionicons name="trash-outline" size={22} color={colors.warning} />
                <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '600' }}>Clear Cache</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[globalStyles.glassCard, { marginBottom: 12 }]}>
            <View style={globalStyles.row}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Ionicons name="cloud-download-outline" size={22} color={colors.primary} />
                <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '600' }}>Backup to Cloud</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[globalStyles.glassCard, { borderColor: colors.danger, borderWidth: 1 }]}>
            <View style={globalStyles.row}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Ionicons name="refresh-circle-outline" size={22} color={colors.danger} />
                <Text style={{ color: colors.danger, fontSize: 16, fontWeight: '700' }}>Reset All Data</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={colors.danger} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
