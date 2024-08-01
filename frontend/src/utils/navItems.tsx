import { usePathname } from "next/navigation";
import { Home, Calendar, Search } from 'lucide-react';

export const NavItems = () => {
    const pathname = usePathname();

    function isNavItemActive (pathname: string, nav: string) {
        return pathname.includes(nav);
    };


    return [
        {
            name: 'Search',
            icon: <Search size={20}/>
        },
        {
            name: 'Home',
            href: '/home',
            icon: <Home size={20}/>,
            active: pathname === '/home',
            position: 'top'
        },
        {
            name: 'Today',
            href:'/home/today',
            icon: <Calendar size={20}/>,
            active: isNavItemActive(pathname, '/home/today')
        },
    ]
}