
import { cn } from "../config/tailwind-merge"
import { useAppSetting } from "../contexts/AppSettingContext"




export function BasicBox({ children, className = "", ...props }) {
    
    
    return (
        
        <div {...props} className={cn("bg-white flex flex-col text-[16px] w-full", className)}>
            {children}
        </div>

)


}

export function MainBox({ children, className = "", ...props }) {
    const { devMode } = useAppSetting();
    const gridToggle = devMode ? "show-grid" : "hide-grid";

    return (
        <div className={`relative ${className}`} {...props}>
            {/* 개발자 모드가 켜져 있으면 GridGuide 표시 */}
            {devMode && <GridGuide12 />}
            {children}
        </div>
    );
}
