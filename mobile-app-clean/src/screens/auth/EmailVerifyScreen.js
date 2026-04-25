import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, 
  SafeAreaView, StatusBar, Alert, ActivityIndicator 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';

export default function EmailVerifyScreen({ navigation }) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!code) return Alert.alert("Error", "Please enter the verification code.");
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Success", "Email verified! You can now log in.", [
        { text: "OK", onPress: () => navigation.navigate('Login') }
      ]);
    }, 1500);
  };

  return (
    <SafeAreaView style={[globalStyles.container, {justifyContent: 'center', padding: 30}]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      
      <View style={{alignItems: 'center', marginBottom: 40}}>
        <Ionicons name="mail-unread-outline" size={80} color={colors.primary} />
        <Text style={[globalStyles.sectionTitle, {textAlign: 'center', marginTop: 10}]}>
          Verify Email
        </Text>
        <Text style={globalStyles.cardCaption}>Check your inbox for the code</Text>
      </View>
      
      <View style={globalStyles.formContainer}>
        <TextInput 
          style={[globalStyles.input, {textAlign: 'center', fontSize: 24, letterSpacing: 10}]} 
          placeholder="000000" 
          placeholderTextColor="#6A6A8C" 
          keyboardType="number-pad"
          maxLength={6}
          value={code} 
          onChangeText={setCode} 
        />
        
        <TouchableOpacity style={globalStyles.submitButton} onPress={handleVerify} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#000" />
          ) : (
            <Text style={globalStyles.submitButtonText}>Verify Account</Text>
          )}
        </TouchableOpacity>
        
        <TouchableOpacity style={{marginTop: 20, alignItems: 'center'}} onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#A0A0C0'}}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
