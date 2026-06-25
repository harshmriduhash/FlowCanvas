"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, Calendar, Download, TrendingDown, Target, Clock, Sparkles } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { FunnelView } from "@/components/analytics/funnel-view";
import { cn } from "@/lib/utils";

const ranges = [
    { label: "Last 7 days", value: "7d" },
    { label: "Last 30 days", value: "30d" },
    { label: "Last 90 days", value: "90d" },
    { label: "Custom Range", value: "custom" },
];

export default function FlowAnalyticsPage({ params }: { params: { id: string } }) {
    const [range, setRange] = useState("30d");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 600);
        return () => clearTimeout(timer);
    }, [range]);

    return (
        <DashboardLayout>
            <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 mb-2">
                            <Link href="/dashboard" className="text-gray-mute hover:text-ink transition-colors">
                                <ChevronLeft className="w-5 h-5" />
                            </Link>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Analytics</span>
                        </div>
                        <h1 className="text-3xl font-black text-ink tracking-tight">Onboarding Tour</h1>
                        <p className="text-gray-mute">Performance insights for your user journey</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="bg-white border border-border-subtle rounded-xl p-1 flex gap-1 shadow-sm">
                            {ranges.map((r) => (
                                <button
                                    key={r.value}
                                    onClick={() => setRange(r.value)}
                                    className={cn(
                                        "px-4 py-2 text-xs font-bold rounded-lg transition-all",
                                        range === r.value
                                            ? "bg-ink text-white shadow-md"
                                            : "text-gray-mute hover:bg-surface-muted hover:text-ink"
                                    )}
                                >
                                    {r.label}
                                </button>
                            ))}
                        </div>
                        <button className="h-10 w-10 flex items-center justify-center bg-white border border-border-subtle rounded-xl text-ink hover:bg-surface-muted transition-all shadow-sm">
                            <Download className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard
                        label="Total Sessions"
                        value="12,482"
                        change="+12.4%"
                        icon={<Target className="w-5 h-5 text-emerald-600" />}
                    />
                    <StatCard
                        label="Completion Rate"
                        value="68.2%"
                        change="+2.1%"
                        icon={<TrendingDown className="w-5 h-5 text-amber-600 rotate-180" />}
                    />
                    <StatCard
                        label="Avg. Time to Complete"
                        value="42s"
                        change="-4s"
                        icon={<Clock className="w-5 h-5 text-blue-600" />}
                    />
                </div>

                {/* Funnel & AI Insights */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3 bg-white border border-border-subtle rounded-[32px] p-8 shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="font-bold text-ink">Conversion Funnel</h2>
                            <span className="text-[10px] font-bold text-gray-mute uppercase tracking-widest bg-surface-muted px-3 py-1 rounded-full">Step-by-step</span>
                        </div>
                        {loading ? (
                            <div className="h-[400px] flex items-center justify-center">
                                <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            <FunnelView />
                        )}
                    </div>

                    <div className="space-y-6">
                        <div className="bg-emerald-950 rounded-[32px] p-6 text-white shadow-xl relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <Sparkles className="w-4 h-4 text-emerald-400" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">AI Insights</span>
                                </div>
                                <p className="text-sm leading-relaxed text-emerald-100 font-medium">
                                    "Step 3 has your steepest drop-off (64% → 58%) and the longest average time-on-step. This combination usually means the copy is asking the user to read too much before acting."
                                </p>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 blur-3xl -mr-16 -mt-16 rounded-full" />
                        </div>

                        <div className="bg-surface border border-border-subtle rounded-[32px] p-6 shadow-sm">
                            <h3 className="font-bold text-ink mb-4 text-sm">Top Drop-off Reasonds</h3>
                            <div className="space-y-4">
                                <ReasonItem step="03" label="Information Overload" pct="42%" color="bg-amber-500" />
                                <ReasonItem step="02" label="Technical Error" pct="12%" color="bg-red-500" />
                                <ReasonItem step="05" label="Abandoned" pct="8%" color="bg-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

function StatCard({ label, value, change, icon }: { label: string; value: string; change: string; icon: React.ReactNode }) {
    return (
        <div className="bg-white border border-border-subtle rounded-[24px] p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-surface-muted flex items-center justify-center">
                    {icon}
                </div>
                <span className={cn(
                    "text-xs font-black px-2 py-1 rounded-lg",
                    change.startsWith('+') ? "bg-emerald-50 text-emerald-700" : "bg-blue-50 text-blue-700"
                )}>
                    {change}
                </span>
            </div>
            <div className="text-[10px] font-bold text-gray-mute uppercase tracking-widest mb-1">{label}</div>
            <div className="text-2xl font-black text-ink">{value}</div>
        </div>
    );
}

function ReasonItem({ step, label, pct, color }: { step: string; label: string; pct: string; color: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="text-[10px] font-black text-gray-mute w-5"># {step}</div>
            <div className="flex-1">
                <div className="flex justify-between text-[11px] font-bold mb-1.5">
                    <span>{label}</span>
                    <span className="text-gray-mute font-black">{pct}</span>
                </div>
                <div className="h-1.5 bg-surface-muted rounded-full overflow-hidden">
                    <div className={cn("h-full rounded-full transition-all duration-1000", color)} style={{ width: pct }} />
                </div>
            </div>
        </div>
    );
}
