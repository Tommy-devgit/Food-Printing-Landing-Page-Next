import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/constants";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionTitle eyebrow="Testimonials" title="Loved By Chefs And Builders" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.09}>
              <Card>
                <div className="relative mb-4 h-14 w-14 overflow-hidden rounded-2xl border border-[#7e8956]">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <p className="text-sm text-[#f2efe2]">&quot;{item.quote}&quot;</p>
                <p className="mt-4 text-sm font-semibold text-[#f8f6ee]">{item.name}</p>
                <p className="text-xs uppercase tracking-wider text-[#dddac5]">{item.role}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
