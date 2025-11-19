import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="container flex items-center justify-center py-4">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden ring-2 ring-gradient-to-r from-blue-500 to-purple-500 p-0.5">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center">
              <Image src="/acm-w_logo.jpg" alt="ACM-W Michigan Logo" fill style={{objectFit:'contain'}} className="p-1" />
            </div>
          </div>
          <div>
            <div className="text-xl font-bold heading-gradient">Michigan TEA</div>
            <div className="text-xs text-slate-500 font-medium">ACM‑W Michigan • NCWIT Michigan</div>
          </div>
        </Link>
      </div>
    </header>
  )
}
