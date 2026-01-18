import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFontsLoader } from '../../utils/useFontsLoader';
const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();

  const fontsLoaded = useFontsLoader();
  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <FontAwesome name="paw" size={28} color={ORANGE} />
        <Text style={styles.headerTitle}>matchau<Text style={styles.titleAccent}>DOG</Text></Text>
      </View>

      <View style={styles.main}
      >
        <ImageBackground
          source={require('../../assets/images/screen.png')}
          style={styles.card}
          imageStyle={styles.cardImage}
        >
          <View style={styles.cardOverlay} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Match, Connect, Play</Text>
            <Text style={styles.cardSubtitle}>Find the perfect playmate for your furry friend today.</Text>
          </View>
        </ImageBackground>

        <View style={styles.pager}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('register')} activeOpacity={0.9}>
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => router.push('login')} activeOpacity={0.9}>
          <Text style={styles.secondaryButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>By joining, you agree to our Terms of Service</Text>
      </View>
    </SafeAreaView>
  );
}

const ORANGE = '#FF8C1A';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#0e0a06' 
  },
  background: { 
    width, 
    height 
  },
  overlay: { 
    ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.45)' },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: Math.max(40, height * 0.12),
  },
  brand: { alignItems: 'center', marginBottom: 16 },
  title: { color: '#fff', fontSize: 48, fontWeight: '800', letterSpacing: 0.5, textAlign: 'center' },
  titleAccent: { color: ORANGE },
  subtitle: { color: 'rgba(255,255,255,0.9)', fontSize: 16, textAlign: 'center', marginBottom: 24, lineHeight: 24 },
  primaryButton: {
    width: '100%',
    backgroundColor: ORANGE,
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 14,
  },
  primaryButtonText: { color: '#111', fontWeight: '700', fontSize: 18 },
  link: { color: '#fff', fontSize: 16, marginBottom: 18 },
  legal: { color: 'rgba(255,255,255,0.7)', fontSize: 12, textAlign: 'center' },
  // New styles for mock layout
  topHeader: {
    paddingTop: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 12,
  },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: '700', marginLeft: 8 },
  main: { flex: 1, width: '100%', alignItems: 'center', paddingHorizontal: 20 },
  card: {
    width: '100%',
    height: Math.round(height * 0.55),
    borderRadius: 28,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  cardImage: { resizeMode: 'cover' },
  cardOverlay: { position: 'absolute', left: 0, right: 0, bottom: 0, height: '45%', backgroundColor: 'rgba(0,0,0,0.35)' },
  cardContent: { position: 'absolute', left: 20, right: 20, bottom: 26 },
  cardTitle: { color: '#fff', fontSize: 34, fontWeight: '800', marginBottom: 8 },
  cardSubtitle: { color: 'rgba(255,255,255,0.9)', fontSize: 16, lineHeight: 22 },
  pager: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 18, marginBottom: 24 },
  dot: { width: 8, height: 8, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.25)', marginHorizontal: 6 },
  dotActive: { width: 28, height: 8, borderRadius: 8, backgroundColor: ORANGE },
  primaryButton: {
    width: '90%',
    backgroundColor: ORANGE,
    paddingVertical: 18,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: ORANGE,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 6,
  },
  primaryButtonText: { color: '#111', fontWeight: '800', fontSize: 18 },
  secondaryButton: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.06)',
    paddingVertical: 16,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 8,
  },
  secondaryButtonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  footer: { color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 8, marginBottom: 12 },
});


