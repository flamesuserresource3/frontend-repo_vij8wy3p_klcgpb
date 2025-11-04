import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 py-12">
      <div className="absolute inset-0 bg-[radial-gradient(30rem_14rem_at_100%_120%,rgba(34,197,94,0.16),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-sm font-semibold text-white">Let’s build something great</p>
            <p className="mt-1 text-sm text-white/70">
              Open to freelance and collaboration. Say hi!
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:raghav@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              <Mail size={18} /> Email
            </a>
            <a
              href="https://github.com/donysus"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/raghavjha/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Raghav Jha. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
