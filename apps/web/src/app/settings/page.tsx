"use client";

import DashboardLayout from "@/components/layout/dashboard-layout";
import { User, Settings, Shield, CreditCard, Bell, Key, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
    const [copied, setCopied] = useState(false);
    const projectKey = "fc_demo_key_123";

    const copyKey = () => {
        navigator.clipboard.writeText(projectKey);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <DashboardLayout>
            <div className="p-8 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
                <div className="mb-12">
                    <h1 className="text-3xl font-black text-ink tracking-tight">Settings</h1>
                    <p className="text-gray-mute mt-1">Manage your project configuration and credentials</p>
                </div>

                {/* API Credentials */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center border border-emerald-100">
                            <Key className="w-4 h-4 text-emerald-600" />
                        </div>
                        <h2 className="font-bold text-ink">API Credentials</h2>
                    </div>

                    <div className="bg-white border border-border-subtle rounded-[32px] p-8 shadow-sm">
                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Project API Key</label>
                        <div className="flex items-center gap-3">
                            <code className="flex-1 h-12 bg-surface-muted rounded-xl border border-border-subtle flex items-center px-4 font-mono text-xs text-ink overflow-hidden whitespace-nowrap">
                                {projectKey}
                            </code>
                            <button
                                onClick={copyKey}
                                className={cn(
                                    "h-12 px-6 rounded-xl font-bold text-xs transition-all flex items-center gap-2",
                                    copied ? "bg-emerald-50 text-emerald-600 border border-emerald-200" : "bg-ink text-white hover:bg-emerald-800"
                                )}
                            >
                                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                {copied ? "Copied" : "Copy Key"}
                            </button>
                        </div>
                        <p className="mt-4 text-xs text-gray-mute leading-relaxed">
                            Use this key in your embed script. Keep it public; it's scoped to your allowed domains.
                        </p>
                    </div>
                </section>

                {/* Project Details */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100">
                            <Settings className="w-4 h-4 text-blue-600" />
                        </div>
                        <h2 className="font-bold text-ink">Project Details</h2>
                    </div>

                    <div className="bg-white border border-border-subtle rounded-[32px] p-8 shadow-sm space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs font-bold text-ink mb-2">Display Name</label>
                                <input type="text" defaultValue="Onboarding Demo" className="w-full h-11 bg-surface-muted border border-border-subtle rounded-xl px-4 text-sm outline-none focus:border-emerald-600 transition-all font-medium" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-ink mb-2">Slug</label>
                                <input type="text" defaultValue="onboarding-demo" className="w-full h-11 bg-surface-muted border border-border-subtle rounded-xl px-4 text-sm outline-none focus:border-emerald-600 transition-all font-medium" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-ink mb-2">Application URL</label>
                            <input type="text" defaultValue="http://localhost:3000" className="w-full h-11 bg-surface-muted border border-border-subtle rounded-xl px-4 text-sm outline-none focus:border-emerald-600 transition-all font-medium" />
                            <p className="mt-2 text-[10px] text-gray-mute">Tours will only trigger on this domain + subdomains.</p>
                        </div>
                        <button className="h-12 px-8 bg-emerald-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-600/20">
                            Save Changes
                        </button>
                    </div>
                </section>

                {/* Security & Danger Zone */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center border border-red-100">
                            <Shield className="w-4 h-4 text-red-600" />
                        </div>
                        <h2 className="font-bold text-ink">Danger Zone</h2>
                    </div>

                    <div className="bg-red-50 border border-red-100 rounded-[32px] p-8 space-y-6">
                        <div>
                            <h3 className="font-bold text-red-900 mb-1">Delete Project</h3>
                            <p className="text-xs text-red-700/70 leading-relaxed">
                                Once deleted, all flows, analytics, and settings will be permanently removed. This action cannot be undone.
                            </p>
                        </div>
                        <button className="h-11 px-6 bg-red-600 text-white rounded-xl font-bold text-xs hover:bg-red-800 transition-all shadow-lg shadow-red-600/20">
                            Delete Project Forever
                        </button>
                    </div>
                </section>
            </div>
        </DashboardLayout>
    );
}
