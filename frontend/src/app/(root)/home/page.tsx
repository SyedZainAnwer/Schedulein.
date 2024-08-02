'use client'

import { useState } from 'react';
import LeftSideBar from "@/components/LeftSideBar";

const Page = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

    const handleSidebarOpen = () => {
        setIsSideBarOpen((prev) => !prev);
    }

    return (
        <div className="flex w-full">
            
        </div>
    )
}

export default Page;
