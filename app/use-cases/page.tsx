import Link from "next/link";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

const caseStudies = [
  {
    title: "Home Cooking",
    impact: "Create personalized snacks and plated desserts in under 10 minutes.",
  },
  {
    title: "Restaurants",
    impact: "Reduce prep pressure and deliver consistent plating during peak service.",
  },
  {
    title: "Bakeries",
    impact: "Print custom topping patterns and limited-edition forms without extra molds.",
  },
  {
    title: "Sports Nutrition",
    impact: "Adjust macro ratios while keeping flavor and texture familiar for athletes.",
  },
  {
    title: "Healthcare Meal Personalization",
    impact: "Control portion and ingredient profile for targeted dietary requirements.",
  },
  {
    title: "Education and Events",
    impact: "Run live food-tech demos and interactive workshops with minimal setup.",
  },
];

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-[#8f9660] text-[#f4f2e8]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pb-8 pt-12 md:px-10">
        <p className="text-xs uppercase tracking-[0.18em] text-[#dfdcc7]">Use Cases</p>
        <h1 className="mt-4 text-4xl font-semibold text-[#f8f7ef] md:text-6xl">
          Built For Real Kitchens And Teams
        </h1>
        <p className="mt-4 max-w-3xl text-[#e7e4d3]">
          Food Printer One fits individual creators, commercial kitchens, and product labs that need speed, repeatability, and design freedom.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <div className="grid gap-4 md:grid-cols-2">
          {caseStudies.map((item) => (
            <article key={item.title} className="rounded-3xl border border-[#727b4c] bg-[#5d663d] p-6">
              <h2 className="text-2xl font-semibold text-[#f8f6ee]">{item.title}</h2>
              <p className="mt-3 text-sm text-[#ebe8d6]">{item.impact}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-8 md:px-10">
        <div className="rounded-3xl border border-[#727b4c] bg-[#505838] p-8 text-center">
          <h2 className="text-3xl font-semibold text-[#f7f5eb] md:text-4xl">
            Launch Your Food Printing Workflow
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#e5e2cf]">
            Preorder now to secure early access, onboarding support, and first-batch delivery.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/preorder"
              className="rounded-full bg-[#f4f1df] px-7 py-3 text-sm font-semibold text-[#2f3f1e] transition hover:bg-white"
            >
              Go To Preorder
            </Link>
            <Link
              href="/technology"
              className="rounded-full border border-[#d5d8bb] bg-[#5f6940] px-7 py-3 text-sm font-semibold text-[#f6f5ed] transition hover:bg-[#687448]"
            >
              Read Technology
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
