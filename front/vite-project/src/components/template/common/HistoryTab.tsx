import { useState } from "react";
import { IconInfo, IconSetting, IconTrash } from "../../icons/Icons";

interface HistoryTabItem {
    id: string;
    label: string;
}

interface HistoryTabProp {
    tabs: HistoryTabItem[];
    maxTabs: number;
}

export function HistoryTab({ tabs, maxTabs }: HistoryTabProp) {
    const [active, setActive] = useState<string | null>(
        tabs.length > 0 ? tabs[0].id : null,
    );

    return (
        <div className="flex">
            <div className="flex pt-1 bg-gray-200 w-4/5">
                <ul className="flex gap-2 h-full bg-gray-200 mb-4">
                    {tabs.map((tab) => {
                        const isActive = active === tab.id;
                        console.debug(active);
                        return (
                            <li
                                key={tab.id}
                                className={` flex items-center gap-1 px-3 py-1.5 text-sm cursor-pointer rounded-t-sm font-semibold
                                ${isActive ? "bg-white border-b-2 border-gray-400" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                                onClick={() => setActive(tab.id)}
                            >
                                <span>{tab.label}</span>
                                <button
                                    className="text-gray-400 hover:text-gray-600 ml-3 mb-1"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        // 히스토리 제거 로직
                                    }}
                                >
                                    ×
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <ul className="flex items-center gap-1 px-2 ml-auto">
                <li className="border-r border-gray-300">
                    <button
                        className="
                flex items-center justify-center
                w-8 h-8 rounded
                text-gray-500
                hover:bg-gray-200 hover:text-gray-700 mx-2  
              "
                        title="히스토리 전체 삭제"
                    >
                        <IconTrash size={20} />
                    </button>
                </li>

                <li className="border-r border-gray-300">
                    <button
                        className="
                flex items-center justify-center
                w-8 h-8 rounded
                text-gray-500
                hover:bg-gray-200 hover:text-gray-700 mx-2
              "
                        title="정보"
                    >
                        <IconInfo size={20} weight={2} />
                    </button>
                </li>

                <li className="border-r border-gray-300">
                    <button
                        className="
                flex items-center justify-center
                w-8 h-8 rounded
                text-gray-500
                hover:bg-gray-200 hover:text-gray-700 mx-2 
              "
                        title="최대 탭 수 설정"
                    >
                        <IconSetting size={20} weight={2} />
                    </button>
                </li>
                <li className="text-sm ml-4 text-gray-500">
                    최대 탭 개수 :{" "}
                    <span className="text-gray-700 font-semibold">
                        {tabs.length}{" "}
                    </span>
                    /{maxTabs}
                </li>
            </ul>
        </div>
    );
}
