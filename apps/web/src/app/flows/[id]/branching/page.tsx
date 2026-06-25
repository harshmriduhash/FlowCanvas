"use client";

import { useState, useEffect, useRef } from "react";
import {
    ChevronLeft,
    Plus,
    Settings2,
    Database,
    Binary,
    ArrowRight,
    MousePointer2,
    Save
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import * as fabric from "fabric";

export default function BranchingEditorPage({ params }: { params: { id: string } }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fabricCanvas = useRef<fabric.Canvas | null>(null);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (canvasRef.current && !fabricCanvas.current) {
            fabricCanvas.current = new fabric.Canvas(canvasRef.current, {
                width: window.innerWidth - 320,
                height: window.innerHeight - 56,
                backgroundColor: "#F9FAFB",
            });

            // Initial Nodes (Mocking steps)
            createNode(100, 100, "Step 1: Welcome Tooltip", "TOOLTIP");
            createNode(400, 100, "Step 2: Logic Branch", "LOGIC");
            createNode(700, 50, "Step 3a: Pro Tour", "TOOLTIP");
            createNode(700, 200, "Step 3b: Basic Tour", "TOOLTIP");

            // Connecting Lines (Mocking connections)
            createConnection(100, 100, 400, 100);
            createConnection(400, 100, 700, 50, "if plan === 'pro'");
            createConnection(400, 100, 700, 200, "else");
        }
    }, []);

    const createNode = (x: number, y: number, label: string, type: "TOOLTIP" | "LOGIC" | "MODAL") => {
        const rect = new fabric.Rect({
            width: 220,
            height: 80,
            fill: "white",
            stroke: type === "LOGIC" ? "#F2994A" : "#0E7C66",
            strokeWidth: 2,
            rx: 16,
            ry: 16,
            shadow: new fabric.Shadow({ color: "rgba(0,0,0,0.05)", blur: 10, offsetY: 4 })
        });

        const text = new fabric.IText(label, {
            fontSize: 13,
            fontWeight: "bold",
            fontFamily: "Inter",
            fill: "#16201C",
            left: 20,
            top: 20
        });

        const subtext = new fabric.IText(type, {
            fontSize: 9,
            fontWeight: "bold",
            fontFamily: "Inter",
            fill: type === "LOGIC" ? "#F2994A" : "#0E7C66",
            left: 20,
            top: 45,
            opacity: 0.6
        });

        const icon = new fabric.Rect({
            width: 8,
            height: 8,
            fill: type === "LOGIC" ? "#F2994A" : "#0E7C66",
            left: 190,
            top: 36,
            rx: 4,
            ry: 4
        });

        const group = new fabric.Group([rect, text, subtext, icon], { left: x, top: y, hasControls: false });
        fabricCanvas.current?.add(group);
    };

    const createConnection = (x1: number, y1: number, x2: number, y2: number, label?: string) => {
        const line = new fabric.Line([x1 + 220, y1 + 40, x2, y2 + 40], {
            stroke: "#D1D5DB",
            strokeWidth: 2,
            selectable: false,
            evented: false
        });

        fabricCanvas.current?.add(line);
        fabricCanvas.current?.sendToBack(line);

        if (label) {
            const tag = new fabric.Rect({
                width: 100,
                height: 20,
                fill: "#16201C",
                rx: 10,
                ry: 10,
                left: (x1 + 220 + x2) / 2 - 50,
                top: (y1 + 40 + y2 + 40) / 2 - 10
            });
            const tagText = new fabric.IText(label, {
                fontSize: 9,
                fill: "white",
                fontWeight: "bold",
                fontFamily: "Inter",
                left: (x1 + 220 + x2) / 2 - 40,
                top: (y1 + 40 + y2 + 40) / 2 - 6
            });
            fabricCanvas.current?.add(new fabric.Group([tag, tagText], { selectable: false }));
        }
    };

    return (
        <div className="h-screen flex flex-col bg-white overflow-hidden">
            <header className="h-14 border-b border-gray-100 flex items-center justify-between px-6 z-10 bg-white">
                <div className="flex items-center gap-4">
                    <Link href={`/flows/${params.id}/edit`} className="p-2 hover:bg-gray-50 rounded-xl transition-colors">
                        <ChevronLeft className="w-5 h-5 text-gray-400" />
                    </Link>
                    <div>
                        <h1 className="font-bold text-ink flex items-center gap-2">
                            Conditional Branching
                            <span className="text-[10px] bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full border border-amber-200">Growth Plan</span>
                        </h1>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => {
                            setSaving(true);
                            setTimeout(() => setSaving(false), 1000);
                        }}
                        className="h-9 px-4 bg-emerald-600 text-white rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-600/20"
                    >
                        {saving ? "Saving..." : <><Save className="w-4 h-4" /> Save Journey</>}
                    </button>
                </div>
            </header>

            <div className="flex-1 flex relative">
                {/* Visual Canvas */}
                <div className="flex-1 overflow-hidden relative cursor-grab active:cursor-grabbing">
                    <canvas ref={canvasRef} />

                    {/* Floating Controls */}
                    <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                        <button className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-lg text-gray-400 hover:text-emerald-600 transition-all">
                            <Plus className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-lg text-gray-400 hover:text-emerald-600 transition-all">
                            <MousePointer2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Properties Side Panel */}
                <aside className="w-80 border-l border-gray-100 bg-white p-6 overflow-y-auto">
                    <div className="flex items-center gap-2 mb-8">
                        <Binary className="w-5 h-5 text-amber-500" />
                        <h2 className="font-bold text-ink">Condition Builder</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Target Property</label>
                            <select className="w-full h-10 bg-white border border-gray-200 rounded-lg text-xs font-medium px-3 outline-none focus:border-emerald-600">
                                <option>user.plan</option>
                                <option>user.role</option>
                                <option>session.count</option>
                                <option>custom.property</option>
                            </select>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Operator</label>
                            <select className="w-full h-10 bg-white border border-gray-200 rounded-lg text-xs font-medium px-3 outline-none focus:border-emerald-600">
                                <option>Equals</option>
                                <option>Contains</option>
                                <option>Greater than</option>
                                <option>Exists</option>
                            </select>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Value</label>
                            <input
                                type="text"
                                defaultValue="pro"
                                className="w-full h-10 bg-white border border-gray-200 rounded-lg text-xs font-medium px-3 outline-none focus:border-emerald-600"
                            />
                        </div>

                        <div className="pt-6 border-t border-gray-100">
                            <div className="flex items-center gap-2 mb-4 text-emerald-600">
                                <ArrowRight className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Then go to</span>
                            </div>
                            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                                <div className="text-xs font-bold text-emerald-800">Step 3a: Pro Tour</div>
                                <div className="text-[10px] text-emerald-600 font-medium">TOOLTIP</div>
                            </div>
                        </div>

                        <button className="w-full h-11 bg-ink text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition-all shadow-xl shadow-ink/10">
                            Update Branch Logic
                        </button>
                    </div>

                    <div className="mt-12 p-6 bg-amber-50 rounded-3xl border border-amber-100">
                        <div className="flex items-center gap-2 mb-2 text-amber-700">
                            <Database className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wider">Real-time Data</span>
                        </div>
                        <p className="text-[10px] text-amber-600 leading-relaxed">
                            Branching logic uses the properties passed to FlowCanvas via the <code className="font-mono bg-white/50 px-1 rounded">identify()</code> call in your embed snippet.
                        </p>
                    </div>
                </aside>
            </div>

            {/* Background Grid Pattern */}
            <style jsx global>{`
                .canvas-container {
                    background-image: 
                        linear-gradient(to right, #f1f5f9 1px, transparent 1px),
                        linear-gradient(to bottom, #f1f5f9 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}</style>
        </div>
    );
}
