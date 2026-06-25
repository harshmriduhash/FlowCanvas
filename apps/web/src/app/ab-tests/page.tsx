"use client";

import { useState } from "react";
import {
    Plus,
    ArrowRight,
    Zap,
    Users,
    Activity,
    CheckCircle2,
    BarChart3,
    MoreHorizontal,
    PlayCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const TESTS = [
    {
        id: "1",
        name: "Onboarding Copy Test",
        status: "Running",
        variantA: { name: "Minimalist", completions: 612, rate: 0.61 },
        variantB: { name: "Benefit-First", completions: 588, rate: 0.68 },
        confidence: "94%",
        traffic: "50/50"
    }
];

export default function ABTestingPage() {
    return (
        <div className="max-w-6xl mx-auto py-10 px-6">
            <header className="flex items-center justify-between mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-ink mb-2">A/B Testing</h1>
                    <p className="text-gray-mute">Optimize your conversion by split-testing different flow variants.</p>
                </div>
                <button className="h-11 px-5 bg-emerald-600 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-emerald-800 transition-all shadow-sm shadow-emerald-600/20">
                    <Plus className="w-4 h-4" />
                    Create New Test
                </button>
            </header>

            <div className="grid grid-cols-1 gap-6">
                {TESTS.map((test) => (
                    <div key={test.id} className="bg-surface border border-border-subtle rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                        <div className="p-6 border-b border-border-subtle bg-surface-muted/30 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-600/10">
                                    <BarChart3 className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold text-ink">{test.name}</h3>
                                <span className="px-2 py-0.5 bg-emerald-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                                    {test.status}
                                </span>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="text-right">
                                    <div className="text-[10px] font-bold text-gray-mute uppercase tracking-widest mb-0.5">Traffic Split</div>
                                    <div className="text-xs font-bold text-ink">{test.traffic}</div>
                                </div>
                                <button className="p-2 text-gray-mute hover:text-ink hover:bg-surface rounded-lg">
                                    <MoreHorizontal className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="flex items-center justify-between gap-12">
                                {/* Variant A */}
                                <div className="flex-1 p-6 bg-surface-muted/50 rounded-2xl border border-border-subtle relative">
                                    <div className="absolute -top-3 left-6 px-3 py-1 bg-white border border-border-subtle rounded-full text-[10px] font-bold text-gray-mute uppercase tracking-widest leading-none">
                                        Variant A
                                    </div>
                                    <div className="flex justify-between items-end mb-4">
                                        <div>
                                            <div className="text-sm font-bold text-ink">{test.variantA.name}</div>
                                            <div className="text-[10px] text-gray-mute">{test.variantA.completions} completions</div>
                                        </div>
                                        <div className="text-2xl font-black text-ink">{test.variantA.rate * 100}%</div>
                                    </div>
                                    <div className="h-2 bg-emerald-600/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-600/20" style={{ width: `${test.variantA.rate * 100}%` }} />
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-600/10 shadow-sm animate-pulse">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Growing</div>
                                </div>

                                {/* Variant B */}
                                <div className="flex-1 p-6 bg-emerald-50/30 rounded-2xl border border-emerald-600/20 relative">
                                    <div className="absolute -top-3 left-6 px-3 py-1 bg-emerald-600 text-white rounded-full text-[10px] font-bold uppercase tracking-widest leading-none">
                                        Variant B
                                    </div>
                                    <div className="flex justify-between items-end mb-4">
                                        <div>
                                            <div className="text-sm font-bold text-ink">{test.variantB.name}</div>
                                            <div className="text-[10px] text-gray-mute">{test.variantB.completions} completions</div>
                                        </div>
                                        <div className="text-2xl font-black text-emerald-600">{test.variantB.rate * 100}%</div>
                                    </div>
                                    <div className="h-2 bg-emerald-600/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-600 shadow-sm" style={{ width: `${test.variantB.rate * 100}%` }} />
                                    </div>
                                    <div className="mt-4 flex items-center gap-2 text-emerald-600">
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Leading with {test.confidence} confidence</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-8 py-4 bg-surface-muted/20 border-t border-border-subtle flex items-center justify-between text-[11px]">
                            <div className="flex gap-4">
                                <span className="text-gray-mute flex items-center gap-1.5"><Users className="w-3 h-3" /> 1,200 participants</span>
                                <span className="text-gray-mute flex items-center gap-1.5"><PlayCircle className="w-3 h-3" /> Started 4 days ago</span>
                            </div>
                            <button className="font-bold text-emerald-600 hover:text-emerald-800 transition-colors uppercase tracking-widest">
                                View Full Analytics
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-8 bg-amber-50 rounded-[40px] border border-amber-100 flex items-center gap-8">
                <div className="w-16 h-16 rounded-3xl bg-white flex items-center justify-center text-amber-600 shadow-sm border border-amber-600/10 shrink-0">
                    <Zap className="w-8 h-8" />
                </div>
                <div>
                    <h4 className="text-lg font-bold text-amber-900 mb-1">Growth Tip: Aim for 1,000+ per variant</h4>
                    <p className="text-amber-700/80 text-sm leading-relaxed">
                        Statistical significance is harder to reach on flows with low traffic. For flows with under 100 views/day, we recommend running tests for at least 14 days before declaring a winner.
                    </p>
                </div>
                <button className="ml-auto h-11 px-6 bg-white border border-amber-200 text-amber-700 rounded-xl text-sm font-bold shadow-sm hover:bg-amber-100 transition-all whitespace-nowrap">
                    Read the Guide
                </button>
            </div>
        </div>
    );
}
