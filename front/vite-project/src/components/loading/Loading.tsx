import { cn } from "../../config/tailwind-merge";

export function PageLoading() {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
            <span
                className={cn(
                    "loading loading-spinner text-info w-40 h-40 border-2",
                )}
            ></span>
            <br></br>
            <h3 className="">로딩 중... 잠시만 기다려 주세요!</h3>
        </div>
    );
}
