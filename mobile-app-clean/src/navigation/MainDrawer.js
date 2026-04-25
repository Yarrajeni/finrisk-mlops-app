import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { useAuth } from '../context/AuthContext';
import MainTabs from './TabNavigators';
import NotificationsStack from './stacks/NotificationsStack';
import ProfileStack from './stacks/ProfileStack';
import SettingsStack from './stacks/SettingsStack';
import HelpStack from './stacks/HelpStack';
import MLOpsStack from './stacks/MLOpsStack';
import GrokStack from './stacks/GrokStack';

const Drawer = createDrawerNavigator();

const menuItems = [
  { label: 'Dashboard', icon: 'home-outline', screen: 'HomeTabs' },
  { label: 'Grok Intelligence', icon: 'eye-outline', screen: 'Grok' },
  { label: 'Notifications', icon: 'notifications-outline', screen: 'Notifications' },
  { label: 'My Profile', icon: 'person-outline', screen: 'Profile' },
  { label: 'Settings', icon: 'settings-outline', screen: 'Settings' },
  { label: 'Help & Tutorials', icon: 'help-circle-outline', screen: 'Help' },
  { label: 'MLOps Admin', icon: 'server-outline', screen: 'MLOps' },
];

function CustomDrawerContent({ navigation }) {
  const { currentUser, logout } = useAuth();
  return (
    <View style={s.container}>
      <View style={s.header}>
        <View style={s.logoCircle}>
          <Ionicons name="shield-checkmark" size={34} color={colors.primary} />
        </View>
        <Text style={s.appName}>FinRisk AI</Text>
        <Text style={s.username}>{currentUser}</Text>
        <View style={s.badge}><Text style={s.badgeText}>ENTERPRISE MLOps</Text></View>
      </View>
      <View style={s.divider} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {menuItems.map((item) => (
          <TouchableOpacity key={item.screen} style={s.item} onPress={() => navigation.navigate(item.screen)}>
            <View style={s.itemIcon}>
              <Ionicons name={item.icon} size={20} color={colors.primary} />
            </View>
            <Text style={s.itemLabel}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={16} color={colors.textMuted} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={s.divider} />
      <TouchableOpacity style={s.logout} onPress={logout}>
        <Ionicons name="exit-outline" size={20} color={colors.danger} />
        <Text style={s.logoutText}>Sign Out</Text>
      </TouchableOpacity>
      <Text style={s.version}>FinRisk AI v2.0 · MLOps Pipeline</Text>
    </View>
  );
}

export default function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false, drawerStyle: { width: 300, backgroundColor: colors.drawerBg } }}
    >
      <Drawer.Screen name="HomeTabs" component={MainTabs} />
      <Drawer.Screen name="Grok" component={GrokStack} />
      <Drawer.Screen name="Notifications" component={NotificationsStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Settings" component={SettingsStack} />
      <Drawer.Screen name="Help" component={HelpStack} />
      <Drawer.Screen name="MLOps" component={MLOpsStack} />
    </Drawer.Navigator>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.drawerBg, paddingBottom: 20 },
  header: { padding: 24, paddingTop: 56, alignItems: 'center' },
  logoCircle: { width: 72, height: 72, borderRadius: 36, backgroundColor: colors.primaryDim, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: colors.primary, marginBottom: 12 },
  appName: { color: colors.primary, fontSize: 22, fontWeight: '800', letterSpacing: 1 },
  username: { color: colors.textSecondary, fontSize: 13, marginTop: 4 },
  badge: { marginTop: 8, backgroundColor: colors.primaryDim, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  badgeText: { color: colors.primary, fontSize: 10, fontWeight: '700', letterSpacing: 0.8 },
  divider: { height: 1, backgroundColor: '#1F1F2E', marginVertical: 8 },
  item: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 14 },
  itemIcon: { width: 38, height: 38, borderRadius: 10, backgroundColor: colors.primaryDim, alignItems: 'center', justifyContent: 'center', marginRight: 14 },
  itemLabel: { color: colors.textPrimary, fontSize: 15, fontWeight: '600', flex: 1 },
  logout: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 16, gap: 12 },
  logoutText: { color: colors.danger, fontSize: 15, fontWeight: '700' },
  version: { color: colors.textMuted, fontSize: 11, textAlign: 'center', marginTop: 6 },
});
