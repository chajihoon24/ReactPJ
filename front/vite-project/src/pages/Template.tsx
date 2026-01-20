import { useState } from "react";
import { BreadCrumb } from "../components/breadcrumb/Breadcrumb";
import {
    IconBookmark,
    IconEllipsis,
    IconInfo,
    IconRefresh,
    IconSetting,
    IconTrash,
} from "../components/icons/Icons";

export default function Template() {
    const tabs = [
        "대시보드",
        "인사정보",
        "로그조회",
        "재무관리",
        "기관별 시설관리",
        "연도별평가 기록부",
    ];
    const [active, setActive] = useState("대시보드");

    const [isBookmark, setBookmark] = useState(false);

    return (
        <div>
            <div className="flex">
                <div className="flex pt-1 bg-gray-200 w-4/5">
                    <ul className="flex gap-2 pt-40 h-full bg-gray-200 mb-4">
                        {tabs.map((tab) => {
                            const isActive = active === tab;

                            return (
                                <li
                                    key={tab}
                                    className={`
              flex items-center gap-1 px-3 py-1.5
              text-sm cursor-pointer rounded-t-sm font-semibold
              ${
                  isActive
                      ? "bg-white border-b-2 border-gray-400"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            `}
                                    onClick={() => setActive(tab)}
                                >
                                    <span>{tab}</span>
                                    <button
                                        className="ml-1 text-gray-400 hover:text-gray-600 ml-3 mb-1"
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
                            title="정보"
                        >
                            <IconSetting size={20} weight={2} />
                        </button>
                    </li>
                    <li className="text-sm ml-4 text-gray-500">
                        최대 탭 개수 :{" "}
                        <span className="text-gray-700 font-semibold">7 </span>
                        /10
                    </li>
                </ul>
            </div>

            <div className="h-400 bg-white rounded-b-md rounded-t-sm">
                <div className="flex">
                    <div className="flex pl-8 py-4 text-2xl font-bold">
                        <div>임직원 상세 조회</div>
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

                <div className="border-b-[1px] border-gray-300"></div>
                {/* 조회란 */}
                <div className="px-8 py-4 bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center gap-6">
                        {/* 이름 */}
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-semibold text-gray-600 w-16">
                                이름
                            </label>
                            <input
                                type="text"
                                placeholder="임직원명 입력"
                                className="
                                w-48 px-3 py-1.5
                                border border-gray-300 rounded
                                text-sm
                                focus:outline-none focus:ring-1 focus:ring-blue-400
                                "
                            />
                        </div>

                        {/* 부서 */}
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-semibold text-gray-600 w-16">
                                부서
                            </label>
                            <select
                                className="
                                w-40 px-2 py-1.5
                                border border-gray-300 rounded
                                text-sm bg-white
                                "
                            >
                                <option>전체</option>
                                <option>인사팀</option>
                                <option>재무팀</option>
                                <option>개발팀</option>
                            </select>
                        </div>

                        {/* 상태 */}
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-semibold text-gray-600 w-16">
                                상태
                            </label>
                            <select
                                className="
                                w-32 px-2 py-1.5
                                border border-gray-300 rounded
                                text-sm bg-white
                                "
                            >
                                <option>전체</option>
                                <option>재직</option>
                                <option>휴직</option>
                                <option>퇴직</option>
                            </select>
                        </div>

                        {/* 버튼 영역 */}
                        <div className="flex items-center gap-2 ml-auto">
                            <button
                                className="
                                px-4 py-1.5 rounded
                                bg-blue-600 text-white text-sm font-semibold
                                hover:bg-blue-700
                                "
                            >
                                조회
                            </button>

                            <button
                                className="
                                px-4 py-1.5 rounded
                                bg-gray-200 text-gray-700 text-sm
                                hover:bg-gray-300
                                "
                            >
                                초기화
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" flex text-gray-500 text-sm font-semibold">
                    <div className="ml-auto mt-1 mr-4">마지막 조회: 2분 전</div>
                </div>

                <div className="px-4 py-1">
                    <div className="overflow-x-auto border border-gray-400 rounded-sm">
                        <table className="w-full border-collapse text-sm">
                            <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                    <th className="px-3 py-2 text-left w-12">
                                        <input type="checkbox" />
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        사번
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        이름
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        부서
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        직급
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        상태
                                    </th>
                                    <th className="px-3 py-2 text-left">
                                        입사일
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {[
                                    {
                                        id: "202401",
                                        name: "홍길동",
                                        dept: "인사팀",
                                        role: "대리",
                                        status: "재직",
                                        joinDate: "2021.03.01",
                                    },
                                    {
                                        id: "202402",
                                        name: "김영희",
                                        dept: "개발팀",
                                        role: "과장",
                                        status: "휴직",
                                        joinDate: "2019.07.15",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                    {
                                        id: "202403",
                                        name: "이철수",
                                        dept: "재무팀",
                                        role: "사원",
                                        status: "퇴직",
                                        joinDate: "2018.11.20",
                                    },
                                ].map((row) => (
                                    <tr
                                        key={row.id}
                                        className="border-t border-gray-400 hover:bg-gray-50 cursor-pointer"
                                    >
                                        <td className="px-3 py-2">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="px-3 py-2">{row.id}</td>
                                        <td className="px-3 py-2 font-medium text-gray-800">
                                            {row.name}
                                        </td>
                                        <td className="px-3 py-2">
                                            {row.dept}
                                        </td>
                                        <td className="px-3 py-2">
                                            {row.role}
                                        </td>
                                        <td className="px-3 py-2">
                                            <span
                                                className={`px-2 py-0.5 rounded text-xs font-semibold
                  ${
                      row.status === "재직"
                          ? "bg-green-100 text-green-700"
                          : row.status === "휴직"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-200 text-gray-600"
                  }
                `}
                                            >
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="px-3 py-2">
                                            {row.joinDate}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* 페이지네이션 */}
                <div className="flex items-center justify-between px-8 py-3 text-sm text-gray-600">
                    {/* 왼쪽: 페이지 정보 */}
                    <div>
                        총{" "}
                        <span className="font-semibold text-gray-800">
                            1,254
                        </span>
                        건 ·
                        <span className="ml-1">
                            <span className="font-semibold text-gray-800">
                                1
                            </span>{" "}
                            / 126 페이지
                        </span>
                    </div>

                    {/* 오른쪽: 페이지 버튼 */}
                    <div className="flex items-center gap-1">
                        <button
                            className="px-2 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100"
                            title="첫 페이지"
                        >
                            «
                        </button>
                        <button
                            className="px-2 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100"
                            title="이전 페이지"
                        >
                            ‹
                        </button>

                        {/* 페이지 숫자 */}
                        <button className="px-3 py-1 rounded border border-blue-600 bg-blue-50 text-blue-600 font-semibold">
                            1
                        </button>
                        <button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">
                            2
                        </button>
                        <button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">
                            3
                        </button>
                        <span className="px-2 text-gray-400">…</span>
                        <button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">
                            126
                        </button>

                        <button
                            className="px-2 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100"
                            title="다음 페이지"
                        >
                            ›
                        </button>
                        <button
                            className="px-2 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100"
                            title="마지막 페이지"
                        >
                            »
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
