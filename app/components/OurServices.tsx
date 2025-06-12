import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

export default function OurServices() {
  return (
    <section id="sluzby" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-orange-500/30 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-yellow-500/15 to-orange-500/25 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading relative">
              Naše{" "}
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent">
                služby
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </h2>
          </div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-[family-name:var(--font-sans)] leading-relaxed">
            Objavte naše špecializácie v eventovom svete
          </p>
        </div>

        {/* Services Grid - 2 columns max */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Service 1 - Eventy pre firmy a kultúra */}
          <Link href="/sluzby/firmy-kultura" className="group">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/services/prefirmy.jpg"
                  alt="Eventy pre firmy a kultúra"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay with number */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-blue-500/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-white font-bold text-lg">01</span>
                </div>
                
                {/* Arrow icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiArrowRight className="text-white text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 font-heading group-hover:text-blue-300 transition-colors duration-300">
                  Eventy pre firmy a kultúra
                </h3>
                <p className="text-white/70 text-base leading-relaxed mb-4 font-[family-name:var(--font-sans)]">
                  Profesionálne plánovanie konferencií, galavečerov, výstav a firemných podujatí s komplexným servisom.
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Konferencie</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Galavečery</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Výstavy</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Teambuilding</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Service 2 - Eventy pre deti */}
          <Link href="/sluzby/eventy-deti" className="group">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/20">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/services/children-events.jpg"
                  alt="Eventy pre deti"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                {/* Fallback gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/90 to-purple-800/90 flex items-center justify-center">
                  <span className="text-white text-6xl">🎭</span>
                </div>
                
                {/* Overlay with number */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-pink-500/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-white font-bold text-lg">02</span>
                </div>
                
                {/* Arrow icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiArrowRight className="text-white text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 font-heading group-hover:text-pink-300 transition-colors duration-300">
                  Eventy pre deti
                </h3>
                <p className="text-white/70 text-base leading-relaxed mb-4 font-[family-name:var(--font-sans)]">
                  Zábavné prezentácie, kreatívne dielne a divadielka, ktoré nadchnú každé dieťa a spravia nezabudnuteľné zážitky.
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-sm rounded-full border border-pink-500/30">Divadielka</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-sm rounded-full border border-pink-500/30">Dielne</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-sm rounded-full border border-pink-500/30">Animácie</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Service 3 - Teambuilding & šport */}
          <Link href="/sluzby/teambuilding" className="group">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/services/teambuilding.jpg"
                  alt="Teambuilding & šport"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                {/* Fallback gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-emerald-800/90 flex items-center justify-center">
                  <span className="text-white text-6xl">🤝</span>
                </div>
                
                {/* Overlay with number */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-green-500/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-white font-bold text-lg">03</span>
                </div>
                
                {/* Arrow icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiArrowRight className="text-white text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 font-heading group-hover:text-green-300 transition-colors duration-300">
                  Teambuilding & šport
                </h3>
                <p className="text-white/70 text-base leading-relaxed mb-4 font-[family-name:var(--font-sans)]">
                  Outdoor programy a tímové výzvy, ktoré posilnia súdržnosť vášho tímu a vytvoria silné pracovné vzťahy.
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">Outdoor</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">Tímové hry</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">Športy</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Service 4 - Prenájom atrakcií */}
          <Link href="/sluzby/prenajom-atrakcii" className="group">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/services/rental-attractions.jpg"
                  alt="Prenájom atrakcií"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                {/* Fallback gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-yellow-800/90 flex items-center justify-center">
                  <span className="text-white text-6xl">📸</span>
                </div>
                
                {/* Overlay with number */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-orange-500/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-white font-bold text-lg">04</span>
                </div>
                
                {/* Arrow icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiArrowRight className="text-white text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 font-heading group-hover:text-orange-300 transition-colors duration-300">
                  Prenájom atrakcií
                </h3>
                <p className="text-white/70 text-base leading-relaxed mb-4 font-[family-name:var(--font-sans)]">
                  Komplexný prenájom atrakcií vrátane fotostánkov, maskotov, technického zabezpečenia a cateringu.
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-500/30">Fotostánky</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-500/30">Technika</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-500/30">Catering</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom CTA section */}
        <div className="text-center">
          <div className="inline-block relative">
            <button className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-400 text-gray-900 font-bold px-12 py-6 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 transform hover:scale-105 font-heading border border-white/20 backdrop-blur-sm overflow-hidden">
              <span className="relative z-10 text-lg">Preskúmajte všetky služby</span>
              <FiArrowRight className="relative z-10 text-2xl group-hover:translate-x-2 transition-transform duration-300" />
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 