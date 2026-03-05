import Image from "next/image";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import CTA from "@/components/sections/CTA";

const pipeline = [
  {
    step: "Capture",
    detail: "Computer vision parses dish geometry, portion estimate, and texture zones from a photo.",
  },
  {
    step: "Translate",
    detail: "Recipe engine maps ingredients to printable viscosities and creates layer instructions.",
  },
  {
    step: "Print",
    detail: "Firmware executes nozzle paths with temperature and pressure correction in real time.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <section className="py-14 md:py-16">
        <Container>
          <SectionTitle
            eyebrow="Technology"
            title="How Food Printing Intelligence Works"
            description="From image understanding to edible output, each stage is optimized for consistency, speed, and flavor retention."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pipeline.map((item, i) => (
              <Card key={item.step}>
                <p className="text-xs uppercase tracking-[0.16em] text-[#d9d6c1]">Phase 0{i + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#f8f6ee]">{item.step}</h3>
                <p className="mt-3 text-sm text-[#ebe8d6]">{item.detail}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-12 pt-2 md:pb-16">
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="overflow-hidden p-0">
              <div className="relative aspect-[16/10]">
                <Image src="/images/features/ai-recipe.svg" alt="AI recipe graph interface" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#f8f6ee]">Recipe Graph Engine</h3>
                <p className="mt-2 text-sm text-[#ebe8d6]">
                  The model predicts ingredient placement, extrusion rhythm, and plating order to preserve visual fidelity.
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden p-0">
              <div className="relative aspect-[16/10]">
                <Image src="/images/features/nozzle.svg" alt="Adaptive food nozzle system" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#f8f6ee]">Adaptive Motion + Heat</h3>
                <p className="mt-2 text-sm text-[#ebe8d6]">
                  Motion planning and thermal control adapt live to different ingredient cartridges and layer shapes.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
