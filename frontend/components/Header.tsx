import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold">Michigan TEA</Link>
        <nav className="space-x-4">
          <Link href="#about" className="text-sm text-slate-600 hover:underline">About</Link>
          <Link href="#timeline" className="text-sm text-slate-600 hover:underline">Timeline</Link>
          <Link href="#faq" className="text-sm text-slate-600 hover:underline">FAQ</Link>
          <Link href="/submit" className="inline-block ml-2 px-4 py-2 bg-sky-600 text-white rounded">Submit</Link>
        </nav>
      </div>
    </header>
  )
}
