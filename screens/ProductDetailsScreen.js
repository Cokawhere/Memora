import { View, Text } from 'react-native'
import { useRoute, useNavigation } from "@react-navigation/native";


export default function ProductDetailsScreen() {
    const route = useRoute();
    const data = route.params

    return (
        <View>
            <Text>{`  ${data.priceRange} ${data.title}`}</Text>
        </View>
    )
}