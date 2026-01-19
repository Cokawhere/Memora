import { View, StyleSheet, FlatList } from "react-native";
import { products } from "../utils/data";
import { useRoute, useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import OccasionItem from "../components/OccasionItem";
import { useLayoutEffect } from "react";
import { COLORS } from "../constants/colors";

export default function OccasionOverViewScreen({ }) {
    const route = useRoute();
    const navigation = useNavigation();
    const occasionId = route.params.occasionId;
    const productsTitle = route.params?.occasionTitle || "occasion";

    function renderOccasionItems({ item, ...itemData }) {
        function goToProductDetailsScreen() {
            navigation.navigate("productDetails", {
                title: item.title,
                priceRange: item.priceRange,
                image: item.imageUrl,
                creator: item.creator
            });
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
        <View style={{ flex: 1 }}>
            <FlashList
                data={displayedProducts}
                masonry={true}
                numColumns={2}
                onPress={displayedProducts}
                estimatedItemSize={220}
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
