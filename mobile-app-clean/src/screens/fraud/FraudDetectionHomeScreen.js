import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function FraudDetectionHomeScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Fraud AI" showBack={false} navigation={navigation} />
      
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <View style={globalStyles.row}>
          <Text style={globalStyles.sectionTitle}>Real-time Scan</Text>
          <TouchableOpacity onPress={() => navigation.navigate('FraudModelInfo')}>
            <Ionicons name="information-circle-outline" size={24} color={colors.danger} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={[globalStyles.submitButton, {backgroundColor: colors.danger}]}
          onPress={() => navigation.navigate('NewScan')}
        >
          <Ionicons name="scan-outline" size={24} color="#000" style={{marginRight: 10}} />
          <Text style={globalStyles.submitButtonText}>Scan Transaction</Text>
        </TouchableOpacity>

        <View style={{marginTop: 20}}>
          <Text style={[globalStyles.sectionTitle, {fontSize: 20}]}>Security Center</Text>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <ToolCard 
              title="Live Monitor" 
              icon="eye-outline" 
              color={colors.danger}
              onPress={() => navigation.navigate('LiveMonitor')}
            />
            <ToolCard 
              title="Flagging Rules" 
              icon="flag-outline" 
              color={colors.danger}
              onPress={() => navigation.navigate('FlaggingRules')}
            />
            <ToolCard 
              title="Fraud Logs" 
              icon="list-outline" 
              color={colors.danger}
              onPress={() => navigation.navigate('FraudHistory')}
            />
            <ToolCard 
              title="Alert Config" 
              icon="notifications-outline" 
              color={colors.danger}
              onPress={() => navigation.navigate('AlertSettings')}
            />
          </View>
        </View>

        <GlassCard style={{marginTop: 20, borderColor: colors.danger}}>
          <Text style={[globalStyles.cardHeader, {color: colors.danger}]}>Security Alert</Text>
          <View style={globalStyles.row}>
             <View>
                <Text style={{color: '#FFF', fontSize: 16}}>3 Suspicious Activities</Text>
                <Text style={{color: '#A0A0C0', fontSize: 12}}>Flagged in the last 24h</Text>
             </View>
             <Ionicons name="warning" size={32} color={colors.danger} />
          </View>
        </GlassCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const ToolCard = ({ title, icon, color, onPress }) => (
  <TouchableOpacity 
    style={[globalStyles.glassCard, {width: '48%', alignItems: 'center', padding: 20}]}
    onPress={onPress}
  >
    <Ionicons name={icon} size={32} color={color} />
    <Text style={{color: '#FFF', marginTop: 10, fontWeight: 'bold'}}>{title}</Text>
  </TouchableOpacity>
);
