import Image from "next/image";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import CTA from "@/components/sections/CTA";

const recipes = [
  { name: "Matcha Berry Cup", time: "7m 20s", difficulty: "Easy", image: "/images/hero/matcha-cup.svg" },
  { name: "Protein Mocha Ring", time: "6m 05s", difficulty: "Medium", image: "/images/hero/cherry.svg" },
  { name: "Vanilla Swirl Bite", time: "5m 34s", difficulty: "Easy", image: "/images/hero/blueberry.svg" },
  { name: "Cocoa Nut Crunch", time: "8m 12s", difficulty: "Advanced", image: "/images/hero/berry.svg" },
  { name: "Berry Gel Layers", time: "6m 48s", difficulty: "Medium", image: "/images/hero/strawberry.svg" },
  { name: "Chef Signature Plate", time: "9m 40s", difficulty: "Advanced", image: "/images/hero/matcha-cup.svg" },
];

export default function RecipesPage() {
  return (
    <>
      <section className="py-14 md:py-16">
        <Container>
          <SectionTitle
            eyebrow="Recipe Library"
            title="Food Printing Recipe Presets"
            description="Select prebuilt printable dishes, then tweak texture, calories, and plating style before production."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {recipes.map((recipe) => (
              <Card key={recipe.name} className="overflow-hidden p-0">
                <div className="relative aspect-[16/10]">
                  <Image src={recipe.image} alt={recipe.name} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-[#f8f6ee]">{recipe.name}</h3>
                  <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-wider text-[#dddac5]">
                    <span>{recipe.time}</span>
                    <span>•</span>
                    <span>{recipe.difficulty}</span>
                  </div>
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
