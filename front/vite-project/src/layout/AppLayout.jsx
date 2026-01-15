/* prettier-ignore-file */
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import SideNav from "./SideNav";
import Sidebar from "./Sidebar";
import Content from "./Content";

/*
[구조요약]

header(Nav 포함)
sidebar + Content
footer

header : 페이지 최상단, 네비게이션 바 포함
sidebar : 좌측 사이드바 (사이드 네비게이션) 
Content : 메인 컨텐츠 영역
footer : 페이지 최하단

*/
export default function AppLayout() {
    return (
        <>
            <Header />
            <main className="flex relative w-full">
                <Sidebar />
                <Content>
                    <Outlet />
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
