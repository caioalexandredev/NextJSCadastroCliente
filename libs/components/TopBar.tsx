"use client";

import { Search } from 'lucide-react';
import { Input } from './ui/input';

interface TopBarProps {
  isMinimized: boolean;
}

export function TopBar({ isMinimized }: TopBarProps) {
  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm sticky top-0 z-10">
      <div className="h-full px-6 flex items-center gap-6">
        {isMinimized && (
          <h1 className="text-blue-600 whitespace-nowrap">Sistema CRM</h1>
        )}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar em todo o sistema..."
              className="pl-10 bg-gray-50/50 border-gray-200 text-gray-600"
            />
          </div>
        </div>
      </div>
    </header>
  );
}