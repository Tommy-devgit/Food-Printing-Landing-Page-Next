import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

const cases = [
  { name: "Home kitchens in Addis Ababa", image: "/images/hero/strawberry.svg" },
  { name: "Cafe dessert bars", image: "/images/hero/blueberry.svg" },
  { name: "Restaurant R and D for Ethiopian fusion", image: "/images/hero/cherry.svg" },
  { name: "Sports nutrition with local ingredients", image: "/images/hero/berry.svg" },
  { name: "Healthcare meal design", image: "/images/hero/strawberry.svg" },
  { name: "Culinary schools and demos", image: "/images/hero/blueberry.svg" },
];

export default function UseCases() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="rounded-3xl border border-[#727b4c] bg-[#59613a] p-6 md:p-10">
          <SectionTitle eyebrow="Use Cases" title="One Device, Many Ethiopian Kitchens" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((item) => (
              <div key={item.name} className="flex items-center gap-3 rounded-2xl border border-[#7e8956] bg-[#4f5a35] p-2 pr-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-[#d7dcc3]">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <span className="text-sm font-medium text-[#f2f0e3]">{item.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact">Book A Product Call</Button>
            <Button href="/demo" className="border border-[#d5d8bb] bg-[#5f6940] text-[#f6f5ed] hover:bg-[#687448]">
              Explore Demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
