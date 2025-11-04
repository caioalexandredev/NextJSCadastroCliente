"use client";

import menu from "config/menu";
import { Sidebar } from "libs/components/Sidebar";
import { TopBar } from "libs/components/TopBar";
import { JSX, ReactNode, useState } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function MainLayout({
    children
}: LayoutProps): JSX.Element {
    const [isMinimized, setIsMinimized] = useState<boolean>(false);
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="flex">
                <Sidebar setIsMinimized={setIsMinimized} isMinimized={isMinimized} menuItems={menu} />
                <div className="flex-1">
                    <TopBar isMinimized={isMinimized} />
                    <main className="p-8">
                        <div className="space-y-6">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}