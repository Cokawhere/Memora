import { View, Text } from 'react-native'
import { createContext, useReducer, useMemo, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { darkTheme, lightTheme } from '../constants/colors';


const THEMS_KEY = 'memora_theme';
export const ThemeContext = createContext();
function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) throw new Error('context is used out of his scope');
    return context;
}
const initialState = {
    isDark: false,
    COLORS: lightTheme
}
function themeReducer(state, action) {
    switch (action.type) {
        case "setTheme":
            return {
                ...state,
                isDark: action.payLoad,
                COLORS: action.payLoad ? darkTheme : lightTheme,
            };
        case "ToggleTheme":
            const newTheme = !state.isDark;
            return {
                ...state,
                isDark: newTheme,
                COLORS: newTheme ? darkTheme : lightTheme,
            }
        default:
            return state;
    }
};

export default function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, initialState)
    useEffect(() => {
        const loadTheme = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem(THEMS_KEY);
                if (savedTheme !== null) {
                    dispatch({ type: "setTheme", payLoad: JSON.parse(savedTheme) });
                }
            } catch (e) {
                console.log(`faild to load the current theme ${e}`)
            }
        };
        loadTheme();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                await AsyncStorage.setItem(THEMS_KEY, JSON.stringify(state.isDark));

            } catch (e) {
                console.log(`faild to change the theme please try again ${e}`)
            }
        })();
    }
        , [state.isDark]);

    const toggleTheme = () => dispatch({ type: "ToggleTheme" });

    const themeValue = useMemo(() => ({
        isDark: state.isDark,
        toggleTheme,
        COLORS: state.isDark ? darkTheme : lightTheme,
    }), [state.isDark]);

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    )
}
export { useTheme };