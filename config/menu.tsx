import { MenuItem } from "libs/components/Sidebar";
import { Home, Users } from "lucide-react";

export const defaultItemMenu: string = 'home';

const menu: MenuItem[] = [
    { 
        id: 'home', 
        label: 'Início', 
        icon: Home,
        path: '/'
    },
    { 
        id: 'clients', 
        label: 'Clientes', 
        icon: Users,
        path: '/cliente'
    }
];

export default menu;