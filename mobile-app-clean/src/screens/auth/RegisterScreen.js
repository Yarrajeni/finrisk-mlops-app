import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, Alert, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import { API_URL, ENDPOINTS } from '../../constants/api';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleRegister = async () => {
    if (!username || !password || !confirmPassword) return Alert.alert("Error", "Please fill all fields.");
    if (password !== confirmPassword) return Alert.alert("Error", "Passwords do not match.");
    
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}${ENDPOINTS.register}`, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if (response.ok) {
        Alert.alert("Success", "Account created! You can now log in.", [
          { text: "OK", onPress: () => navigation.navigate('Login') }
        ]);
      } else {
        Alert.alert("Registration Failed", data.detail || "An error occurred.");
      }
    } catch (e) {
      Alert.alert("Network Error", "Could not connect to the Backend API.");
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ padding: 25, flexGrow: 1, justifyContent: 'center' }}>
          <View style={{ alignItems: 'center', marginBottom: 40 }}>
            <View style={{ width: 90, height: 90, borderRadius: 45, backgroundColor: colors.primaryDim, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: colors.primary, marginBottom: 18 }}>
              <Ionicons name="person-add" size={40} color={colors.primary} />
            </View>
            <Text style={{ color: colors.textPrimary, fontSize: 28, fontWeight: '800' }}>Create Account</Text>
            <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Join the Risk MLOps Network</Text>
          </View>

          <View>
            <Text style={{ color: colors.textMuted, fontSize: 11, fontWeight: '700', letterSpacing: 1.2, marginBottom: 8 }}>USERNAME</Text>
            <TextInput 
              style={[globalStyles.input, { marginBottom: 16 }]} 
              placeholder="Pick a username" 
              placeholderTextColor={colors.textMuted} 
              autoCapitalize="none" 
              value={username} 
              onChangeText={setUsername} 
            />

            <Text style={{ color: colors.textMuted, fontSize: 11, fontWeight: '700', letterSpacing: 1.2, marginBottom: 8 }}>PASSWORD</Text>
            <View style={{ position: 'relative', marginBottom: 16 }}>
              <TextInput 
                style={globalStyles.input} 
                placeholder="Secure password" 
                placeholderTextColor={colors.textMuted} 
                secureTextEntry={!showPass}
                value={password} 
                onChangeText={setPassword} 
              />
              <TouchableOpacity 
                style={{ position: 'absolute', right: 15, top: 15 }} 
                onPress={() => setShowPass(!showPass)}
              >
                <Ionicons name={showPass ? 'eye-off' : 'eye'} size={20} color={colors.textMuted} />
              </TouchableOpacity>
            </View>

            <Text style={{ color: colors.textMuted, fontSize: 11, fontWeight: '700', letterSpacing: 1.2, marginBottom: 8 }}>CONFIRM PASSWORD</Text>
            <View style={{ position: 'relative', marginBottom: 24 }}>
              <TextInput 
                style={globalStyles.input} 
                placeholder="Confirm password" 
                placeholderTextColor={colors.textMuted} 
                secureTextEntry={!showPass}
                value={confirmPassword} 
                onChangeText={setConfirmPassword} 
              />
              <TouchableOpacity 
                style={{ position: 'absolute', right: 15, top: 15 }} 
                onPress={() => setShowPass(!showPass)}
              >
                <Ionicons name={showPass ? 'eye-off' : 'eye'} size={20} color={colors.textMuted} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={globalStyles.primaryButton} onPress={handleRegister} disabled={loading}>
              {loading ? (
                <ActivityIndicator color="#000" />
              ) : (
                <Text style={globalStyles.primaryButtonText}>Register Credentials</Text>
              )}
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 24 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: '#2E2E3E' }} />
              <Text style={{ color: colors.textMuted, fontSize: 11, fontWeight: '700', marginHorizontal: 16, letterSpacing: 1 }}>OR REGISTER WITH</Text>
              <View style={{ flex: 1, height: 1, backgroundColor: '#2E2E3E' }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 }}>
              <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surfaceSolid, borderWidth: 1, borderColor: '#2E2E3E', borderRadius: 14, paddingVertical: 14, marginHorizontal: 4 }} onPress={() => Alert.alert('Simulated', 'Google Registration simulated for demo.')}>
                <Ionicons name="logo-google" size={24} color="#DB4437" />
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surfaceSolid, borderWidth: 1, borderColor: '#2E2E3E', borderRadius: 14, paddingVertical: 14, marginHorizontal: 4 }} onPress={() => Alert.alert('Simulated', 'Facebook Registration simulated for demo.')}>
                <Ionicons name="logo-facebook" size={24} color="#4267B2" />
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surfaceSolid, borderWidth: 1, borderColor: '#2E2E3E', borderRadius: 14, paddingVertical: 14, marginHorizontal: 4 }} onPress={() => Alert.alert('Simulated', 'X Registration simulated for demo.')}>
                <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ marginTop: 10, alignItems: 'center' }} onPress={() => navigation.navigate('Login')}>
              <Text style={{ color: colors.textSecondary }}>Already have an account? <Text style={{ color: colors.primary, fontWeight: '700' }}>Log In</Text></Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
