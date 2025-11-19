export default function Hero() {
  return (
    <section className="relative mb-12 w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src="/Michigan-TEA/HSPC2025 - 18 of 41.jpeg" alt="HSPC 2025 participants" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-800/70 to-teal-700/60" />
      </div>

      <div className="w-full relative z-10 py-24 md:py-32 px-6 lg:px-12 xl:px-16">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Michigan Technology
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Exploration Award
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Honoring high school students who actively arrange meetings with and learn from technology professionals.
          </p>

          <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto">
            Hosted by the Lansing ACM-W Chapter in collaboration with NCWIT
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#application" className="btn-primary text-lg px-10 py-5">
              🎯 Apply for TEA
            </a>
            <a href="#about" className="btn-secondary text-lg">
              Learn More
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
