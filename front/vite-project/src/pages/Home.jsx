import { useAuth } from "../contexts/authContext";
function Home() { 

    let userInfo = useAuth()
    let {name, tel} = userInfo;

    return (
        <>
        <div>이름 : {name}</div>
        <div>전화번호 : {tel}</div>
        <div>Home</div>
        </>
    ) 



}
export default Home;