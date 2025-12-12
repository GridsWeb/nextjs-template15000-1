"use client";

import TemplateCard from "./TemplateCardClient";
// Define usage of Template type if imported, or any
import { Template } from "@/app/lib/data";

interface TemplateGridProps {
    templates: Template[];
}

export default function TemplateGrid({ templates }: TemplateGridProps) {
    return (
        <section id="showcase" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
                        Curated Collection
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Discover our hand-picked selection of premium, AI-ready templates designed for the future of the web.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {templates.map((template, index) => (
                        <TemplateCard key={template.id} template={template} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
