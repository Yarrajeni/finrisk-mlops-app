import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const StatCard = ({ label, value, icon, accent = colors.primary, subtitle }) => (
  <View style={[styles.card, { borderColor: `${accent}30` }]}>
    <View style={[styles.iconWrap, { backgroundColor: `${accent}20` }]}>
      <Ionicons name={icon} size={22} color={accent} />
    </View>
    <Text style={styles.label}>{label}</Text>
    <Text style={[styles.value, { color: accent }]}>{value}</Text>
    {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 18,
    flex: 1,
    margin: 5,
    borderWidth: 1,
    borderColor: colors.border,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  label: {
    color: colors.textMuted,
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  value: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 4,
  },
});

export default StatCard;
