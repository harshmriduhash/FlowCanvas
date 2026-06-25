import { db } from "@flowcanvas/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

/**
 * Ensures the current user has the required role for a specific project.
 * Throws an error if unauthorized.
 */
export async function ensureRole(projectId: string, minRole: "MEMBER" | "EDITOR" | "ADMIN" | "OWNER") {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) throw new Error("Unauthorized");

    const membership = await db.membership.findFirst({
        where: {
            user: { email: session.user.email },
            projectId: projectId
        }
    });

    if (!membership) throw new Error("Not a member of this project");

    const rolesOrder = ["MEMBER", "EDITOR", "ADMIN", "OWNER"];
    const currentRank = rolesOrder.indexOf(membership.role);
    const requiredRank = rolesOrder.indexOf(minRole);

    if (currentRank < requiredRank) {
        throw new Error(`Insufficient permissions. Required: ${minRole}`);
    }

    return membership;
}
