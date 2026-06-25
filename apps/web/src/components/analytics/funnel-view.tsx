"use client";

import { TrendingDown, Users, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FunnelStep {
    name: string;
    views: number;
    dropoff: number;
}

const mockData: FunnelStep[] = [
    { name: "Step 1: Welcome", views: 4200, dropoff: 0 },
    { name: "Step 2: Profile Setup", views: 3100, dropoff: 26 },
    { name: "Step 3: Feature Tour", views: 2400, dropoff: 22 },
    { name: "Step 4: Completion", views: 2150, dropoff: 10 },
];

export default function FunnelAnalyticsView() {
    const maxViews = Math.max(...mockData.map(s => s.views));

    return (
        <div className="bg-surface border border-border-subtle rounded-2xl p-8 shadow-premium">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h2 className="text-xl font-display font-semibold text-ink">Onboarding Funnel</h2>
                    <p className="text-sm text-gray-mute">Identify exactly where users are getting stuck.</p>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-emerald-600 rounded-sm" />
                        <span className="text-sm text-ink font-medium">Views</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-100 rounded-sm" />
                        <span className="text-sm text-gray-mute font-medium">Drop-off</span>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                {mockData.map((step, i) => (
                    <div key={i} className="relative">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-ink">{step.name}</span>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1.5 text-gray-mute text-sm">
                                    <Users className="w-4 h-4" />
                                    {step.views.toLocaleString()}
                                </div>
                                {step.dropoff > 0 && (
                                    <div className="flex items-center gap-1 text-red-500 text-sm font-bold bg-red-50 px-2 py-0.5 rounded-full">
                                        <TrendingDown className="w-3 h-3" />
                                        {step.dropoff}%
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="h-4 bg-surface-muted rounded-full overflow-hidden flex">
                            <div
                                className="h-full bg-emerald-600 rounded-full transition-all duration-1000"
                                style={{ width: `${(step.views / maxViews) * 100}%` }}
                            />
                        </div>

                        {i < mockData.length - 1 && (
                            <div className="absolute -bottom-6 left-12 flex flex-col items-center opacity-30">
                                <div className="w-px h-4 bg-border-subtle" />
                                <ChevronRight className="w-3 h-3 rotate-90 text-gray-mute" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-12 p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                    <span className="text-xl">💡</span>
                </div>
                <div>
                    <h4 className="text-sm font-bold text-emerald-800">AI Recommendation</h4>
                    <p className="text-sm text-emerald-700 mt-1 leading-relaxed">
                        Drop-off at <span className="font-bold">Step 2</span> is 15% higher than industry average. Try reducing the number of input fields or adding a "Skip" option.
                    </p>
                </div>
            </div>
        </div>
    );
}
