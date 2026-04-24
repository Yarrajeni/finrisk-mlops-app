import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const GlassCard = ({ children, style, borderColor, padding }) => (
  <View style={[styles.card, borderColor && { borderColor }, padding !== undefined && { padding }, style]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 22,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
});

export default GlassCard;
