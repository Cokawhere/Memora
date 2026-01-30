import { View, Text, StyleSheet } from "react-native";
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react'


const { COLORS } = useContext(ThemeContext);
export default function EmptyFavorites() {
return (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>
                No favorites yet 
            </Text>
            <Text style={styles.emptyText}>
                Go and grab some products you love 
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        marginTop:300,
    },
    emptyTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: COLORS.primary,
        marginBottom: 8,
    },
    emptyText: {
        fontSize: 16,
        color: COLORS.primaryDark,
        textAlign: "center",
    },
});