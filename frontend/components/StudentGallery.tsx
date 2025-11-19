import Image from 'next/image'

const STUDENT_PHOTOS = [
  { 
    src: '/HSPC2025 - 18 of 41.jpeg', 
    alt: 'HSPC 2025 participants',
    caption: 'HSPC 2025 - Students exploring technology'
  },
  { 
    src: '/HSPC2025 - 20 of 41.jpeg', 
    alt: 'HSPC 2025 participants',
    caption: 'HSPC 2025 - Tech career exploration'
  },
  { 
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3', 
    alt: 'Students in coding workshop',
    caption: 'Career exploration workshop'
  },
  { 
    src: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3', 
    alt: 'Students coding together',
    caption: 'TEA program participants'
  },
  { 
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3', 
    alt: 'Student with technology mentor',
    caption: 'Practitioner interview session'
  },
  { 
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3', 
    alt: 'Group of diverse students',
    caption: 'Michigan TEA recognition ceremony'
  },
]

export default function StudentGallery(){
  return (
    <section id="gallery" className="w-full">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold heading-gradient mb-4">📸 Michigan TEA in Action</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          See how students are exploring technology careers and connecting with industry professionals through the Michigan TEA program
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {STUDENT_PHOTOS.map((photo, idx) => (
          <figure key={idx} className="group">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <Image 
                src={photo.src} 
                alt={photo.alt} 
                fill 
                style={{objectFit:'cover'}} 
                className="group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <figcaption className="mt-4 text-center">
              <h3 className="font-semibold text-slate-900">{photo.caption}</h3>
              <p className="text-sm text-slate-600 mt-1">{photo.alt}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="text-center">
        <div className="hero-card max-w-lg mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-4">📸 Share Your Story</h3>
          <p className="text-slate-600 mb-6">
            Have photos from your ACM-W chapter events or TEA experience? We'd love to feature them!
          </p>
          <a href="mailto:lan.acmw.chapter@gmail.com?subject=Michigan TEA Photos" className="btn-primary">
            Submit Photos
          </a>
        </div>
      </div>
    </section>
  )
}