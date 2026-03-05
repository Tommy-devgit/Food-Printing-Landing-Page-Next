import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionTitle eyebrow="Testimonials" title="Loved By Chefs And Builders" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.09}>
              <Card>
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
