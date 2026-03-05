import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#5f673f] bg-[#505839] py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 md:px-10">
        <p className="text-sm text-[#e7e4d1]">FoodPrinter Labs</p>
        <nav className="flex flex-wrap gap-3 text-sm text-[#ece9d8]">
          <Link href="/technology" className="hover:text-white">
            Technology
          </Link>
          <Link href="/use-cases" className="hover:text-white">
            Use Cases
          </Link>
          <Link href="/preorder" className="hover:text-white">
            Preorder
          </Link>
          <a href="#" className="hover:text-white">
            Support
          </a>
        </nav>
      </div>
    </footer>
  );
}
