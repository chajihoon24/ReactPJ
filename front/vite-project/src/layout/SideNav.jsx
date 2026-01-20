import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useAppSetting } from "../contexts/AppSettingContext";
import { IconPanel } from "../components/icons/Icons";

function createList(arr) {
    return arr.map((title, index) => (
        <li key={index}>
            <div className="flex py-2 ml-6">
                <div className="text-[16px] cursor-pointer font-bold">
                    {" "}
                    {title}{" "}
                </div>
                <div className="ml-auto p-1 mr-3 text-gray-400">
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
        </li>
    ));
}

export default function SideNav() {
    const { theme, toggleTheme } = useAppSetting();

    const sampleArr = [
        "대시보드",
        "인사관리",
        "재고관리",
        "회계재무",
        "입출고관리",
        "시스템관리",
    ];
    return (
        <div className="w-[250px] bg-white font-bold text-[16px] text-gray-700  fixed top-[62px] h-[calc(100vh-3.5rem)] flex-col z-50 flex">
            <div className="flex">
                <div className="relative flex w-4/5 grow">
                    {/* 아이콘 */}
                    {/* 인풋 */}
                    <input
                        type="text"
                        placeholder="검색어 입력"
                        className="
            w-full pl-10 pr-3 py-2
            border border-gray-300
            text-sm
            focus:outline-none
             mx-1
            bg-white rounded-2xl my-1
        "
                    />
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m21 21-4.34-4.34" />
                            <circle cx="11" cy="11" r="8" />
                        </svg>
                    </span>
                    <button className="my-auto mx-4">
                        <IconPanel size={24} />
                    </button>
                </div>
            </div>

            {/*상단*/}
            <div className="flex py-2 pl-6 bg-gray-300 text-white">
                <div className="text-xl">MIMIR</div>
                <div className="ml-2 text-sm text-gray-400 mb-1 mt-auto">
                    corp.
                </div>
                <div className="ml-auto p-1 mr-3 text-gray-500">
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>

            {/* 사이드 메뉴 */}
            <ul className="">{createList(sampleArr)}</ul>

            {/* 하단 */}
            <div className=" mt-auto py-3 ml-6 text-gray-500 text-sm">
                <label className="flex gap-2 items-center">
                    <span>Light</span>
                    <input
                        type="checkbox"
                        className="toggle"
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                    />
                    <span>Dark</span>
                </label>
                <div>made by 차지훈</div>
            </div>
        </div>
    );
}
