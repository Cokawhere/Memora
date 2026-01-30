import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
    const { COLORS } = useContext(ThemeContext);
    if (!COLORS) return null;
    return (
        <Drawer.Navigator
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
                drawerContentStyle: {
                    backgroundColor: COLORS.primary,
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
                    drawerIcon: ({ color, size }) => (<Ionicons name="list" color={color} size={size} />)

                }}
            />
            <Drawer.Screen
                name="favorites"
                component={FavoritesScreen}
                options={{
                    title: "Favorites",
                    drawerIcon: ({ color, size }) => (<Ionicons name="heart" color={color} size={size} />)
                }}
            />
        </Drawer.Navigator>
    );
}
