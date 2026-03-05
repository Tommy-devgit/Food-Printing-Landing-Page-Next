import Image from "next/image";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import CTA from "@/components/sections/CTA";

const ingredients = [
  { name: "Chocolate Blend", profile: "Desserts", image: "/images/hero/berry.svg" },
  { name: "Protein Mix", profile: "Nutrition", image: "/images/hero/blueberry.svg" },
  { name: "Fruit Gel Base", profile: "Cold prints", image: "/images/hero/strawberry.svg" },
  { name: "Dough Cartridge", profile: "Bakery", image: "/images/hero/cherry.svg" },
  { name: "Cream Foam", profile: "Cafe", image: "/images/hero/matcha-cup.svg" },
  { name: "Savory Sauce", profile: "Fine dining", image: "/images/hero/berry.svg" },
];

export default function IngredientsPage() {
  return (
    <>
      <section className="py-14 md:py-16">
        <Container>
          <SectionTitle
            eyebrow="Ingredients"
            title="Cartridge-Compatible Ingredient System"
            description="Certified printable blends designed for stable extrusion, clean transitions, and consistent flavor."
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
