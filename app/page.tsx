import Link from "next/link";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

const features = [
  {
    title: "Photo To Printable Recipe",
    text: "Upload one dish photo and get a structured ingredient map and layer path.",
  },
  {
    title: "0.5mm Layer Precision",
    text: "Fine nozzle control creates smooth forms for desserts, sauces, and protein blends.",
  },
  {
    title: "Smart Cartridges",
    text: "Swap chocolate, dough, cream, and sauce pods in seconds with automatic detection.",
  },
  {
    title: "Kitchen App Control",
    text: "Start, monitor, and save custom recipes from phone, tablet, or desktop.",
  },
];

const steps = [
  {
    title: "Upload",
    text: "Take or upload a food photo from your camera roll.",
  },
  {
    title: "Generate",
    text: "AI builds a printable recipe and estimates print time.",
  },
  {
    title: "Print",
    text: "Food Printer creates the dish layer by layer in minutes.",
  },
];

const useCases = [
  "Home kitchens",
  "Cafe dessert bars",
  "Restaurant R and D",
  "Sports nutrition labs",
  "Hospital meal personalization",
  "Education and demos",
];

export default function Home() {
  return (
    <main className="bg-[#8f9660] text-[#f4f2e8]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pb-14 pt-10 md:px-10 md:pb-20 md:pt-14">
        <div className="rounded-[2.4rem] border border-[#70794f] bg-[#7d8451] p-4 shadow-[0_25px_80px_rgba(23,26,11,0.38)] md:p-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#616942] bg-[radial-gradient(circle_at_55%_30%,#5d7438_0%,#2f4524_50%,#23341c_100%)] px-5 pb-10 pt-6 md:px-8 md:pb-14 md:pt-8">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold tracking-wide text-[#f1efdd]">FoodPrinter</p>
              <span className="rounded-full bg-[#d9dcc6]/20 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#f7f6ee]">
                AI Kitchen Device
              </span>
            </div>

            <div className="mx-auto mt-7 max-w-[14rem] rounded-full border border-[#92a272]/70 bg-[#4f6032]/70 p-1 text-center text-xs text-[#efeedf]">
              upload . detect . print
            </div>

            <div className="relative mx-auto mt-8 w-full max-w-3xl">
              <div className="relative mx-auto h-72 w-48 rounded-[2.4rem] border border-[#d9dfc9]/30 bg-[linear-gradient(180deg,#b4d28f_0%,#38622f_18%,#7d2f56_44%,#ede9dd_70%,#5e7f3f_100%)] shadow-[0_30px_70px_rgba(7,10,4,0.65)] md:h-96 md:w-60">
                <div className="absolute inset-x-5 top-3 h-6 rounded-full border border-[#f5f5ed]/35" />
                <div className="absolute inset-x-8 bottom-14 rounded-lg bg-[#f0eddc]/16 px-3 py-1 text-center text-xs tracking-wide text-[#f5f4ec]">
                  Original
                </div>
              </div>

              <div className="absolute left-0 top-24 h-24 w-24 -translate-x-1/4 rotate-[-18deg] rounded-3xl border border-[#dfe3cf]/80 bg-[#f4f1e3] shadow-[0_16px_30px_rgba(0,0,0,0.25)] md:h-32 md:w-32" />
              <div className="absolute left-[16%] top-8 h-24 w-24 rotate-[14deg] rounded-3xl border border-[#dfe3cf]/80 bg-[#f4f1e3] shadow-[0_16px_30px_rgba(0,0,0,0.25)] md:h-32 md:w-32" />
              <div className="absolute right-[18%] top-10 h-24 w-24 rotate-[-12deg] rounded-3xl border border-[#dfe3cf]/80 bg-[#f4f1e3] shadow-[0_16px_30px_rgba(0,0,0,0.25)] md:h-32 md:w-32" />
              <div className="absolute right-0 top-24 h-24 w-24 translate-x-1/4 rotate-[17deg] rounded-3xl border border-[#dfe3cf]/80 bg-[#f4f1e3] shadow-[0_16px_30px_rgba(0,0,0,0.25)] md:h-32 md:w-32" />

              <div className="pointer-events-none absolute bottom-0 left-1/2 h-28 w-[20rem] -translate-x-1/2 rounded-[100%] bg-[#334726] blur-3xl md:h-36 md:w-[30rem]" />
            </div>

            <div className="mt-12 text-center">
              <h1 className="text-4xl font-semibold leading-tight text-[#f8f7f0] md:text-6xl">
                Print Food From a Photo
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-[#e2e0cd] md:text-base">
                Turn any dish image into a real edible print in minutes with AI-powered recipe generation and precision food printing.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/preorder"
                  className="rounded-full bg-[#f4f1df] px-6 py-3 text-sm font-semibold text-[#2f3f1f] transition hover:bg-white"
                >
                  Pre-Order Now
                </Link>
                <a
                  href="#how"
                  className="rounded-full border border-[#d8dcc1] bg-[#5a6438]/60 px-6 py-3 text-sm font-semibold text-[#f6f5ec] transition hover:bg-[#657244]"
                >
                  Watch Demo
                </a>
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[#dcdbc7]">
                trusted by chefs | AI powered | 30 plus ingredients
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10" id="how">
        <h2 className="text-3xl font-semibold text-[#f8f6ee] md:text-4xl">How It Works</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-[#71794b] bg-[#626a40] p-6"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#dcddca]">
                Step 0{index + 1}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[#f6f4ea]">{step.title}</h3>
              <p className="mt-3 text-sm text-[#ecead9]">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <h2 className="text-3xl font-semibold text-[#f8f6ee] md:text-4xl">Features</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-[#71794b] bg-[#5d663d] p-6"
            >
              <h3 className="text-xl font-semibold text-[#f7f5ec]">{feature.title}</h3>
              <p className="mt-3 text-sm text-[#ebe8d6]">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="rounded-3xl border border-[#727b4c] bg-[#59613a] p-6 md:p-10">
          <h2 className="text-3xl font-semibold text-[#f8f6ee] md:text-4xl">Use Cases</h2>
          <div className="mt-7 flex flex-wrap gap-3">
            {useCases.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#cdd2b0] bg-[#f5f2e2] px-4 py-2 text-sm font-medium text-[#384826]"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/use-cases"
              className="inline-flex rounded-full bg-[#f4f1df] px-6 py-3 text-sm font-semibold text-[#31411f] transition hover:bg-white"
            >
              Explore Detailed Use Cases
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-6 md:px-10">
        <div className="rounded-3xl border border-[#727b4c] bg-[#505838] p-8 text-center md:p-10">
          <h2 className="text-3xl font-semibold text-[#f8f6ee] md:text-5xl">Start Printing Food Today</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#e8e5d2] md:text-base">
            Food Printer One is built for home creators, chef teams, and future-focused food businesses.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/preorder"
              className="rounded-full bg-[#f4f1df] px-8 py-3 text-sm font-semibold text-[#30411f] transition hover:bg-white"
            >
              Get Your Food Printer
            </Link>
            <Link
              href="/technology"
              className="rounded-full border border-[#d4d8ba] bg-[#5e6840] px-8 py-3 text-sm font-semibold text-[#f6f5ed] transition hover:bg-[#677347]"
            >
              View Technology
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
