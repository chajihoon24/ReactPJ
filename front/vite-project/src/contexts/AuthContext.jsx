import { createContext } from "react";
import { useContext, useState } from "react";

export const AuthContext = createContext(null); 
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children}) => {

    const [userInfo, setUserInfo] = useState({
        name: "John Doe",
        tel: "123-456-7890"
    });

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};


