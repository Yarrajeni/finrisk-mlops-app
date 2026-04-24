import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const helpCategories = [
  { label: 'Credit Risk Tutorial', icon: 'card', route: 'CreditTutorial' },
  { label: 'Fraud AI Tutorial', icon: 'shield', route: 'FraudTutorial' },
  { label: 'Trading Tutorial', icon: 'trending-up', route: 'TradingTutorial' },
  { label: 'Glossary of Terms', icon: 'book', route: 'Glossary' },
  { label: 'About the App', icon: 'information-circle', route: 'About' },
];

export default function HelpCenterScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Help Center" showMenu />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Support</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>Education & Help</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Learn how to use FinRisk AI and understand the ML models behind it.</Text>
        </GlassCard>

        <View style={{ marginTop: 25 }}>
          <Text style={globalStyles.sectionTitle}>Learning Paths</Text>
          {helpCategories.map((item, i) => (
            <TouchableOpacity key={i} onPress={() => navigation.navigate(item.route)}>
              <GlassCard style={{ marginBottom: 12 }}>
                <View style={globalStyles.row}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: colors.primary + '15', alignItems: 'center', justifyContent: 'center' }}>
                      <Ionicons name={item.icon} size={22} color={colors.primary} />
                    </View>
                    <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '600' }}>{item.label}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
                </View>
              </GlassCard>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ marginTop: 25 }}>
          <Text style={globalStyles.sectionTitle}>Support Contact</Text>
          <GlassCard borderColor={colors.warning}>
            <View style={globalStyles.row}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Ionicons name="mail-outline" size={24} color={colors.warning} />
                <View>
                  <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '600' }}>Email Support</Text>
                  <Text style={[globalStyles.cardCaption, { fontSize: 12 }]}>support@finrisk.ai</Text>
                </View>
              </View>
              <TouchableOpacity style={{ padding: 10, backgroundColor: colors.warning + '15', borderRadius: 10 }}>
                <Text style={{ color: colors.warning, fontWeight: '700' }}>CONTACT</Text>
              </TouchableOpacity>
            </View>
          </GlassCard>
          
          <GlassCard style={{ marginTop: 12 }} borderColor={colors.primary}>
            <View style={globalStyles.row}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Ionicons name="chatbubbles-outline" size={24} color={colors.primary} />
                <View>
                  <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '600' }}>Live Chat</Text>
                  <Text style={[globalStyles.cardCaption, { fontSize: 12 }]}>Speak with our AI assistant</Text>
                </View>
              </View>
              <TouchableOpacity style={{ padding: 10, backgroundColor: colors.primary + '15', borderRadius: 10 }}>
                <Text style={{ color: colors.primary, fontWeight: '700' }}>CHAT</Text>
              </TouchableOpacity>
            </View>
          </GlassCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
