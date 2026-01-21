import { View, StyleSheet } from 'react-native'
import { useFavorites } from '../hooks/useFavorites'
import { FlashList } from "@shopify/flash-list";
import { useNavigation } from "@react-navigation/native";
import OccasionItem from '../components/OccasionItem';
import { COLORS } from '../constants/colors';

export default function FavoritesScreen() {
    const { favorites } = useFavorites();
    console.log(favorites);

    const navigation = useNavigation();
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
    return (
        <View style={{ flex: 1, }}>
            <FlashList
                data={favorites}
                masonry={true}
                numColumns={2}
                keyExtractor={(item) => item.id}
                style={styles.container}
                renderItem={renderOccasionItems}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.backgroundLight,

    },
})

