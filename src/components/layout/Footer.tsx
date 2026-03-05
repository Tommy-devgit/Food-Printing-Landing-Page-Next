import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer className="border-t border-[#5f673f] bg-[#505839] py-10">
      <Container className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-[#e7e4d1]">FoodPrinter Labs</p>
        <nav className="flex flex-wrap gap-4 text-sm text-[#ece9d8]">
          <Link href="/demo" className="hover:text-white">Demo</Link>
          <Link href="/pricing" className="hover:text-white">Pricing</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
      </Container>
    </footer>
  );
}
