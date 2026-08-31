import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { tmdb, getImageUrl } from '../api/tmdb';
import { GlassView } from '../components/GlassView';

export default function HomeScreen({ navigation }) {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    tmdb.get('/trending/all/day').then(res => setTrending(res.data.results));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/tv-icon.png')} style={styles.tvIcon} />
        <Text style={styles.logoText}>i heat</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Developer')}>
          <GlassView style={styles.devBtn}>
            <Text style={{ color: '#fff', fontSize: 12 }}>المطور</Text>
          </GlassView>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>الأكثر تداولاً</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {trending.map(item => (
            <TouchableOpacity 
              key={item.id} 
              onPress={() => navigation.navigate('Detail', { id: item.id, type: item.media_type || 'movie' })}
            >
              <GlassView style={styles.card}>
                <Image source={{ uri: getImageUrl(item.poster_path) }} style={styles.poster} />
                <Text style={styles.title} numberOfLines={1}>{item.title || item.name}</Text>
              </GlassView>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#09090b', paddingTop: 50, paddingHorizontal: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  tvIcon: { width: 36, height: 36, borderRadius: 8 },
  logoText: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  devBtn: { paddingHorizontal: 12, paddingVertical: 6 },
  sectionTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginVertical: 12 },
  card: { width: 140, marginRight: 14, padding: 8 },
  poster: { width: '100%', height: 190, borderRadius: 16 },
  title: { color: '#fff', marginTop: 8, fontSize: 13, textAlign: 'center' }
});
