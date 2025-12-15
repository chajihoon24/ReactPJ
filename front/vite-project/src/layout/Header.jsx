import Nav from "./Nav";
import "../css/layout/header.css"
export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__title">
                    <div>Ordin</div>
                </div>
                <div className="header__contents">
                    <Nav />
                </div>
            </div>
        </header>
    );
}