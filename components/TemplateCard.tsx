"use client";

import React from "react";
import { Template } from "@/app/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Trash2, Edit3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// สร้าง interface สำหรับ Template ที่มี properties เพิ่มเติมเฉพาะ admin
interface TemplateWithStatus extends Template {
    active?: boolean;
    featured?: boolean;
}

interface TemplateCardProps {
    template: TemplateWithStatus;
    index: number;
}

interface UserWithRole {
    role?: string;
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
}

export default function TemplateCard({ template, index }: TemplateCardProps) {
    const { data: session } = useSession();
    const router = useRouter();

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (!confirm("Are you sure you want to delete this template?")) return;

        try {
            const response = await fetch(`/api/templates/${template.id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Failed to delete template");
            }

            router.refresh();
        } catch (error) {
            console.error("Error deleting template:", error);
            alert("Failed to delete template. Please try again.");
        }
    };

    const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        router.push(`/admin/templates/${template.id}/edit`);
    };

    const user = session?.user as UserWithRole | undefined;
    const isAdmin = user?.role === "ADMIN";

    // ใช้ optional chaining และ default values
    const isActive = template.active ?? false;
    const isFeatured = template.featured ?? false;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300"
        >
            {/* Admin Actions Overlay */}
            {isAdmin && (
                <div className="absolute top-3 right-3 z-10 flex gap-2">
                    <button
                        onClick={handleEdit}
                        className="p-2 bg-blue-600/90 hover:bg-blue-700 rounded-lg transition-colors"
                        aria-label={`Edit ${template.title}`}
                    >
                        <Edit3 size={16} />
                    </button>
                    <button
                        onClick={handleDelete}
                        className="p-2 bg-red-600/90 hover:bg-red-700 rounded-lg transition-colors"
                        aria-label={`Delete ${template.title}`}
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            )}

            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden md:h-56">
                <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                    <div className="flex items-center justify-between">
                        <div className="bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/10 truncate max-w-[60%]">
                            {template.category}
                        </div>
                        <div className="bg-primary/25 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-primary border border-primary/30">
                            {template.price}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-2 md:mb-3">
                    <h3 className="text-base md:text-xl font-bold truncate pr-10">{template.title}</h3>
                    {isFeatured && (
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-purple-400 shrink-0" />
                    )}
                </div>

                <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2 min-h-10 md:min-h-11">
                    {template.description}
                </p>

                {/* Features */}
                {template.features && template.features.length > 0 && (
                    <div className="mb-4 md:mb-6">
                        <div className="flex flex-wrap gap-1 md:gap-2">
                            {template.features.slice(0, 2).map((feature, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-0.5 md:px-3 md:py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700 truncate max-w-[45%]"
                                    title={feature}
                                >
                                    {feature.length > 20 ? `${feature.substring(0, 20)}...` : feature}
                                </span>
                            ))}
                            {template.features.length > 2 && (
                                <span className="px-2 py-0.5 md:px-3 md:py-1 bg-gray-800/30 text-gray-400 text-xs rounded-full">
                                    +{template.features.length - 2}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-800">
                    <div className="flex items-center gap-1.5 text-xs md:text-sm text-gray-400">
                        <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-500'}`} />
                        <span className="hidden sm:inline">{isActive ? 'Active' : 'Inactive'}</span>
                    </div>

                    <Link
                        href={`/templates/${template.id}`}
                        className="flex items-center text-xs md:text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        aria-label={`View details for ${template.title}`}
                    >
                        Details
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}