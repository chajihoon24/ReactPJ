import { useContext, createContext, useState, useEffect } from "react";
import i18n from "../config/i18n";

export const AppSettingContext = createContext(null);
export const useAppSetting = () => useContext(AppSettingContext);

export const AppSettingProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("KOR");
    const [devMode, setDevMode] = useState(false);

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
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    // 언어 변경
    const changeLanguage = () => {
        setLanguage((prev) => (prev === "KOR" ? "ENG" : "KOR"));
        i18n.changeLanguage(language === "KOR" ? "ENG" : "KOR");
    };

    // 개발자 모드 토글
    const devModeToggle = () => {
        setDevMode((prev) => !prev);
    }

    return (
        <AppSettingContext.Provider
            value={{
                theme,
                language,
                devMode,
                toggleTheme,
                changeLanguage,
                devModeToggle
            }}
        >
            {children}
        </AppSettingContext.Provider>
    );
};
