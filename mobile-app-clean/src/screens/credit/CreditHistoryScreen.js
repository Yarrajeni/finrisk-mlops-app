import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { API_URL, ENDPOINTS } from '../../constants/api';
import { COLORS } from '../../theme/colors';
import { commonStyles } from '../../theme/styles';
import ScreenHeader from '../../components/ScreenHeader';
import RiskBadge from '../../components/RiskBadge';

export default function CreditHistoryScreen({ navigation }) {
  const [history, setHistory] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchHistory = async () => {
    try {
      const response = await fetch(`${API_URL}${ENDPOINTS.history('credit')}`);
      const data = await response.json();
      setHistory(data);
    } catch (e) {}
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchHistory();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScreenHeader title="Credit Logs" showBack />
      <ScrollView 
        contentContainerStyle={commonStyles.scrollContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={COLORS.primary} />}
      >
        <Text style={commonStyles.sectionTitle}>XAI Audit Trail</Text>
        
        {history.length === 0 ? (
          <View style={{alignItems: 'center', marginTop: 50}}>
            <Ionicons name="document-text-outline" size={60} color="#2E2E3E" />
            <Text style={{color: '#6A6A8C', marginTop: 10}}>No logs found in secure ledger.</Text>
          </View>
        ) : (
          history.map((log, index) => (
            <TouchableOpacity 
              key={index} 
              style={[commonStyles.glassCard, { padding: 16, borderColor: log.risk_score > 60 ? COLORS.error : COLORS.primary }]}
              onPress={() => navigation.navigate('CreditLogDetail', { log })}
            >
              <View style={commonStyles.row}>
                <View>
                  <Text style={commonStyles.cardHeader}>{new Date(log.timestamp).toLocaleDateString()}</Text>
                  <Text style={{color: '#FFF', fontSize: 16, marginVertical: 4}}>{log.recommendation}</Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                  <Text style={{ color: log.risk_score > 60 ? COLORS.error : COLORS.primary, fontSize: 20, fontWeight: 'bold' }}>
                    {log.risk_score}
                  </Text>
                  <Text style={{color: '#6A6A8C', fontSize: 10}}>SCORE</Text>
                </View>
              </View>
              <Text style={{color: '#A0A0C0', fontSize: 12, fontStyle: 'italic', marginTop: 8}} numberOfLines={1}>
                " {log.explanation} "
              </Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
