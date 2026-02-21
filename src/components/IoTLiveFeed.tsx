import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Activity, Wind, Zap } from 'lucide-react-native';

export const IoTLiveFeed = ({ type, value, unit }: { type: string, value: string, unit: string }) => {
  const Icon = type === 'air' ? Wind : type === 'power' ? Zap : Activity;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon size={18} color="#00FFBD" />
        <Text style={styles.typeText}>{type.toUpperCase()} NODE</Text>
      </View>
      <Text style={styles.valueText}>{value} <Text style={styles.unitText}>{unit}</Text></Text>
      <View style={styles.liveIndicator}>
        <View style={styles.dot} />
        <Text style={styles.liveLabel}>LIVE DATA</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 15, backgroundColor: '#111', borderRadius: 12, borderLeftWidth: 3, borderLeftColor: '#00FFBD' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  typeText: { color: '#888', fontSize: 10, marginLeft: 6, fontWeight: 'bold' },
  valueText: { color: '#FFF', fontSize: 22, fontWeight: 'bold' },
  unitText: { fontSize: 12, color: '#666' },
  liveIndicator: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#00FFBD', marginRight: 5 },
  liveLabel: { color: '#00FFBD', fontSize: 9, fontWeight: 'bold' }
});
