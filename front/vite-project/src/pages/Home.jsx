import { useAuth } from '../contexts/AuthContext';  
import { useAppSetting } from '../contexts/AppSettingContext';

function Home() { 

    let userInfo = useAuth()
    let {name, tel} = userInfo;
    let appSettings = useAppSetting()
    let {theme, language} = appSettings;

    return (
        <>
        <div class="flex flex-col items-center justify-center bg-white shadow-md rounded-md w-[300px]">
            <div>이름 : {name}</div>
            <div>전화번호 : {tel}</div>
            <div>Home</div>
            <div>테마: {theme}</div>
                <div>언어: {language}</div>
        </div>
        </>
    ) 



}
export default Home;