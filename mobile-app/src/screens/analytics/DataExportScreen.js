import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const exports = [
  { label: 'Credit Risk Logs (CSV)', size: '2.4 MB', icon: 'document-text', ready: true },
  { label: 'Fraud Scan History (JSON)', size: '1.8 MB', icon: 'bug', ready: true },
  { label: 'Model Performance Report (PDF)', size: '0.6 MB', icon: 'analytics', ready: true },
  { label: 'Trading Signals Log (CSV)', size: '0.9 MB', icon: 'trending-up', ready: true },
  { label: 'Full Database Snapshot (SQLite)', size: '8.1 MB', icon: 'server', ready: false },
];

export default function DataExportScreen({ navigation }) {
  const [downloaded, setDownloaded] = useState([]);

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Data Export" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Export Center</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>Download Your Data</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>All data is stored in your local SQLite database and remains private.</Text>
        </GlassCard>

        {exports.map((item, i) => (
          <GlassCard key={i} style={{ marginBottom: 10 }}>
            <View style={globalStyles.row}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 }}>
                <Ionicons name={item.icon} size={26} color={colors.primary} />
                <View style={{ flex: 1 }}>
                  <Text style={{ color: colors.textPrimary, fontWeight: '600', fontSize: 13 }}>{item.label}</Text>
                  <Text style={[globalStyles.cardCaption, { marginTop: 2 }]}>{item.size}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => item.ready && setDownloaded(prev => [...prev, i])}
                style={{ padding: 10, borderRadius: 10, backgroundColor: downloaded.includes(i) ? colors.success + '22' : item.ready ? colors.primary + '22' : '#333' }}
              >
                <Ionicons name={downloaded.includes(i) ? 'checkmark' : 'download'} size={20} color={downloaded.includes(i) ? colors.success : item.ready ? colors.primary : '#666'} />
              </TouchableOpacity>
            </View>
          </GlassCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
