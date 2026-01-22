import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"

// const storage = new MMKV({ id: "memora-favorites" });
const FAVORITES_KEY = 'memora_favorites';
export const useFavorites = () => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                const save = await AsyncStorage.getItem(FAVORITES_KEY);
                if (save) {
                    setFavorites(JSON.parse(save));
                }
            } catch (e) {
                console.log(`can't load the fav products: ${e}`);
            }
        };
        load();
    }, []);
    const addFavorites = (product) => {
        try {
            const newFav = [...favorites, product];
            AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFav));
            setFavorites(newFav);
        } catch (e) {
            console.log(`faild to add product to favorites: ${e}`);
        }
    };
    const removeFavorites = (productId) => {
        try {
            const newFav = favorites.filter((prod) => prod.id !== productId.id);
            AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFav));
            setFavorites(newFav);
        } catch (e) {
            console.log(`faild to remove product from favorites: ${e}`);
        }
    };
    const isFavorite = (productId) => {
        return favorites.some((p) => p.id === productId);
    };

    const toggleFavorite = (product) => {
        if (isFavorite(product.id)) {
            removeFavorites(product);
        } else {
            addFavorites(product);
        }
    };

    return { isFavorite, toggleFavorite, favorites };
};
