import { db } from "@flowcanvas/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Role } from "@prisma/client";

/**
 * Ensures the current user has the required role for a specific project.
 * Throws an error if unauthorized.
 */
export async function ensureRole(projectId: string, minRole: Role) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) throw new Error("Unauthorized");

    const membership = await db.membership.findUnique({
        where: {
            userId_projectId: {
                userId: session.user.id,
                projectId: projectId
            }
        }
    });

    if (!membership) throw new Error("Not a member of this project");

    const rolesOrder: Role[] = ["MEMBER", "EDITOR", "ADMIN", "OWNER"];
    const currentRank = rolesOrder.indexOf(membership.role);
    const requiredRank = rolesOrder.indexOf(minRole);

    if (currentRank < requiredRank) {
        throw new Error(`Insufficient permissions. Required: ${minRole}`);
    }

    return membership;
}
