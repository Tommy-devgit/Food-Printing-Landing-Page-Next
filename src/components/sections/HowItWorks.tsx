import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  { title: "Upload", text: "Take or upload a food photo from your camera roll." },
  { title: "Generate", text: "AI builds a printable recipe and predicts print timing." },
  { title: "Print", text: "Food Printer creates the dish layer by layer in minutes." },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionTitle eyebrow="How It Works" title="Three Steps To Edible Prints" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.08}>
              <Card>
                <p className="text-xs uppercase tracking-[0.18em] text-[#dddac5]">Step 0{i + 1}</p>
                <h3 className="mt-3 text-2xl font-semibold text-[#f8f6ee]">{step.title}</h3>
                <p className="mt-3 text-sm text-[#ebe8d6]">{step.text}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
