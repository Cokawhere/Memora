import { View, StyleSheet, FlatList } from "react-native";
import { products } from "../utils/data";
import { useRoute, useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import OccasionItem from "../components/OccasionItem";
import { useLayoutEffect,useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContext';

const { COLORS } = useContext(ThemeContext);
export default function OccasionOverViewScreen({ }) {
    const route = useRoute();
    const navigation = useNavigation();
    const occasionId = route.params.occasionId;
    const productsTitle = route.params?.occasionTitle || "occasion";

    function renderOccasionItems({ item, ...itemData }) {
        function goToProductDetailsScreen() {
            navigation.navigate("productDetails", item);
        }
        return (
            <OccasionItem
                title={item.title}
                imageUrl={item.imageUrl}
                onPress={goToProductDetailsScreen}
            />
        );
    }

    const displayedProducts = products.filter((product) => {
        return product.occasionIds.includes(occasionId);
    });
    useLayoutEffect(() => {
        navigation.setOptions({
            title: productsTitle,
        });
    }, [navigation, occasionId]);

    return (
        <View style={{ flex: 1, }}>
            <FlashList
                data={displayedProducts}
                masonry={true}
                numColumns={2}
                keyExtractor={(item) => item.id}
                style={styles.container}
                renderItem={renderOccasionItems}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.backgroundLight,

    },
});
