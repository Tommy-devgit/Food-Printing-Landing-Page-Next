import Pricing from "@/components/sections/Pricing";
import Specs from "@/components/sections/Specs";
import CTA from "@/components/sections/CTA";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const comparisons = [
  { label: "Monthly Recipe Updates", basic: "Yes", pro: "Yes", restaurant: "Priority" },
  { label: "Remote Fleet Controls", basic: "No", pro: "Basic", restaurant: "Advanced" },
  { label: "Dedicated Onboarding", basic: "No", pro: "Remote", restaurant: "Onsite" },
];

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
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card>
              <p className="text-xs uppercase tracking-wider text-[#dddac5]">Starter</p>
              <p className="mt-2 text-lg text-[#f6f4ea]">Best for creators and cafe prototypes.</p>
            </Card>
            <Card>
              <p className="text-xs uppercase tracking-wider text-[#dddac5]">Scale</p>
              <p className="mt-2 text-lg text-[#f6f4ea]">Great for teams that print daily menu variations.</p>
            </Card>
            <Card>
              <p className="text-xs uppercase tracking-wider text-[#dddac5]">Enterprise</p>
              <p className="mt-2 text-lg text-[#f6f4ea]">Designed for multi-location and lab-grade operations.</p>
            </Card>
          </div>
        </Container>
      </section>
      <Pricing />
      <section className="pb-8 pt-2 md:pb-12">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-[#727b4c]">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#4f5838] text-[#f5f3e8]">
                  <th className="px-4 py-3">Capability</th>
                  <th className="px-4 py-3">Basic</th>
                  <th className="px-4 py-3">Pro</th>
                  <th className="px-4 py-3">Restaurant</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.label} className="border-t border-[#727b4c] bg-[#5e6840] text-[#f0eddc]">
                    <td className="px-4 py-3">{row.label}</td>
                    <td className="px-4 py-3">{row.basic}</td>
                    <td className="px-4 py-3">{row.pro}</td>
                    <td className="px-4 py-3">{row.restaurant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
      <Specs />
      <CTA />
    </>
  );
}
