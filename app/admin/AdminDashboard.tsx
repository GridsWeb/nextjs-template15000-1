"use client";

import { signOut } from "next-auth/react";
import TemplateCard from "@/components/TemplateCard";
import { Template } from "@/app/lib/data";
import { LogOut, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// สร้าง interface สำหรับ Template ที่มี properties เพิ่มเติมเฉพาะ admin
interface TemplateWithStatus extends Template {
    active?: boolean;
    featured?: boolean;
}

interface AdminDashboardProps {
    templates: TemplateWithStatus[];
}

export default function AdminDashboard({ templates }: AdminDashboardProps) {
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    const handleSignOut = () => {
        signOut({ callbackUrl: "/" });
    };

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // ใช้ optional chaining และ default values
    const activeTemplates = templates.filter(t => t.active ?? false).length;
    const featuredTemplates = templates.filter(t => t.featured ?? false).length;

    return (
        <main className="min-h-screen bg-black text-white pt-20 md:pt-24">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                            <p className="text-sm text-gray-400 mt-1 hidden md:block">
                                Manage your website templates
                            </p>
                        </div>
                        <button
                            onClick={handleSignOut}
                            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                        >
                            <LogOut size={18} />
                            <span className="hidden md:inline">Sign Out</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                        <h3 className="text-lg font-semibold mb-2">Total Templates</h3>
                        <p className="text-3xl font-bold text-primary">{templates.length}</p>
                    </div>
                    <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                        <h3 className="text-lg font-semibold mb-2">Active Templates</h3>
                        <p className="text-3xl font-bold text-green-500">{activeTemplates}</p>
                    </div>
                    <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                        <h3 className="text-lg font-semibold mb-2">Featured</h3>
                        <p className="text-3xl font-bold text-purple-500">{featuredTemplates}</p>
                    </div>
                </div>

                {/* Add Template Button */}
                <div className="flex justify-end mb-6">
                    <button
                        onClick={() => router.push('/admin/templates/new')}
                        className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
                    >
                        <Plus size={20} />
                        Add New Template
                    </button>
                </div>

                {/* Templates Grid */}
                <section>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <h2 className="text-xl font-bold">All Templates</h2>
                        <div className="text-sm text-gray-400">
                            Showing {templates.length} template{templates.length !== 1 ? 's' : ''}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {templates.map((template, index) => (
                            <TemplateCard key={template.id} template={template} index={index} />
                        ))}
                    </div>
                </section>

                {/* Empty State */}
                {templates.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-gray-500 text-6xl mb-4">📁</div>
                        <h3 className="text-xl font-semibold mb-2">No Templates Found</h3>
                        <p className="text-gray-400 mb-6">Start by creating your first template</p>
                        <button
                            onClick={() => router.push('/admin/templates/new')}
                            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
                        >
                            Create New Template
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Floating Action Button */}
            {isMobile && (
                <button
                    onClick={() => router.push('/admin/templates/new')}
                    className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition md:hidden"
                    aria-label="Add Template"
                >
                    <Plus size={24} />
                </button>
            )}
        </main>
    );
}
