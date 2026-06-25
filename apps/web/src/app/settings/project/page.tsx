"use client";

import { useState } from "react";
import {
    Copy,
    RefreshCcw,
    Terminal,
    Globe,
    ShieldAlert,
    CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectSettingsPage() {
    const [regenerating, setRegenerating] = useState(false);
    const [copied, setCopied] = useState(false);

    const projectKey = "pk_live_8f2a91b4c7d6e5f4";
    const snippet = `<script src="https://flowcanvas.dev/loader.js" data-project="${projectKey}" async></script>`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(snippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-6xl mx-auto py-10 px-6">
            <header className="mb-10">
                <h1 className="text-3xl font-bold text-ink mb-2">Project Settings</h1>
                <p className="text-gray-mute">Manage your project configuration and embed setup.</p>
            </header>

            <div className="space-y-8">
                {/* Embed Installation */}
                <section className="bg-surface border border-border-subtle rounded-3xl p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-600/10">
                            <Terminal className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-ink">Installation</h2>
                            <p className="text-sm text-gray-mute">Add this snippet to your site's &lt;head&gt; tag.</p>
                        </div>
                    </div>

                    <div className="relative group">
                        <pre className="p-6 bg-ink text-emerald-400 rounded-2xl overflow-x-auto font-mono text-sm leading-relaxed border border-white/5">
                            <code>{snippet}</code>
                        </pre>
                        <button
                            onClick={copyToClipboard}
                            className="absolute right-4 top-4 h-10 px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 backdrop-blur-md"
                        >
                            {copied ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            {copied ? "Copied!" : "Copy Snippet"}
                        </button>
                    </div>
                </section>

                {/* API Credentials */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <section className="bg-surface border border-border-subtle rounded-3xl p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-600/10">
                                <Globe className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-ink">Embed Domain</h2>
                                <p className="text-sm text-gray-mute">Allowed origins for this project.</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <input
                                type="text"
                                defaultValue="https://app.acme.com"
                                className="w-full h-12 px-4 bg-surface-muted border border-border-subtle rounded-xl text-sm outline-none focus:border-emerald-600 transition-all"
                            />
                            <p className="text-[10px] text-gray-mute leading-relaxed">
                                * Leave empty to allow all domains (not recommended for production).
                            </p>
                        </div>
                    </section>

                    <section className="bg-surface border border-border-subtle rounded-3xl p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-600/10">
                                <ShieldAlert className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-ink">Project Key</h2>
                                <p className="text-sm text-gray-mute">Public key used in your snippet.</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    readOnly
                                    value={projectKey}
                                    className="flex-1 h-12 px-4 bg-surface-muted border border-border-subtle rounded-xl text-sm outline-none font-mono text-gray-mute"
                                />
                                <button
                                    onClick={() => {
                                        if (confirm("Are you sure? This will break your existing tours immediately.")) {
                                            setRegenerating(true);
                                            setTimeout(() => setRegenerating(false), 2000);
                                        }
                                    }}
                                    className="h-12 w-12 flex items-center justify-center border border-border-subtle rounded-xl text-ink hover:text-red-600 hover:border-red-600 transition-all bg-surface-muted"
                                >
                                    <RefreshCcw className={cn("w-4 h-4", regenerating && "animate-spin")} />
                                </button>
                            </div>
                            <p className="text-[10px] text-red-500 font-medium">
                                Warning: Regenerating your key will stop all current tours from loading.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
