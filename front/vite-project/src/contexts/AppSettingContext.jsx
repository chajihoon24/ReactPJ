import { useContext,createContext,useState } from "react";

export const AppSettingContext = createContext(null);
export const useAppSetting = () => useContext(AppSettingContext);

export const AppSettingProvider = ({ children}) => {
    const [appSetting, setAppSetting] = useState({
        theme: "light",
        language: "en"
    }); 
    return (
        <AppSettingContext.Provider value={appSetting}>
            {children}
        </AppSettingContext.Provider>
    );
}