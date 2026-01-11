import { useEffect, useState, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { View, Text, StatusBar } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // ← هنا حط كل اللي عايز تحمله قبل ما الـ app يظهر
        // مثال:
        // await Font.loadAsync({ ... });
        // await AsyncStorage.getItem('userToken');
        // await fetchSomeInitialData();

        // لو عايز تشوف الـ splash أطول (للاختبار بس)
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn("Splash preparation error:", e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} onLayout={onLayoutRootView}>
        <Text>Welcome to Memora</Text>
      </View>
    </>

  );
}