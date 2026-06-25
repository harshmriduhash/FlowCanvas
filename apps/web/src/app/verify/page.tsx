"use client";

import { useState, useEffect, useRef } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function VerifyPage() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email") || "";
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const inputs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        if (code.every((digit) => digit !== "")) {
            handleVerify();
        }
    }, [code]);

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) value = value[0];
        if (!/^\d*$/.test(value)) return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 5) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };

    const handleVerify = async () => {
        setLoading(true);
        setError("");

        try {
            const fullCode = code.join("");
            const res = await signIn("otp", {
                email,
                code: fullCode,
                callbackUrl: "/dashboard",
                redirect: false,
            });

            if (res?.error) throw new Error("Invalid code");

            window.location.href = "/dashboard";
        } catch (err: any) {
            setError(err.message || "Invalid code provided");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-surface-muted px-4">
            <div className="w-full max-w-md bg-surface p-8 rounded-2xl border border-border-subtle shadow-premium">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-display font-semibold text-ink">Check your email</h1>
                    <p className="text-gray-mute mt-2">
                        We sent a 6-digit code to <span className="text-ink font-medium">{email}</span>
                    </p>
                </div>

                <div className="flex justify-between gap-2 mb-6">
                    {code.map((digit, i) => (
                        <input
                            key={i}
                            ref={(el) => (inputs.current[i] = el)}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(i, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(i, e)}
                            className="w-12 h-14 text-center text-2xl font-bold bg-surface-muted border border-border-subtle rounded-xl focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all text-ink"
                        />
                    ))}
                </div>

                {error && <p className="text-sm text-red-500 mb-6 text-center">{error}</p>}

                {loading && (
                    <div className="flex items-center justify-center gap-2 text-emerald-600 font-medium">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Verifying...
                    </div>
                )}

                <p className="mt-8 text-center text-sm text-gray-mute">
                    Didn't get a code?{" "}
                    <button className="text-emerald-600 font-medium hover:underline">Resend</button>
                </p>
            </div>
        </div>
    );
}
