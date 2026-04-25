import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, 
  SafeAreaView, StatusBar, Alert, ActivityIndicator 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!email) return Alert.alert("Error", "Please enter your email.");
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Reset Link Sent", "If an account exists for this email, you will receive a reset link shortly.", [
        { text: "OK", onPress: () => navigation.navigate('Login') }
      ]);
    }, 1500);
  };

  return (
    <SafeAreaView style={[globalStyles.container, {justifyContent: 'center', padding: 30}]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      
      <View style={{alignItems: 'center', marginBottom: 40}}>
        <Ionicons name="key-outline" size={80} color={colors.primary} />
        <Text style={[globalStyles.sectionTitle, {textAlign: 'center', marginTop: 10}]}>
          Reset Password
        </Text>
        <Text style={globalStyles.cardCaption}>Recover your secure access</Text>
      </View>
      
      <View style={globalStyles.formContainer}>
        <TextInput 
          style={globalStyles.input} 
          placeholder="Enter your email" 
          placeholderTextColor="#6A6A8C" 
          keyboardType="email-address"
          autoCapitalize="none" 
          value={email} 
          onChangeText={setEmail} 
        />
        
        <TouchableOpacity style={globalStyles.submitButton} onPress={handleReset} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#000" />
          ) : (
            <Text style={globalStyles.submitButtonText}>Send Reset Link</Text>
          )}
        </TouchableOpacity>
        
        <TouchableOpacity style={{marginTop: 20, alignItems: 'center'}} onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#A0A0C0'}}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
