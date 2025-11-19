export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Back Navigation */}
      <div className="w-full bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-6">
          <a 
            href="/Michigan-TEA/" 
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            ← Back to Michigan TEA Home
          </a>
        </div>
      </div>

      <div className="w-full px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold heading-gradient mb-6">
              Michigan TEA Technology Exploration Award Applicant Resources
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Quick Links: Use the links below to navigate to specific resources to help you schedule, prepare for, and run meetings.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 text-sm text-slate-700">
              <strong>Jump to:</strong> <a href="#who-is-practitioner" className="text-blue-600 hover:underline">Who Is a Technology Practitioner?</a> | 
              <a href="#find-someone" className="text-blue-600 hover:underline ml-1">How Can I Find Someone to Interview?</a> | 
              <a href="#email-templates" className="text-blue-600 hover:underline ml-1">Email Templates</a> | 
              <a href="#lead-meeting" className="text-blue-600 hover:underline ml-1">How Do I Lead a Meeting?</a> | 
              <a href="#introduce-yourself" className="text-blue-600 hover:underline ml-1">How Do I Introduce Myself?</a>
            </div>
          </header>

          <div className="space-y-12">
            {/* Who Is a Technology Practitioner */}
            <section id="who-is-practitioner" className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">WHO IS A TECHNOLOGY PRACTITIONER?</h2>
              <p className="text-slate-700 mb-6">
                Simply put, a technology practitioner is anyone who works in the technology space. For the purpose of this award, 
                the person must work full time in the technology space and have at least 2 years of related experience. A list of 
                job titles is included below, and while this is not an exhaustive list, it is meant to give you a sense of the types 
                of roles within the technology field.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                <div>
                  <ul className="space-y-1">
                    <li>• Artificial Intelligence Security Specialist</li>
                    <li>• Back-end Developer</li>
                    <li>• Business Systems Analyst</li>
                    <li>• Chief Information Officer</li>
                    <li>• Chief Technology Officer</li>
                    <li>• Cloud Computing Engineer</li>
                    <li>• Cloud Product Manager</li>
                    <li>• Cloud Systems Engineer</li>
                    <li>• Computer Data Scientist</li>
                    <li>• Computer Network Specialist</li>
                    <li>• Computer Programmer</li>
                    <li>• Cyber Security Manager</li>
                    <li>• Cyber Security Specialist</li>
                    <li>• Data Architect</li>
                    <li>• Data Modeler</li>
                    <li>• Data Privacy Officer</li>
                    <li>• Data Scientist</li>
                    <li>• Database Administrator</li>
                    <li>• Database Analyst</li>
                    <li>• Database Developer</li>
                    <li>• Director of Technology</li>
                    <li>• Front-end Developer</li>
                    <li>• Full-stack Developer</li>
                    <li>• Information Assurance Analyst</li>
                    <li>• Information Security Analyst</li>
                    <li>• Information Security Engineer</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-1">
                    <li>• IT Coordinator</li>
                    <li>• IT Director</li>
                    <li>• IT Manager</li>
                    <li>• IT Sales Director</li>
                    <li>• IT Sales Executive</li>
                    <li>• IT Security Analyst</li>
                    <li>• Mobile Developer</li>
                    <li>• Network Administrator</li>
                    <li>• Network Reliability Engineer</li>
                    <li>• Network Security Engineer</li>
                    <li>• Network Technician</li>
                    <li>• Senior Systems Analyst</li>
                    <li>• SEO Manager</li>
                    <li>• Software Engineer</li>
                    <li>• System Designer</li>
                    <li>• Systems Administrator</li>
                    <li>• Technical Account Manager</li>
                    <li>• Technical Lead</li>
                    <li>• Technical Specialist</li>
                    <li>• Technical Support</li>
                    <li>• Technology Manager</li>
                    <li>• User Experience (UX) Designer</li>
                    <li>• User Interface (UI) Designer</li>
                    <li>• Web Designer</li>
                    <li>• Web Engineer</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How Can I Find Someone */}
            <section id="find-someone" className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">HOW CAN I FIND SOMEONE TO INTERVIEW?</h2>
              <p className="text-slate-700 mb-6">
                Below are some ideas about how you can find and contact technology practitioners to interview. Keep in mind, 
                it's up to you to be resourceful. You can complete this application successfully, and creativity and tenacity 
                will help you to do so. You may very well hear a "no" from someone who isn't able to meet with you, but receiving 
                a "yes" will likely be more common. Don't be discouraged if you receive a "no," because the next practitioner you 
                reach out to will most likely say "yes."
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-4">You could reach out to…</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Any adult who you already know (not a family member)</li>
                    <li>• The friend of a parent or guardian</li>
                    <li>• A neighbor (to see if they work in the technology field)</li>
                    <li>• Someone who you don't already know but are interested in learning from</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-slate-900 mb-4">Consider…</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Asking a computer science, engineering, business, or STEM teacher if they know someone who might be willing to speak with you</li>
                    <li>• Looking for technology practitioners on company websites and seeing if you can find their email addresses (in order to email them)</li>
                    <li>• Finding and contacting practitioners via LinkedIn</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Email Templates */}
            <section id="email-templates" className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">EMAIL TEMPLATES</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Outreach Email to Practitioners</h3>
                  <div className="bg-gray-50 rounded-lg p-6 text-slate-700">
                    <p className="mb-4"><strong>Dear Dr./Ms./Mr. __________,</strong></p>
                    <p className="mb-4">
                      My name is ______________, and I am a (insert grade) student at (insert school name). I am working towards earning the 
                      Technology Exploration Award, given by Aspirations in Computing, and as a part of that endeavor I am tasked with reaching 
                      out to and interviewing technology practitioners to learn about their careers. I have attached a link below to provide 
                      information about the award.
                    </p>
                    <p className="mb-4">
                      I am interested in learning about your work as (insert practitioner's title here), your career path, and any life lessons 
                      that you might be willing to share with me. I am wondering if you might have time to do a 45-60 minute interview over 
                      (insert digital platform of choice). I would really appreciate the opportunity to learn from you!
                    </p>
                    <p className="mb-4">Thank you so much for your consideration!</p>
                    <p><strong>Sincerely,</strong></p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Thank You Email to Practitioners</h3>
                  <div className="bg-gray-50 rounded-lg p-6 text-slate-700">
                    <p className="mb-4"><strong>Dear Dr./Ms./Mr. __________,</strong></p>
                    <p className="mb-4">
                      Thank you so much for taking the time to speak with me! I really enjoyed learning about your career and career path, 
                      and especially enjoyed (add examples from the discussion of things you most appreciated learning about).
                    </p>
                    <p className="mb-4">
                      If it would be okay, I would appreciate the opportunity to stay in touch with you!
                    </p>
                    <p className="mb-4">Thank you again!</p>
                    <p><strong>Sincerely,</strong></p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-slate-700">
                    <strong>Reminder:</strong> a link to this practitioner letter must be sent to technology practitioners upon first reaching 
                    out to them in order to provide more information about the award
                  </p>
                </div>
              </div>
            </section>

            {/* How Do I Lead a Meeting */}
            <section id="lead-meeting" className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">HOW DO I LEAD A MEETING?</h2>
              <p className="text-slate-700 mb-6">
                There are a few basic steps to leading a meeting, along with some other important guidelines to remember. 
                The goals of these meetings are to learn about new areas and strengthen your skills, and the steps below will 
                help you to do those things to the best of your abilities.
              </p>
              
              <ul className="space-y-4 text-slate-700">
                <li>
                  <strong>1. At the beginning of the meeting, be sure to thank the practitioner for their time.</strong>
                </li>
                <li>
                  <strong>2. Make the plan for the meeting clear</strong>
                  <div className="ml-4 mt-2 bg-gray-50 p-4 rounded">
                    For example: "I was thinking that I could start by introducing myself. Then it would be great if you could 
                    introduce yourself, and share how you got to your current position and what your work entails. I also have some 
                    questions that I would like to ask. Does that plan work for you?"
                  </div>
                </li>
                <li>
                  <strong>3. Introduce yourself</strong>
                  <div className="ml-4 mt-2">
                    This is a very important step. If you don't introduce yourself, the practitioner you are interviewing will not know anything about you.
                  </div>
                </li>
                <li>
                  <strong>4. Ask questions</strong>
                  <div className="ml-4 mt-2">
                    Asking questions is an important way to show that you are engaged. Try not to ask questions that have already been 
                    answered as this will make the practitioner feel like you weren't paying attention.
                  </div>
                </li>
                <li>
                  <strong>5. Take thorough notes</strong>
                  <div className="ml-4 mt-2">
                    It's hard to remember all of the information that you will learn during the meeting - taking notes will help! 
                    Try to mention to the practitioner early on in the meeting that you will be taking notes so that they know you are 
                    paying attention even when looking down.
                  </div>
                </li>
                <li>
                  <strong>6. At the end of the meeting, thank the practitioner for their time and for all that they taught you.</strong>
                </li>
              </ul>
            </section>

            {/* How Do I Introduce Myself */}
            <section id="introduce-yourself" className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">HOW DO I INTRODUCE MYSELF?</h2>
              <p className="text-slate-700 mb-6">
                Introductions are a very important part of any meeting, as they help others in the room to learn more about you. 
                Until you introduce yourself, the practitioner with whom you are speaking will not know anything about you. Your 
                introduction can consist of anything from your interests and hobbies, to projects you are working on and clubs you 
                are a part of. Any topics that will help the practitioner you are meeting to know more about you are good to include, 
                as long as they maintain the formal tone of the meeting.
              </p>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">Example introductions</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-slate-700">
                    Hi! My name is ___, and I really enjoy playing soccer, reading, coding, doing robotics, and hiking. 
                    I am very interested in computer science, and enjoy learning about artificial intelligence as well.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-slate-700">
                    My name is ___, and I like to participate in my school's mock trial team, ski, use machine learning to solve problems, 
                    and help students to learn math.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-slate-700">
                    My name is ___, and I spend a lot of my time reading. My favorite subjects are math and science, and I also enjoy 
                    computer science. I am interested in everything related to technology, from hardware to software, and I absolutely 
                    love to learn new things.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-slate-700">
                  <strong>Pro tip:</strong> Adding a sentence which shows you are interested in the practitioner's work is a good way to show 
                  you are excited to learn. Here is an example:
                </p>
                <p className="text-slate-700 mt-2 italic">
                  "I am very excited to learn about your work as (insert practitioner's title here), so thank you again for taking the time 
                  to meet with me!"
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}