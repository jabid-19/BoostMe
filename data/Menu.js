import { FaBars, FaPlus } from "react-icons/fa";

export const menuData = {
    dashboard: {
        category: true,
        url: '/dashboard',
        key: 'dashboard',
        routes: [
            {
                title: 'Dashboard',
                key: '/dashboard',
                url: '/dashboard/email/accounts',
                icon: <FaBars />,
                subMenu: [
                   {
                    title: 'Create Post',
                    key: '/dashboard/email/accounts/createpost',
                    url: '/dashboard/email/accounts/createpost',
                    icon: <FaPlus />
                   }, 
                   {
                    title: 'Edit Post',
                    key: '/dashboard/email/accounts/editpost',
                    url: '/dashboard/email/accounts/editpost',
                    icon: <FaPlus />
                   }, 
                ]
            },
            {
                title: 'Home',
                key: '/home',
                url: '/home',
                icon: <FaBars />
            },
        ]
    }
}