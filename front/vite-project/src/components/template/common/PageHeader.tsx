import { BreadCrumb } from "../../breadcrumb/Breadcrumb";
import { IconBookmark, IconEllipsis, IconRefresh } from "../../icons/Icons";

export function PageHeader() {
    console.log(window.location);


    const PageName ="임직원 상세 조회"

    return (
        <div className="flex">
            <div className="flex pl-8 py-4 text-2xl font-bold">
                <div>{PageName}</div>
            </div>
            <BreadCrumb
                className="pl-8 py-4"
                items={[
                    { label: "대시보드", href: "/dashboard" },
                    { label: "가이드", href: "/guide" },
                    { label: "임직원 상세" },
                ]}
            />
            <button className="ml-4 my-auto p-2 border-gray-300 border rounded-md hover:bg-gray-100">
                <IconRefresh size={14} weight={2}></IconRefresh>
            </button>
            <button className="ml-auto my-auto">
                <IconBookmark weight={1.5} />
            </button>
            <button className="my-auto ml-4 mr-8">
                <IconEllipsis weight={1.5} />
            </button>
        </div>
    );
}
