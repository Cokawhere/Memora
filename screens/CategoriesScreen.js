import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { occasions } from "../utils/data";
import CategoriyGridTile from "../components/categoriyGridTile";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

const { COLORS } = useContext(ThemeContext);

export default function CategoriesScreen({ }) {
    const Navigation = useNavigation();
    function renderFavorites() {
        Navigation.navigate("favorites");
    };
    function renderOccasion({ item, ...itemData }) {
        function renderOccasionDetails() {
            Navigation.navigate("occsionDetails", {
                occasionId: item.id, occasionTitle: item.title
            });
        }
        return (

            <CategoriyGridTile
                title={item.title}
                color={item.color}
                imageUrl={item.imageUrl}
                onPress={renderOccasionDetails}
            />
        );
    }
    return (
        <View style={{ flex: 1, }}>
            <FlatList
                data={occasions}
                keyExtractor={(occasion) => occasion.id}
                renderItem={renderOccasion}
                numColumns={2}
                style={styles.homePageStyle}
            />
            <View style={styles.favIcon}>
                <Pressable onPress={renderFavorites} >
                    <Ionicons
                        name={"bookmark"}
                        color={COLORS.primary}
                        size={40}
                    />
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    homePageStyle: {
        flex: 1,
        padding: 4,
        backgroundColor: COLORS.backgroundLight
    },
    favIcon: {
        position: "absolute",
        bottom: 60,
        right: 30,
        borderRadius: 50,
        width: 70,
        height: 70,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: 'center',
        elevation: 10,
    },

})
