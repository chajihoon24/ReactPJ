import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
    return (
        <nav className="flex">
            <ul className="flex-grow items-center flex justify-center gap-8 text-lg font-medium text-gray-700">
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

            <ul className="ml-auto flex-grow items-center flex justify-end gap-8 text-lg font-medium text-gray-700">



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
                    <Link to="/">
                        <div className="flex mt-auto">
                            <div className="">ENG</div>
                            <div className="ml-2 text-lg"><FontAwesomeIcon icon={faAngleDown} /></div>
                        </div>
                    </Link>
                </li>

                <li>
                    <div className="flex items-center">
                    <div class="w-10 h-10 rounded-full bg-blue-300"></div>
                        <Link to="/"><div className="ml-4">차지훈 님</div></Link>
                    </div>    
                </li>

                <li>
                    <Link to="/">Logout</Link>
                </li>
            </ul>
        </nav>
    );
}
