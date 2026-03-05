import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { features } from "@/lib/constants";

export default function Features() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionTitle eyebrow="Features" title="Built For Flavor And Precision" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.08}>
              <Card>
                <h3 className="text-xl font-semibold text-[#f8f6ee]">{feature.title}</h3>
                <p className="mt-3 text-sm text-[#ebe8d6]">{feature.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
