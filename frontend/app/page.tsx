import Hero from '../components/Hero'
import Timeline from '../components/Timeline'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about" className="card mb-8">
        <h2 className="text-2xl font-semibold">About the TEA</h2>
        <p className="mt-3 text-slate-700">The Technology Exploration Award (TEA) is a short program that invites high school students to reach out to a technology practitioner, learn about their work, and submit a brief reflection describing what they learned and how the experience shaped their thinking about technology careers.</p>
        <p className="mt-3 text-slate-700">The program is run by the Michigan ACM-W chapter in affiliation with the NCWIT Michigan chapter.</p>
      </section>

      <Timeline />

      <FAQ />

      <section className="card">
        <h2 className="text-2xl font-semibold">Info session</h2>
        <p className="mt-3 text-slate-700">We will host an info webinar on Nov 24, 2025, 7-8pm CT. The session will be recorded — affiliates should promote the session to Michigan students. If you have timeline changes, please share them and we will update our page.</p>
      </section>
    </>
  )
}
