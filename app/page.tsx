import Hero from "@/components/Hero";
import TemplateGrid from "@/components/TemplateGrid";
import { prisma } from "@/app/lib/prisma";
import { Template } from "@/app/lib/data";

async function getTemplates(): Promise<Template[]> {
  const data = await prisma.template.findMany();
  return data.map((t) => ({
    ...t,
    features: JSON.parse(t.features), // Parse JSON string back to array
  }));
}

export default async function Home() {
  const templates = await getTemplates();

  return (
    <main className="min-h-screen">
      <Hero />
      <TemplateGrid templates={templates} />
    </main>
  );
}
