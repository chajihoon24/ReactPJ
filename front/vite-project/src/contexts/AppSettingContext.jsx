import { useContext, createContext, useState, useEffect } from "react";

export const AppSettingContext = createContext(null);
export const useAppSetting = () => useContext(AppSettingContext);

export const AppSettingProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("en");


    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);


    // 다크모드 토글
    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));

    };

    // 언어 변경
    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <AppSettingContext.Provider
            value={{
                theme,
                language,
                toggleTheme,
                changeLanguage,
            }}
        >
            {children}
        </AppSettingContext.Provider>
    );
};