import Link from "next/link";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

const plans = [
  {
    name: "Food Printer One",
    price: "$699",
    perks: ["Main printer unit", "Starter cartridge kit", "Mobile app access"],
  },
  {
    name: "Food Printer Pro",
    price: "$1,099",
    perks: ["Dual nozzle module", "Priority support", "Recipe team workspace"],
  },
];

const faqs = [
  {
    q: "When will shipping start?",
    a: "Early preorder batches are scheduled to ship in Q4 2026.",
  },
  {
    q: "Is it safe for daily use?",
    a: "Yes. All food-contact parts are designed with food-safe materials and cleaning workflows.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. The guided app handles recipe generation and print setup in a few taps.",
  },
];

export default function PreorderPage() {
  return (
    <main className="min-h-screen bg-[#8f9660] text-[#f4f2e8]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pb-10 pt-12 md:px-10">
        <p className="text-xs uppercase tracking-[0.18em] text-[#dfdcc7]">Pricing And Preorder</p>
        <h1 className="mt-4 text-4xl font-semibold text-[#f8f7ef] md:text-6xl">
          Reserve Your Food Printer
        </h1>
        <p className="mt-4 max-w-3xl text-[#e7e4d3]">
          Choose the model that fits your workflow, secure your spot in the next production batch, and get onboarding support.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 py-8 md:grid-cols-2 md:px-10">
        {plans.map((plan) => (
          <article key={plan.name} className="rounded-3xl border border-[#727b4c] bg-[#5d663d] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-[#dddac5]">Plan</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#f8f6ee]">{plan.name}</h2>
            <p className="mt-4 text-5xl font-bold text-[#f4f1df]">{plan.price}</p>
            <ul className="mt-6 space-y-2 text-sm text-[#ebe8d6]">
              {plan.perks.map((perk) => (
                <li key={perk}>- {perk}</li>
              ))}
            </ul>
            <button className="mt-7 rounded-full bg-[#f4f1df] px-6 py-3 text-sm font-semibold text-[#2f3f1e] transition hover:bg-white">
              Preorder Now
            </button>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="rounded-3xl border border-[#727b4c] bg-[#535b3a] p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-[#f8f6ee] md:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((item) => (
              <article key={item.q} className="rounded-2xl border border-[#6c7548] bg-[#5f6840] p-5">
                <h3 className="text-lg font-semibold text-[#f5f3e8]">{item.q}</h3>
                <p className="mt-2 text-sm text-[#e8e5d3]">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-6 md:px-10">
        <div className="rounded-3xl border border-[#727b4c] bg-[#4d5536] p-8 text-center">
          <h2 className="text-3xl font-semibold text-[#f7f5eb] md:text-4xl">Need A Custom Team Package?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#e4e1ce]">
            Contact our sales team for restaurant groups, food labs, and education programs.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="rounded-full bg-[#f4f1df] px-7 py-3 text-sm font-semibold text-[#2f3f1e] transition hover:bg-white"
            >
              Contact Sales
            </a>
            <Link
              href="/"
              className="rounded-full border border-[#d5d8bb] bg-[#5f6940] px-7 py-3 text-sm font-semibold text-[#f6f5ed] transition hover:bg-[#687448]"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
