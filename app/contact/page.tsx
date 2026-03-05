import CTA from "@/components/sections/CTA";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const planMap: Record<string, string> = {
  "1": "Home Edition",
  "2": "Pro Kitchen",
  "3": "Restaurant Edition",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ plan?: string }>;
}) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const selectedPlan = resolvedParams?.plan
    ? planMap[resolvedParams.plan] ?? "Home Edition"
    : "Home Edition";

  return (
    <>
      <section className="py-14 md:py-16">
        <Container>
          <SectionTitle
            eyebrow="Contact"
            title="Waitlist, Partnerships, And Support"
            description="Tell us about your kitchen or company in Ethiopia and we will share the best rollout plan."
          />
          <form className="mt-8 grid gap-4 rounded-3xl border border-[#727b4c] bg-[#5d663d]/95 p-6 md:grid-cols-2">
            <input required className="rounded-xl border border-[#7f8955] bg-[#6a7447] px-4 py-3 text-sm text-white outline-none placeholder:text-[#dcd9c8]" placeholder="Full name" />
            <input required className="rounded-xl border border-[#7f8955] bg-[#6a7447] px-4 py-3 text-sm text-white outline-none placeholder:text-[#dcd9c8]" placeholder="Email" type="email" />
            <input className="rounded-xl border border-[#7f8955] bg-[#6a7447] px-4 py-3 text-sm text-white outline-none placeholder:text-[#dcd9c8] md:col-span-2" placeholder="Company or kitchen name (Addis Ababa, Hawassa, etc.)" />
            <select defaultValue={selectedPlan} className="rounded-xl border border-[#7f8955] bg-[#6a7447] px-4 py-3 text-sm text-white outline-none md:col-span-2">
              <option>Home Edition</option>
              <option>Pro Kitchen</option>
              <option>Restaurant Edition</option>
            </select>
            <textarea required className="min-h-32 rounded-xl border border-[#7f8955] bg-[#6a7447] px-4 py-3 text-sm text-white outline-none placeholder:text-[#dcd9c8] md:col-span-2" placeholder="Tell us what you want to build" />
            <button type="submit" className="w-fit rounded-full bg-[#f4f1df] px-6 py-3 text-sm font-semibold text-[#2f3f1e] transition hover:bg-white">
              Send Request
            </button>
          </form>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card>
              <p className="text-xs uppercase tracking-wider text-[#dddac5]">Sales</p>
              <p className="mt-2 text-sm text-[#f3f0e3]">For pricing, rollout planning, and procurement workflows.</p>
            </Card>
            <Card>
              <p className="text-xs uppercase tracking-wider text-[#dddac5]">Partnerships</p>
              <p className="mt-2 text-sm text-[#f3f0e3]">For ingredient brands, labs, and distribution collaborations.</p>
            </Card>
            <Card>
              <p className="text-xs uppercase tracking-wider text-[#dddac5]">Support</p>
              <p className="mt-2 text-sm text-[#f3f0e3]">For setup help, troubleshooting, and maintenance guidance.</p>
            </Card>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
