import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../../theme/colors';
import { globalStyles } from '../../theme/styles';
import GlassCard from '../../components/GlassCard';
import ScreenHeader from '../../components/ScreenHeader';

const trades = [
  { type: 'BUY', asset: 'BTC', amount: '0.05', price: '₹64,200', total: '₹3,210', date: 'Apr 22' },
  { type: 'SELL', asset: 'ETH', amount: '1.2', price: '₹3,280', total: '₹3,936', date: 'Apr 21' },
  { type: 'BUY', asset: 'SOL', amount: '20', price: '₹155', total: '₹3,100', date: 'Apr 20' },
  { type: 'BUY', asset: 'BNB', amount: '8', price: '₹400', total: '₹3,200', date: 'Apr 18' },
  { type: 'SELL', asset: 'XRP', amount: '5000', price: '₹0.60', total: '₹3,000', date: 'Apr 15' },
  { type: 'BUY', asset: 'DOGE', amount: '20000', price: '₹0.15', total: '₹3,000', date: 'Apr 12' },
];

export default function TradeHistoryScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Trade History" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <GlassCard borderColor={colors.primary}>
          <Text style={globalStyles.cardLabel}>All Executed Trades</Text>
          <Text style={{ color: colors.textPrimary, fontSize: 20, fontWeight: '800' }}>{trades.length} Trades</Text>
        </GlassCard>

        {trades.map((t, i) => (
          <GlassCard key={i} style={{ marginBottom: 10 }} borderColor={(t.type === 'BUY' ? colors.success : colors.danger) + '44'}>
            <View style={globalStyles.row}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <View style={[globalStyles.tag, { backgroundColor: (t.type === 'BUY' ? colors.success : colors.danger) + '22' }]}>
                  <Text style={[globalStyles.tagText, { color: t.type === 'BUY' ? colors.success : colors.danger }]}>{t.type}</Text>
                </View>
                <View>
                  <Text style={{ color: colors.textPrimary, fontWeight: '700' }}>{t.asset} · {t.amount}</Text>
                  <Text style={globalStyles.cardCaption}>{t.price} · {t.date}</Text>
                </View>
              </View>
              <Text style={{ color: colors.textPrimary, fontWeight: '700', fontSize: 15 }}>{t.total}</Text>
            </View>
          </GlassCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
