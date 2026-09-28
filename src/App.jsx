export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">The Marlow House</span>
        <a href="#cta" className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition">
          Book a Room
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-cyan-600 font-semibold mb-4">Boutique Stay</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">A quiet escape in the heart of the city</h1>
        <p className="text-lg text-slate-600 mb-10">Twelve rooms, one rooftop garden, and service that remembers your name.</p>
        <a href="#cta" className="inline-block bg-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition">
          Check Availability
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Rooftop Garden</h3>
          <p className="text-slate-600">Breakfast and evening cocktails above the skyline.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Curated Rooms</h3>
          <p className="text-slate-600">Each room individually designed, no two alike.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Concierge Service</h3>
          <p className="text-slate-600">Local recommendations from people who live here.</p>
        </div>
      </section>

      <section id="cta" className="bg-cyan-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Your room is waiting</h2>
        <p className="mb-8 text-cyan-100">Best rate guaranteed when you book direct.</p>
        <a href="#" className="inline-block bg-white text-cyan-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Check Availability
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 The Marlow House. All rights reserved.
      </footer>
    </div>
  )
}
