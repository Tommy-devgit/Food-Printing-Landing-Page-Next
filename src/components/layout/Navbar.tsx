"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BadgeDollarSign, Home, Mail, Play } from "lucide-react";
import Container from "@/components/layout/Container";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = {
  Home,
  Play,
  BadgeDollarSign,
  Mail,
} as const;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[#6f7749]/40 bg-[#7f8750]/85 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold text-[#f5f4ea]">
          FoodPrinter
        </Link>

        <nav className="rounded-2xl border border-[#95a06b] bg-[#5d663d]/75 p-1.5">
          <ul className="flex items-center gap-1.5">
            {navItems.map((item) => {
              const Icon = iconMap[item.icon];
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex h-10 w-10 items-center justify-center rounded-xl border border-transparent text-[#f4f2e7] transition",
                      active ? "bg-[#1d2617]" : "hover:bg-[#687347]"
                    )}
                    aria-label={item.label}
                    title={item.label}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full border border-[#d8dcc1] bg-[#5a6438]/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#f6f5ec] transition hover:bg-[#657244] md:inline-flex"
        >
          Join Waitlist
        </Link>
      </Container>
    </header>
  );
}
