import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function APIConnectionScreen({ navigation }) {
  const [apiUrl, setApiUrl] = useState('https://finrisk-ai-api.render.com');
  const [apiKey, setApiKey] = useState('••••••••••••••••');
  const [status, setStatus] = useState('connected'); // connected, testing, failed

  const testConnection = () => {
    setStatus('testing');
    setTimeout(() => setStatus('connected'), 2000);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="API Connection" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={status === 'connected' ? colors.success : colors.warning}>
          <View style={globalStyles.row}>
            <View>
              <Text style={globalStyles.cardLabel}>Server Status</Text>
              <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>
                {status === 'connected' ? 'Connected' : status === 'testing' ? 'Testing...' : 'Connection Failed'}
              </Text>
            </View>
            <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: status === 'connected' ? colors.success : colors.warning }} />
          </View>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>
            Current latency: 242ms. Last synced: Just now.
          </Text>
        </GlassCard>

        <View style={{ marginTop: 20 }}>
          <Text style={[globalStyles.cardLabel, { marginBottom: 8 }]}>Backend API URL</Text>
          <TextInput 
            style={globalStyles.input}
            value={apiUrl}
            onChangeText={setApiUrl}
            placeholder="https://api.example.com"
            placeholderTextColor={colors.textMuted}
          />

          <Text style={[globalStyles.cardLabel, { marginBottom: 8, marginTop: 10 }]}>API Key (X-API-KEY)</Text>
          <View style={{ position: 'relative' }}>
            <TextInput 
              style={globalStyles.input}
              value={apiKey}
              onChangeText={setApiKey}
              secureTextEntry
              placeholder="Enter your API key"
              placeholderTextColor={colors.textMuted}
            />
            <Ionicons name="eye-off" size={20} color={colors.textMuted} style={{ position: 'absolute', right: 15, top: 15 }} />
          </View>

          <TouchableOpacity 
            style={[globalStyles.primaryButton, { marginTop: 15 }]}
            onPress={testConnection}
            disabled={status === 'testing'}
          >
            <Ionicons name={status === 'testing' ? 'sync' : 'flash'} size={20} color="#000" style={{ marginRight: 8 }} />
            <Text style={globalStyles.primaryButtonText}>
              {status === 'testing' ? 'TESTING...' : 'TEST CONNECTION'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 25 }}>
          <Text style={globalStyles.sectionTitle}>Endpoints</Text>
          {[
            { name: 'Credit Predict', path: '/predict/credit', method: 'POST', active: true },
            { name: 'Fraud Scan', path: '/predict/fraud', method: 'POST', active: true },
            { name: 'Market Data', path: '/market/live', method: 'GET', active: true },
            { name: 'MLOps Metrics', path: '/mlops/stats', method: 'GET', active: true },
          ].map((item, i) => (
            <GlassCard key={i} style={{ marginBottom: 10 }}>
              <View style={globalStyles.row}>
                <View>
                  <Text style={{ color: colors.textPrimary, fontWeight: '700' }}>{item.name}</Text>
                  <Text style={[globalStyles.cardCaption, { fontSize: 12 }]}>{item.path}</Text>
                </View>
                <View style={[globalStyles.tag, { backgroundColor: colors.primary + '15' }]}>
                  <Text style={[globalStyles.tagText, { color: colors.primary }]}>{item.method}</Text>
                </View>
              </View>
            </GlassCard>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
