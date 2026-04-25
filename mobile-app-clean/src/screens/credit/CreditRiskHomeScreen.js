import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

export default function CreditRiskHomeScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Credit Risk" showBack={false} navigation={navigation} />
      
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <View style={globalStyles.row}>
          <Text style={globalStyles.sectionTitle}>Model Control</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CreditModelInfo')}>
            <Ionicons name="information-circle-outline" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={globalStyles.submitButton}
          onPress={() => navigation.navigate('CreditAssessmentForm')}
        >
          <Ionicons name="add-circle-outline" size={24} color="#000" style={{marginRight: 10}} />
          <Text style={globalStyles.submitButtonText}>New Assessment</Text>
        </TouchableOpacity>

        <View style={{marginTop: 20}}>
          <Text style={[globalStyles.sectionTitle, {fontSize: 20}]}>Assessment Tools</Text>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <ToolCard 
              title="Simulator" 
              icon="calculator-outline" 
              onPress={() => navigation.navigate('CreditSimulator')}
            />
            <ToolCard 
              title="Batch Process" 
              icon="layers-outline" 
              onPress={() => navigation.navigate('BatchAssessment')}
            />
            <ToolCard 
              title="History Logs" 
              icon="time-outline" 
              onPress={() => navigation.navigate('CreditHistory')}
            />
            <ToolCard 
              title="PDF Reports" 
              icon="document-text-outline" 
              onPress={() => navigation.navigate('ReportPreview')}
            />
          </View>
        </View>

        <GlassCard style={{marginTop: 20}}>
          <Text style={globalStyles.cardHeader}>Recent Analysis</Text>
          <View style={globalStyles.row}>
             <View>
                <Text style={{color: '#FFF', fontSize: 16}}>Batch #402</Text>
                <Text style={{color: '#A0A0C0', fontSize: 12}}>Completed 2h ago</Text>
             </View>
             <Text style={{color: colors.primary, fontWeight: 'bold'}}>98.5% Accuracy</Text>
          </View>
        </GlassCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const ToolCard = ({ title, icon, onPress }) => (
  <TouchableOpacity 
    style={[globalStyles.glassCard, {width: '48%', alignItems: 'center', padding: 20}]}
    onPress={onPress}
  >
    <Ionicons name={icon} size={32} color={colors.primary} />
    <Text style={{color: '#FFF', marginTop: 10, fontWeight: 'bold'}}>{title}</Text>
  </TouchableOpacity>
);
