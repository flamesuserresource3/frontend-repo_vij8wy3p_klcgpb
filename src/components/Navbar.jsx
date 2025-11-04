import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-lg" />
              <span className="text-sm font-semibold tracking-wide text-white/90">Raghav Jha</span>
            </a>
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold shadow transition hover:bg-white/90"
              >
                Get in touch
              </a>
            </div>
            <button
              aria-label="Toggle menu"
              className="md:hidden text-white/90"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 sm:px-6">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-white px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow hover:bg-white/90"
                >
                  Get in touch
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
