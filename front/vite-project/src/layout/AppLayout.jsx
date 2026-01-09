/* prettier-ignore-file */
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import SideNav from "./SideNav";
import Sidebar from "./Sidebar";
import Content from "./Content";

export default function AppLayout() {
    return (
        <>
            <Header /> {/*Nav가 포함됨*/}
            <main className="flex relative">
                <Sidebar />

                <Content>
                    <Outlet />
                    {/*실제 컨텐츠가 표시되는 영역*/}
                </Content>
            </main>
            <Footer />
        </>
    );
}

// <SideNav></SideNav>

// <MainContent>
//     <Outlet />
// </MainContent>
