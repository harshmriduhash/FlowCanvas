"use client";

import { useState, useEffect, useRef } from "react";
import {
    ChevronLeft,
    Play,
    Send,
    MousePointer,
    PlusSquare,
    AlertCircle,
    HelpCircle,
    Sparkles,
    Palette,
    Layers,
    Clock,
    Zap,
    BarChart3
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import * as fabric from "fabric";
import { toast } from "sonner";

export default function FlowEditorPage({ params }: { params: { id: string } }) {
    const [saving, setSaving] = useState(false);
    const [isPublished, setIsPublished] = useState(false);
    const [selectedTool, setSelectedTool] = useState("select");
    const [activeStepId, setActiveStepId] = useState<string | null>(null);
    const [steps, setSteps] = useState<any[]>([]);
    const [suggesting, setSuggesting] = useState(false);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fabricCanvas = useRef<fabric.Canvas | null>(null);

    const saveFlow = () => {
        setSaving(true);
        setTimeout(() => setSaving(false), 800);
    };

    useEffect(() => {
        if (canvasRef.current && !fabricCanvas.current) {
            fabricCanvas.current = new fabric.Canvas(canvasRef.current, {
                width: 1200,
                height: 800,
            });

            fabricCanvas.current.on("selection:created", (e: any) => {
                const selected = e.selected?.[0];
                if (selected) setActiveStepId((selected as any).id);
            });

            fabricCanvas.current.on("selection:cleared", () => {
                setActiveStepId(null);
            });

            fabricCanvas.current.on("object:modified", saveFlow);
        }

        return () => {
            fabricCanvas.current?.dispose();
            fabricCanvas.current = null;
        };
    }, []);

    const addStep = (type: "tooltip" | "modal" | "hotspot" | "nps") => {
        if (!fabricCanvas.current) return;

        const id = Math.random().toString(36).substr(2, 9);
        let obj: fabric.Object;

        if (type === "nps") {
            const rect = new fabric.Rect({
                width: 300,
                height: 150,
                fill: "white",
                stroke: "#0E7C66",
                strokeWidth: 2,
                rx: 16,
                ry: 16
            });
            const text = new fabric.IText("How likely are you to recommend us?", {
                fontSize: 14,
                fontFamily: "Inter",
                left: 20,
                top: 20,
                width: 260
            });
            const rating = new fabric.IText("1 2 3 4 5 6 7 8 9 10", {
                fontSize: 12,
                fontFamily: "Inter",
                left: 20,
                top: 80,
                fill: "#94A3B8"
            });
            obj = new fabric.Group([rect, text, rating], { left: 400, top: 300 });
        } else {
            // Defaulting to tooltip for others in this simplified refactor
            const rect = new fabric.Rect({
                width: 200,
                height: 100,
                fill: "white",
                stroke: "#0E7C66",
                strokeWidth: 2,
                rx: 12,
                ry: 12
            });
            const text = new fabric.IText("New Step", {
                fontSize: 14,
                left: 20,
                top: 20
            });
            obj = new fabric.Group([rect, text], { left: 400, top: 300 });
        }

        (obj as any).id = id;
        (obj as any).type = type;

        fabricCanvas.current.add(obj);
        fabricCanvas.current.setActiveObject(obj);
        setSteps(prev => [...prev, { id, type, content: type === "nps" ? "How likely are you to recommend us?" : "New Step" }]);
        setActiveStepId(id);
        saveFlow();
    };

    const handleSuggestCopy = async (stepId: string) => {
        setSuggesting(true);
        try {
            const step = steps.find(s => s.id === stepId);
            const res = await fetch("/api/analytics/insights", {
                method: "POST",
                body: JSON.stringify({
                    projectId: params.id, // Assuming project ID for context
                    context: "step_copy",
                    draft: step?.content
                })
            });
            const data = await res.json();
            if (data.suggestion) {
                updateStepContent(stepId, data.suggestion);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setSuggesting(false);
        }
    };

    const updateStepContent = (id: string, content: string) => {
        setSteps(prev => prev.map(s => s.id === id ? { ...s, content } : s));
        const group = fabricCanvas.current?.getObjects().find((o: any) => o.id === id) as fabric.Group;
        if (group) {
            const textObj = group.getObjects().find(o => o.type === "i-text") as fabric.IText;
            if (textObj) {
                textObj.set("text", content);
                fabricCanvas.current?.renderAll();
            }
        }
        saveFlow();
    };

    const updateStepTheme = (id: string, theme: string) => {
        setSteps(prev => prev.map(s => s.id === id ? { ...s, theme } : s));
        const group = fabricCanvas.current?.getObjects().find((o: any) => o.id === id) as fabric.Group;
        if (group) {
            const rect = group.getObjects().find(o => o.type === "rect") as fabric.Rect;
            const text = group.getObjects().find(o => o.type === "i-text") as fabric.IText;

            if (rect && text) {
                switch (theme) {
                    case "minimal":
                        rect.set({ fill: "white", stroke: "#D6E0DA", strokeWidth: 1 });
                        text.set({ fill: "#16201C" });
                        break;
                    case "bold":
                        rect.set({ fill: "#0E7C66", stroke: "transparent" });
                        text.set({ fill: "#FFFFFF" });
                        break;
                    case "dark":
                        rect.set({ fill: "#16201C", stroke: "transparent" });
                        text.set({ fill: "#FFFFFF" });
                        break;
                    case "glass":
                        rect.set({ fill: "rgba(255,255,255,0.8)", stroke: "rgba(14,124,102,0.2)", strokeWidth: 1 });
                        text.set({ fill: "#16201C" });
                        break;
                }
                fabricCanvas.current?.renderAll();
            }
        }
        saveFlow();
    };

    const selectedStep = steps.find(s => s.id === activeStepId);

    return (
        <div className="h-screen flex flex-col bg-surface-muted overflow-hidden">
            {/* Top Toolbar */}
            <header className="h-14 bg-surface border-b border-border-subtle flex items-center justify-between px-4 z-10">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="text-gray-mute hover:text-ink transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <h1 className="font-semibold text-ink">New User Onboarding</h1>
                        <span className={cn(
                            "text-[10px] uppercase font-bold px-2 py-0.5 rounded-full tracking-wider",
                            saving ? "text-amber-500 animate-pulse" : "text-gray-mute"
                        )}>
                            {saving ? "Saving..." : "Saved"}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="h-9 px-4 rounded-xl border border-border-subtle text-sm font-medium text-ink hover:bg-surface-muted flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        Preview
                    </button>
                    <button
                        onClick={() => setIsPublished(!isPublished)}
                        className={cn(
                            "h-9 px-4 rounded-xl text-sm font-medium flex items-center gap-2 transition-all",
                            isPublished
                                ? "bg-emerald-50 text-emerald-600 border border-emerald-600/20"
                                : "bg-emerald-600 text-white hover:bg-emerald-800 shadow-sm"
                        )}
                    >
                        <Send className="w-4 h-4" />
                        {isPublished ? "Published" : "Publish"}
                    </button>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Left Tool Rail */}
                <aside className="w-16 bg-surface border-r border-border-subtle flex flex-col items-center py-4 gap-4 z-10">
                    <button
                        onClick={() => setSelectedTool("select")}
                        className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                            selectedTool === "select" ? "bg-emerald-600 text-white" : "text-gray-mute hover:bg-surface-muted hover:text-ink"
                        )}
                    >
                        <MousePointer className="w-5 h-5" />
                    </button>
                    <div className="w-8 h-px bg-border-subtle mx-auto my-2" />
                    <button
                        onClick={addTooltip}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-mute hover:bg-surface-muted hover:text-ink transition-all group relative"
                    >
                        <PlusSquare className="w-5 h-5" />
                        <span className="absolute left-14 bg-ink text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Add Tooltip
                        </span>
                    </button>
                    <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-mute hover:bg-surface-muted hover:text-ink transition-all group relative">
                        <AlertCircle className="w-5 h-5" />
                        <span className="absolute left-14 bg-ink text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Add Modal
                        </span>
                    </button>
                    <button
                        onClick={() => addStep("hotspot")}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-mute hover:bg-surface-muted hover:text-ink transition-all group relative"
                    >
                        <HelpCircle className="w-5 h-5" />
                        <span className="absolute left-14 bg-ink text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Add Hotspot
                        </span>
                    </button>
                    <button
                        onClick={() => addStep("nps")}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-mute hover:bg-surface-muted hover:text-ink transition-all group relative"
                    >
                        <BarChart3 className="w-5 h-5" />
                        <span className="absolute left-14 bg-ink text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Add NPS
                        </span>
                    </button>

                    <div className="mt-auto pt-4 border-t border-border-subtle w-full flex flex-col items-center gap-4">
                        <button
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-mute hover:bg-emerald-50 hover:text-emerald-600 transition-all group relative"
                            title="Keyboard Accessible Add (A)"
                        >
                            <Layers className="w-5 h-5" />
                        </button>
                    </div>
                </aside>

                {/* Workspace */}
                <div className="flex-1 bg-surface-muted relative overflow-hidden flex flex-col">
                    <div className="flex-1 relative flex items-center justify-center p-20 overflow-auto">
                        <div className="relative shadow-2xl rounded-lg border border-border-subtle bg-white overflow-hidden shrink-0" style={{ width: 1200, height: 800 }}>
                            <div className="absolute inset-0 pointer-events-none opacity-50 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=800')] bg-cover bg-center" />
                            <canvas ref={canvasRef} />
                        </div>
                    </div>

                    {/* Bottom Sequencer */}
                    <div className="h-28 bg-surface border-t border-border-subtle flex items-center px-6 gap-4 overflow-x-auto">
                        {steps.map((step, i) => (
                            <div
                                key={step.id}
                                onClick={() => {
                                    const obj = fabricCanvas.current?.getObjects().find((o: any) => o.id === step.id);
                                    if (obj) {
                                        fabricCanvas.current?.setActiveObject(obj);
                                        fabricCanvas.current?.renderAll();
                                    }
                                    setActiveStepId(step.id);
                                }}
                                className={cn(
                                    "w-32 h-20 rounded-lg border flex flex-col items-center justify-center flex-shrink-0 cursor-pointer transition-all",
                                    step.id === activeStepId ? "border-emerald-600 bg-emerald-50" : "border-border-subtle bg-surface-muted hover:border-gray-mute"
                                )}
                            >
                                <span className="text-[10px] font-bold text-gray-mute uppercase mb-1">Step {i + 1}</span>
                                <span className="text-xs font-medium text-ink">{step.type}</span>
                            </div>
                        ))}
                        <button
                            onClick={() => addStep("tooltip")}
                            className="w-32 h-20 rounded-lg border-2 border-dashed border-border-subtle flex flex-col items-center justify-center flex-shrink-0 text-gray-mute hover:border-emerald-600 hover:text-emerald-600 transition-all"
                        >
                            <PlusSquare className="w-5 h-5 mb-1" />
                            <span className="text-xs font-medium">Add step</span>
                        </button>
                    </div>
                </div>

                {/* Right Property Panel */}
                <aside className="w-80 bg-surface border-l border-border-subtle flex flex-col z-10 font-sans">
                    <div className="h-14 flex items-center px-4 border-b border-border-subtle">
                        <h2 className="font-semibold text-ink">Step Properties</h2>
                    </div>
                    <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                        {selectedStep ? (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-200">
                                <div>
                                    <label className="block text-xs font-bold text-gray-mute uppercase tracking-wider mb-2">Step Type</label>
                                    <div className="h-10 px-3 flex items-center bg-surface-muted border border-border-subtle rounded-xl text-sm text-ink capitalize font-medium">
                                        {selectedStep.type}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <label className="text-xs font-bold text-gray-mute uppercase tracking-wider">Tooltip Content</label>
                                        <button
                                            onClick={() => handleSuggestCopy(selectedStep.id)}
                                            disabled={suggesting}
                                            className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 hover:text-emerald-800 transition-colors disabled:opacity-50"
                                        >
                                            <Sparkles className={cn("w-3 h-3", suggesting && "animate-spin")} />
                                            {suggesting ? "Generating..." : "Suggest Copy"}
                                        </button>
                                    </div>
                                    <textarea
                                        value={selectedStep.content}
                                        onChange={(e) => updateStepContent(selectedStep.id, e.target.value)}
                                        className="w-full h-24 p-3 bg-surface-muted border border-border-subtle rounded-xl text-sm text-ink outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all resize-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-mute uppercase tracking-wider mb-3">Visual Theme</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {["minimal", "bold", "dark", "glass"].map((t) => (
                                            <button
                                                key={t}
                                                onClick={() => updateStepTheme(selectedStep.id, t)}
                                                className={cn(
                                                    "h-12 rounded-xl border flex items-center justify-center text-xs font-semibold capitalize transition-all",
                                                    selectedStep.theme === t
                                                        ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                                                        : "border-border-subtle bg-surface-muted text-gray-mute hover:border-gray-mute"
                                                )}
                                            >
                                                <Palette className="w-3 h-3 mr-1.5 opacity-50" />
                                                {t}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-mute uppercase tracking-wider mb-2">Advance Trigger</label>
                                    <div className="grid grid-cols-1 gap-2">
                                        <div className="flex items-center gap-3 p-3 bg-surface-muted border border-border-subtle rounded-xl group cursor-pointer hover:border-emerald-600 transition-all">
                                            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-ink shadow-sm group-hover:bg-emerald-50 group-hover:text-emerald-600">
                                                <Zap className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xs font-bold text-ink mb-0.5">Click element</div>
                                                <div className="text-[10px] text-gray-mute">Advances when target is clicked</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-surface-muted border border-border-subtle rounded-xl group cursor-pointer hover:border-emerald-600 transition-all">
                                            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-ink shadow-sm group-hover:bg-emerald-50 group-hover:text-emerald-600">
                                                <Clock className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xs font-bold text-ink mb-0.5">Auto-advance</div>
                                                <div className="text-[10px] text-gray-mute">Wait for 3 seconds</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <MousePointer className="w-12 h-12 text-gray-mute mx-auto mb-4 opacity-20" />
                                <p className="text-sm text-gray-mute font-medium px-6 leading-relaxed">Select an element on the canvas to edit its properties.</p>
                            </div>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    );
}
