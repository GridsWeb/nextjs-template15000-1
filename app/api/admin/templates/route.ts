// app/api/admin/templates/route.ts
import { auth } from "@/auth";
import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await auth();

    if (!session) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }

    try {
        const rawTemplates = await prisma.template.findMany();
        const templates = rawTemplates.map((t) => ({
            ...t,
            features: JSON.parse(t.features) as string[],
        }));

        return NextResponse.json({ templates });
    } catch {
        // ใช้ catch โดยไม่มี parameter
        return NextResponse.json(
            { error: "Failed to fetch templates" },
            { status: 500 }
        );
    }
}
