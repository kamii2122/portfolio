type SkillBadgeProps = {
  label: string;
  placeholder?: boolean;
};

export default function SkillBadge({ label, placeholder = false }: SkillBadgeProps) {
  if (placeholder) {
    return (
      <span className="inline-flex items-center rounded-full border border-dashed border-slate-300 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-400">
        [EDIT] Add skill
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1.5 text-sm font-medium text-violet-700 transition-colors duration-200 hover:bg-violet-100">
      {label}
    </span>
  );
}