import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  const items = experiences[0];
  const hasExtraDetails =
    items.technologies.length > 0 ||
    items.skillsGained.length > 0 ||
    items.achievements.length > 0;

  return (
    <section id="experience" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked and what I'm learning"
          description="Industry experience that connects what I study with how technology is used in the real world."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-4 top-0 h-full w-px bg-slate-200 sm:left-1/2"
            aria-hidden="true"
          />
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <article
                key={exp.id}
                className={`reveal relative flex ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                <div
                  className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-violet-600 bg-white sm:left-1/2"
                  aria-hidden="true"
                />
                <div className="ml-10 w-full sm:ml-0 sm:w-1/2 sm:px-8">
                  <Card className="p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                        {exp.period}
                        {exp.current && " · Current"}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <p className="mt-1 text-sm font-medium text-violet-600">
                      {exp.role}
                    </p>
                    {exp.location && (
                      <p className="mt-1 text-sm text-slate-400">
                        {exp.location}
                      </p>
                    )}
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      {exp.summary}
                    </p>

                    {exp.responsibilities.length > 0 && (
                      <div className="mt-5">
                        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Responsibilities
                        </h4>
                        <ul className="space-y-1.5">
                          {exp.responsibilities.map((r) => (
                            <li
                              key={r}
                              className="flex items-start gap-2 text-sm text-slate-600"
                            >
                              <span
                                className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-violet-600"
                                aria-hidden="true"
                              />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {hasExtraDetails && (
                      <div className="mt-5 border-t border-border pt-4 text-xs italic text-slate-400">
                        More details in{" "}
                        <code className="rounded bg-slate-100 px-1">src/data/experience.ts</code>
                      </div>
                    )}
                  </Card>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}