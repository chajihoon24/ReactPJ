import { Outlet } from "react-router-dom"
import Header from "./header"
import Footer from "./Footer"






export default function AppLayout(){
    return (
        <div>
            <Header /> {/*Nav가 포함됨*/}
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )



}