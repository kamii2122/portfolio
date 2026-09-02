import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import {
  GithubIcon,
  ExternalLinkIcon,
  CheckIcon,
} from "@/components/ui/Icons";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Projects"
          title="Systems I've designed and built"
          description="Practical software systems that solve real-world management and commerce problems — each one an exercise in planning, development, and problem-solving."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="reveal group flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div
                className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent} transition-transform duration-500 group-hover:scale-[1.03]`}
              >
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.12),transparent_65%)]"
                  aria-hidden="true"
                />
                <div className="relative flex h-3/4 w-3/4 flex-col overflow-hidden rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                  </div>
                  <div className="flex-1 px-3 pb-3">
                    <div className="h-1.5 w-3/4 rounded bg-white/20" />
                    <div className="mt-2 h-1.5 w-1/2 rounded bg-white/10" />
                    <div className="mt-3 space-y-1.5">
                      <div className="h-1.5 w-full rounded bg-white/10" />
                      <div className="h-1.5 w-full rounded bg-white/10" />
                      <div className="h-1.5 w-2/3 rounded bg-white/10" />
                    </div>
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 rounded bg-black/30 px-2 py-1 text-[10px] font-medium text-white/80">
                  Screenshot placeholder
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
                <p className="mb-3 text-sm font-medium text-violet-600">
                  {project.subtitle}
                </p>
                <p className="mb-5 text-sm font-normal leading-relaxed text-slate-600">
                  {project.description}
                </p>

                <div className="mb-5">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 gap-1.5">
                    {project.keyFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckIcon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-violet-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.length > 0 ? (
                      project.technologies.map((tech) => (
                        <SkillBadge key={tech} label={tech} />
                      ))
                    ) : (
                      <SkillBadge label="Add tech" placeholder />
                    )}
                  </div>
                </div>

                <div className="mt-auto flex gap-3 pt-4">
                  <a
                    href={
                      project.githubUrl || "https://github.com/kamii2122"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-navy-900 transition hover:border-violet-600 hover:bg-violet-50 hover:text-violet-700"
                  >
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl || "#projects"}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-navy-950 px-3 py-2 text-sm font-medium text-white transition hover:bg-navy-900"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}