import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const notifications = [
  { id: 1, icon: 'warning', color: colors.danger, title: 'High Fraud Alert', body: 'TXN-4821 flagged with score 88/100', time: '2h ago', read: false },
  { id: 2, icon: 'trending-up', color: colors.success, title: 'BUY Signal — BTC', body: 'MA7/MA21 golden cross detected. Confidence: 91%', time: '4h ago', read: false },
  { id: 3, icon: 'person', color: colors.primary, title: 'Credit Score Updated', body: 'Client #2209 assessed: MEDIUM risk (score 58)', time: '6h ago', read: true },
  { id: 4, icon: 'refresh', color: colors.purple, title: 'Model Retrained', body: 'Credit Risk RF updated — accuracy: 94.2%', time: '1 day ago', read: true },
  { id: 5, icon: 'server', color: colors.primary, title: 'System Health OK', body: 'All API endpoints responding normally', time: '2 days ago', read: true },
];

export default function NotificationsInboxScreen({ navigation }) {
  const unread = notifications.filter(n => !n.read).length;
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Notifications" showMenu />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <View style={[globalStyles.row, { marginBottom: 20 }]}>
          <Text style={globalStyles.sectionTitle}>Inbox</Text>
          {unread > 0 && (
            <View style={[globalStyles.tag, { backgroundColor: colors.danger + '22' }]}>
              <Text style={[globalStyles.tagText, { color: colors.danger }]}>{unread} Unread</Text>
            </View>
          )}
        </View>

        {notifications.map((n) => (
          <TouchableOpacity key={n.id} onPress={() => navigation.navigate('NotificationDetail', { notification: n })}>
            <GlassCard style={{ marginBottom: 10 }} borderColor={n.read ? 'transparent' : n.color + '44'}>
              <View style={globalStyles.row}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 }}>
                  <View style={{ width: 42, height: 42, borderRadius: 21, backgroundColor: n.color + '22', alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons name={n.icon} size={20} color={n.color} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: n.read ? colors.textSecondary : colors.textPrimary, fontWeight: n.read ? '500' : '700', fontSize: 14 }}>{n.title}</Text>
                    <Text style={[globalStyles.cardCaption, { marginTop: 2 }]} numberOfLines={1}>{n.body}</Text>
                  </View>
                </View>
                <View style={{ alignItems: 'flex-end', gap: 6 }}>
                  <Text style={[globalStyles.cardCaption, { fontSize: 11 }]}>{n.time}</Text>
                  {!n.read && <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: n.color }} />}
                </View>
              </View>
            </GlassCard>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
