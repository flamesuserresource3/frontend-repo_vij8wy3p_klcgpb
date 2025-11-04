import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Dashboard',
    description:
      'A data-rich dashboard with smooth animations, charts, and delightful micro-interactions.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
    colorFrom: 'from-fuchsia-500',
    colorTo: 'to-indigo-500',
  },
  {
    title: '3D Product Showcase',
    description:
      'WebGL-based experience to explore products in 3D with lighting controls and hotspots.',
    tags: ['React', 'Spline', 'Three.js'],
    link: '#',
    colorFrom: 'from-cyan-500',
    colorTo: 'to-blue-600',
  },
  {
    title: 'Portfolio Revamp',
    description:
      'A minimal, modern portfolio with great typography, motion, and strong visual hierarchy.',
    tags: ['Vite', 'Tailwind', 'Accessibility'],
    link: 'https://donysus.github.io/raghavjha-portfolio/',
    colorFrom: 'from-emerald-500',
    colorTo: 'to-teal-600',
  },
];

function ProjectCard({ title, description, tags, link, colorFrom, colorTo }) {
  return (
    <a
      href={link}
      target={link?.startsWith('http') ? '_blank' : undefined}
      rel={link?.startsWith('http') ? 'noreferrer' : undefined}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:scale-[1.01] hover:border-white/20 hover:bg-white/10"
    >
      <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${colorFrom} ${colorTo} opacity-20 blur-2xl transition group-hover:opacity-30`} />
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-white/90">{title}</h3>
          <ExternalLink className="text-white/60" size={18} />
        </div>
        <p className="mt-2 text-sm text-white/70">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(40rem_20rem_at_50%_0%,rgba(99,102,241,0.20),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Featured Projects</h2>
            <p className="mt-2 max-w-prose text-sm text-white/70">
              A selection of recent work focused on performance, interactivity, and visual polish.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
