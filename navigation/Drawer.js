import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import CustomDrawerContent from "../components/CustomDrawerContent";
import { SafeAreaView } from "react-native-safe-area-context";
const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
    const { COLORS } = useContext(ThemeContext);
    if (!COLORS) return null;
    return (
        <Drawer.Navigator
            drawerContent={(props) => (
                <SafeAreaView
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.primary,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        overflow: "hidden",
                    }}>
                    <CustomDrawerContent {...props} />
                </SafeAreaView>
            )}
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
                drawerStyle: { width: 280 },
                overlayColor: "rgba(0, 0, 0, 0.21)",
                drawerContentStyle: {
                    backgroundColor: COLORS.primary,
                    overflow: "hidden",

                },

                drawerInactiveTintColor: COLORS.white,
                drawerActiveTintColor: COLORS.background,
                drawerActiveBackgroundColor: COLORS.primaryDark,
            }}
        >
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="list" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="favorites"
                component={FavoritesScreen}
                options={{
                    title: "Favorites",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="heart" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}
