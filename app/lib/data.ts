export interface Template {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string; // URL to image
    price: string;
    features: string[];
}

export const templates: Template[] = [
    {
        id: "zenith-portfolio",
        title: "Zenith",
        description: "A minimalist, high-performance portfolio template for creatives. Built with accessibility and speed in mind.",
        category: "Portfolio",
        image: "/images/zenith.jpg",
        price: "$49",
        features: ["Core Web Vitals Optimized", "Dark Mode Ready", "Motion Primitives"],
    },
    {
        id: "nebula-saas",
        title: "Nebula",
        description: "AI-driven SaaS dashboard with adaptive layouts and voice-command ready interfaces.",
        category: "SaaS / AI",
        image: "/images/nebula.jpg",
        price: "$79",
        features: ["AI Integration Ready", "Adaptive Layouts", "Data Visualization"],
    },
    {
        id: "echo-commerce",
        title: "Echo",
        description: "Mobile-first e-commerce storefront designed for maximum conversion and AMP support.",
        category: "E-Commerce",
        image: "/images/echo.jpg",
        price: "$69",
        features: ["Mobile-First Design", "AMP Support", "One-Click Checkout UI"],
    },
    {
        id: "pulse-wellness",
        title: "Pulse",
        description: "Calm, organic, and accessible template for health and wellness apps. Features soft animations and soundscapes.",
        category: "Health",
        image: "/images/pulse.jpg",
        price: "$59",
        features: ["Accessibility First", "Soundscape Integration", "Organic Design"],
    },
];
