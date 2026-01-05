import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export default function MainContent({ children }) {
    return (
        <div className="ml-[255px] w-full h-full">
            <main className=" mt-1 overflow-auto m-auto  min-h-[1200px] w-[1500px]">
                <div className="mx-6 flex py-[10px] pl-6 bg-white text-gray-700 text-xl shadow-md font-extrabold">
                    <div className="">대시보드</div>
                    <div className=" ml-5">
                        <FontAwesomeIcon icon={faBookmark} size="sm" />
                    </div>
                </div>

                <div className="flex-1 min-h-[1200px] mx-6 mt-5">
                    {children}
                </div>
            </main>
        </div>
    );
}
