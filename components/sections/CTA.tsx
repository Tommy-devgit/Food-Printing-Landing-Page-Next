import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="pb-20 pt-8 md:pb-24">
      <Container>
        <div className="rounded-3xl border border-[#727b4c] bg-[#4d5536] p-8 text-center md:p-10">
          <h2 className="text-3xl font-semibold text-[#f7f5eb] md:text-5xl">Start Printing Food Today</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#e4e1ce]">
            Join the waitlist and get launch updates, chef workflows, and early-batch pricing.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact">Join Waitlist</Button>
            <Button href="/demo" className="border border-[#d5d8bb] bg-[#5f6940] text-[#f6f5ed] hover:bg-[#687448]">Watch Demo</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
