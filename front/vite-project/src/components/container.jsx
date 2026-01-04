
import { cn } from "../config/tailwind-merge"





export function BasicBox({ children, className = "", ...props }) {


    return (

        <div {...props} className={cn("bg-white flex flex-col text-[16px] w-full", className)}>
            {children}
        </div>

    )


}



