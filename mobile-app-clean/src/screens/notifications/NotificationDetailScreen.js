import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function NotificationDetailScreen({ navigation, route }) {
  const n = route?.params?.notification ?? {
    icon: 'warning', color: colors.danger, title: 'High Fraud Alert',
    body: 'TXN-4821 flagged with score 88/100', time: '2h ago',
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Notification" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={n.color} style={{ alignItems: 'center', paddingVertical: 32 }}>
          <View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: n.color + '22', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <Ionicons name={n.icon} size={36} color={n.color} />
          </View>
          <Text style={{ color: colors.textPrimary, fontSize: 22, fontWeight: '800', textAlign: 'center' }}>{n.title}</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>{n.time}</Text>
        </GlassCard>

        <GlassCard>
          <Text style={[globalStyles.cardLabel, { marginBottom: 10 }]}>Message</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 16, lineHeight: 24 }}>{n.body}</Text>
        </GlassCard>

        <GlassCard>
          <Text style={[globalStyles.cardLabel, { marginBottom: 10 }]}>Details</Text>
          {[['Source', 'FinRisk AI Engine'], ['Category', 'System Alert'], ['Priority', 'High'], ['Delivered', n.time]].map(([l, v]) => (
            <View key={l}>
              <View style={[globalStyles.row, { paddingVertical: 10 }]}>
                <Text style={globalStyles.cardCaption}>{l}</Text>
                <Text style={{ color: colors.textPrimary, fontWeight: '600' }}>{v}</Text>
              </View>
              <View style={globalStyles.divider} />
            </View>
          ))}
        </GlassCard>
      </ScrollView>
    </SafeAreaView>
  );
}
