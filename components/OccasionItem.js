import {
    View,
    Text,
    Image,
    StyleSheet,
    Pressable,
    Dimensions,
} from "react-native";
import { useState, useEffect } from "react";
const { width, height } = Dimensions.get("window");
export default function OccasionItem({ title, creator, priceRange, imageUrl }) {
    const [aspectRatio, setAspectRatio] = useState(0.75);

    useEffect(() => {
        if (imageUrl) {
            Image.getSize(
                imageUrl,
                (w, h) => setAspectRatio(w / h),
                (err) => console.log(err)
            );
        }
    }, [imageUrl]);
    const shortTitle = (title.slice(0, 15) +("..."));

    return (
        <View style={styles.productsPageContinar}>
            <Pressable>
                <View>
                    <Image
                        source={{ uri: imageUrl }}
                        style={[styles.productImage, { aspectRatio: aspectRatio }]}
                        resizeMode="cover"
                    />
                </View>
                <Text numberOfLines={1} ellipsizeMode="..." style={styles.title}>
                    {shortTitle}
                </Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    productsPageContinar: {
        maxWidth: (width - 20) / 2,
    },
    productImage: {
        width: "100%",
        borderRadius: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingBottom: 8,
        color: '#000000',
    }
});
