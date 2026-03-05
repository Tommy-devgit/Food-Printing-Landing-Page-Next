import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { plans } from "@/lib/constants";

export default function Pricing() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionTitle eyebrow="Pricing" title="Choose Your Food Printer" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex h-full flex-col">
              <p className="text-xs uppercase tracking-[0.18em] text-[#dddac5]">Plan</p>
              <h3 className="mt-2 text-2xl font-semibold text-[#f8f6ee]">{plan.name}</h3>
              <p className="mt-3 text-4xl font-bold text-[#f7f4e3]">{plan.price}</p>
              <p className="mt-3 text-sm text-[#ebe8d6]">{plan.description}</p>
              <ul className="mt-4 space-y-1 text-sm text-[#f0eddc]">
                {plan.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <Button href="/contact" className="mt-6 w-fit">Reserve</Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
