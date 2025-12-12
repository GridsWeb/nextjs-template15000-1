import React from "react";
import { auth } from "@/auth";
import { prisma } from "@/app/lib/prisma";
import { redirect } from "next/navigation";
import AdminDashboard from "./AdminDashboard"; // ← เปลี่ยนเป็น AdminDashboard
import { Template } from "@/app/lib/data";

// สร้าง interface สำหรับ Template ที่มี properties เพิ่มเติมเฉพาะ admin
interface TemplateWithStatus extends Template {
    active?: boolean;
    featured?: boolean;
}

export default async function AdminPage() {
    const session = await auth();
    if (!session) {
        redirect("/auth/signin");
    }

    const rawTemplates = await prisma.template.findMany();

    const templates: TemplateWithStatus[] = rawTemplates.map((t) => ({
        ...t,
        features: JSON.parse(t.features) as string[],
        // เพิ่ม properties ที่จำเป็นสำหรับ admin
        active: (t as any).active ?? false,
        featured: (t as any).featured ?? false,
    }));

    return <AdminDashboard templates={templates} />; // ← ใช้ AdminDashboard
}
