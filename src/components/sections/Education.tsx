import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Education"
          title="My academic foundation"
          description="Where I've been building the knowledge and skills that support my work."
        />

        <div className="mx-auto max-w-3xl">
          <Card className="reveal overflow-hidden">
            <div className="relative bg-navy-950 p-8 sm:p-10">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.15),transparent_60%)]"
                aria-hidden="true"
              />
              <div className="relative">
                <span className="mb-4 inline-flex items-center rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-300">
                  {education.status}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {education.program}
                </h3>
                <p className="mt-2 text-base font-medium text-violet-300">
                  {education.institution}
                </p>
                {(education.startYear || education.endYear) && (
                  <p className="mt-2 text-sm text-slate-400">
                    {education.startYear && education.endYear
                      ? `${education.startYear} — ${education.endYear}`
                      : education.startYear || education.endYear}
                  </p>
                )}
              </div>
            </div>

            <div className="p-8 sm:p-10">
              {education.coursework.length > 0 && (
                <div className="mb-8">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-full bg-violet-50 px-3 py-1.5 text-sm font-medium text-violet-700"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {education.achievements.length > 0 && (
                <div>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Achievements
                  </h4>
                  <ul className="grid gap-2">
                    {education.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span
                          className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-violet-600"
                          aria-hidden="true"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {education.editable &&
                education.coursework.length === 0 &&
                education.achievements.length === 0 && (
                  <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm italic text-slate-400">
                    [EDIT] Add relevant coursework and academic achievements in{" "}
                    <code className="rounded bg-slate-100 px-1">
                      src/data/education.ts
                    </code>
                  </div>
                )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}