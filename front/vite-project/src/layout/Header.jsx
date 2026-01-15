import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className=" sticky top-0 z-100 pl-30 h-15 w-full justify-between bg-white flex items-center shadow-sm">
            {/* 헤더 로고 영역 */}
            <div className="">
                <Link className="nav-logo" to={"/"}>
                    MIMIR
                </Link>
                <span className="nav-app-ver">1.0.0v</span>
            </div>

            {/* 네비게이션 영역 */}
            <Nav />
        </header>
    );
}
