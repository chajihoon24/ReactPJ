import Nav from "./Nav";

export default function Header() {
    return (
        <header>
            <div className="sticky top-0 z-50 px-8 h-15 bg-white shadow-md flex items-center">
                <div className="">
                    {/* 헤더 로고 */}
                    <div className="text-3xl font-bold text-black space tracking-wide">
                        MIMIR
                        <span className="ml-3 text-gray-400 text-sm">
                            1.0.0v
                        </span>
                    </div>
                </div>

                {/* 네비게이션 */}
                <div className="flex-grow">
                    <Nav />
                </div>
            </div>
        </header>
    );
}
