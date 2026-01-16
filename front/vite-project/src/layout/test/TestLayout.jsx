import { Outlet } from "react-router-dom";
import Header from "../Header";

import TestSidebar from "../../pages/test/TestSidebar";
import { useState } from "react";
export default function TestLayout() {
    use;

    return (
        <div className="w-full">
            <Header />
            <main className="flex relative w-full h-[1080px]">
                <TestSidebar />
                <Outlet />
            </main>
        </div>
    );
}
