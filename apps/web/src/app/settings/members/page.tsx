"use client";

import { useState } from "react";
import {
    UserPlus,
    MoreHorizontal,
    Shield,
    Mail,
    Clock,
    Search,
    Filter
} from "lucide-react";
import { cn } from "@/lib/utils";

const MEMBERS = [
    { id: "1", name: "Harsh Mriduhash", email: "harsh@suzerain.dev", role: "Owner", joined: "2026-06-25", avatar: "H" },
    { id: "2", name: "Sarah Chen", email: "sarah@suzerain.dev", role: "Admin", joined: "2026-06-26", avatar: "S" },
    { id: "3", name: "Alex Rivet", email: "alex@suzerain.dev", role: "Editor", joined: "2026-06-27", avatar: "A" }
];

export default function MembersPage() {
    const [inviting, setInviting] = useState(false);

    return (
        <div className="max-w-6xl mx-auto py-10 px-6">
            <header className="flex items-center justify-between mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-ink mb-2">Team Members</h1>
                    <p className="text-gray-mute">Manage your team and their access permissions.</p>
                </div>
                <button
                    onClick={() => setInviting(true)}
                    className="h-11 px-5 bg-emerald-600 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-emerald-800 transition-all shadow-sm shadow-emerald-600/20"
                >
                    <UserPlus className="w-4 h-4" />
                    Invite Member
                </button>
            </header>

            <div className="bg-surface border border-border-subtle rounded-3xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-border-subtle flex items-center gap-4 bg-surface-muted/50">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-mute" />
                        <input
                            type="text"
                            placeholder="Search members..."
                            className="w-full h-10 pl-10 pr-4 bg-surface border border-border-subtle rounded-xl text-sm outline-none focus:border-emerald-600 transition-all"
                        />
                    </div>
                    <button className="h-10 px-4 border border-border-subtle rounded-xl text-sm font-medium text-ink flex items-center gap-2 hover:bg-surface transition-all bg-surface">
                        <Filter className="w-4 h-4 text-gray-mute" />
                        Filter
                    </button>
                </div>

                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-surface-muted/30 border-b border-border-subtle text-[10px] font-bold text-gray-mute uppercase tracking-widest">
                            <th className="px-6 py-4">User</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4">Joined</th>
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle">
                        {MEMBERS.map((member) => (
                            <tr key={member.id} className="group hover:bg-surface-muted/30 transition-colors">
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm border border-emerald-600/10 shadow-sm">
                                            {member.avatar}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-ink text-sm">{member.name}</div>
                                            <div className="text-xs text-gray-mute flex items-center gap-1.5 mt-0.5">
                                                <Mail className="w-3 h-3" />
                                                {member.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-5">
                                    <span className={cn(
                                        "px-3 py-1 rounded-full text-[10px] font-bold border flex items-center w-fit gap-1.5",
                                        member.role === "Owner" ? "bg-amber-50 text-amber-600 border-amber-600/20" :
                                            member.role === "Admin" ? "bg-emerald-50 text-emerald-600 border-emerald-600/20" :
                                                "bg-gray-50 text-gray-600 border-gray-200"
                                    )}>
                                        <Shield className="w-3 h-3" />
                                        {member.role}
                                    </span>
                                </td>
                                <td className="px-6 py-5">
                                    <div className="text-sm text-ink flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-gray-mute" />
                                        {member.joined}
                                    </div>
                                </td>
                                <td className="px-6 py-5 text-right">
                                    <button className="p-2 text-gray-mute hover:text-ink hover:bg-surface rounded-lg transition-all opacity-0 group-hover:opacity-100">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Invite Modal */}
            {inviting && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-ink/40 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-surface w-full max-w-md rounded-3xl p-8 shadow-2xl border border-border-subtle animate-in zoom-in-95 duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 border border-emerald-600/10">
                            <UserPlus className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-ink mb-2">Invite team member</h2>
                        <p className="text-gray-mute text-sm mb-8">Collaborate with your team to build better onboarding flows.</p>

                        <div className="space-y-4 mb-8">
                            <div>
                                <label className="block text-xs font-bold text-gray-mute uppercase tracking-widest mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="colleague@company.com"
                                    className="w-full h-12 px-4 bg-surface-muted border border-border-subtle rounded-xl text-sm outline-none focus:border-emerald-600 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-mute uppercase tracking-widest mb-2">Role</label>
                                <select className="w-full h-12 px-4 bg-surface-muted border border-border-subtle rounded-xl text-sm outline-none focus:border-emerald-600 transition-all appearance-none cursor-pointer">
                                    <option>Admin</option>
                                    <option>Editor</option>
                                    <option>Member</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setInviting(false)}
                                className="flex-1 h-12 rounded-xl border border-border-subtle text-sm font-bold text-ink hover:bg-surface-muted transition-all"
                            >
                                Cancel
                            </button>
                            <button className="flex-1 h-12 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-800 transition-all shadow-sm shadow-emerald-600/20">
                                Send Invite
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
