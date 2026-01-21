import { Tabs } from "../components/tabs/Tabs";
import { HistoryTab } from "../components/template/common/HistoryTab";

export default function Content({ children }) {


    const tabs = [
        { id: "A", label: "대시보드" },
        { id: "B", label: "인사관리" },
        { id: "C", label: "시스템 로그 조회" },
        { id: "D", label: "기관별 시설관리" },
    ];

    const maxTabs = 10;

    return (
        <main className="shrink-0 mx-auto w-[1600px]">
            <div className="h-full w-full">
                <div className=" rounded-md border-gray-600 h-full w-full overflow-auto">
                    <HistoryTab tabs={tabs} maxTabs={maxTabs}></HistoryTab>
                    {children}
                </div>
            </div>
        </main>
    );
}
