import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function ModelRetrainingScreen({ navigation }) {
  const [retraining, setRetraining] = useState(false);
  const [progress, setProgress] = useState(0);

  const startRetraining = () => {
    setRetraining(true);
    setProgress(0.1);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 1) {
          clearInterval(interval);
          setRetraining(false);
          return 1;
        }
        return prev + 0.1;
      });
    }, 1000);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Model Retraining" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Maintenance</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>Retrain Models</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Manual retraining uses the latest data from the SQLite ledger to update model weights.</Text>
        </GlassCard>

        <View style={{ marginTop: 25 }}>
          <Text style={globalStyles.sectionTitle}>Models Available</Text>
          {[
            { name: 'Credit Risk RF', lastRun: '2 days ago', accuracy: '94.2%' },
            { name: 'Fraud Detection RF', lastRun: '5 days ago', accuracy: '96.8%' },
            { name: 'Trading Signal Engine', lastRun: '1 day ago', accuracy: '71.4%' },
          ].map((item, i) => (
            <GlassCard key={i} style={{ marginBottom: 12 }}>
              <View style={globalStyles.row}>
                <View>
                  <Text style={{ color: colors.textPrimary, fontWeight: '700', fontSize: 16 }}>{item.name}</Text>
                  <Text style={[globalStyles.cardCaption, { fontSize: 12 }]}>Last run: {item.lastRun}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={{ color: colors.primary, fontWeight: '800' }}>{item.accuracy}</Text>
                  <Text style={[globalStyles.cardCaption, { fontSize: 10 }]}>ACCURACY</Text>
                </View>
              </View>
            </GlassCard>
          ))}
        </View>

        <View style={{ marginTop: 25 }}>
          {retraining ? (
            <GlassCard borderColor={colors.primary}>
              <View style={{ alignItems: 'center', paddingVertical: 10 }}>
                <ActivityIndicator color={colors.primary} size="large" />
                <Text style={{ color: colors.textPrimary, fontWeight: '700', marginTop: 15 }}>Retraining in Progress...</Text>
                <Text style={{ color: colors.textSecondary, fontSize: 12, marginTop: 5 }}>{(progress * 100).toFixed(0)}% Complete</Text>
                <View style={{ width: '100%', height: 6, backgroundColor: colors.border, borderRadius: 3, marginTop: 15, overflow: 'hidden' }}>
                  <View style={{ width: `${progress * 100}%`, height: '100%', backgroundColor: colors.primary }} />
                </View>
              </View>
            </GlassCard>
          ) : (
            <TouchableOpacity 
              style={[globalStyles.primaryButton, { backgroundColor: colors.primary }]}
              onPress={startRetraining}
            >
              <Ionicons name="play" size={20} color="#000" style={{ marginRight: 8 }} />
              <Text style={globalStyles.primaryButtonText}>START FULL RETRAIN</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={{ marginTop: 20 }}>
          <GlassCard borderColor={colors.warning}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Ionicons name="alert-circle" size={24} color={colors.warning} />
              <Text style={[globalStyles.cardCaption, { flex: 1, color: colors.textPrimary }]}>
                Retraining is resource-intensive. Ensure your device is connected to a power source and has a stable internet connection.
              </Text>
            </View>
          </GlassCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
