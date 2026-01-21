import { useEffect, useState, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OccasionOverViewScreen from "./screens/OccasionOverViewScreen.js";
import { COLORS } from "./constants/colors.js";
import ProductDetailsScreen from "./screens/ProductDetailsScreen.js";
import FavoritesScreen from "./screens/FavoritesScreen.js";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

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
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: COLORS.primary,
              },
              headerTintColor: COLORS.white,
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen
              name="categories"
              component={CategoriesScreen}
              options={{
                title: "Home",
              }}
            />
            <Stack.Screen
              name="occsionDetails"
              component={OccasionOverViewScreen}
            />
            <Stack.Screen
              name="productDetails"
              component={ProductDetailsScreen}
              options={{
                title: "Product Details",
              }}
            />
            <Stack.Screen
              name="favorites"
              component={FavoritesScreen}
              options={{
                title: "Favorites",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}
