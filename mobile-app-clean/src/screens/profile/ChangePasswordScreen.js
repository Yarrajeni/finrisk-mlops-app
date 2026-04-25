import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function ChangePasswordScreen({ navigation }) {
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState(null);

  const handleChange = () => {
    if (!current || !next || !confirm) return setMessage({ type: 'error', text: 'All fields are required.' });
    if (next !== confirm) return setMessage({ type: 'error', text: 'New passwords do not match.' });
    if (next.length < 8) return setMessage({ type: 'error', text: 'Password must be at least 8 characters.' });
    setMessage({ type: 'success', text: 'Password updated successfully!' });
    setCurrent(''); setNext(''); setConfirm('');
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Change Password" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>Security</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 18, fontWeight: '700' }}>Update Your Password</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Use at least 8 characters with a mix of letters and numbers.</Text>
        </GlassCard>

        {[['Current Password', current, setCurrent], ['New Password', next, setNext], ['Confirm New Password', confirm, setConfirm]].map(([label, val, setter], i) => (
          <View key={i}>
            <Text style={[globalStyles.cardLabel, { marginBottom: 8 }]}>{label}</Text>
            <TextInput style={globalStyles.input} value={val} onChangeText={setter} secureTextEntry placeholderTextColor={colors.textMuted} placeholder="••••••••" />
          </View>
        ))}

        {message && (
          <GlassCard borderColor={message.type === 'success' ? colors.success : colors.danger} style={{ marginBottom: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Ionicons name={message.type === 'success' ? 'checkmark-circle' : 'alert-circle'} size={18} color={message.type === 'success' ? colors.success : colors.danger} />
              <Text style={{ color: message.type === 'success' ? colors.success : colors.danger, fontWeight: '600' }}>{message.text}</Text>
            </View>
          </GlassCard>
        )}

        <TouchableOpacity style={globalStyles.primaryButton} onPress={handleChange}>
          <Text style={globalStyles.primaryButtonText}>Change Password</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
