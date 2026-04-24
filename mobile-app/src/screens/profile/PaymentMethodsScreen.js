import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function PaymentMethodsScreen({ navigation }) {
  const handleLinkBank = () => {
    Alert.alert(
      "Link Bank Account",
      "This is a simulated feature for the FinRisk AI demonstration. In a production environment, this would securely connect via Plaid or Razorpay."
    );
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Payment Methods" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        
        <Text style={globalStyles.sectionTitle}>Linked Bank Accounts</Text>
        <GlassCard borderColor={colors.primary}>
          <View style={globalStyles.row}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <View style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: '#0055A5', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#FFF', fontWeight: '900', fontSize: 18 }}>SBI</Text>
              </View>
              <View>
                <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '700' }}>State Bank of India</Text>
                <Text style={[globalStyles.cardCaption, { fontSize: 13 }]}>Savings •••• 4021</Text>
              </View>
            </View>
            <Ionicons name="checkmark-circle" size={24} color={colors.primary} />
          </View>
        </GlassCard>

        <TouchableOpacity onPress={handleLinkBank}>
          <GlassCard style={{ borderStyle: 'dashed', borderWidth: 1, borderColor: colors.textMuted, alignItems: 'center', paddingVertical: 18 }}>
            <Ionicons name="add-circle-outline" size={28} color={colors.textMuted} />
            <Text style={{ color: colors.textSecondary, marginTop: 8, fontWeight: '600' }}>Link New Bank Account</Text>
          </GlassCard>
        </TouchableOpacity>

        <Text style={[globalStyles.sectionTitle, { marginTop: 20 }]}>UPI & Wallets</Text>
        <GlassCard>
          <View style={globalStyles.row}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <View style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#4285F4', fontWeight: '900', fontSize: 14 }}>GPay</Text>
              </View>
              <View>
                <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '700' }}>Google Pay</Text>
                <Text style={[globalStyles.cardCaption, { fontSize: 13 }]}>Connected (bablukumar@okicici)</Text>
              </View>
            </View>
            <TouchableOpacity onPress={handleLinkBank}>
              <Text style={{ color: colors.primary, fontWeight: '600' }}>Manage</Text>
            </TouchableOpacity>
          </View>
        </GlassCard>

        <GlassCard>
          <View style={globalStyles.row}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <View style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: '#5f259f', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#FFF', fontWeight: '900', fontSize: 20 }}>पे</Text>
              </View>
              <View>
                <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '700' }}>PhonePe</Text>
                <Text style={[globalStyles.cardCaption, { fontSize: 13 }]}>Connected (9876543210@ybl)</Text>
              </View>
            </View>
            <TouchableOpacity onPress={handleLinkBank}>
              <Text style={{ color: colors.primary, fontWeight: '600' }}>Manage</Text>
            </TouchableOpacity>
          </View>
        </GlassCard>

      </ScrollView>
    </SafeAreaView>
  );
}
