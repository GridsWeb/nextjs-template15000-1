import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import bcrypt from "bcryptjs";

// @ts-ignore
const prisma = new PrismaClient();

const templates = [
    {
        id: "zenith-portfolio",
        slug: "zenith",
        title: "Zenith",
        description: "A minimalist, high-performance portfolio template for creatives. Built with accessibility and speed in mind.",
        category: "Portfolio",
        image: "/images/zenith.jpg",
        price: "$49",
        features: JSON.stringify(["Core Web Vitals Optimized", "Dark Mode Ready", "Motion Primitives"]),
    },
    {
        id: "nebula-saas",
        slug: "nebula",
        title: "Nebula",
        description: "AI-driven SaaS dashboard with adaptive layouts and voice-command ready interfaces.",
        category: "SaaS / AI",
        image: "/images/nebula.jpg",
        price: "$79",
        features: JSON.stringify(["AI Integration Ready", "Adaptive Layouts", "Data Visualization"]),
    },
    {
        id: "echo-commerce",
        slug: "echo",
        title: "Echo",
        description: "Mobile-first e-commerce storefront designed for maximum conversion and AMP support.",
        category: "E-Commerce",
        image: "/images/echo.jpg",
        price: "$69",
        features: JSON.stringify(["Mobile-First Design", "AMP Support", "One-Click Checkout UI"]),
    },
    {
        id: "pulse-wellness",
        slug: "pulse",
        title: "Pulse",
        description: "Calm, organic, and accessible template for health and wellness apps. Features soft animations and soundscapes.",
        category: "Health",
        image: "/images/pulse.jpg",
        price: "$59",
        features: JSON.stringify(["Accessibility First", "Soundscape Integration", "Organic Design"]),
    },
];

async function main() {
    console.log("Start seeding...");

    // Seed Templates
    for (const template of templates) {
        const upsertedTemplate = await prisma.template.upsert({
            where: { slug: template.slug },
            update: {},
            create: template,
        });
        console.log(`Upserted template: ${upsertedTemplate.title}`);
    }

    // Seed Admin User
    const hashedPassword = await bcrypt.hash("admin123", 10);
    const adminEmail = "admin@lumina.com";

    const upsertedAdmin = await prisma.user.upsert({
        where: { email: adminEmail },
        update: {},
        create: {
            email: adminEmail,
            name: "Admin User",
            role: "ADMIN",
            password: hashedPassword,
        }
    });
    console.log(`Upserted admin: ${upsertedAdmin.email}`);

    console.log("Seeding finished.");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

