"use client";

import { AlertCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

export function SnippetStatusBanner() {
    return (
        <div className="bg-amber-50 border-b border-amber-200 px-8 py-3 flex items-center justify-between animate-in slide-in-from-top duration-500">
            <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                <p className="text-sm font-medium text-amber-800">
                    No sessions reported from your project in 48 hours — check if the embed snippet is still installed.
                </p>
            </div>
            <Link
                href="/settings/project"
                className="text-sm font-bold text-amber-800 flex items-center gap-1 hover:underline"
            >
                Review snippet <ChevronRight className="w-4 h-4" />
            </Link>
        </div>
    );
}
