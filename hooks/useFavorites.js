import { useEffect, useState } from "react";
import { MMKV } from "react-native-mmkv";

const storage = new MMKV({ id: "memora-favorites" });
export const useFavorites = () => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const load = () => {
            try {
                const save = storage.getString("favorites");
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
            storage.set("favorites", JSON.stringify(newFav));
            setFavorites(newFav);
        } catch (e) {
            console.log(`faild to add product to favorites: ${e}`);
        }
    };
    const removeFavorites = (productId) => {
        try {
            const newFav = favorites.filter((prod) => prod.id !== productId.id);
            storage.set("favorites", JSON.stringify(newFav));
            setFavorites(newFav);
        } catch (e) {
            console.log(`faild to remove product from favorites: ${e}`);
        }
    };
    const isFavorite = (productId) => {
        favorites.some((p) => p.id === productId);
    };

    const toggleFavorite = (product) => {
        if (isFavorite(producrId)) {
            removeFavorites(product);
        } else {
            addFavorites(product);
        }
    };

    return { isFavorite, toggleFavorite };
};
