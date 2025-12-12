import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft, Star, Shield, Zap } from "lucide-react";

export default async function TemplateDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const templateRaw = await prisma.template.findUnique({
        where: { id },
    });

    if (!templateRaw) {
        notFound();
    }

    const template = {
        ...templateRaw,
        features: JSON.parse(templateRaw.features) as string[],
    };


    return (
        <main className="min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <Link href="/#showcase" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Showcase
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Image */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl glass border border-white/10">
                            <Image
                                src={template.image}
                                alt={template.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="flex flex-col h-full">
                        <div className="mb-2 flex items-center gap-3">
                            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                {template.category}
                            </span>
                            <div className="flex items-center text-yellow-500 text-xs">
                                <Star className="w-3 h-3 fill-current" />
                                <Star className="w-3 h-3 fill-current" />
                                <Star className="w-3 h-3 fill-current" />
                                <Star className="w-3 h-3 fill-current" />
                                <Star className="w-3 h-3 fill-current" />
                                <span className="ml-1 text-muted-foreground">(5.0)</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-glow">
                            {template.title}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            {template.description}
                        </p>

                        <div className="glass p-6 rounded-2xl mb-8 space-y-4">
                            <h3 className="font-semibold text-lg flex items-center gap-2">
                                <Zap className="w-5 h-5 text-accent" />
                                Key Features
                            </h3>
                            <ul className="grid gap-3">
                                {template.features.map((feature: string, i: number) => (
                                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-accent" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-accent" />
                                    </div>
                                    Lifetime Updates
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-accent" />
                                    </div>
                                    Type-Safe Codebase
                                </li>
                            </ul>
                        </div>

                        <div className="mt-auto bg-card rounded-2xl p-6 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">One-time payment</p>
                                <div className="text-3xl font-bold">{template.price}</div>
                            </div>
                            <button className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2">
                                Buy Now <Shield className="w-4 h-4 opacity-50" />
                            </button>
                        </div>
                        <p className="text-xs text-center sm:text-left text-muted-foreground mt-4">
                            Secure payment processing powered by Stripe.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
