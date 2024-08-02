'use client'

import LeftSideBar from "@/components/LeftSideBar";
import TaskInput from "@/components/shared/TaskInput";
import { useState } from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {

    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

    return (
        <div className="flex w-full">
            <section className='w-1/5'>
                <LeftSideBar />
            </section>

            {/* Main Task Display Area */}
            <section className={`${isSideBarOpen ? "w-4/5" : "w-full"} transition-transform duration-500 ease-in-out`}>
                {children}
                <div className="flex justify-center">
                    <TaskInput />
                </div>
            </section>

            {/* Graph Area */}
            <section className="w-1/5">
                {children}
                <p>Graphs</p>
            </section>
        </div>
    )
}

export default HomeLayout;