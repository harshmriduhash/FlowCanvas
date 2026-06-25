import { NextResponse } from "next/server";
import { db } from "@flowcanvas/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import crypto from "crypto";

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { name, appUrl } = await req.json();
        if (!name || !appUrl) return NextResponse.json({ error: "Name and App URL are required" }, { status: 400 });

        const slug = name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
        const projectKey = `pk_live_${crypto.randomBytes(16).toString("hex")}`;

        const project = await db.project.create({
            data: {
                name,
                appUrl,
                slug,
                projectKey,
                createdBy: (session.user as any).id,
                memberships: {
                    create: {
                        userId: (session.user as any).id,
                        role: "owner",
                    },
                },
            },
        });

        return NextResponse.json(project);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
