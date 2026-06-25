"use client";

import { useState } from "react";
import {
    CreditCard,
    Check,
    ArrowUpRight,
    Zap,
    Users,
    Activity,
    Lock
} from "lucide-react";
import { cn } from "@/lib/utils";

const PLANS = [
    { name: "Free", price: "0", sessions: "2.5k", flows: "3", features: ["1 Project", "Standard Themes", "Basic Analytics"] },
    { name: "Starter", price: "49", sessions: "10k", flows: "10", features: ["3 Projects", "All Themes", "Funnel Insights", "Email Support"] },
    { name: "Growth", price: "199", sessions: "50k", flows: "Unlimited", features: ["Unlimited Projects", "A/B Testing", "Visual Branching", "Priority Support"], featured: true },
];

export default function BillingPage() {
    const [upgrading, setUpgrading] = useState<string | null>(null);
    const [processing, setProcessing] = useState(false);

    const handleUpgrade = (plan: string) => {
        setUpgrading(plan);
    };

    const confirmPayment = () => {
        setProcessing(true);
        setTimeout(() => {
            setProcessing(false);
            setUpgrading(null);
        }, 1500);
    };

    return (
        <div className="max-w-6xl mx-auto py-10 px-6">
            <header className="mb-10 lg:flex lg:items-end lg:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-ink mb-2">Billing & Plans</h1>
                    <p className="text-gray-mute text-sm">Manage your subscription and project limits.</p>
                </div>
                <div className="mt-4 lg:mt-0 flex gap-4">
                    <div className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-bold border border-emerald-600/10 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5" />
                        Active Plan: Growth
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {PLANS.map((plan) => (
                    <div
                        key={plan.name}
                        className={cn(
                            "bg-surface border rounded-3xl p-8 flex flex-col relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                            plan.featured ? "border-emerald-600 ring-4 ring-emerald-600/5 shadow-lg" : "border-border-subtle"
                        )}
                    >
                        {plan.featured && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-xl">
                                Recommended
                            </span>
                        )}
                        <h3 className="text-lg font-bold text-ink mb-2">{plan.name}</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-black text-ink">${plan.price}</span>
                            <span className="text-gray-mute text-sm font-medium">/mo</span>
                        </div>

                        <div className="space-y-4 mb-10 flex-1">
                            <div className="pb-4 border-b border-border-subtle">
                                <div className="text-xs font-bold text-gray-mute uppercase mb-3 tracking-widest">Plan Limits</div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-ink">
                                        <Activity className="w-4 h-4 text-emerald-600" />
                                        {plan.sessions} sessions/mo
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-ink">
                                        <Zap className="w-4 h-4 text-emerald-600" />
                                        {plan.flows} flows
                                    </div>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {plan.features.map(f => (
                                    <li key={f} className="text-sm text-gray-mute flex items-center gap-3">
                                        <Check className="w-4 h-4 text-emerald-600 opacity-50" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            disabled={plan.name === "Growth"}
                            onClick={() => handleUpgrade(plan.name)}
                            className={cn(
                                "w-full h-12 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2",
                                plan.name === "Growth"
                                    ? "bg-surface-muted text-gray-mute cursor-default"
                                    : "bg-emerald-600 text-white hover:bg-emerald-800 shadow-md shadow-emerald-600/20"
                            )}
                        >
                            {plan.name === "Growth" ? "Current Plan" : `Upgrade to ${plan.name}`}
                        </button>
                    </div>
                ))}
            </div>

            {/* Usage Summary */}
            <section className="bg-surface border border-border-subtle rounded-3xl p-10 shadow-sm">
                <h2 className="text-xl font-bold text-ink mb-8 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-emerald-600" />
                    Month-to-date Usage
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="font-semibold text-ink">Sessions Used</span>
                            <span className="text-gray-mute">12,450 / 50,000</span>
                        </div>
                        <div className="h-2.5 bg-surface-muted rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-600 rounded-full" style={{ width: "25%" }} />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="font-semibold text-ink">Flows Created</span>
                            <span className="text-gray-mute">8 / Unlimited</span>
                        </div>
                        <div className="h-2.5 bg-surface-muted rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-600 rounded-full" style={{ width: "15%" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mock Stripe Modal */}
            {upgrading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-ink/40 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-[#F6F9FC] w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
                        <div className="p-8 bg-white border-b border-[#E6EBF1] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-emerald-600 flex items-center justify-center text-white font-black text-lg italic">F</div>
                                <h2 className="text-lg font-bold text-[#424770]">FlowCanvas</h2>
                            </div>
                            <button onClick={() => setUpgrading(null)} className="text-[#8792A2] hover:text-[#424770] font-medium text-sm transition-colors">Cancel</button>
                        </div>

                        <div className="p-10">
                            <h3 className="text-2xl font-bold text-[#424770] mb-8">Subscribe to {upgrading}</h3>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold text-[#8792A2] uppercase mb-2">Card Information</label>
                                    <div className="h-12 bg-white border border-[#E6EBF1] rounded-lg px-4 flex items-center gap-3 shadow-sm">
                                        <CreditCard className="w-5 h-5 text-[#8792A2]" />
                                        <input type="text" placeholder="4242 4242 4242 4242" className="flex-1 bg-transparent border-none text-[#424770] focus:ring-0 placeholder-[#8792A2]" />
                                        <span className="text-[#8792A2] text-sm">12/28</span>
                                        <span className="text-[#8792A2] text-sm">CVC</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-4 bg-[#EBF1F9] rounded-lg border border-[#D9E3F0]">
                                    <Lock className="w-4 h-4 text-[#424770] mt-0.5" />
                                    <p className="text-xs text-[#424770] leading-relaxed">
                                        Payment information is simulated for this MVP. No real charges will be made. All PCI standards are emulated.
                                    </p>
                                </div>

                                <button
                                    onClick={confirmPayment}
                                    disabled={processing}
                                    className="w-full h-12 bg-[#635BFF] text-white rounded-lg font-bold hover:bg-[#5851E0] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#635BFF]/20"
                                >
                                    {processing ? (
                                        <RefreshCcw className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <>Pay and Subscribe <ArrowUpRight className="w-4 h-4" /></>
                                    )}
                                </button>

                                <p className="text-center text-[10px] text-[#8792A2]">
                                    Powered by <span className="font-bold">Stripe</span> (Simulated)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
