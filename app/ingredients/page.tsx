import Image from "next/image";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import CTA from "@/components/sections/CTA";

const ingredients = [
  { name: "Teff Dough Blend", profile: "Injera and rolls", image: "/images/hero/berry.svg" },
  { name: "Shiro Protein Mix", profile: "High-protein plates", image: "/images/hero/blueberry.svg" },
  { name: "Berbere Sauce Base", profile: "Spiced savory prints", image: "/images/hero/strawberry.svg" },
  { name: "Niter Kibbeh Aroma Oil", profile: "Signature finish", image: "/images/hero/cherry.svg" },
  { name: "Ayib Cream Mix", profile: "Dessert and cafe", image: "/images/hero/matcha-cup.svg" },
  { name: "Buna Honey Glaze", profile: "Coffee desserts", image: "/images/hero/berry.svg" },
];

export default function IngredientsPage() {
  return (
    <>
      <section className="py-14 md:py-16">
        <Container>
          <SectionTitle
            eyebrow="Ingredients"
            title="Cartridge-Compatible Ingredients For Ethiopia"
            description="Printable blends inspired by Ethiopian cooking, designed for stable extrusion and consistent flavor."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ingredients.map((ingredient) => (
              <Card key={ingredient.name} className="overflow-hidden p-0">
                <div className="relative aspect-[16/10]">
                  <Image src={ingredient.image} alt={ingredient.name} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-[#f8f6ee]">{ingredient.name}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#dddac5]">{ingredient.profile}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
