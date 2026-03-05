import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-[#d9dcc6]/60 bg-[#5f673f]/70 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[#f6f4e9]",
        className
      )}
    >
      {children}
    </span>
  );
}
