import { View, Text, Pressable, StyleSheet, Image } from "react-native";

export default function CategoriyGridTile({ title, color, imageUrl, onPress }) {
    return (
        <View style={[styles.gridItem]}>
            <Pressable
                style={({ pressed }) => [
                    styles.styleButton,
                    pressed && styles.pressableStyle,
                ]}
                onPress={onPress}
            >
                <View style={styles.inerContainer}>
                    <Image source={{ uri: imageUrl }} resizeMode="cover" style={styles.imageStyle} />
                    <View style={styles.overLay}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 4,
        height: 150,
        borderRadius: 10,
        overflow: "hidden",
        elevation: 4,

    },
    inerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        overflow: "hidden",
    },
    styleButton: {
        flex: 1,
    },
    title: {
        position: "absolute",
        color: "#fff",
        fontSize: 23,
        fontWeight: "bold",
        textAlign: "center",
        textShadowColor: "#000",
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
    pressableStyle: {
        opacity: 0.7,
        backgroundColor: "#ffff",
    },
    imageStyle: {
        width: "100%",
        height: "100%",

    },
    overLay: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#302e2e3b",
        borderRadius: 10,

    }
});
