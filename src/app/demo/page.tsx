import Demo from "@/components/sections/Demo";
import CTA from "@/components/sections/CTA";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";

const stages = [
  "Image capture and dish detection",
  "Recipe graph generation",
  "Cartridge calibration",
  "Layer-by-layer extrusion",
  "Final texture finishing",
];

export default function DemoPage() {
  return (
    <>
      <section className="py-14 md:py-16">
        <Container>
          <SectionTitle
            eyebrow="Demo"
            title="Interactive Product Walkthrough"
            description="Explore each stage of the print process and preview timing, layer strategy, and ingredient transitions."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Demo />
            <div className="space-y-4">
              {stages.map((stage, i) => (
                <FadeIn key={stage} delay={i * 0.08}>
                  <Card>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#dddac5]">Stage 0{i + 1}</p>
                    <p className="mt-2 text-lg text-[#f7f5ea]">{stage}</p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
