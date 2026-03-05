import Pricing from "@/components/sections/Pricing";
import Specs from "@/components/sections/Specs";
import CTA from "@/components/sections/CTA";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function PricingPage() {
  return (
    <>
      <section className="py-14 md:py-16">
        <Container>
          <SectionTitle
            eyebrow="Plans"
            title="Pricing For Every Kitchen Scale"
            description="Start with a personal unit or roll out a multi-team setup for commercial workflows."
          />
        </Container>
      </section>
      <Pricing />
      <Specs />
      <CTA />
    </>
  );
}
