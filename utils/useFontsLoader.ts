import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export function useFontsLoader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          ShadowsIntoLight_400Regular: require('@/assets/fonts/ShadowsIntoLight-Regular.ttf'),
        });
        setLoaded(true);
      } catch (e) {
        console.error('Error loading fonts', e);
      }
    }

    loadFonts();
  }, []);

  return loaded;
}
