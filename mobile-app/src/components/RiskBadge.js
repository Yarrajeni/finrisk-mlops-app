import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const RiskBadge = ({ score, type = 'credit' }) => {
  let label, bg, fg;
  if (score >= 70) {
    label = 'HIGH RISK'; bg = colors.dangerDim; fg = colors.danger;
  } else if (score >= 40) {
    label = 'MEDIUM RISK'; bg = colors.warningDim; fg = colors.warning;
  } else {
    label = 'LOW RISK'; bg = colors.successDim; fg = colors.success;
  }
  return (
    <View style={[styles.badge, { backgroundColor: bg }]}>
      <Text style={[styles.text, { color: fg }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
});

export default RiskBadge;
