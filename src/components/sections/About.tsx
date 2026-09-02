import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { personal } from "@/data/personal";

const highlights = [
  "Studying Computer Science at Thika Technical",
  "Currently a Software & Technology Attaché at the Africa Centre of Data Science and Analytics",
  "Building real-world systems including e-commerce, hotel, and library management platforms",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="About Me"
          title="A Computer Science student turning curiosity into working software"
          description="Computing, building, and learning — and applying it to real problems."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <div className="space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                I'm Cynthia Mukami, a Computer Science student at Thika
                Technical. My interest in technology started with a simple
                curiosity about how software works — and grew into a focus on
                building things that solve real problems.
              </p>
              <p>
                I'm currently working as a Software/Technology Attaché at the
                Africa Centre of Data Science and Analytics, where I'm gaining
                hands-on industry experience and learning how software and data
                technologies come together in a professional setting.
              </p>
              <p>
                Alongside my studies, I've designed and built practical systems
                — including an e-commerce platform, a hotel management system,
                and a library management system. Each project has sharpened my
                skills in software development, web development, and database
                design.
              </p>
              <p>
                I'm driven by a desire to keep learning, to better understand
                how technology can be used responsibly and effectively, and to
                contribute to meaningful projects.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-600"
                >
                  <span
                    className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-600"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-delay-1 flex items-center">
            <div className="relative w-full max-w-sm mx-auto">
              <div
                className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-violet-500/30"
                aria-hidden="true"
              />
              <div className="relative flex aspect-[4/5] items-end overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={personal.profileImage}
                  alt={`Photo of ${personal.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                  priority
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.45),transparent_60%)]"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-navy-950 px-4 py-3 shadow-lg">
                <p className="font-mono text-xs text-violet-300">
                  {"Student → Builder"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}