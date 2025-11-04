"use client";

import { ChevronLeft, ChevronRight, LucideProps } from 'lucide-react';
import { Button } from './ui/button';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export interface MenuItem {
  id: string;
  label: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  path: string;
}

interface SidebarProps {
  isMinimized: boolean;
  setIsMinimized: (minimized: boolean) => void;
  menuItems: MenuItem[];
}

export function Sidebar({
  isMinimized,
  setIsMinimized,
  menuItems
}: SidebarProps
) {
  const pathname = usePathname();

  return (
    <aside
      className={`h-screen bg-white/80 backdrop-blur-md border-r border-gray-200/50 shadow-sm sticky top-0 transition-all duration-300 ${isMinimized ? 'w-20' : 'w-64'
        }`}
    >
      <div className="p-6 flex items-center justify-between">
        <h1 className={`text-blue-600 transition-opacity duration-300 ${isMinimized ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
          }`}>
          Sistema CRM
        </h1>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMinimized(!isMinimized)}
          className="p-2 hover:bg-gray-100"
        >
          {isMinimized ? (
            <ChevronRight className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          )}
        </Button>
      </div>

      <nav className="px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <Link
              href={item.path}
              key={item.id}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100/80'
                } ${isMinimized ? 'justify-center' : ''}`}
              title={isMinimized ? item.label : ''}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className={`transition-opacity duration-300 ${isMinimized ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
                }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}