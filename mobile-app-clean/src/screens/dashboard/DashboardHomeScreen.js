import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { API_URL } from '../../constants/api';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';
import StatCard from '../../components/StatCard';

export default function DashboardHomeScreen({ navigation }) {
  const [stats, setStats] = useState({ total_assessments: 0, avg_credit_risk: 0, avg_fraud_risk: 0 });
  const [refreshing, setRefreshing] = useState(false);

  const fetchStats = async () => {
    try {
      const response = await fetch(`${API_URL}/stats`);
      const data = await response.json();
      setStats(data);
    } catch (e) {}
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchStats();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Risk Dashboard" showBack={false} navigation={navigation} />
      
      <ScrollView 
        contentContainerStyle={globalStyles.scrollContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.primary} />}
      >
        <View style={globalStyles.row}>
          <Text style={globalStyles.sectionTitle}>Global Analytics</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SystemHealth')}>
            <Ionicons name="pulse" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <GlassCard>
          <Text style={globalStyles.cardHeader}>System Status</Text>
          <Text style={globalStyles.cardValue}>Operational</Text>
          <Text style={globalStyles.cardCaption}>Total Assessments Logged: {stats.total_assessments}</Text>
        </GlassCard>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <StatCard 
            label="Avg Credit Risk" 
            value={stats.avg_credit_risk} 
            icon="card" 
            accent={colors.warning} 
            onPress={() => navigation.navigate('RiskScoreGauge')}
          />
          <StatCard 
            label="Avg Fraud Risk" 
            value={stats.avg_fraud_risk} 
            icon="shield-half" 
            accent={colors.danger} 
            onPress={() => navigation.navigate('RiskScoreGauge')}
          />
        </View>

        <TouchableOpacity 
          style={[globalStyles.glassCard, {marginTop: 10}]}
          onPress={() => navigation.navigate('GlobalRiskHeatmap')}
        >
          <View style={globalStyles.row}>
            <View>
              <Text style={globalStyles.cardHeader}>Risk Exposure</Text>
              <Text style={globalStyles.smallCardValue}>Global Heatmap</Text>
            </View>
            <Ionicons name="map-outline" size={32} color={colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[globalStyles.glassCard, {marginTop: 10}]}
          onPress={() => navigation.navigate('PortfolioOverview')}
        >
          <View style={globalStyles.row}>
            <View>
              <Text style={globalStyles.cardHeader}>Asset Allocation</Text>
              <Text style={globalStyles.smallCardValue}>Portfolio Summary</Text>
            </View>
            <Ionicons name="pie-chart-outline" size={32} color={colors.purple} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[globalStyles.glassCard, {marginTop: 10}]}
          onPress={() => navigation.navigate('NewsFeed')}
        >
          <View style={globalStyles.row}>
            <View>
              <Text style={globalStyles.cardHeader}>Market Intelligence</Text>
              <Text style={globalStyles.smallCardValue}>Latest News Feed</Text>
            </View>
            <Ionicons name="newspaper-outline" size={32} color={colors.warning} />
          </View>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}
