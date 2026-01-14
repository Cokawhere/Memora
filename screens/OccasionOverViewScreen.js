import { View, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { products } from "../utils/data";
import { FlashList } from "@shopify/flash-list";
import OccasionItem from "../components/OccasionItem";

export default function OccasionOverViewScreen({ }) {
    const rout = useRoute();
    const occasionId = rout.params.occasionId;
    const displayedProducts = products.filter((product) => {
        return product.occasionIds.includes(occasionId);
    });

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
        margin: 4,
    },
});
