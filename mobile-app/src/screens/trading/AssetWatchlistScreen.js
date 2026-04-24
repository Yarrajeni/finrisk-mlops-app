import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const watchlist = [
  { name: 'Bitcoin', ticker: 'BTC', price: '₹67,412', change: '+2.34%', signal: 'BUY', positive: true },
  { name: 'Ethereum', ticker: 'ETH', price: '₹3,210', change: '-1.20%', signal: 'HOLD', positive: false },
  { name: 'Solana', ticker: 'SOL', price: '₹168', change: '+5.80%', signal: 'BUY', positive: true },
  { name: 'BNB', ticker: 'BNB', price: '₹412', change: '+0.90%', signal: 'HOLD', positive: true },
  { name: 'XRP', ticker: 'XRP', price: '₹0.582', change: '-3.10%', signal: 'SELL', positive: false },
  { name: 'DOGE', ticker: 'DOGE', price: '₹0.162', change: '+8.40%', signal: 'BUY', positive: true },
];

const sigColor = (s) => s === 'BUY' ? colors.success : s === 'SELL' ? colors.danger : colors.warning;

export default function AssetWatchlistScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Asset Watchlist" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>AI-Enhanced Watchlist</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>6 Assets Tracked</Text>
          <Text style={[globalStyles.cardCaption, { marginTop: 6 }]}>Signals auto-update from AI Trading Engine every 15 minutes.</Text>
        </GlassCard>

        {watchlist.map((item, i) => (
          <GlassCard key={i} style={{ marginBottom: 10 }}>
            <View style={globalStyles.row}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: colors.primary + '22', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: colors.primary, fontWeight: '800', fontSize: 11 }}>{item.ticker}</Text>
                </View>
                <View>
                  <Text style={{ color: colors.textPrimary, fontWeight: '700', fontSize: 15 }}>{item.name}</Text>
                  <Text style={{ color: item.positive ? colors.success : colors.danger, fontWeight: '600', fontSize: 13 }}>{item.change}</Text>
                </View>
              </View>
              <View style={{ alignItems: 'flex-end', gap: 6 }}>
                <Text style={{ color: colors.textPrimary, fontWeight: '700' }}>{item.price}</Text>
                <View style={[globalStyles.tag, { backgroundColor: sigColor(item.signal) + '22' }]}>
                  <Text style={[globalStyles.tagText, { color: sigColor(item.signal) }]}>{item.signal}</Text>
                </View>
              </View>
            </View>
          </GlassCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
