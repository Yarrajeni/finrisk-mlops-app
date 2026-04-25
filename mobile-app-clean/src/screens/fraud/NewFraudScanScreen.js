import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { API_URL, ENDPOINTS } from '../../constants/api';
import { COLORS } from '../../theme/colors';
import { commonStyles } from '../../theme/styles';
import ScreenHeader from '../../components/ScreenHeader';

export default function NewFraudScanScreen({ navigation }) {
  const [amt, setAmt] = useState(''); 
  const [age, setAge] = useState(''); 
  const [intl, setIntl] = useState('');
  const [loading, setLoading] = useState(false);

  const assessFraud = async () => {
    if (!amt || !age || !intl) {
      return Alert.alert("Error", "Please fill all fields.");
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}${ENDPOINTS.fraudDetection}`, { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ 
          transaction_amount: parseFloat(amt), 
          account_age_days: parseInt(age), 
          is_international: parseInt(intl) 
        }) 
      });
      const data = await response.json();
      if (response.ok) {
        navigation.navigate('ScanResult', { result: data });
      } else {
        Alert.alert("Error", data.detail || "Scan failed.");
      }
    } catch (e) { 
      Alert.alert("Network Error", "Could not connect to the API.");
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScreenHeader title="Fraud Scan" showBack />
      <ScrollView contentContainerStyle={commonStyles.scrollContent}>
        <View style={commonStyles.formContainer}>
          <Text style={commonStyles.cardHeader}>Transaction Data</Text>
          <TextInput 
            style={commonStyles.input} 
            placeholder="Transaction Amount (₹)" 
            placeholderTextColor="#6A6A8C" 
            keyboardType="numeric" 
            value={amt} 
            onChangeText={setAmt}
          />
          <TextInput 
            style={commonStyles.input} 
            placeholder="Account Age (Days)" 
            placeholderTextColor="#6A6A8C" 
            keyboardType="numeric" 
            value={age} 
            onChangeText={setAge}
          />
          <TextInput 
            style={commonStyles.input} 
            placeholder="Intl. Transaction (0=No, 1=Yes)" 
            placeholderTextColor="#6A6A8C" 
            keyboardType="numeric" 
            value={intl} 
            onChangeText={setIntl}
          />
          
          <TouchableOpacity 
            style={[commonStyles.submitButton, {marginTop: 20, backgroundColor: COLORS.error}]} 
            onPress={assessFraud}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#000" />
            ) : (
              <>
                <Ionicons name="shield-outline" size={20} color="#000" style={{marginRight: 10}} />
                <Text style={commonStyles.submitButtonText}>Analyze for Fraud</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
