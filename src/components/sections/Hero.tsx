import Button from "@/components/ui/Button";
import { personal } from "@/data/personal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-950"
      aria-label="Hero introduction"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-40 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute right-10 top-24 hidden h-64 w-64 border border-violet-500/10 lg:block" />
        <div className="absolute right-40 top-40 hidden h-40 w-40 border border-violet-500/20 lg:block" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl flex-col items-start justify-center gap-12 px-6 py-20 sm:px-10 lg:flex-row lg:items-center lg:gap-16 lg:px-12">
        <div className="flex-1">
          <p className="reveal mb-6 flex items-center gap-3 text-sm font-medium tracking-wide text-slate-400">
            <span
              className="inline-block h-px w-10 bg-violet-500"
              aria-hidden="true"
            />
            Software & Technology Attaché
          </p>

          <h1 className="reveal reveal-delay-1 mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Cynthia Mukami
            <span className="mt-3 block text-xl font-bold leading-snug text-violet-400 sm:text-2xl lg:text-3xl">
              {personal.title}
            </span>
          </h1>

          <p className="reveal reveal-delay-2 mb-10 max-w-xl text-base font-normal leading-relaxed text-slate-400 sm:text-lg">
            {personal.heroStatement}
          </p>

          <div className="reveal reveal-delay-3 flex flex-wrap gap-4">
            <Button href="#projects">
              View My Projects
              <span aria-hidden="true">→</span>
            </Button>
            <Button href="#contact" variant="outline" className="border-slate-600 text-white hover:border-violet-500 hover:text-violet-300 hover:bg-transparent">
              Contact Me
            </Button>
          </div>
        </div>

        <div className="reveal reveal-delay-2 relative hidden flex-shrink-0 justify-center sm:flex lg:w-96">
          <div
            className="relative h-72 w-72 overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-transparent lg:h-80 lg:w-80"
            role="img"
            aria-label="Abstract developer-themed placeholder visual"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="h-full w-full bg-[radial-gradient(circle_at_50%_35%,rgba(124,58,237,0.25),transparent_60%)]"
                aria-hidden="true"
              />
              <div
                className="absolute h-40 w-40 rounded-xl border border-violet-400/30 bg-violet-500/10 backdrop-blur-sm"
                aria-hidden="true"
              />
              <div
                className="absolute h-24 w-24 translate-x-16 translate-y-16 rounded-lg bg-violet-600/20"
                aria-hidden="true"
              />
              <div className="absolute bottom-8 left-8 font-mono text-xs leading-6 text-violet-300/70" aria-hidden="true">
                {"const { build } = "}
                <br />
                {"'curiosity & code';"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent lg:h-1.5"
        aria-hidden="true"
      />
    </section>
  );
}