import { View, StyleSheet } from 'react-native'
import { useFavorites } from '../hooks/useFavorites'
import { FlashList } from "@shopify/flash-list";
import { useNavigation } from "@react-navigation/native";
import OccasionItem from '../components/OccasionItem';
import EmptyFavorites from '../components/EmptyFavorites';
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';


export default function FavoritesScreen() {
    const { COLORS } = useContext(ThemeContext);

    const { favorites } = useFavorites();

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
                style={{
                    backgroundColor: COLORS.backgroundLight,
                }}
                renderItem={renderOccasionItems}
                ListEmptyComponent={<EmptyFavorites />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
})

