import { View, Text } from 'react-native'
import { createContext, useState, useMemo, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { darkTheme, lightTheme } from '../constants/colors';

const THEMS_KEY = 'memora_theme';
const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [isDrak, setIsDark] = useState(false);

    useEffect(() => {
        const loadTheme = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem(THEMS_KEY);
                if (savedTheme !== null) {
                    setIsDark(JSON.parse(savedTheme));
                }
            } catch (e) {
                console.log(`faild to load the current theme ${e}`)
            }
        };
        loadTheme();
    }, []);

    const toggleTheme = async () => {
        const newTheme = !isDrak;
        setIsDark(newTheme);
        try {
            await AsyncStorage.setItem(THEMS_KEY, JSON.stringify(newTheme));

        } catch (e) {
            console.log(`faild to change the theme please try again ${e}`)

        }
    };
    const themeValue = useMemo(() => ({
        isDrak, 
        toggleTheme,
        COLORS:isDrak?lightTheme:darkTheme,
    }), [isDrak])

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    )
}