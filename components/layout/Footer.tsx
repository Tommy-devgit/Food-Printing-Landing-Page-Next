import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer className="border-t border-[#5f673f] bg-[#485032] py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xl font-semibold text-[#f3f1e6]">FoodPrinter Labs</p>
            <p className="mt-3 max-w-xs text-sm text-[#dedbc8]">
              AI-native food printing platform for creators, restaurants, and nutrition teams across Ethiopia.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f2efe2]">Product</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-[#e8e5d2]">
              <Link href="/technology" className="hover:text-white">Technology</Link>
              <Link href="/recipes" className="hover:text-white">Recipe Library</Link>
              <Link href="/ingredients" className="hover:text-white">Ingredients</Link>
              <Link href="/demo" className="hover:text-white">Live Demo</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f2efe2]">Company</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-[#e8e5d2]">
              <Link href="/pricing" className="hover:text-white">Pricing</Link>
              <Link href="/contact" className="hover:text-white">Contact Sales</Link>
              <a href="#" className="hover:text-white">Partners</a>
              <a href="#" className="hover:text-white">Support</a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f2efe2]">Newsletter</p>
            <p className="mt-3 text-sm text-[#dedbc8]">Get monthly Ethiopian food-printing playbooks and launch updates.</p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="you@kitchen.et"
                className="w-full rounded-xl border border-[#6e784a] bg-[#5a6440] px-3 py-2 text-sm text-white outline-none placeholder:text-[#d8d6c3]"
              />
              <button
                type="submit"
                className="rounded-xl bg-[#f4f1df] px-4 py-2 text-sm font-semibold text-[#2f3f1e] transition hover:bg-white"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-[#647047] pt-5 text-xs text-[#d6d2bc]">
          <p>(c) 2026 FoodPrinter Labs. Built for modern Ethiopian food creation.</p>
        </div>
      </Container>
    </footer>
  );
}
