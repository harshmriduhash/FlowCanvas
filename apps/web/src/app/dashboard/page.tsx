import DashboardLayout from "@/components/layout/dashboard-layout";
import { Plus, MousePointer2, TrendingUp, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { SnippetStatusBanner } from "@/components/dashboard/snippet-status-banner";

export default function DashboardPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <DashboardLayout>
                <SnippetStatusBanner />
                <div className="p-8 max-w-7xl mx-auto space-y-8">
                    <div className="flex justify-between items-end">
                        <div className="space-y-2">
                            <Skeleton className="h-10 w-48" />
                            <Skeleton className="h-4 w-64" />
                        </div>
                        <Skeleton className="h-11 w-32 rounded-xl" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map(i => <Skeleton key={i} className="h-[200px] rounded-2xl" />)}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map(i => <Skeleton key={i} className="h-32 rounded-2xl" />)}
                    </div>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="p-8 max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-display font-semibold text-ink">Your Flows</h1>
                        <p className="text-gray-mute">Track and optimize your onboarding performance.</p>
                    </div>
                    <Link
                        href="/flows/new"
                        className="h-10 px-4 bg-emerald-600 text-white rounded-xl font-medium flex items-center gap-2 hover:bg-emerald-800 transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        Create flow
                    </Link>
                </div>

                {/* Flow Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {/* Create New Card */}
                    <Link
                        href="/onboarding/project"
                        className="h-[200px] border-2 border-dashed border-border-subtle rounded-2xl flex flex-col items-center justify-center gap-3 text-gray-mute hover:border-emerald-600 hover:text-emerald-600 transition-all group"
                    >
                        <div className="w-12 h-12 bg-surface-muted rounded-full flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                            <Plus className="w-6 h-6" />
                        </div>
                        <span className="font-medium">Create your first flow</span>
                    </Link>

                    {/* Example Card */}
                    <div className="h-[200px] bg-surface border border-border-subtle rounded-2xl p-5 shadow-premium hover:shadow-none transition-shadow group flex flex-col">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="font-semibold text-ink group-hover:text-emerald-600 transition-colors">Onboarding Tour</h3>
                                <span className="text-xs text-gray-mute">Last edited 2h ago</span>
                            </div>
                            <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                                Published
                            </span>
                        </div>

                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-mute">Sessions</span>
                                <span className="text-xl font-bold text-ink">1,240</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-mute">Completion</span>
                                <span className="text-xl font-bold text-ink">64.2%</span>
                            </div>
                        </div>

                        <Link
                            href="/flows/123/edit"
                            className="mt-4 text-sm font-medium text-emerald-600 flex items-center gap-1 hover:underline"
                        >
                            Edit Flow <MousePointer2 className="w-3 h-3" />
                        </Link>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-surface border border-border-subtle rounded-2xl p-6 shadow-premium">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm text-gray-mute font-medium mb-1">Total Sessions</h4>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-ink">8,420</span>
                            <span className="text-xs text-success-green font-medium">+12%</span>
                        </div>
                    </div>

                    <div className="bg-surface border border-border-subtle rounded-2xl p-6 shadow-premium">
                        <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                            <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm text-gray-mute font-medium mb-1">Avg. Completion</h4>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-ink">58.4%</span>
                            <span className="text-xs text-success-green font-medium">+4.2%</span>
                        </div>
                    </div>

                    <div className="bg-surface border border-border-subtle rounded-2xl p-6 shadow-premium">
                        <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4 text-amber-500">
                            <Clock className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm text-gray-mute font-medium mb-1">Time to Complete</h4>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-ink">42s</span>
                            <span className="text-xs text-red-500 font-medium">+5s</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        {/* Existing line chart area */}
                    </div>
                    <div>
                        {/* Top Performing Flow Card (PRD 8.2) */}
                        <div className="bg-emerald-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden group">
                            <div className="relative z-10">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Top Performing</span>
                                <h3 className="text-xl font-bold mt-2 mb-4">Onboarding Tour</h3>
                                <div className="flex items-end justify-between">
                                    <div>
                                        <div className="text-3xl font-black text-white">68.2%</div>
                                        <div className="text-xs text-emerald-300">Completion rate</div>
                                    </div>
                                    <Link
                                        href="/flows/123/analytics"
                                        className="h-10 px-4 bg-white/10 backdrop-blur-md rounded-xl flex items-center gap-2 hover:bg-white/20 transition-all text-sm font-bold"
                                    >
                                        Insights
                                    </Link>
                                </div>
                            </div>
                            <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12 transition-transform group-hover:scale-110">
                                <TrendingUp className="w-32 h-32" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
