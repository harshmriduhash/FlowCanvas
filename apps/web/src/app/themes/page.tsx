"use client";

import DashboardLayout from "@/components/layout/dashboard-layout";
import { Palette, Plus, Zap, Check, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const PRESETS = [
    { id: "minimal", name: "Mint Minimalist", colors: ["#0E7C66", "#F0FDF4", "#FFFFFF"], active: true },
    { id: "bold", name: "Emerald Bold", colors: ["#064E3B", "#10B981", "#ECFDF5"], active: false },
    { id: "dark", name: "Midnight Onyx", colors: ["#020617", "#334155", "#F8FAFC"], active: false },
    { id: "glass", name: "Glassmorphism", colors: ["#FFFFFF", "#E2E8F0", "#F8FAFC"], special: "Blur Effect", active: false },
];

export default function ThemesPage() {
    const [selected, setSelected] = useState("minimal");

    return (
        <DashboardLayout>
            <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
                <div className="flex items-end justify-between">
                    <div>
                        <h1 className="text-3xl font-black text-ink tracking-tight">Themes</h1>
                        <p className="text-gray-mute mt-1">Design the look and feel of your product tours</p>
                    </div>
                    <button className="h-11 px-6 border border-border-subtle rounded-xl font-bold flex items-center gap-2 hover:bg-surface-muted transition-all bg-white shadow-sm">
                        <Plus className="w-5 h-5" />
                        Custom Theme
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PRESETS.map((theme) => (
                        <div
                            key={theme.id}
                            onClick={() => setSelected(theme.id)}
                            className={cn(
                                "group bg-white border rounded-[32px] p-6 cursor-pointer transition-all hover:shadow-xl",
                                selected === theme.id ? "border-emerald-600 shadow-lg" : "border-border-subtle hover:border-emerald-200 shadow-sm"
                            )}
                        >
                            <div className="h-32 rounded-2xl mb-6 relative overflow-hidden bg-surface-muted border border-border-subtle flex items-center justify-center">
                                <div className="absolute top-4 left-4 right-4 h-6 rounded-lg bg-white shadow-sm flex items-center px-3 gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <div className="h-1.5 w-16 bg-gray-100 rounded-full" />
                                </div>
                                <div className="w-16 h-16 rounded-full bg-emerald-600 blur-2xl opacity-10" />
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-lg border border-border-subtle group-hover:scale-110 transition-transform">
                                    <Palette className="w-6 h-6 text-emerald-600" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-ink">{theme.name}</h3>
                                {selected === theme.id && <Check className="w-4 h-4 text-emerald-600" />}
                            </div>

                            <div className="flex gap-2 mb-6">
                                {theme.colors.map((c, i) => (
                                    <div key={i} className="w-6 h-6 rounded-full border border-black/5" style={{ backgroundColor: c }} />
                                ))}
                                {theme.special && (
                                    <span className="ml-auto text-[8px] font-black uppercase tracking-widest text-emerald-600 px-2 py-1 bg-emerald-50 rounded-full border border-emerald-100">
                                        {theme.special}
                                    </span>
                                )}
                            </div>

                            <button className={cn(
                                "w-full h-10 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2",
                                selected === theme.id
                                    ? "bg-emerald-600 text-white"
                                    : "bg-surface-muted text-gray-mute hover:text-ink"
                            )}>
                                <Zap className="w-4 h-4" />
                                {selected === theme.id ? "Active Theme" : "Apply Theme"}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Editor Preview */}
                <div className="bg-emerald-950 rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="max-w-md space-y-4">
                            <h2 className="text-2xl font-black">Live Preview</h2>
                            <p className="text-emerald-100/60 leading-relaxed">
                                See how your tours will look across different surfaces. Themes apply globally to all your published flows on this project.
                            </p>
                            <button className="h-11 px-6 bg-white text-emerald-950 rounded-xl font-bold hover:bg-emerald-50 transition-all flex items-center gap-2">
                                <Eye className="w-4 h-4" />
                                Preview on Website
                            </button>
                        </div>

                        <div className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform text-ink">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                                    <Zap className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest">Step 1 of 5</span>
                            </div>
                            <h4 className="text-lg font-black mb-2">Build your first flow</h4>
                            <p className="text-sm text-gray-mute leading-relaxed mb-6">
                                Use our visual editor to place tooltips, modals, and hotspots directly on your product.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold text-gray-mute px-3 py-1 bg-surface-muted rounded-full">Skip Tour</span>
                                <button className="h-10 px-6 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition-all">
                                    Next Step
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 blur-[120px] -mr-32 -mt-32 rounded-full" />
                </div>
            </div>
        </DashboardLayout>
    );
}
