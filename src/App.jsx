import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#06070A] text-white antialiased">
      {/* Subtle background grid */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(1px_1px_at_16px_16px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:32px_32px]"
      />

      <Navbar />

      <main className="relative">
        <Hero />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
