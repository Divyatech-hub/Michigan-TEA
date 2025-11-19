import Image from 'next/image'

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1531123414780-fc3e4b86fe1a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder', alt: 'Students collaborating' },
  { src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder', alt: 'Student presenting project' },
  { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder', alt: 'Students in workshop' },
  { src: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder', alt: 'Students using laptops' },
]

export default function Gallery(){
  return (
    <section className="card mb-8">
      <h2 className="text-2xl font-semibold">From ACM‑W chapters</h2>
      <p className="mt-2 text-slate-600">Photos from events and students across ACM‑W and NCWIT affiliates.</p>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {IMAGES.map((img, idx)=> (
          <figure key={img.src} className="rounded overflow-hidden bg-slate-100 h-40 flex flex-col">
            <div className="flex-1">
              <Image src={img.src} alt={img.alt} width={800} height={480} style={{objectFit:'cover', width:'100%', height:'100%'}} />
            </div>
            <figcaption className="text-xs text-slate-600 p-2">{img.alt} — ACM‑W chapter photo (placeholder)</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
