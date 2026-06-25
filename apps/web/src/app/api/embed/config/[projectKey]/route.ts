import { NextResponse } from "next/server";
import { db } from "@flowcanvas/db";

export async function GET(
    req: Request,
    { params }: { params: { projectKey: string } }
) {
    try {
        const { projectKey } = params;

        const project = await db.project.findUnique({
            where: { projectKey },
            include: {
                flows: {
                    where: { isPublished: true },
                    include: {
                        steps: {
                            orderBy: { stepOrder: "asc" }
                        }
                    }
                }
            }
        });

        if (!project) return NextResponse.json({ error: "Project not found" }, { status: 404 });

        // Sanitize for public consumption
        const config = {
            id: project.id,
            name: project.name,
            flows: project.flows.map(flow => ({
                id: flow.id,
                name: flow.name,
                steps: flow.steps.map(step => ({
                    id: step.id,
                    type: step.stepType,
                    content: step.content,
                    anchor: (step.content as any)?.anchor,
                }))
            }))
        };

        return NextResponse.json(config, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
            }
        });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
