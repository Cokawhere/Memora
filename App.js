import { useEffect, useState, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Nativestack from "./navigation/Native-stack"


SplashScreen.preventAutoHideAsync();


export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // await Font.loadAsync({ ... });
        // await AsyncStorage.getItem('userToken');
        // await fetchSomeInitialData();

        await new Promise((resolve) => setTimeout(resolve, 800));
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
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar barStyle={"light-content"} />
        <NavigationContainer>
          <Nativestack />
        </NavigationContainer>
      </View>
    </>
  );
}
