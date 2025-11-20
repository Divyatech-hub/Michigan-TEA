export default function ApplicationSection(){
  return (
    <section id="application" className="w-full">
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold heading-gradient mb-4">📋 Application Rules</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            To receive an MI TEA, you must complete the following steps with at least 5 technology practitioners between November 25, 2025, and March 15, 2026.
          </p>
        </div>

        <div className="space-y-8 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">1. 📞 Request an Interview</h3>
            <ul className="text-left text-slate-700 space-y-2">
              <li>• Directly request an interview with a technology practitioner</li>
              <li>• Send the practitioner a link to the MI TEA Practitioner Letter</li>
              <li>• An eligible practitioner cannot be a family member</li>
              <li>• A maximum of two practitioners may work for the same company</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">2. 💬 Conduct the Interview</h3>
            <ul className="text-left text-slate-700 space-y-2">
              <li>• Ask about their job and career path</li>
              <li>• Request career or life advice</li>
              <li>• Ask at least one additional question of interest to you</li>
              <li>• Interview should take 45-60 minutes</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">3. 📧 Follow Up</h3>
            <ul className="text-left text-slate-700 space-y-2">
              <li>• Send a thank-you email highlighting benefits gained from the interview</li>
              <li>• Email the practitioner the MI TEA Award announcement when released in March</li>
              <li>• Include information about the award ceremony</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">4. ✍️ Submit Your Reflection</h3>
            <p className="text-slate-700 mb-3">Write a reflection including:</p>
            <ul className="text-left text-slate-700 space-y-2">
              <li>• Details about the practitioner's role and organization (minimum 250 words)</li>
              <li>• Description of the practitioner's career path (minimum 150 words)</li>
              <li>• Career or life advice offered (minimum 100 words)</li>
              <li>• Statement documenting any use of generative AI for minor editing support only</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-200 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">🏆 Rewards</h3>
          <p className="text-slate-700 mb-4 text-center max-w-3xl mx-auto">
            Each award recipient will be publicly recognized on April 18 at the 2026 MI Aspirations in Computing Awards ceremony, 
            where they will receive a MI TEA Award certificate and medal. Recipients will also be eligible for prizes donated by sponsors.
          </p>
          <p className="text-slate-600 text-center text-sm">
            A MI TEA Award certificate and medal will be mailed to recipients who cannot attend the ceremony in April.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Start Your Journey?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Visit our resources page for helpful interview tips and guidance on finding technology practitioners.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:lan.acmw.chapter@gmail.com" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
            >
              📧 Contact Us
            </a>
            <a 
              href="/practitioner_letter.pdf" 
              target="_blank"
              className="bg-slate-600 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition duration-300 font-semibold"
            >
              📄 Download Practitioner Letter
            </a>
            <a 
              href="/Michigan-TEA/resources"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300 font-semibold"
            >
              📚 View Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}