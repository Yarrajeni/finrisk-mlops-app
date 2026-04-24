import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationsInboxScreen from '../../screens/notifications/NotificationsInboxScreen';
import NotificationDetailScreen from '../../screens/notifications/NotificationDetailScreen';
import NotificationPreferencesScreen from '../../screens/notifications/NotificationPreferencesScreen';

const Stack = createNativeStackNavigator();
export default function NotificationsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NotificationsInbox" component={NotificationsInboxScreen} />
      <Stack.Screen name="NotificationDetail" component={NotificationDetailScreen} />
      <Stack.Screen name="NotificationPreferences" component={NotificationPreferencesScreen} />
    </Stack.Navigator>
  );
}
