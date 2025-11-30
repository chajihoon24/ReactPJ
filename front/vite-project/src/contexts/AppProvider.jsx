
/*============================================================
[설명]

Provider 통합 관리하는 컴포넌트
만들어진 app provider들을 이곳에서 취합해 app.jsx에 사용됨
===============================================================*/

// 로그인 유저 정보 {name, tel}
import { AuthProvider } from "./authContext";
// 앱 설정 정보 {teme, language}
import { AppSettingProvider } from "./AppSettingContext";


export const AppProvider = ({ children }) => {

    return (
        <AuthProvider>
            <AppSettingProvider>
                {children}
            </AppSettingProvider>
        </AuthProvider>
    );
}