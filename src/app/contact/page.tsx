import CTA from "@/components/sections/CTA";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ContactPage() {
  return (
    <>
      <section className="py-14 md:py-16">
        <Container>
          <SectionTitle
            eyebrow="Contact"
            title="Waitlist, Partnerships, And Support"
            description="Tell us about your kitchen or company and we will share the best rollout plan."
          />
          <form className="mt-8 grid gap-4 rounded-3xl border border-[#727b4c] bg-[#5d663d]/95 p-6 md:grid-cols-2">
            <input className="rounded-xl border border-[#7f8955] bg-[#6a7447] px-4 py-3 text-sm text-white outline-none placeholder:text-[#dcd9c8]" placeholder="Full name" />
            <input className="rounded-xl border border-[#7f8955] bg-[#6a7447] px-4 py-3 text-sm text-white outline-none placeholder:text-[#dcd9c8]" placeholder="Email" type="email" />
            <input className="rounded-xl border border-[#7f8955] bg-[#6a7447] px-4 py-3 text-sm text-white outline-none placeholder:text-[#dcd9c8] md:col-span-2" placeholder="Company or kitchen name" />
            <textarea className="min-h-32 rounded-xl border border-[#7f8955] bg-[#6a7447] px-4 py-3 text-sm text-white outline-none placeholder:text-[#dcd9c8] md:col-span-2" placeholder="Tell us what you want to build" />
            <button type="submit" className="w-fit rounded-full bg-[#f4f1df] px-6 py-3 text-sm font-semibold text-[#2f3f1e] transition hover:bg-white">
              Send Request
            </button>
          </form>
        </Container>
      </section>
      <CTA />
    </>
  );
}
