import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, Image } from 'react-native';
import { GlassView } from '../components/GlassView';

export default function DeveloperScreen() {
  return (
    <View style={styles.container}>
      <GlassView style={styles.card}>
        <Image source={require('../../assets/tv-icon.png')} style={styles.avatar} />
        <Text style={styles.name}>ENG_AZAWY</Text>
        <Text style={styles.sub}>تطبيق i heat سينما أونلاين</Text>

        <TouchableOpacity style={styles.linkBtn} onPress={() => Linking.openURL('https://github.com')}>
          <Text style={styles.linkText}>حساب GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkBtn} onPress={() => Linking.openURL('https://t.me')}>
          <Text style={styles.linkText}>قناة التليجرام</Text>
        </TouchableOpacity>
      </GlassView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#09090b', justifyContent: 'center', padding: 20 },
  card: { padding: 24, alignItems: 'center' },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 16 },
  name: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  sub: { color: '#a1a1aa', marginVertical: 8 },
  linkBtn: { backgroundColor: 'rgba(255,255,255,0.1)', width: '100%', padding: 12, borderRadius: 12, marginTop: 12, alignItems: 'center' },
  linkText: { color: '#38bdf8', fontWeight: 'bold' }
});
