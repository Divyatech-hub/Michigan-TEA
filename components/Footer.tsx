export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white mt-16">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-300">🎆 Michigan TEA</h3>
            <p className="text-blue-100 mb-4">
              Empowering high school students to explore technology careers through 
              meaningful connections with industry professionals.
            </p>
            <div className="flex items-center gap-2 text-blue-200">
              <span>🏢</span>
              <span className="text-sm">Lansing ACM-W • NCWIT Michigan</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-yellow-300">🔗 Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#about" className="hover:text-white transition-colors">→ About TEA</a></li>
              <li><a href="#timeline" className="hover:text-white transition-colors">→ Timeline</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">→ Student Gallery</a></li>
              <li><a href="#apply" className="hover:text-white transition-colors">→ Apply Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-yellow-300">📞 Get in Touch</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center gap-3">
                <span>📧</span>
                <a href="mailto:lan.acmw.chapter@gmail.com" className="hover:text-white transition-colors">
                  lan.acmw.chapter@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span>📸</span>
                <a href="mailto:lan.acmw.chapter@gmail.com?subject=Michigan TEA Photos" className="hover:text-white transition-colors">
                  Submit Photos
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p className="text-sm">
            Built with ♥️ for the Michigan tech community • 
            Help us promote this opportunity to students across Michigan
          </p>
        </div>
      </div>
    </footer>
  )
}
