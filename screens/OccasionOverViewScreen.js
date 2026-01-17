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
    const productsTitle = route.params?.occasionTitle || 'occasion';


    const displayedProducts = products.filter((product) => {
        return product.occasionIds.includes(occasionId);
    });
    useLayoutEffect(() => {
        navigation.setOptions({
            title: productsTitle,
        });
    }, [navigation, occasionId]);

    return (
        <View style={styles.container}>
            <FlashList
                data={displayedProducts}
                masonry={true}
                numColumns={2}
                estimatedItemSize={220}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <OccasionItem
                        title={item.title}
                        imageUrl={item.imageUrl}
                    />
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 6,
        paddingHorizontal: 5,
        backgroundColor: COLORS.backgroundLight
    },
});
