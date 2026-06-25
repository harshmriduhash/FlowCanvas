"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search, Play, Settings, CreditCard, Users, Layout } from "lucide-react";
import { useRouter } from "next/navigation";

export function CommandPalette() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-ink/40 backdrop-blur-[4px]">
            <div className="w-full max-w-[640px] px-4">
                <Command
                    onKeyDown={(e) => {
                        if (e.key === "Escape") setOpen(false);
                    }}
                    className="bg-white/85 backdrop-blur-[20px] saturate-[180%] border border-white/20 rounded-[20px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
                >
                    <div className="flex items-center border-b border-border-subtle/50 px-4">
                        <Search className="w-5 h-5 text-gray-mute mr-3" />
                        <Command.Input
                            placeholder="Type a command or search flows..."
                            className="w-full h-14 bg-transparent border-none outline-none text-ink placeholder:text-gray-mute text-base"
                        />
                    </div>
                    <Command.List className="max-h-[300px] overflow-y-auto p-2">
                        <Command.Empty className="py-6 text-center text-sm text-gray-mute">No results found.</Command.Empty>

                        <Command.Group heading="Navigation" className="px-2 py-3 text-[10px] font-bold text-gray-mute uppercase tracking-widest">
                            <CommandItem onSelect={() => { router.push('/dashboard'); setOpen(false); }}>
                                <Layout className="w-4 h-4 mr-3" />
                                Dashboard
                            </CommandItem>
                            <CommandItem onSelect={() => { router.push('/settings/project'); setOpen(false); }}>
                                <Settings className="w-4 h-4 mr-3" />
                                Project Settings
                            </CommandItem>
                            <CommandItem onSelect={() => { router.push('/settings/members'); setOpen(false); }}>
                                <Users className="w-4 h-4 mr-3" />
                                Team Members
                            </CommandItem>
                            <CommandItem onSelect={() => { router.push('/settings/billing'); setOpen(false); }}>
                                <CreditCard className="w-4 h-4 mr-3" />
                                Billing & Plans
                            </CommandItem>
                        </Command.Group>

                        <Command.Group heading="Recent Flows" className="px-2 py-3 text-[10px] font-bold text-gray-mute uppercase tracking-widest">
                            <CommandItem onSelect={() => { router.push('/flows/123/edit'); setOpen(false); }}>
                                <Play className="w-4 h-4 mr-3 text-emerald-600" />
                                Onboarding Tour
                            </CommandItem>
                            <CommandItem onSelect={() => { router.push('/flows/456/edit'); setOpen(false); }}>
                                <Play className="w-4 h-4 mr-3 text-emerald-600" />
                                New Feature Deep Dive
                            </CommandItem>
                        </Command.Group>
                    </Command.List>
                </Command>
            </div>
        </div>
    );
}

function CommandItem({ children, onSelect }: { children: React.ReactNode; onSelect: () => void }) {
    return (
        <Command.Item
            onSelect={onSelect}
            className="flex items-center px-3 py-2.5 rounded-xl cursor-default select-none text-sm font-medium text-ink aria-selected:bg-emerald-50 aria-selected:text-emerald-600 transition-colors"
        >
            {children}
        </Command.Item>
    );
}
