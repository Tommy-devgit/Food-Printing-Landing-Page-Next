import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-3xl border border-[#727b4c] bg-[#5d663d]/95 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#98a66b] hover:shadow-[0_20px_36px_rgba(20,29,12,0.32)]",
        className
      )}
    >
      {children}
    </article>
  );
}
