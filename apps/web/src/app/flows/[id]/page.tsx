"use client";

import DashboardLayout from "@/components/layout/dashboard-layout";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
    ChevronLeft, Edit3, BarChart3, GitBranch, Play, MousePointer2,
    MessageSquare, Target, Star, Zap, MoreHorizontal, Globe, Copy, CheckCircle2
} from "lucide-react";
import { useState } from "react";

const MOCK_FLOW = {
    id: "1",
    name: "Welcome Tour",
    status: "published",
    steps: [
        { id: "s1", order: 1, type: "tooltip", title: "Step 1 — Discover the Canvas", desc: "Introduce the main workspace area." },
        { id: "s2", order: 2, type: "modal", title: "Step 2 — Create your first Flow", desc: "Guide user to click the + button." },
        { id: "s3", order: 3, type: "hotspot", title: "Step 3 — Publish & Share", desc: "Highlight the publish button." },
        { id: "s4", order: 4, type: "nps", title: "Step 4 — Rate your experience", desc: "Collect NPS feedback after onboarding." },
    ],
    stats: { views: 1240, completions: 842, rate: "67.9", avgTime: "2m 14s" },
    embedSnippet: `<script src="https://cdn.flowcanvas.dev/loader.js" data-project-key="fc_demo_key_123" async></script>`,
};

const STEP_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
    tooltip: MousePointer2,
    modal: MessageSquare,
    hotspot: Target,
    nps: Star,
};

export default function FlowDetailPage() {
    const { id } = useParams();
    const flow = MOCK_FLOW;
    const [copied, setCopied] = useState(false);

    const copySnippet = () => {
        navigator.clipboard.writeText(flow.embedSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <DashboardLayout>
            <div className="p-8 max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href="/flows" className="p-2 hover:bg-white rounded-xl shadow-sm border border-border-subtle transition-all text-gray-mute hover:text-ink">
                        <ChevronLeft className="w-5 h-5" />
                    </Link>
                    <div className="flex-1">
                        <h1 className="text-3xl font-black text-ink tracking-tight">{flow.name}</h1>
                        <span className="inline-flex items-center gap-1.5 mt-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full uppercase tracking-widest">
                            <Globe className="w-3 h-3" />
                            Published
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link
                            href={`/flows/${id}/analytics`}
                            className="h-10 px-4 flex items-center gap-2 border border-border-subtle bg-white rounded-xl text-xs font-bold hover:bg-surface-muted transition-all shadow-sm"
                        >
                            <BarChart3 className="w-4 h-4" />
                            Analytics
                        </Link>
                        <Link
                            href={`/flows/${id}/branching`}
                            className="h-10 px-4 flex items-center gap-2 border border-border-subtle bg-white rounded-xl text-xs font-bold hover:bg-surface-muted transition-all shadow-sm"
                        >
                            <GitBranch className="w-4 h-4" />
                            Branching
                        </Link>
                        <Link
                            href={`/flows/${id}/edit`}
                            className="h-10 px-5 flex items-center gap-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-600/20"
                        >
                            <Edit3 className="w-4 h-4" />
                            Edit Flow
                        </Link>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-4">
                    {[
                        { label: "Total Views", value: flow.stats.views.toLocaleString(), color: "text-ink" },
                        { label: "Completions", value: flow.stats.completions.toLocaleString(), color: "text-ink" },
                        { label: "Completion Rate", value: `${flow.stats.rate}%`, color: "text-emerald-600" },
                        { label: "Avg. Time", value: flow.stats.avgTime, color: "text-blue-600" },
                    ].map((s) => (
                        <div key={s.label} className="bg-white border border-border-subtle rounded-3xl p-6 shadow-sm">
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{s.label}</div>
                            <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                        </div>
                    ))}
                </div>

                {/* Steps */}
                <div className="bg-white border border-border-subtle rounded-[32px] overflow-hidden shadow-sm">
                    <div className="px-8 py-5 border-b border-border-subtle flex items-center justify-between">
                        <h2 className="font-bold text-ink">Flow Steps ({flow.steps.length})</h2>
                        <Link href={`/flows/${id}/edit`} className="text-xs font-bold text-emerald-600 hover:text-emerald-800 transition-colors">
                            Edit in Canvas →
                        </Link>
                    </div>
                    <div className="divide-y divide-border-subtle">
                        {flow.steps.map((step, i) => {
                            const Icon = STEP_ICONS[step.type] || MousePointer2;
                            return (
                                <div key={step.id} className="px-8 py-6 flex items-center gap-6 hover:bg-surface-muted/30 transition-colors group">
                                    <div className="w-10 h-10 rounded-2xl bg-surface-muted border border-border-subtle flex items-center justify-center flex-shrink-0 text-gray-mute font-black text-xs">
                                        {i + 1}
                                    </div>
                                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-bold text-ink group-hover:text-emerald-600 transition-colors">{step.title}</div>
                                        <div className="text-xs text-gray-mute mt-0.5">{step.desc}</div>
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-mute px-2 py-1 bg-surface-muted rounded-full border border-border-subtle">
                                        {step.type}
                                    </span>
                                    <button className="opacity-0 group-hover:opacity-100 transition-all p-2 hover:bg-white rounded-lg text-gray-mute">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Embed Snippet */}
                <div className="bg-ink rounded-[32px] p-8 text-white shadow-xl shadow-ink/10">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="font-bold text-lg">Install Snippet</h2>
                            <p className="text-white/50 text-xs mt-1">Add this to your site's &lt;head&gt; to activate flows</p>
                        </div>
                        <button
                            onClick={copySnippet}
                            className={`h-10 px-5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${copied ? "bg-emerald-600 text-white" : "bg-white/10 hover:bg-white/20 text-white"}`}
                        >
                            {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            {copied ? "Copied!" : "Copy Snippet"}
                        </button>
                    </div>
                    <code className="block bg-white/5 border border-white/10 rounded-2xl p-6 font-mono text-xs text-emerald-400 leading-relaxed whitespace-pre-wrap break-all">
                        {flow.embedSnippet}
                    </code>
                </div>
            </div>
        </DashboardLayout>
    );
}
