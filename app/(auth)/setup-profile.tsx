import { AntigravityBackground } from '@/components/ui/AntigravityBackground';
import BlurContainer from '@/components/ui/BlurContainer';
import { useTheme } from '@/hooks/useTheme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createAppStyles } from '../../theme/styles';

export default function SetupProfileScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = useMemo(() => createAppStyles(theme), [theme]);

  const [name, setName] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | null>(null);
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');

  const handleContinue = () => {
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.layout.container}>
      <AntigravityBackground
        colors={
          theme.dark
            ? ["#0606dfff", "#040427", "#040415ff", "#0606dfff", "#101064"]
            : ["#51a0e6ff", "#E6F3FF", "#D6EBFF", "#C2E0FF", "#B3D9FF"]
        }
        blurIntensity={100}
        shapeColor={theme.colors.background}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingVertical: theme.spacing.xl }}>
          <BlurContainer>
            <View style={{ marginBottom: theme.spacing.xl }}>
              <Text style={styles.typography.h2}>Tell us about your Dog</Text>
              <Text style={styles.typography.sub}>Help us find the perfect match!</Text>
            </View>

            <View style={styles.components.card}>
         
              <View style={{ marginBottom: theme.spacing.l }}>
                <Text style={[styles.typography.label, { marginBottom: theme.spacing.xs }]}>Name</Text>
                <TextInput
                  style={styles.components.input}
                  placeholder="Dog's Name"
                  placeholderTextColor={theme.colors.textSecondary}
                  value={name}
                  onChangeText={setName}
                />
              </View>

              <View style={{ marginBottom: theme.spacing.l }}>
                <Text style={[styles.typography.label, { marginBottom: theme.spacing.xs }]}>Gender</Text>
                <View style={{ flexDirection: 'row', gap: theme.spacing.m }}>
                  <TouchableOpacity
                    style={[
                      styles.components.btn,
                      { flex: 1, backgroundColor: gender === 'male' ? theme.colors.primary : theme.colors.card },
                      gender !== 'male' && { borderWidth: 1, borderColor: theme.colors.border }
                    ]}
                    onPress={() => setGender('male')}
                  >
                    <FontAwesome name="mars" size={20} color={gender === 'male' ? '#FFF' : theme.colors.textSecondary} style={{ marginRight: 8 }} />
                    <Text style={[styles.components.btnTxt, gender !== 'male' && { color: theme.colors.textSecondary }]}>Male</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.components.btn,
                      { flex: 1, backgroundColor: gender === 'female' ? theme.colors.primary : theme.colors.card },
                      gender !== 'female' && { borderWidth: 1, borderColor: theme.colors.border }
                    ]}
                    onPress={() => setGender('female')}
                  >
                    <FontAwesome name="venus" size={20} color={gender === 'female' ? '#FFF' : theme.colors.textSecondary} style={{ marginRight: 8 }} />
                    <Text style={[styles.components.btnTxt, gender !== 'female' && { color: theme.colors.textSecondary }]}>Female</Text>
                  </TouchableOpacity>
                </View>
              </View>

             
              <View style={{ marginBottom: theme.spacing.l }}>
                <Text style={[styles.typography.label, { marginBottom: theme.spacing.xs }]}>Breed (Optional)</Text>
                <TextInput
                  style={styles.components.input}
                  placeholder="e.g. Golden Retriever"
                  placeholderTextColor={theme.colors.textSecondary}
                  value={breed}
                  onChangeText={setBreed}
                />
              </View>

           
              <View style={{ marginBottom: theme.spacing.xl }}>
                <Text style={[styles.typography.label, { marginBottom: theme.spacing.xs }]}>Age (Optional)</Text>
                <TextInput
                  style={styles.components.input}
                  placeholder="Age in years"
                  placeholderTextColor={theme.colors.textSecondary}
                  value={age}
                  onChangeText={setAge}
                  keyboardType="numeric"
                />
              </View>

              <TouchableOpacity style={styles.components.btn} onPress={handleContinue}>
                <Text style={styles.components.btnTxt}>Continue</Text>
              </TouchableOpacity>
            </View>
          </BlurContainer>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
