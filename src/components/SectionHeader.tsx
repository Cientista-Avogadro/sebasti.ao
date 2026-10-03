interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

/**
 * Shared editorial section header: heavy top rule, numbered mono label,
 * serif title and an optional quiet lede. Every home section opens with it.
 * Translation labels already carry the section number prefix ("03 - CASE
 * STUDIES"), so the explicit index replaces it rather than duplicating it.
 */
export function SectionHeader({ index, label, title, subtitle, action }: SectionHeaderProps) {
  const labelWithoutNumber = label.replace(/^\d+\s*-\s*/, "");

  return (
    <div className="mb-14">
      <div className="flex items-baseline gap-4 border-t-2 border-ink pt-3">
        <span className="font-mono text-sm text-accent">{index}</span>
        <span className="label">{labelWithoutNumber}</span>
        {action && <div className="ml-auto">{action}</div>}
      </div>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] mt-8 text-balance">{title}</h2>
      {subtitle && <p className="lede mt-5 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
