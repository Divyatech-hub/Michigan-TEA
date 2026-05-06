export default function FAQ(){
  const faqs = [
    { 
      q: '🎯 Who is eligible to apply for an MI TEA?', 
      a: 'Students in grades 9-12 who live in Michigan and are registered members of the Aspirations in Computing (AiC) Community.' 
    },
    { 
      q: '👩‍💻 Who qualifies as a technology professional for the purpose of an MI TEA?', 
      a: 'Someone who provides technology skills and services either part-time or full-time and has at least 2 years of experience in a technology-related role.' 
    },
    { 
      q: '🤖 Can I use AI when writing my reflections?', 
      a: 'Students may use generative AI tools only for minor editing support—such as checking grammar, clarity, or organization—but not for generating ideas, content, or descriptions of the interview itself. All responses must be based solely on your conversation with the technology professional and must accurately reflect what you learned. Using AI to create, fabricate, or significantly rewrite your takeaways, summaries, or insights is not allowed.' 
    },
    { 
      q: '📝 What are the minimum word requirements for reflections?', 
      a: 'Your reflection must include: Details about the practitioner\'s role and organization (minimum 250 words), description of their career path (minimum 150 words), and career/life advice offered (minimum 100 words).' 
    },
    { 
      q: '👥 Can family members be interviewed as technology practitioners?', 
      a: 'No, an eligible practitioner cannot be a family member. You may have a maximum of two practitioners who work for the same company.' 
    },
    { 
      q: '⏱️ How long should each interview be?', 
      a: 'Each interview should take 45-60 minutes. You must complete interviews with at least 5 technology practitioners between November 25, 2025, and March 15, 2026.' 
    },
    { 
      q: '🏆 What do award recipients receive?', 
      a: 'Award recipients will be publicly recognized in April 18 at the 2026 MI Aspirations in Computing Awards ceremony and presented with a personalized award (medal or trophy). The award will be mailed to recipients who cannot attend the ceremony on April 18.' 
    },
  ]

  return (
    <section id="faq" className="w-full">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold heading-gradient mb-4">❓ Frequently Asked Questions</h2>
        <p className="text-xl text-slate-600">Everything you need to know about the MI TEA</p>
      </div>
      
      <div className="grid gap-6">
        {faqs.map((faq, idx) => (
          <details key={idx} className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200 cursor-pointer group">
            <summary className="text-lg font-bold text-slate-900 mb-3 cursor-pointer list-none flex items-center">
              <span className="mr-4 text-3xl font-bold text-blue-600 transition-transform duration-200 group-open:rotate-45">+</span>
              <span>{faq.q}</span>
            </summary>
            <p className="text-slate-700 leading-relaxed mt-3">
              {idx === 0 ? (
                <>Students in grades 9-12 who live in Michigan and are registered members of the <a href="https://www.aspirations.org/get-involved/join-the-aic-community" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Aspirations in Computing (AiC) Community</a>.</>
              ) : (
                faq.a
              )}
            </p>
          </details>
        ))}  
      </div>
    </section>
  )
}
