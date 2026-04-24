import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const EmptyState = ({ icon = 'document-text-outline', title = 'No Data Yet', subtitle = 'Run an assessment to see results here.' }) => (
  <View style={styles.container}>
    <View style={styles.iconWrap}>
      <Ionicons name={icon} size={52} color={colors.textMuted} />
    </View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  iconWrap: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(255,255,255,0.04)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    color: colors.textSecondary,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default EmptyState;
