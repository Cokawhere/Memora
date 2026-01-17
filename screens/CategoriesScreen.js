import { FlatList, View, StyleSheet } from "react-native";
import { occasions } from "../utils/data";
import CategoriyGridTile from "../components/categoriyGridTile";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/colors";

export default function CategoriesScreen({ }) {
    const Navigation = useNavigation();

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
        </View>
    );
}
const styles = StyleSheet.create({
    homePageStyle: {
        flex: 1,
        padding: 4,
        backgroundColor: COLORS.backgroundLight
    }
})
