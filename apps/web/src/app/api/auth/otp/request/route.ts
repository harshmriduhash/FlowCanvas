import { NextResponse } from "next/server";
import { db } from "@flowcanvas/db";
import { hash } from "bcryptjs";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { email } = await req.json();
        if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

        const code = Math.floor(100000 + Math.random() * 900000).toString();
        const codeHash = await hash(code, 10);
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        await db.otpCode.create({
            data: {
                email,
                codeHash,
                expiresAt,
            },
        });

        if (process.env.NODE_ENV === "production") {
            await resend.emails.send({
                from: "FlowCanvas <auth@flowcanvas.dev>",
                to: email,
                subject: "Your FlowCanvas verification code",
                text: `Your verification code is: ${code}`,
            });
        } else {
            console.log(`[AUTH] OTP for ${email}: ${code}`);
        }

        return NextResponse.json({ message: "Code sent" });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
