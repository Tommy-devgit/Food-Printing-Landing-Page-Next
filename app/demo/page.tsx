import Demo from "@/components/sections/Demo";
import CTA from "@/components/sections/CTA";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import Image from "next/image";

const stages = [
  "Image capture and Ethiopian dish detection",
  "Recipe graph generation for teff and spice blends",
  "Cartridge calibration for shiro, berbere, and cream",
  "Layer-by-layer food extrusion",
  "Final texture and plating finish",
];

export default function DemoPage() {
  return (
    <>
      <section className="py-14 md:py-16">
        <Container>
          <SectionTitle
            eyebrow="Demo"
            title="Interactive Product Walkthrough"
            description="Explore each stage of the print process and preview timing, layer strategy, and Ethiopian ingredient transitions."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-[#727b4c] bg-[#4f5738] p-4">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-[#6a7348]">
                <Image src="/images/demo/print-process.svg" alt="Food printing live timeline" fill className="object-cover" />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#7d8754] bg-[#616c42] p-3">
                  <p className="text-xs uppercase tracking-wider text-[#d8d5c0]">Current layer</p>
                  <p className="text-lg font-semibold text-[#f8f6ee]">42 / 64</p>
                </div>
                <div className="rounded-2xl border border-[#7d8754] bg-[#616c42] p-3">
                  <p className="text-xs uppercase tracking-wider text-[#d8d5c0]">Estimated finish</p>
                  <p className="text-lg font-semibold text-[#f8f6ee]">2m 18s</p>
                </div>
                <div className="rounded-2xl border border-[#7d8754] bg-[#616c42] p-3">
                  <p className="text-xs uppercase tracking-wider text-[#d8d5c0]">Temperature</p>
                  <p className="text-lg font-semibold text-[#f8f6ee]">34.8 C</p>
                </div>
              </div>
            </div>
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
      <Demo />
      <CTA />
    </>
  );
}
