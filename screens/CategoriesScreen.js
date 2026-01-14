import { FlatList } from "react-native";
import { occasions } from "../utils/data";
import CategoriyGridTile from "../components/categoriyGridTile";
import { useNavigation } from "@react-navigation/native";

export default function CategoriesScreen({ }) {
    const Navigation = useNavigation();

    function renderOccasion({ item, ...itemData }) {
        function renderOccasionDetails() {
            Navigation.navigate("occsionDetails", { occasionId: item.id });
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
        <FlatList
            data={occasions}
            keyExtractor={(occasion) => occasion.id}
            renderItem={renderOccasion}
            numColumns={2}
        />
    );
}
