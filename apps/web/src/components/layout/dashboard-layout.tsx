"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    MousePointer2,
    BarChart3,
    Palette,
    Settings,
    ChevronLeft,
    LogOut,
    Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Flows", href: "/flows", icon: MousePointer2 },
    { name: "A/B Tests", href: "/ab-tests", icon: BarChart3 },
    { name: "Themes", href: "/themes", icon: Palette },
    { name: "Settings", href: "/settings", icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const pathname = usePathname();

    return (
        <div className="flex h-screen bg-surface-muted overflow-hidden">
            {/* Sidebar */}
            <aside
                className={cn(
                    "bg-surface border-r border-border-subtle flex flex-col transition-all duration-300",
                    collapsed ? "w-16" : "w-60"
                )}
            >
                {/* Project Switcher */}
                <div className="h-16 flex items-center px-4 border-b border-border-subtle">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-xs">FC</span>
                        </div>
                        {!collapsed && (
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-ink truncate w-32">Acme App</span>
                                <span className="text-[10px] text-gray-mute">Business Plan</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-6 px-3 space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 h-10 px-3 rounded-xl transition-all group",
                                    isActive
                                        ? "bg-emerald-50 text-emerald-600 font-medium"
                                        : "text-gray-mute hover:bg-surface-muted hover:text-ink"
                                )}
                            >
                                <item.icon className={cn("w-5 h-5 flex-shrink-0", isActive && "text-emerald-600")} />
                                {!collapsed && <span>{item.name}</span>}
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer Actions */}
                <div className="p-3 border-t border-border-subtle space-y-1">
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="w-full flex items-center gap-3 h-10 px-3 rounded-xl text-gray-mute hover:bg-surface-muted hover:text-ink transition-all"
                    >
                        <ChevronLeft className={cn("w-5 h-5 transition-transform", collapsed && "rotate-180")} />
                        {!collapsed && <span>Collapse</span>}
                    </button>
                    <button className="w-full flex items-center gap-3 h-10 px-3 rounded-xl text-gray-mute hover:bg-surface-muted hover:text-red-600 transition-all">
                        <LogOut className="w-5 h-5" />
                        {!collapsed && <span>Log out</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto relative">
                {children}
            </main>
        </div>
    );
}
