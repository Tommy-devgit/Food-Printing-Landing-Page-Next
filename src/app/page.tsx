import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Demo from "@/components/sections/Demo";
import UseCases from "@/components/sections/UseCases";
import Specs from "@/components/sections/Specs";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
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
