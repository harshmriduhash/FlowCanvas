"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Code2, Copy, Check, ArrowRight } from "lucide-react";

export default function InstallSnippetPage() {
    const searchParams = useSearchParams();
    const projectId = searchParams.get("projectId") || "prj_abc123";
    const [copied, setCopied] = useState(false);
    const router = useRouter();

    const snippet = `<script 
  src="https://embed.flowcanvas.dev/v1/loader.js" 
  data-project="${projectId}" 
  async
></script>`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(snippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-surface-muted flex flex-col items-center justify-center px-4 py-20">
            <div className="w-full max-w-2xl bg-surface p-10 rounded-2xl border border-border-subtle shadow-premium">
                <div className="mb-10 text-center">
                    <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full mb-4 inline-block">
                        Step 2 of 2
                    </span>
                    <h1 className="text-3xl font-display font-semibold text-ink mt-2">Almost live.</h1>
                    <p className="text-gray-mute mt-3 text-lg">
                        Paste this snippet into your app's <code className="bg-surface-muted px-1 rounded text-ink">&lt;head&gt;</code> tag.
                    </p>
                </div>

                <div className="bg-ink rounded-2xl p-6 relative group mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-gray-mute text-xs">
                            <Code2 className="w-4 h-4" />
                            <span>HTML SNIPPET</span>
                        </div>
                        <button
                            onClick={copyToClipboard}
                            className="text-gray-mute hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-4 h-4 text-emerald-500" />
                                    <span className="text-emerald-500">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4" />
                                    <span>Copy code</span>
                                </>
                            )}
                        </button>
                    </div>
                    <pre className="text-emerald-500 font-mono text-sm overflow-x-auto leading-relaxed">
                        {snippet}
                    </pre>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    <div className="p-4 rounded-xl border border-border-subtle hover:border-emerald-600 transition-colors">
                        <h3 className="font-semibold text-ink text-sm mb-1">Single Line.</h3>
                        <p className="text-xs text-gray-mute">No complicated setup. Load the script and you're done.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-border-subtle hover:border-emerald-600 transition-colors">
                        <h3 className="font-semibold text-ink text-sm mb-1">Zero Deploy.</h3>
                        <p className="text-xs text-gray-mute">Updates you make in the builder go live instantly.</p>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <button
                        onClick={() => router.push("/dashboard")}
                        className="text-gray-mute hover:text-ink font-medium transition-colors"
                    >
                        I'll do this later
                    </button>
                    <button
                        onClick={() => router.push("/dashboard")}
                        className="h-14 px-8 bg-emerald-600 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-emerald-800 transition-colors group"
                    >
                        Go to dashboard
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}
