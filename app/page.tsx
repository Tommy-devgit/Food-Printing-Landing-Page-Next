import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Demo from "@/components/sections/Demo";
import UseCases from "@/components/sections/UseCases";
import Specs from "@/components/sections/Specs";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Container from "@/components/layout/Container";
import { stats } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-8 md:py-10">
        <Container>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#727b4c] bg-[#5b653d] p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#d9d6c1]">{stat.label}</p>
                <p className="mt-2 text-2xl font-semibold text-[#f8f6ee]">{stat.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <HowItWorks />
      <Features />
      <Demo />
      <UseCases />
      <Specs />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}
