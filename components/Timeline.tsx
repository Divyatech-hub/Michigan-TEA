export default function Timeline() {
  const items = [
    { 
      date: 'Nov 24, 2025', 
      title: '📺 Info Session (Webinar)', 
      desc: 'Register interest by 5 PM EST on Monday, Nov 24 to join live session (will be recorded for later viewing)',
      status: 'completed'
    },
    { 
      date: 'Nov 25, 2025', 
      title: '🚀 Submissions Open', 
      desc: 'Students begin submitting their reflections',
      status: 'active'
    },
    { 
      date: 'Mar 15, 2026', 
      title: '⏰ Submissions Close', 
      desc: 'All reflections due by 11:59 pm EST',
      status: 'upcoming'
    },
    { 
      date: 'Mar 30, 2026', 
      title: '🏆 Winners Announced', 
      desc: 'Students receive notifications',
      status: 'upcoming'
    },
    { 
      date: 'Apr 18, 2026', 
      title: '🎉 MI AiC Awards Ceremony', 
      desc: 'Students recognized in public ceremony',
      status: 'future'
    },
  ]

  return (
    <section id="timeline" className="w-full">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold heading-gradient mb-4">📅 Timeline</h2>
        <p className="text-xl text-slate-600">Stay on track with these important dates</p>
      </div>
      
      <div className="space-y-6">
        {items.map((item, idx) => {
          const statusColors = {
            completed: 'bg-green-100 border-green-300 text-green-800',
            active: 'bg-purple-100 border-purple-300 text-purple-800',
            upcoming: 'bg-yellow-100 border-yellow-300 text-yellow-800',
            future: 'bg-slate-100 border-slate-300 text-slate-600'
          }
          
          return (
            <div key={idx} className={`flex items-start gap-6 p-6 rounded-2xl border-2 ${statusColors[item.status as keyof typeof statusColors]}`}>
              <div className="text-sm font-bold bg-white px-3 py-1 rounded-full min-w-fit">
                {item.date}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
