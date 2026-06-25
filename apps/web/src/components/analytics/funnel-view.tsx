"use client";

import { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { TrendingDown, Lightbulb } from "lucide-react";

const MOCK_DATA = [
    { name: "Triggered", value: 4200, color: "#16201C" },
    { name: "Step 1", value: 3800, color: "#0E7C66" },
    { name: "Step 2", value: 2900, color: "#22C55E" },
    { name: "Step 3", value: 2400, color: "#4ADE80" },
    { name: "Completed", value: 2100, color: "#86EFAC" },
];

export default function FunnelAnalyticsView() {
    const chartData = useMemo(() => MOCK_DATA, []);

    return (
        <div className="bg-surface border border-border-subtle rounded-[32px] p-10 shadow-premium">
            <div className="mb-10 flex items-start justify-between">
                <div>
                    <h2 className="text-xl font-bold text-ink mb-1">Conversion Funnel</h2>
                    <p className="text-sm text-gray-mute">Track user drop-off at every stage of the onboarding journey.</p>
                </div>
                <div className="flex gap-8">
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-bold text-gray-mute uppercase tracking-widest mb-1">Conversion Rate</span>
                        <span className="text-2xl font-black text-emerald-600">50.0%</span>
                    </div>
                </div>
            </div>

            <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.03)" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fontWeight: 700, fill: "#94A3B8" }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fontWeight: 700, fill: "#94A3B8" }}
                        />
                        <Tooltip
                            cursor={{ fill: 'rgba(14, 124, 102, 0.03)' }}
                            contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', fontSize: '12px', padding: '16px' }}
                        />
                        <Bar dataKey="value" radius={[12, 12, 0, 0]} barSize={50}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-12 p-8 bg-emerald-50 rounded-[40px] border border-emerald-100 flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-3xl flex items-center justify-center shrink-0 shadow-sm border border-emerald-600/10">
                    <Lightbulb className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                    <h4 className="text-lg font-bold text-emerald-900 mb-1">AI Growth Insight</h4>
                    <p className="text-sm text-emerald-700/80 leading-relaxed">
                        Users on <span className="font-bold">Step 2</span> are dropping off 15% more frequently than similar projects. This often indicates a friction point in form completion. Consider moving this step further down the flow.
                    </p>
                </div>
            </div>
        </div>
    );
}
