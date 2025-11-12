export default function Timeline() {
  const items = [
    { date: 'Nov 24, 2025', title: 'Info session (webinar)', desc: 'Recorded — join live for Q&A.' },
    { date: 'Nov 25, 2025', title: 'Submission opens', desc: 'Students may submit beginning today.' },
    { date: 'Dec 15, 2025', title: 'Submission deadline', desc: 'All entries due by 11:59pm ET.' },
    { date: 'Jan 2026', title: 'Winners announced', desc: 'Selected students will be notified.' },
  ]

  return (
    <section id="timeline" className="card mb-8">
      <h2 className="text-2xl font-semibold">Timeline</h2>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it.date} className="flex items-start gap-4">
            <div className="w-28 text-sm text-slate-600">{it.date}</div>
            <div>
              <div className="font-medium">{it.title}</div>
              <div className="text-sm text-slate-600">{it.desc}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
