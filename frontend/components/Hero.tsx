export default function Hero() {
  return (
    <section className="card mb-8">
      <h1 className="text-3xl font-bold">Technology Exploration Award (TEA)</h1>
      <p className="mt-4 text-slate-700">The Michigan TEA (in affiliation with NCWIT - Michigan) encourages high school students to connect with technology practitioners, explore career paths, and submit a short reflection about their learning experience. We welcome students of all backgrounds.</p>
      <div className="mt-6 flex items-center gap-3">
        <a href="/submit" className="px-4 py-2 bg-sky-600 text-white rounded">Submit an entry</a>
        <a href="#about" className="text-slate-600 hover:underline">Learn more</a>
      </div>
    </section>
  )
}
