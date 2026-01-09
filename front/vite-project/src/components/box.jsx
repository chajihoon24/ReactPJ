import { useState } from "react";
import { cn } from "../config/tailwind-merge";
import { useAppSetting } from "../contexts/AppSettingContext";
import { GridGuide12 } from "./dev-assist";
import { DevGridOverlay } from "./dev-assist";

export function BasicBox({ children, className = "", ...props }) {
    return (
        <div
            {...props}
            className={cn(
                "bg-white flex flex-col text-[16px] w-full",
                className
            )}
        >
            {children}
        </div>
    );
}

export function MainBox({ children, className = "", ...props }) {
    const { devMode } = useAppSetting();
    const [gridToggle, setGridToggle] = useState(true);

    return (
        <div className={`relative ${className}`} {...props}>
            {/* 개발자 모드가 켜져 있을 때만 버튼 표시 */}
            {devMode && (
                <button
                    onClick={() => setGridToggle((prev) => !prev)}
                    className="absolute top-4 right-4 z-120 px-3 py-1 bg-gray-800 text-white text-sm rounded-md"
                >
                    {gridToggle ? "hide" : "show"}
                </button>
            )}

            {/* Grid 표시 */}
            {devMode && gridToggle && <GridGuide12 />}

            {children}
        </div>
    );
}

export function TestBox({ children, className = "", ...props }) {
    const { devMode } = useAppSetting();
    const [gridToggle, setGridToggle] = useState(false);

    return (
        <div className={`relative rounded-xl my-8 ${className}`} {...props}>
            <DevGridOverlay
                visible={devMode && gridToggle}
                onToggle={() => setGridToggle((prev) => !prev)}
            />

            <div className="mx-20">{children}</div>
        </div>
    );
}
