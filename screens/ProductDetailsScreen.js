import {
    View,
    Text,
    ScrollView,
    Image,
    Pressable,
    StyleSheet,
    ImageBackground,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState, useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import { useFavorites } from "../hooks/useFavorites";

export default function ProductDetailsScreen() {
    const route = useRoute();
    const data = route.params;
    const imageUrl = data.imageUrl;
    const { isFavorite, toggleFavorite } = useFavorites();
    const favorite = isFavorite(data.id);

    return (
        <ImageBackground
            source={{ uri: imageUrl }}
            resizeMode="cover"
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.imageConatiner}>
                    <Image
                        source={{ uri: imageUrl }}
                        style={[styles.productDetailsImageStyle]}
                        resizeMode="cover"
                    />
                </View>

                <View style={styles.favIcon}>
                    <Pressable onPress={() => toggleFavorite(data)}>
                        <Ionicons
                            name={favorite ? "heart" : "heart-outline"}
                            color={favorite ? COLORS.primary : "#f5a6d3"}
                            size={45}
                        />
                    </Pressable>
                </View>

                <View style={styles.titleIconContainer}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.price}>
                        <Text style={styles.creactorFront}>{"Price : "}</Text>
                        {data.priceRange}
                    </Text>
                    <Text style={styles.creator}>
                        <Text style={styles.creactorFront}>{"Creator : "}</Text>
                        {data.creator}
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#211e216c",
        paddingBottom: 400,
        width: "100%",
    },
    imageConatiner: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
    productDetailsImageStyle: {
        borderRadius: 40,
        width: 370,
        height: 350,
        borderWidth: 1,
        borderColor: COLORS.white,
    },
    favIcon: {
        position: "absolute",
        top: 18,
        right: 10,
    },
    titleIconContainer: {
        marginHorizontal: 15,
        marginTop:10,
    },
    title: {
        color: COLORS.primary,
        fontSize: 25,
        fontWeight: "bold",
        fontStyle: "italic",
        textShadowColor: "#f5a6d3",
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
    creator: {
        color: COLORS.primary,
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic",
    },
    price: {
        color: COLORS.primaryDark,
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "italic",
        textShadowColor: "#1d0b15",
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
    creactorFront: {
        color: "#edaacf",
        fontSize: 20,
        fontWeight: "bold",
        textShadowColor: "#1d0b15",
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
    
});
