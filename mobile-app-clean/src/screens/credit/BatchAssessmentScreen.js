import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import GlassCard from '../../components/GlassCard';
import { COLORS } from '../../theme/colors';
import { commonStyles } from '../../theme/styles';
import { Ionicons } from '@expo/vector-icons';

export default function BatchAssessmentScreen() {
  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);

  const startBatch = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setCompleted(true);
    }, 3000);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScreenHeader title="Batch Processing" showBack />
      <ScrollView contentContainerStyle={commonStyles.scrollContent}>
        <GlassCard>
           <Text style={commonStyles.cardHeader}>Queue Status</Text>
           <Text style={{color: '#FFF', fontSize: 18}}>5 Pending Records</Text>
           <Text style={[commonStyles.cardCaption, {marginTop: 5}]}>Input source: cloud_sync_v2.csv</Text>
        </GlassCard>

        {!completed ? (
          <TouchableOpacity 
            style={[commonStyles.submitButton, {marginTop: 30}]} 
            onPress={startBatch}
            disabled={processing}
          >
            {processing ? <ActivityIndicator color="#000" /> : <Text style={commonStyles.submitButtonText}>Process All Records</Text>}
          </TouchableOpacity>
        ) : (
          <View style={[commonStyles.glassCard, {marginTop: 30, borderColor: COLORS.primary}]}>
             <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="checkmark-circle" size={32} color={COLORS.primary} />
                <Text style={{color: '#FFF', fontSize: 18, marginLeft: 15}}>Batch Complete</Text>
             </View>
             <Text style={{color: '#A0A0C0', marginTop: 10}}>5/5 records successfully processed and logged to ledger.</Text>
          </View>
        )}

        <Text style={commonStyles.sectionTitle}>Batch History</Text>
        <View style={commonStyles.glassCard}>
           <Text style={{color: '#FFF'}}>Batch #881 - 12 Records - Success</Text>
           <Text style={{color: '#6A6A8C', fontSize: 12}}>Yesterday at 4:30 PM</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
