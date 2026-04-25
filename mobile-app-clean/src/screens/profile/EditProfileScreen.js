import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function EditProfileScreen({ navigation }) {
  const [name, setName] = useState('Bablu Kumar');
  const [email, setEmail] = useState('bablu@finrisk.ai');
  const [role, setRole] = useState('FYP Developer');
  const [saved, setSaved] = useState(false);

  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Edit Profile" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Edit Your Information</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 18, fontWeight: '700' }}>Profile Settings</Text>
        </GlassCard>

        {[['Full Name', name, setName, 'text'], ['Email Address', email, setEmail, 'email-address'], ['Role / Title', role, setRole, 'text']].map(([label, val, setter, type], i) => (
          <View key={i}>
            <Text style={[globalStyles.cardLabel, { marginBottom: 8, marginTop: 4 }]}>{label}</Text>
            <TextInput style={globalStyles.input} value={val} onChangeText={setter} keyboardType={type} autoCapitalize="none" placeholderTextColor={colors.textMuted} />
          </View>
        ))}

        <TouchableOpacity style={[globalStyles.primaryButton, { marginTop: 8, backgroundColor: saved ? colors.success : colors.primary }]} onPress={save}>
          <Text style={globalStyles.primaryButtonText}>{saved ? '✓ Saved!' : 'Save Changes'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
