import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/preorder", label: "Preorder" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#6f7749]/40 bg-[#7f8750]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-lg font-semibold tracking-wide text-[#f5f4ea]">
          FoodPrinter
        </Link>
        <nav className="flex flex-wrap items-center gap-2 sm:gap-3">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-[#9ca56a]/60 bg-[#5f673f]/40 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-[#f3f2e5] transition hover:bg-[#5f673f]/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
