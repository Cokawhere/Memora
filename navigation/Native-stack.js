import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OccasionOverViewScreen from "../screens/OccasionOverViewScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import DrawerNavigation from "../navigation/Drawer"
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


const Stack = createNativeStackNavigator();
export default function Nativestack() {
    const { COLORS } = useContext(ThemeContext);
    if (!COLORS) return null;

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor:COLORS.primary,
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
                name="drawer"
                component={DrawerNavigation}
                options={{
                    title: "Home",
                    headerShown: false,
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
        </Stack.Navigator>
    )
}