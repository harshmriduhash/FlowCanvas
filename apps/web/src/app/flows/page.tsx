"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { Plus, Search, Filter, MoreHorizontal, Play, BarChart3, Edit3, Trash2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MOCK_FLOWS = [
    { id: "1", name: "New User Onboarding", status: "published", steps: 5, views: 1240, completion: "68%" },
    { id: "2", name: "Pro Feature Upsell", status: "draft", steps: 3, views: 0, completion: "0%" },
    { id: "3", name: "Churn Prevention Survey", status: "published", steps: 1, views: 850, completion: "42%" },
];

export default function FlowsPage() {
    const [search, setSearch] = useState("");

    return (
        <DashboardLayout>
            <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
                <div className="flex items-end justify-between">
                    <div>
                        <h1 className="text-3xl font-black text-ink tracking-tight">Flows</h1>
                        <p className="text-gray-mute mt-1">Create and manage your interactive user journeys</p>
                    </div>
                    <button className="h-11 px-6 bg-emerald-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-600/20">
                        <Plus className="w-5 h-5" />
                        Create Flow
                    </button>
                </div>

                <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-border-subtle shadow-sm">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-mute" />
                        <input
                            type="text"
                            placeholder="Search flows..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full h-10 pl-10 pr-4 bg-surface-muted border-none rounded-xl text-sm outline-none focus:ring-1 focus:ring-emerald-600/20"
                        />
                    </div>
                    <button className="h-10 px-4 flex items-center gap-2 text-xs font-bold text-gray-mute hover:bg-surface-muted rounded-xl transition-all">
                        <Filter className="w-4 h-4" />
                        Status: All
                    </button>
                </div>

                <div className="bg-white border border-border-subtle rounded-[32px] overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border-subtle bg-surface-muted/50">
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Flow Name</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Steps</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Performance</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-subtle">
                            {MOCK_FLOWS.map((flow) => (
                                <tr key={flow.id} className="group hover:bg-surface-muted/30 transition-colors">
                                    <td className="px-8 py-6">
                                        <div className="font-bold text-ink group-hover:text-emerald-600 transition-colors">{flow.name}</div>
                                        <div className="text-[10px] text-gray-mute mt-1">Last edited 2 hours ago</div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={cn(
                                            "text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider",
                                            flow.status === "published" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-surface-muted text-gray-mute border border-border-subtle"
                                        )}>
                                            {flow.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="text-sm font-medium text-ink">{flow.steps} steps</div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4 text-xs font-bold">
                                            <div title="Views">
                                                <span className="text-gray-mute">Views:</span> {flow.views}
                                            </div>
                                            <div title="Completion">
                                                <span className="text-gray-mute">CR:</span> {flow.completion}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link href={`/flows/${flow.id}/edit`} className="p-2 hover:bg-white hover:shadow-md rounded-xl text-gray-mute hover:text-emerald-600 transition-all border border-transparent hover:border-emerald-100">
                                                <Edit3 className="w-4 h-4" />
                                            </Link>
                                            <Link href={`/flows/${flow.id}/analytics`} className="p-2 hover:bg-white hover:shadow-md rounded-xl text-gray-mute hover:text-blue-600 transition-all border border-transparent hover:border-blue-100">
                                                <BarChart3 className="w-4 h-4" />
                                            </Link>
                                            <button className="p-2 hover:bg-white hover:shadow-md rounded-xl text-gray-mute hover:text-ink transition-all">
                                                <MoreHorizontal className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}
