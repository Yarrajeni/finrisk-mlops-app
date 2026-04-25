import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const ScreenHeader = ({ title, navigation, rightIcon, onRightPress, showBack = true }) => (
  <View style={styles.header}>
    {showBack ? (
      <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.iconBtn}>
        <Ionicons name="arrow-back" size={24} color={colors.primary} />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={() => navigation?.openDrawer()} style={styles.iconBtn}>
        <Ionicons name="menu" size={26} color={colors.primary} />
      </TouchableOpacity>
    )}
    <Text style={styles.title} numberOfLines={1}>{title}</Text>
    {rightIcon ? (
      <TouchableOpacity onPress={onRightPress} style={styles.iconBtn}>
        <Ionicons name={rightIcon} size={24} color={colors.primary} />
      </TouchableOpacity>
    ) : (
      <View style={{ width: 40 }} />
    )}
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#1F1F2E',
    backgroundColor: colors.header,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 19,
    fontWeight: '700',
    letterSpacing: 0.2,
    flex: 1,
    textAlign: 'center',
  },
  iconBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScreenHeader;
