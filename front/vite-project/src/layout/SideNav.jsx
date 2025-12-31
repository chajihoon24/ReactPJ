import { Link } from "react-router-dom";
import Vector from "../css/layout/Vector.svg";

const sampleArr = [
    "인사관리",
    "재고관리",
    "회계재무",
    "입출고관리",
    "시스템관리",
];

export default function SideNav() {
    return (
        <div className="w-[250px] border-gray-200 text-gray-700">
            <ul className="mt-3">
                {sampleArr.map((title, index) => (
                    <li key={index}>
                        <div className="flex py-3 ml-6">
                            <div className="text-[16px] cursor-pointer font-bold">
                                {title}
                            </div>
                            <div></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
