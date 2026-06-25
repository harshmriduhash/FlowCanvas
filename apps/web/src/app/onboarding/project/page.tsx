"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Globe, ArrowRight, Loader2 } from "lucide-react";

export default function ProjectOnboardingPage() {
    const [name, setName] = useState("");
    const [appUrl, setAppUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/projects", {
                method: "POST",
                body: JSON.stringify({ name, appUrl }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error);

            router.push("/onboarding/install-snippet?projectId=" + data.id);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-surface-muted flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-xl bg-surface p-10 rounded-2xl border border-border-subtle shadow-premium">
                <div className="mb-10 text-center">
                    <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full mb-4 inline-block">
                        Step 1 of 2
                    </span>
                    <h1 className="text-3xl font-display font-semibold text-ink mt-2">What are we building today?</h1>
                    <p className="text-gray-mute mt-3 text-lg">Give your project a name and tell us where it lives.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-ink mb-2">Project Name</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Acme Dashboard"
                            className="w-full h-12 px-4 bg-surface-muted border border-border-subtle rounded-xl focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all text-ink"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-ink mb-2">Application URL</label>
                        <div className="relative">
                            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-mute" />
                            <input
                                type="url"
                                required
                                value={appUrl}
                                onChange={(e) => setAppUrl(e.target.value)}
                                placeholder="https://app.acme.com"
                                className="w-full h-12 pl-12 pr-4 bg-surface-muted border border-border-subtle rounded-xl focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all text-ink"
                            />
                        </div>
                        <p className="text-xs text-gray-mute mt-2 italic">
                            We'll use this to load a live preview of your app in the builder.
                        </p>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-14 bg-emerald-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-800 transition-colors disabled:opacity-70 group"
                    >
                        {loading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                Create project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
