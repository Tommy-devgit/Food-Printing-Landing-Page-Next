import Link from "next/link";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

const pipeline = [
  {
    title: "Image Analysis",
    text: "Computer vision detects shape, volume, texture zones, and likely ingredient families from a single photo.",
  },
  {
    title: "Recipe Graph",
    text: "The model generates a structured graph of layers, ingredient order, nozzle pressure, and print timing.",
  },
  {
    title: "Printer Execution",
    text: "Firmware converts the graph into calibrated toolpaths with thermal and viscosity compensation.",
  },
];

const specs = [
  ["Print time", "2 to 10 minutes"],
  ["Layer resolution", "0.5 mm"],
  ["Ingredient capacity", "30 plus cartridge presets"],
  ["Connectivity", "WiFi, Bluetooth, companion app"],
  ["Cleaning", "Automatic flush and self-clean mode"],
];

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-[#8f9660] text-[#f4f2e8]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pb-10 pt-12 md:px-10">
        <p className="text-xs uppercase tracking-[0.18em] text-[#e0ddc8]">Food Printer Technology</p>
        <h1 className="mt-4 text-4xl font-semibold text-[#f8f7ef] md:text-6xl">
          How Photo To Food Printing Works
        </h1>
        <p className="mt-4 max-w-3xl text-[#e6e3d2]">
          Food Printer One combines food-safe hardware, AI recipe generation, and adaptive motion control to transform dish images into edible output.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {pipeline.map((item, index) => (
            <article key={item.title} className="rounded-3xl border border-[#727b4c] bg-[#5d663d] p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[#dddac5]">Phase 0{index + 1}</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#f6f4ea]">{item.title}</h2>
              <p className="mt-3 text-sm text-[#ebe8d6]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="rounded-3xl border border-[#727b4c] bg-[#515a39] p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-[#f8f6ee] md:text-4xl">Product Specs</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#6a7348]">
            <table className="w-full border-collapse text-left">
              <tbody>
                {specs.map(([key, value]) => (
                  <tr key={key} className="border-b border-[#6a7348] last:border-0">
                    <th className="w-1/2 px-4 py-4 text-sm font-medium text-[#e9e6d5] md:px-5">{key}</th>
                    <td className="px-4 py-4 text-sm text-[#f8f6ef] md:px-5">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-4 md:px-10">
        <div className="rounded-3xl border border-[#727b4c] bg-[#4b5334] p-8 text-center">
          <h2 className="text-3xl font-semibold text-[#f7f5eb] md:text-4xl">Ready To See It In Action?</h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/preorder"
              className="rounded-full bg-[#f4f1df] px-7 py-3 text-sm font-semibold text-[#2f3f1e] transition hover:bg-white"
            >
              Preorder Device
            </Link>
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
