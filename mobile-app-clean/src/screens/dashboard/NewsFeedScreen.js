import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import GlassCard from '../../components/GlassCard';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';

export default function NewsFeedScreen({ navigation }) {
  const news = [
    { title: 'Global Markets Volatility Rises', source: 'Financial Times', time: '10m ago', category: 'Markets' },
    { title: 'AI Regulation Updates for 2026', source: 'TechCrunch', time: '1h ago', category: 'Policy' },
    { title: 'Crypto Liquidity Reaches Record High', source: 'CoinDesk', time: '3h ago', category: 'Crypto' },
    { title: 'New Fraud Patterns Detected in EU', source: 'Risk Intelligence', time: '5h ago', category: 'Fraud' },
    { title: 'Interest Rate Decisions Expected Today', source: 'Reuters', time: '6h ago', category: 'Economy' },
  ];

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Market Intelligence" navigation={navigation} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <Text style={globalStyles.sectionTitle}>Top Headlines</Text>
        {news.map((item, index) => (
          <GlassCard key={index}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8}}>
               <Text style={{color: colors.primary, fontSize: 12, fontWeight: 'bold'}}>{item.category.toUpperCase()}</Text>
               <Text style={{color: '#A0A0C0', fontSize: 12}}>{item.time}</Text>
            </View>
            <Text style={{color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>{item.title}</Text>
            <Text style={{color: '#8A8AA8', fontSize: 14}}>Source: {item.source}</Text>
          </GlassCard>
        ))}

        <View style={[globalStyles.glassCard, {marginTop: 20, alignItems: 'center'}]}>
           <Text style={{color: colors.textSecondary, fontStyle: 'italic'}}>End of updates for now. Stay tuned for live market shifts.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
