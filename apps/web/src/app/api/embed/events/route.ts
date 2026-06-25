import { NextResponse } from "next/server";
import { db } from "@flowcanvas/db";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { flowId, stepId, eventType, projectKey, sessionId } = body;

        if (!projectKey || !flowId || !eventType) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Rate limiting and validation would go here in production

        await db.stepEvent.create({
            data: {
                flowId,
                stepId,
                eventType, // 'view' | 'click' | 'complete'
                sessionId: sessionId || "anon",
                metadata: body.metadata || {},
            },
        });

        return NextResponse.json({ success: true }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            }
        });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { projectKey, anonymousVisitorId, properties } = body;

        if (!projectKey || !anonymousVisitorId) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        console.log(`[FlowCanvas Identify] Project: ${projectKey}, Visitor: ${anonymousVisitorId}`, properties);

        return NextResponse.json({ success: true }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, PUT, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            }
        });
    } catch (err) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function OPTIONS() {
    return NextResponse.json({}, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, PUT, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        }
    });
}
