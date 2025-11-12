export default function FAQ(){
  const faqs = [
    { q: 'Who can apply?', a: 'High school students in Michigan. Check local affiliate rules for eligibility.' },
    { q: 'What is the TEA?', a: 'A short program which encourages students to contact technology practitioners and write a reflection.' },
    { q: 'How long should responses be?', a: 'There are minimum word counts on required questions; submissions under the minimum will not be accepted.' },
  ]

  return (
    <section id="faq" className="card mb-8">
      <h2 className="text-2xl font-semibold">FAQ</h2>
      <div className="mt-4 space-y-4">
        {faqs.map((f)=> (
          <div key={f.q}>
            <div className="font-medium">{f.q}</div>
            <div className="text-slate-600 text-sm">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
