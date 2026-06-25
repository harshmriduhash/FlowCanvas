import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@flowcanvas/db";
import { compare, hash } from "bcryptjs";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db) as any,
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
        verifyRequest: "/verify",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            id: "otp",
            name: "OTP",
            credentials: {
                email: { label: "Email", type: "email" },
                code: { label: "Code", type: "text" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.code) return null;

                const otp = await db.otpCode.findFirst({
                    where: {
                        email: credentials.email,
                        consumedAt: null,
                        expiresAt: { gt: new Date() },
                    },
                    orderBy: { createdAt: "desc" },
                });

                if (!otp) return null;

                const isValid = await compare(credentials.code, otp.codeHash);
                if (!isValid) {
                    await db.otpCode.update({
                        where: { id: otp.id },
                        data: { attempts: { increment: 1 } },
                    });
                    return null;
                }

                await db.otpCode.update({
                    where: { id: otp.id },
                    data: { consumedAt: new Date() },
                });

                let user = await db.user.findUnique({
                    where: { email: credentials.email },
                });

                if (!user) {
                    user = await db.user.create({
                        data: {
                            email: credentials.email,
                            authProvider: "email_otp",
                            emailVerified: true,
                        },
                    });
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    image: user.avatarUrl,
                };
            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            if (token && session.user) {
                (session.user as any).id = token.id;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
    },
};
