import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradients - don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#06070A]/60 via-[#06070A]/40 to-[#06070A]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#06070A]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-40 text-center sm:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Available for freelance work
        </div>
        <h1 className="mt-6 bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-4xl font-semibold text-transparent sm:text-6xl">
          Building modern, playful experiences on the web
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-white/80">
          I design and engineer interactive interfaces, 3D visuals, and polished products that feel fast and delightful.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow transition hover:bg-white/90"
          >
            View Projects
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
          </a>
          <a
            href="https://donysus.github.io/raghavjha-portfolio/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Original Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
