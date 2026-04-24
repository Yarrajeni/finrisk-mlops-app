import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const sessions = [
  { device: 'Pixel 8 Pro', location: 'Mumbai, IN', time: 'Active now', icon: 'phone-portrait', current: true },
  { device: 'Chrome — MacBook', location: 'Mumbai, IN', time: '2 hours ago', icon: 'laptop', current: false },
  { device: 'Samsung Galaxy S22', location: 'Delhi, IN', time: '3 days ago', icon: 'phone-portrait', current: false },
  { device: 'Firefox — Windows', location: 'Pune, IN', time: '1 week ago', icon: 'laptop', current: false },
];

export default function SessionHistoryScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Session History" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Active Sessions</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>{sessions.length} Devices</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>You are currently logged into {sessions.filter(s => s.current).length} active session.</Text>
        </GlassCard>

        {sessions.map((s, i) => (
          <GlassCard key={i} style={{ marginBottom: 10 }} borderColor={s.current ? colors.success + '44' : 'transparent'}>
            <View style={globalStyles.row}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: (s.current ? colors.success : colors.primary) + '22', alignItems: 'center', justifyContent: 'center' }}>
                  <Ionicons name={s.icon} size={22} color={s.current ? colors.success : colors.primary} />
                </View>
                <View>
                  <Text style={{ color: colors.textPrimary, fontWeight: '700', fontSize: 14 }}>{s.device}</Text>
                  <Text style={globalStyles.cardCaption}>{s.location}</Text>
                </View>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: s.current ? colors.success : colors.textMuted, fontSize: 12, fontWeight: '600' }}>{s.time}</Text>
                {s.current && <View style={[globalStyles.tag, { backgroundColor: colors.success + '22', marginTop: 4 }]}><Text style={[globalStyles.tagText, { color: colors.success }]}>Current</Text></View>}
              </View>
            </View>
          </GlassCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
