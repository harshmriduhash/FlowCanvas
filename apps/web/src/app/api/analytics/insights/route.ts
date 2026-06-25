import { NextResponse } from "next/server";
import { db } from "@flowcanvas/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { projectId, context, draft } = await req.json();
        if (!projectId) return NextResponse.json({ error: "Project ID is required" }, { status: 400 });

        let prompt = "";

        if (context === "step_copy") {
            prompt = `
        You are a product growth expert. Suggest a concise, compelling, and friendly tour step copy based on this draft: "${draft || ""}".
        Keep it under 15 words. Focus on action and benefit.
        Return as JSON: { "suggestion": "Your suggested copy" }
      `;
        } else {
            // Fetch analytics data for the project
            const stats = await db.flow.findMany({
                where: { projectId },
                include: {
                    steps: {
                        include: {
                            events: true,
                        }
                    }
                }
            });

            prompt = `
        You are an expert product growth advisor. Analyze the following onboarding flow data and provide 3 actionable insights to improve completion rates.
        Data: ${JSON.stringify(stats)}
        
        Requirements:
        1. Be concise and professional.
        2. Use energetic, encouraging tone.
        3. Focus on high-impact changes.
        4. Format as JSON with "insights" array.
      `;
        }

        const message = await anthropic.messages.create({
            model: "claude-3-5-sonnet-20240620",
            max_tokens: 1000,
            messages: [{ role: "user", content: prompt }],
        });

        const text = (message.content[0] as any).text;
        return NextResponse.json(JSON.parse(text));
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
