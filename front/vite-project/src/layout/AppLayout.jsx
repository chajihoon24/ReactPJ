import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import SideNav from "./SideNav";

export default function AppLayout() {
    return (
        <div>
            <Header /> {/*Nav가 포함됨*/}
            <div className="flex">
                <SideNav></SideNav>
                <MainContent>
                    <Outlet />
                </MainContent>
            </div>
            <Footer />
        </div>
    );
}
