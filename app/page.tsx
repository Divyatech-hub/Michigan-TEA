import Hero from '../components/Hero'
import Timeline from '../components/Timeline'
import FAQ from '../components/FAQ'
import ApplicationSection from '../components/ApplicationSection'

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about" className="w-full py-16 px-6 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-xl mb-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold heading-gradient mb-6">🎓 About the MI TEA</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                The Michigan Technology Exploration Award (MI TEA) honors high school students who actively arrange meetings with and learn from technology professionals. The pathway to earning this award gives recipients a comprehensive understanding of various technology careers and helps them build their professional networks early. It enhances professional skills and introduces students to experiences not typically included in most schools' curricula.
              </p>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mt-3">
                Congratulations to Anahita M. and Aranza Z for completing the TEA Challenge and winning 2026 Michigan Technology Exploration Awards!
              </p>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto mt-3">
                Hosted by the <a href="https://www.linkedin.com/company/109011307" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Lansing ACM-W Chapter</a>, MI TEA is modeled after and offered in collaboration with the <a href="https://mntech.org/technology-exploration-award/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Minnesota Aspirations in Computing Technology Exploration Award</a> and the <a href="https://www.aspirations.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">NCWIT Aspirations in Computing Awards</a>.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">🎯 What You'll Gain</h3>
                <p className="text-slate-700 leading-relaxed">
                  Comprehensive understanding of various technology careers, early professional network building, enhanced professional skills, and experiences not typically included in most schools' curricula.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">🤝 Program Collaboration</h3>
                <p className="text-slate-700 leading-relaxed">
                  MI TEA is modeled after and offered in collaboration with the Minnesota Aspirations in Computing Technology Exploration Award and the NCWIT Aspirations in Computing Awards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full px-6 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto space-y-16">
          <Timeline />
          <ApplicationSection />
          <FAQ />
        </div>
      </div>
    </>
  )
}
