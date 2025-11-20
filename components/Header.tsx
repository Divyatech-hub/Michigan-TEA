import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="w-full max-w-none px-8 lg:px-16 py-6">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden ring-2 ring-gradient-to-r from-blue-500 to-purple-500 p-0.5">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                <img src="/Michigan-TEA/acm-w_logo.jpg" alt="ACM-W Michigan Logo" className="w-full h-full object-contain p-1" />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold heading-gradient">Michigan TEA</div>
              <div className="text-xs text-slate-500 font-medium">Lansing ACM-W • NCWIT Michigan</div>
            </div>
          </Link>

          <nav className="flex items-center gap-12">
            <Link href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About</Link>
            <Link href="#timeline" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Timeline</Link>
            <Link href="#faq" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">FAQ</Link>
            <Link href="/Michigan-TEA/resources" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Resources</Link>
            <Link href="#application" className="btn-primary text-sm px-8 py-3">Apply Now</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
