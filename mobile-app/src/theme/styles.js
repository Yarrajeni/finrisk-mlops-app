import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 120,
  },
  screenHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1F1F2E',
    backgroundColor: colors.header,
  },
  screenHeaderTitle: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 18,
    letterSpacing: 0.2,
  },
  sectionSubtitle: {
    color: colors.textSecondary,
    fontSize: 15,
    marginBottom: 20,
    lineHeight: 22,
  },
  glassCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 22,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardLabel: {
    color: colors.textMuted,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  cardValue: {
    color: colors.textPrimary,
    fontSize: 36,
    fontWeight: '300',
    letterSpacing: -0.5,
  },
  cardCaption: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: colors.surfaceSolid,
    borderWidth: 1,
    borderColor: '#2E2E3E',
    borderRadius: 14,
    padding: 16,
    color: colors.textPrimary,
    fontSize: 16,
    marginBottom: 14,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  primaryButtonText: {
    color: colors.textInverse,
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  dangerButton: {
    backgroundColor: colors.danger,
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  tagText: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  divider: {
    height: 1,
    backgroundColor: '#1F1F2E',
    marginVertical: 16,
  },
  // Aliases for template compatibility
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  submitButtonText: {
    color: colors.textInverse,
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  cardHeader: {
    color: colors.textMuted,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  smallCardValue: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '700',
  },
  formContainer: {
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  barContainer: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: colors.primary,
  },
});

// Alias for backward compatibility with screens that use commonStyles
export const commonStyles = globalStyles;

