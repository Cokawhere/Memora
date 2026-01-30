import { View, Text, StyleSheet, Switch } from "react-native";
import { useContext, useMemo } from "react";
import {
    DrawerItemList,
    DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../contexts/ThemeContext";

export default function CustomDrawerContent(props) {
    const { COLORS, isDark, toggleTheme } = useContext(ThemeContext);

    return (
        <DrawerContentScrollView
            {...props}
            style={{
                backgroundColor: COLORS.primary,
            }}
        >
            <View style={[styles.headerSection, {
                borderBottomColor: COLORS.white,
            }]}>
                <Text
                    style={[
                        styles.headerText,
                        {
                            color: COLORS.white,
                            textShadowColor: isDark ? "#f5a6d3" : "#efdbe6",
                        },
                    ]}
                >
                    Memora
                </Text>
            </View>

            <DrawerItemList {...props} />

            <View style={[styles.separator, {
                borderTopColor: COLORS.white,
            }]}>
                <View style={styles.themeSection}>
                    <Ionicons
                        name={isDark ? "moon" : "sunny"}
                        size={30}
                        color={COLORS.primaryDark}
                    />
                    <Text
                        style={[
                            styles.themeName,
                            {
                                color: COLORS.white,
                                textShadowColor: isDark ? "#f5a6d3" : "#ffffff",
                            },
                        ]}
                    >
                        {isDark ? "Dark" : "Light"}
                    </Text>
                    <Switch
                        trackColor={{ false: COLORS.white, true: COLORS.primaryDark }}
                        thumbColor={isDark ? COLORS.white : COLORS.primaryDark}
                        onValueChange={toggleTheme}
                        value={isDark}
                        style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    );
}
const styles = StyleSheet.create({
    headerSection: {
        height: "20%",
        borderBottomWidth: 1,
        marginVertical: 14,
    },
    headerText: {
        fontSize: 31,
        fontWeight: "bold",
        fontStyle: "italic",
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5,
    },
    separator: {
        borderTopWidth: 1,
        marginVertical: 14,
    },
    themeSection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    themeName: {
        fontSize: 27,
        fontWeight: "bold",
        fontStyle: "italic",
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5,
    },
});
