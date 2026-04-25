import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { API_URL, ENDPOINTS } from '../../constants/api';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import ScreenHeader from '../../components/ScreenHeader';

export default function NewCreditAssessmentScreen({ navigation }) {
  const [income, setIncome] = useState(''); 
  const [credit, setCredit] = useState(''); 
  const [debt, setDebt] = useState(''); 
  const [loan, setLoan] = useState('');
  const [loading, setLoading] = useState(false);

  const assessRisk = async () => {
    if (!income || !credit || !debt || !loan) {
      return Alert.alert("Error", "Please fill all fields.");
    }
    
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}${ENDPOINTS.creditDefault}`, { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ 
          income: parseFloat(income), 
          credit_score: parseInt(credit), 
          debt_to_income_ratio: parseFloat(debt), 
          loan_amount: parseFloat(loan) 
        }) 
      });
      const data = await response.json();
      if (response.ok) {
        navigation.navigate('CreditResult', { result: data });
      } else {
        Alert.alert("Error", data.detail || "Inference failed.");
      }
    } catch (e) { 
      Alert.alert("Network Error", "Could not connect to the API.");
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="New Assessment" navigation={navigation} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <View style={globalStyles.formContainer}>
          <Text style={globalStyles.cardHeader}>Applicant Data</Text>
          <TextInput 
            style={globalStyles.input} 
            placeholder="Annual Income (₹)" 
            placeholderTextColor="#6A6A8C" 
            keyboardType="numeric" 
            value={income} 
            onChangeText={setIncome}
          />
          <TextInput 
            style={globalStyles.input} 
            placeholder="Credit Score (300-850)" 
            placeholderTextColor="#6A6A8C" 
            keyboardType="numeric" 
            value={credit} 
            onChangeText={setCredit}
          />
          <TextInput 
            style={globalStyles.input} 
            placeholder="Debt-to-Income Ratio (e.g. 0.3)" 
            placeholderTextColor="#6A6A8C" 
            keyboardType="numeric" 
            value={debt} 
            onChangeText={setDebt}
          />
          <TextInput 
            style={globalStyles.input} 
            placeholder="Requested Loan Amount (₹)" 
            placeholderTextColor="#6A6A8C" 
            keyboardType="numeric" 
            value={loan} 
            onChangeText={setLoan}
          />
          
          <TouchableOpacity 
            style={[globalStyles.submitButton, {marginTop: 20}]} 
            onPress={assessRisk}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#000" />
            ) : (
              <>
                <Ionicons name="flash-outline" size={20} color="#000" style={{marginRight: 10}} />
                <Text style={globalStyles.submitButtonText}>Run AI Inference</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
