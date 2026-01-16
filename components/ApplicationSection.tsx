export default function ApplicationSection(){
  return (
    <section id="application" className="w-full">
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold heading-gradient mb-4">📋 How to Qualify</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            To receive an MI TEA, you must complete the following steps with at least 5 technology practitioners between November 25, 2025, and March 15, 2026.
          </p>
        </div>

        <div className="space-y-8 mb-8">
          <details className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 cursor-pointer group">
            <summary className="text-xl font-bold text-slate-900 mb-4 cursor-pointer list-none flex items-center">
              <span className="mr-4 text-3xl font-bold text-blue-600 transition-transform duration-200 group-open:rotate-45">+</span>
              <span>1. 📝 Register Interest</span>
            </summary>
            <ul className="text-left text-slate-700 space-y-2 mt-4">
              <li>Complete the <a href="https://forms.gle/v4VSxvQbq3cczt86A" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">MI TEA Registration form</a></li>
            </ul>
          </details>

          <details className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 cursor-pointer group">
            <summary className="text-xl font-bold text-slate-900 mb-4 cursor-pointer list-none flex items-center">
              <span className="mr-4 text-3xl font-bold text-blue-600 transition-transform duration-200 group-open:rotate-45">+</span>
              <span>2. 📞 Request Interviews</span>
            </summary>
            <ul className="text-left text-slate-700 space-y-2 mt-4">
              <li>• Directly request interviews with technology professionals</li>
              <li>• Send the professionals a link to the <a href="/Michigan-TEA/practitioner_letter.pdf" className="text-blue-600 hover:text-blue-800 underline">MI TEA Practitioner Letter</a></li>
              <li>• Eligible professionals cannot be a family member and will have worked in the technology sector for at least 2 years</li>
              <li>• No more than 2 professionals interviewed may work for the same company</li>
            </ul>
          </details>

          <details className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 cursor-pointer group">
            <summary className="text-xl font-bold text-slate-900 mb-4 cursor-pointer list-none flex items-center">
              <span className="mr-4 text-3xl font-bold text-blue-600 transition-transform duration-200 group-open:rotate-45">+</span>
              <span>3. 💬 Conduct the Interviews</span>
            </summary>
            <ul className="text-left text-slate-700 space-y-2 mt-4">
              <li>• Ask about professionals' job and career paths</li>
              <li>• Request career or life advice</li>
              <li>• Ask at least one additional question of interest to you</li>
              <li>• Interviews should take 45-60 minutes</li>
            </ul>
          </details>

          <details className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 cursor-pointer group">
            <summary className="text-xl font-bold text-slate-900 mb-4 cursor-pointer list-none flex items-center">
              <span className="mr-4 text-3xl font-bold text-blue-600 transition-transform duration-200 group-open:rotate-45">+</span>
              <span>4. ✍️ Write and Submit Your Reflections</span>
            </summary>
            <div className="mt-4">
              <p className="text-slate-700 mb-3">Write reflections that include:</p>
              <ul className="text-left text-slate-700 space-y-2">
                <li>• Details about the practitioner's role and organization (minimum 250 words)</li>
                <li>• A description of the practitioner's career path (minimum 150 words)</li>
                <li>• Any career or life advice offered and answers to other questions you asked them (minimum 100 words)</li>
                <li>• A statement documenting any use of generative AI for minor editing support only, not for generating ideas, content, or descriptions of the interview itself</li>
              </ul>
              <p className="text-slate-700 mt-3 font-medium">Fill out and submit your <a href="https://docs.google.com/forms/d/e/1FAIpQLSdtFaY-QwaJpO6MCgeo22KIgbLTKegxCbNuSm-QWXU65BOofQ/viewform?pli=1" className="text-blue-600 hover:text-blue-800 underline">TEA Reflection Reports</a> by March 15</p>
            </div>
          </details>

          <details className="bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl p-6 cursor-pointer group">
            <summary className="text-xl font-bold text-slate-900 mb-4 cursor-pointer list-none flex items-center">
              <span className="mr-4 text-3xl font-bold text-blue-600 transition-transform duration-200 group-open:rotate-45">+</span>
              <span>5. 📧 Follow Up</span>
            </summary>
            <ul className="text-left text-slate-700 space-y-2 mt-4">
              <li>• Within 24 hours of the interview, send a thank-you email highlighting the benefits gained from the interview</li>
              <li>• Send the MI TEA Award announcement to professionals when it's released in March</li>
              <li>• Inform professionals that they are invited to the award ceremony in April</li>
            </ul>
          </details>
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
              href="/Michigan-TEA/practitioner_letter.pdf" 
              target="_blank"
              className="bg-slate-600 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition duration-300 font-semibold"
            >
              📄 Download Practitioner Letter
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdtFaY-QwaJpO6MCgeo22KIgbLTKegxCbNuSm-QWXU65BOofQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold"
            >
              📝 TEA Reflection Reports
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