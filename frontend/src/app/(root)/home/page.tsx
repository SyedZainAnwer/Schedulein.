'use client'

import { useState } from 'react';
import LeftSideBar from "@/components/LeftSideBar";

const Page = ({children}: {children: React.ReactNode}) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

    const handleSidebarOpen = () => {
        setIsSideBarOpen((prev) => !prev);
    }

    return (
        <div className="flex w-full">
            {/* Left Side Bar */}
            {/* <section className={`${isSideBarOpen ? "w-1/5" : "w-0"} bg-slate-100 h-screen p-2 transition-all duration-300`}>
            </section> */}
            <section className='w-1/5'>
                <LeftSideBar />
            </section>

            {/* Main Task Display Area */}
            <section className={`${isSideBarOpen ? "w-4/5" : "w-full"} transition-transform duration-500 ease-in-out`}>
                <p>Tasks</p>
                {children}
            </section>

            {/* Graph Area */}
            <section className="w-1/5">
                <p>Graphs</p>
            </section>
        </div>
    )
}

export default Page;
