"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Mail, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleOtpRequest = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/auth/otp/request", {
                method: "POST",
                body: JSON.stringify({ email }),
            });

            if (!res.ok) throw new Error("Failed to send OTP");

            // Redirect to verify page with email in query
            window.location.href = `/verify?email=${encodeURIComponent(email)}`;
        } catch (err: any) {
            setError(err.message || "Something went wrong");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-surface-muted px-4">
            <div className="w-full max-w-md bg-surface p-8 rounded-2xl border border-border-subtle shadow-premium">
                <div className="mb-8 text-center">
                    <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <div className="flex items-end gap-1">
                            <div className="w-1 h-2 bg-white rounded-full"></div>
                            <div className="w-1.5 h-4 bg-white rounded-full"></div>
                            <div className="w-2 h-6 bg-white rounded-full"></div>
                        </div>
                    </div>
                    <h1 className="text-2xl font-display font-semibold text-ink">Welcome to FlowCanvas</h1>
                    <p className="text-gray-mute mt-2">Build product tours like you design, not like you code.</p>
                </div>

                <button
                    onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                    className="w-full h-12 flex items-center justify-center gap-3 border border-border-subtle rounded-xl font-medium text-ink hover:bg-surface-muted transition-colors mb-6"
                >
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                    Continue with Google
                </button>

                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border-subtle"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-surface text-gray-mute">or use email</span>
                    </div>
                </div>

                <form onSubmit={handleOtpRequest} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-ink mb-1.5">Email address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-mute" />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@company.com"
                                className="w-full h-12 pl-12 pr-4 bg-surface-muted border border-border-subtle rounded-xl focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all text-ink"
                            />
                        </div>
                    </div>

                    {error && <p className="text-sm text-red-500">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-12 bg-emerald-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                        {loading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                Continue
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                <p className="mt-8 text-center text-xs text-gray-mute leading-relaxed">
                    By continuing, you agree to our{" "}
                    <Link href="/terms" className="underline hover:text-emerald-600">Terms of Service</Link> and{" "}
                    <Link href="/privacy" className="underline hover:text-emerald-600">Privacy Policy</Link>.
                </p>
            </div>
        </div>
    );
}
