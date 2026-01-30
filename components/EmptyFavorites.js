import { View, Text, StyleSheet } from "react-native";
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react'


export default function EmptyFavorites() {
    const { COLORS } = useContext(ThemeContext);

    return (
        <View style={styles.emptyContainer}>
            <Text style={[styles.emptyTitle, { color: COLORS.primary, }]}>
                No favorites yet
            </Text>
            <Text style={[styles.emptyText, { color: COLORS.primaryDark, }]}>
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
        marginTop: 300,
    },
    emptyTitle: {
        fontSize: 22,
        fontWeight: "bold",

        marginBottom: 8,
    },
    emptyText: {
        fontSize: 16,
        textAlign: "center",
    },
});