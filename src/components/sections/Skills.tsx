import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import {
  CodeIcon,
  GlobeIcon,
  DatabaseIcon,
  ToolIcon,
  SparklesIcon,
} from "@/components/ui/Icons";
import { skillGroups } from "@/data/skills";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: CodeIcon,
  globe: GlobeIcon,
  database: DatabaseIcon,
  tool: ToolIcon,
  sparkles: SparklesIcon,
};

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Skills"
          title="Areas I'm building expertise in"
          description="A growing set of skills across software development, web development, and data — refined through coursework, projects, and industry experience."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.icon];
            return (
              <Card
                key={group.id}
                className={`reveal reveal-delay-${(index % 3) + 1} p-6 transition-transform duration-300 hover:-translate-y-1`}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-navy-950 text-violet-400">
                  {Icon ? <Icon className="h-5 w-5" /> : null}
                </div>
                <h3 className="mb-4 text-base font-semibold">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.length > 0 ? (
                    group.skills.map((skill) => (
                      <SkillBadge key={skill} label={skill} />
                    ))
                  ) : (
                    <SkillBadge label="Add skill" placeholder />
                  )}
                  {group.skills.length === 0 && group.editable && (
                    <SkillBadge label="Add skill" placeholder />
                  )}
                </div>
                {group.editable && group.skills.length === 0 && (
                  <p className="mt-3 text-xs italic text-slate-400">
                    [EDIT] Add skills to this category
                  </p>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}