import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { API_URL } from '../../constants/api';

import { useAuth } from '../../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!username || !password) return Alert.alert('Error', 'Please fill all fields.');
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/login`, { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ username, password }) 
      });
      const data = await res.json();
      if (res.ok) { 
        login(data.token, username); 
      }
      else { Alert.alert('Login Failed', data.detail || 'Invalid credentials.'); }
    } catch (e) { Alert.alert('Network Error', 'Cannot connect to FinRisk AI backend.'); }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView style={s.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <ScrollView contentContainerStyle={s.scroll} keyboardShouldPersistTaps="handled">
        <View style={s.header}>
          <View style={s.logoWrap}><Ionicons name="shield-checkmark" size={48} color={colors.primary} /></View>
          <Text style={s.title}>Welcome Back</Text>
          <Text style={s.subtitle}>Sign in to your enterprise account</Text>
        </View>
        <View>
          <Text style={s.label}>USERNAME</Text>
          <View style={s.inputWrap}>
            <Ionicons name="person-outline" size={20} color={colors.textMuted} style={{ marginRight: 10 }} />
            <TextInput style={s.input} placeholder="Enter username" placeholderTextColor={colors.textMuted} autoCapitalize="none" value={username} onChangeText={setUsername} />
          </View>
          <Text style={s.label}>PASSWORD</Text>
          <View style={s.inputWrap}>
            <Ionicons name="lock-closed-outline" size={20} color={colors.textMuted} style={{ marginRight: 10 }} />
            <TextInput style={s.input} placeholder="Enter password" placeholderTextColor={colors.textMuted} secureTextEntry={!showPass} value={password} onChangeText={setPassword} />
            <TouchableOpacity onPress={() => setShowPass(!showPass)}>
              <Ionicons name={showPass ? 'eye-off' : 'eye'} size={20} color={colors.textMuted} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={s.forgot} onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={s.forgotTxt}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.btn} onPress={handleLogin} disabled={loading}>
            <Text style={s.btnTxt}>{loading ? 'Authenticating...' : 'Secure Login'}</Text>
          </TouchableOpacity>

          <View style={s.dividerWrap}>
            <View style={s.divider} />
            <Text style={s.dividerTxt}>OR CONTINUE WITH</Text>
            <View style={s.divider} />
          </View>

          <View style={s.socialRow}>
            <TouchableOpacity style={s.socialBtn} onPress={() => Alert.alert('Simulated', 'Google Login simulated for demo.')}>
              <Ionicons name="logo-google" size={24} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity style={s.socialBtn} onPress={() => Alert.alert('Simulated', 'Facebook Login simulated for demo.')}>
              <Ionicons name="logo-facebook" size={24} color="#4267B2" />
            </TouchableOpacity>
            <TouchableOpacity style={s.socialBtn} onPress={() => Alert.alert('Simulated', 'X Login simulated for demo.')}>
              <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={s.guestBtn} onPress={() => { setUsername('admin'); setPassword('admin123'); handleLogin(); }}>
            <Ionicons name="person-circle-outline" size={20} color={colors.textPrimary} style={{ marginRight: 8 }} />
            <Text style={s.guestBtnTxt}>Continue as Guest</Text>
          </TouchableOpacity>

          <TouchableOpacity style={s.switchRow} onPress={() => navigation.navigate('Register')}>
            <Text style={s.switchTxt}>Don't have an account? </Text>
            <Text style={s.switchLink}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { padding: 30, paddingTop: 60, flexGrow: 1, justifyContent: 'center' },
  header: { alignItems: 'center', marginBottom: 36 },
  logoWrap: { width: 90, height: 90, borderRadius: 45, backgroundColor: colors.primaryDim, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: colors.primary, marginBottom: 18 },
  title: { color: colors.textPrimary, fontSize: 30, fontWeight: '800' },
  subtitle: { color: colors.textSecondary, fontSize: 14, marginTop: 6 },
  label: { color: colors.textMuted, fontSize: 11, fontWeight: '700', letterSpacing: 1.2, marginBottom: 8, marginTop: 16 },
  inputWrap: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surfaceSolid, borderWidth: 1, borderColor: '#2E2E3E', borderRadius: 14, paddingHorizontal: 16, paddingVertical: 4 },
  input: { flex: 1, color: colors.textPrimary, fontSize: 16, paddingVertical: 14 },
  forgot: { alignSelf: 'flex-end', marginTop: 10, marginBottom: 24 },
  forgotTxt: { color: colors.primary, fontSize: 13 },
  btn: { backgroundColor: colors.primary, borderRadius: 14, padding: 18, alignItems: 'center' },
  btnTxt: { color: colors.textInverse, fontSize: 16, fontWeight: '800' },
  dividerWrap: { flexDirection: 'row', alignItems: 'center', marginVertical: 24 },
  divider: { flex: 1, height: 1, backgroundColor: '#2E2E3E' },
  dividerTxt: { color: colors.textMuted, fontSize: 11, fontWeight: '700', marginHorizontal: 16, letterSpacing: 1 },
  socialRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  socialBtn: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surfaceSolid, borderWidth: 1, borderColor: '#2E2E3E', borderRadius: 14, paddingVertical: 14, marginHorizontal: 4 },
  guestBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surface, borderWidth: 1, borderColor: '#2E2E3E', borderRadius: 14, paddingVertical: 14, marginBottom: 24 },
  guestBtnTxt: { color: colors.textPrimary, fontSize: 15, fontWeight: '600' },
  switchRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 10 },
  switchTxt: { color: colors.textSecondary, fontSize: 14 },
  switchLink: { color: colors.primary, fontSize: 14, fontWeight: '700' },
});
