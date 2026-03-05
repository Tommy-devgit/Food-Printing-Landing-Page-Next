type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.18em] text-[#e0ddc8]">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold text-[#f8f6ee] md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-[#e7e4d3]">{description}</p> : null}
    </div>
  );
}
