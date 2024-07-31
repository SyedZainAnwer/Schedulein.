'use client';

import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProfileDropDownMenu from './shared/ProfileDropDownMenu';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { NavItems } from '@/utils/navItems';
import { Fragment } from 'react';
import { SideNavItem } from './shared/SideNavItem';

const LeftSideBar = () => {

    const navItems = NavItems();

    const [isSidebarExpanded, setIsSidebarExpanded] = useLocalStorage('sidebarExpanded', true);

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <div className="pr-4">
            <div
                className={cn(
                    isSidebarExpanded ? 'w-[200px]' : 'w-[68px]',
                    'border-r transition-all duration-300 ease-in-out transform hidden sm:flex h-full bg-accent',
                )}
            >
                <aside className="flex h-full flex-col w-full break-words px-4 overflow-x-hidden columns-1">
                    {/* Top */}
                    <div className="mt-4 relative pb-2">
                        <ProfileDropDownMenu />
                        <div className="flex flex-col space-y-1 mt-5">
                            {navItems.map((item, idx) => {
                                if (item.position === 'top') {
                                    return (
                                        <Fragment key={idx}>
                                            <div className="space-y-1">
                                                <SideNavItem
                                                    label={item.name}
                                                    icon={item.icon}
                                                    path={item.href}
                                                    active={item.active}
                                                    isSidebarExpanded={isSidebarExpanded}
                                                />
                                            </div>
                                        </Fragment>
                                    );
                                }
                            })}
                        </div>
                    </div>
                    {/* Bottom */}
                    <div className="sticky bottom-0 mt-auto whitespace-nowrap mb-4 transition duration-200 block">
                        {/* <ThemeToggle isDropDown={true} />
                        {navItems.map((item, idx) => {
                            if (item.position === 'bottom') {
                                return (
                                    <Fragment key={idx}>
                                        <div className="space-y-1">
                                            <SideNavItem
                                                label={item.name}
                                                icon={item.icon}
                                                path={item.href}
                                                active={item.active}
                                                isSidebarExpanded={isSidebarExpanded}
                                            />
                                        </div>
                                    </Fragment>
                                );
                            }
                        })} */}
                    </div>
                </aside>
                {/* mt-[calc(calc(90vh)-40px)] */}
                <div className="h-screen relative">
                    <button
                        type="button"
                        className="absolute bottom-32 right-[-12px] flex h-6 w-6 items-center justify-center border border-muted-foreground/20 rounded-full bg-accent shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
                        onClick={toggleSidebar}
                    >
                        {isSidebarExpanded ? (
                            <ChevronLeft size={16} className='stroke-foreground' />
                        ) : (
                            <ChevronRight size={16} className='stroke-foreground' />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LeftSideBar;