const { PrismaClient } = require("@prisma/client");
const { hash } = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
    console.log("Seeding dummy data...");

    // Create User
    const user = await prisma.user.upsert({
        where: { email: "test@flowcanvas.dev" },
        update: {},
        create: {
            email: "test@flowcanvas.dev",
            name: "Demo User",
            authProvider: "email_otp",
        },
    });

    // Create Project
    const project = await prisma.project.upsert({
        where: { slug: "onboarding-demo" },
        update: {},
        create: {
            name: "Onboarding Demo",
            slug: "onboarding-demo",
            appUrl: "http://localhost:3000",
            projectKey: "fc_demo_key_123",
            createdBy: user.id,
        },
    });

    // Create Membership
    await prisma.membership.upsert({
        where: { userId_projectId: { userId: user.id, projectId: project.id } },
        update: {},
        create: {
            userId: user.id,
            projectId: project.id,
            role: "owner",
        },
    });

    // Create a Sample Flow
    const flow = await prisma.flow.create({
        data: {
            projectId: project.id,
            name: "Welcome Tour",
            status: "published",
            createdBy: user.id,
        },
    });

    // Create a Flow Step
    await prisma.flowStep.create({
        data: {
            flowId: flow.id,
            stepOrder: 1,
            stepType: "tooltip",
            content: JSON.stringify({ body: "Welcome to FlowCanvas! This is your first step." }),
        },
    });

    console.log("Seed complete!");
    console.log("Login Email: test@flowcanvas.dev");
    console.log("OTP Code (check terminal): 123456");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
