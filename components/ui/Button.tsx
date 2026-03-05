import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Button({ href = "#", children, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex rounded-full bg-[#f4f1df] px-6 py-3 text-sm font-semibold text-[#2f3f1e] transition hover:bg-white",
        className
      )}
    >
      {children}
    </Link>
  );
}
