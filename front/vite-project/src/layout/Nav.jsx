import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="flex">
            <ul className="flex-grow flex justify-center gap-8 text-lg font-medium text-gray-700">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/page1">Page1</Link>
                </li>
                <li>
                    <Link to="/page2">Page2</Link>
                </li>
                <li>
                    <Link to="/page3">Page3</Link>
                </li>
                <li>
                    <Link to="/page4">Page4</Link>
                </li>
                <li>
                    <Link to="/test">테스트</Link>
                </li>
            </ul>

            <ul className="ml-auto flex-grow flex justify-end gap-8 text-lg font-medium text-gray-700">
                <li>
                    <Link to="/others">
                        <div className="platform_letter font-extrabold text-xl">
                            <span>플</span>
                            <span>랫</span>
                            <span>폼</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/">register</Link>
                </li>
                <li>
                    <Link to="/">login</Link>
                </li>
            </ul>
        </nav>
    );
}
