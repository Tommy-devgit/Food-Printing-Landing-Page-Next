import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

const cases = [
  "Home kitchens",
  "Cafe dessert bars",
  "Restaurant R and D",
  "Sports nutrition",
  "Healthcare meal design",
  "Education and demos",
];

export default function UseCases() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="rounded-3xl border border-[#727b4c] bg-[#59613a] p-6 md:p-10">
          <SectionTitle eyebrow="Use Cases" title="One Device, Many Kitchens" />
          <div className="mt-6 flex flex-wrap gap-3">
            {cases.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#cdd2b0] bg-[#f5f2e2] px-4 py-2 text-sm font-medium text-[#384826]"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-7">
            <Button href="/contact">Book A Product Call</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
