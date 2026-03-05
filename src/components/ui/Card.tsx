import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <article className={cn("rounded-3xl border border-[#727b4c] bg-[#5d663d]/95 p-6", className)}>
      {children}
    </article>
  );
}
