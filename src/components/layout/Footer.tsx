import { navLinks, personal } from "@/data/personal";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
} from "@/components/ui/Icons";

export default function Footer() {
  const social = [
    { label: "GitHub", href: personal.social.github, icon: GithubIcon },
    { label: "LinkedIn", href: personal.social.linkedin, icon: LinkedinIcon },
    { label: "Twitter", href: personal.social.twitter, icon: TwitterIcon },
    { label: "Email", href: `mailto:${personal.social.email}`, icon: MailIcon },
  ].filter((s) => Boolean(s.href));

  return (
    <footer className="bg-navy-950 py-12">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col items-center gap-8 border-b border-white/10 pb-8 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <p className="text-lg font-bold text-white">{personal.name}</p>
            <p className="mt-1 text-sm text-slate-400">{personal.tagline}</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {social.length > 0 && (
            <div className="flex items-center gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          )}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          © 2026 {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}