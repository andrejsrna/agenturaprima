import { FiArrowRight, FiEye } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedProjects() {
  return (
    <section id="projekty" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-r from-purple-100/40 to-pink-100/30 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-100/30 to-cyan-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-20 right-1/3 w-64 h-64 bg-gradient-to-r from-orange-100/30 to-yellow-100/40 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading">
            Vybrané{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              projekty
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-[family-name:var(--font-sans)] leading-relaxed">
            Pozrite si naše najúspešnejšie realizácie a nechajte sa inšpirovať
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full mt-8 shadow-lg"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Project 1 - Majself */}
          <div className="group relative">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 hover:border-purple-200">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/services/majself/majself.jpg"
                  alt="Majself - spevák a rapper"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project badge */}
                <div className="absolute top-6 left-6 bg-purple-500/90 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-white text-sm font-semibold">Divadlo</span>
                </div>
                
                {/* View icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiEye className="text-white text-xl" />
                </div>
              </div>
              
              {/* Photo Gallery Preview */}
              <div className="px-6 pt-4">
                <div className="flex gap-2 overflow-x-auto">
                  <div className="flex-shrink-0 w-16 h-12 bg-purple-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/services/majself/majself2.jpg"
                      alt="Majself gallery 1"
                      width={64}
                      height={48}
                      style={{ objectFit: 'cover' }}
                      className="w-full h-full hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-16 h-12 bg-purple-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/services/majself/majself3.jpg"
                      alt="Majself gallery 2"
                      width={64}
                      height={48}
                      style={{ objectFit: 'cover' }}
                      className="w-full h-full hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-16 h-12 bg-purple-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/services/majself/majself4.jpg"
                      alt="Majself gallery 3"
                      width={64}
                      height={48}
                      style={{ objectFit: 'cover' }}
                      className="w-full h-full hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-16 h-12 bg-purple-100 rounded-lg flex items-center justify-center border-2 border-dashed border-purple-300">
                    <span className="text-purple-500 text-xs font-semibold">+5</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading group-hover:text-purple-600 transition-colors duration-300">
                  Majself
                </h3>
                <p className="text-purple-600 text-sm uppercase tracking-wider mb-3 font-[family-name:var(--font-sans)]">
                  Spevák a rapper
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-6 font-[family-name:var(--font-sans)]">
                  Spevák a rapper, ktorý vie spájať hudbu a emócie a vytvárať nezabudnuteľné zážitky pre divákov.
                </p>
                
                {/* CTA Button */}
                <Link href="/projekty/majself" className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 font-heading">
                  <span>Zobraziť viac</span>
                  <FiArrowRight className="text-lg group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 - Minimax */}
          <div className="group relative">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 hover:border-blue-200">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/services/minimax/minimax.jpg"
                  alt="Minimax - rodinné podujatia pre malé deti"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project badge */}
                <div className="absolute top-6 left-6 bg-blue-500/90 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-white text-sm font-semibold">Pre deti</span>
                </div>
                
                {/* View icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiEye className="text-white text-xl" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading group-hover:text-blue-600 transition-colors duration-300">
                  Minimax
                </h3>
                <p className="text-blue-600 text-sm uppercase tracking-wider mb-3 font-[family-name:var(--font-sans)]">
                  Živé predstavenie
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-6 font-[family-name:var(--font-sans)]">
                  Detská televízia Minimax patrí k najsledovanejším televíziám, ktoré sú určené detskému divákovi. Ponúka bezpečné a zábavné prostredie plné rozprávok, príbehov a zvieratiek.                 </p>
                {/* CTA Button */}
                <Link href="/projekty/minimax" className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 font-heading">
                  <span>Zobraziť viac</span>
                  <FiArrowRight className="text-lg group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* Project 3 - Hugo a jeho priatelia */}
          <div className="group relative">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 hover:border-orange-200">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/services/hugo/hugo.jpg"
                  alt="Hugo a jeho priatelia, Mici a Mňau - rozprávkové predstavenia"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* View icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiEye className="text-white text-xl" />
                </div>
              </div>
              
              {/* Photo Gallery Preview */}
              <div className="px-6 pt-4">
                <div className="flex gap-2 overflow-x-auto">
                  <div className="flex-shrink-0 w-16 h-12 bg-orange-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/services/hugo/hugo2.jpg"
                      alt="Hugo gallery 1"
                      width={64}
                      height={48}
                      style={{ objectFit: 'cover' }}
                      className="w-full h-full hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-16 h-12 bg-orange-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/services/hugo/hugo3.jpg"
                      alt="Hugo gallery 2"
                      width={64}
                      height={48}
                      style={{ objectFit: 'cover' }}
                      className="w-full h-full hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-16 h-12 bg-orange-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/services/hugo/hugo4.jpg"
                      alt="Hugo gallery 3"
                      width={64}
                      height={48}
                      style={{ objectFit: 'cover' }}
                      className="w-full h-full hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-16 h-12 bg-orange-100 rounded-lg flex items-center justify-center border-2 border-dashed border-orange-300">
                    <span className="text-orange-500 text-xs font-semibold">+12</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading group-hover:text-orange-600 transition-colors duration-300">
                  Hugo a jeho priatelia
                </h3>
                <p className="text-orange-600 text-sm uppercase tracking-wider mb-3 font-[family-name:var(--font-sans)]">
                  Mici a Mňau - rozprávkové predstavenia
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-6 font-[family-name:var(--font-sans)]">
                  Čarovné rozprávkové predstavenia s obľúbenými postavičkami, ktoré rozvíjajú fantáziu detí a učia ich dôležité životné hodnoty.
                </p>
                
                {/* CTA Button */}
                <Link href="/projekty/hugo-priatelia" className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 font-heading">
                  <span>Zobraziť viac</span>
                  <FiArrowRight className="text-lg group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="text-center">
          <div className="inline-block relative">
            <Link href="/projekty" className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white font-bold px-12 py-6 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:scale-105 font-heading border border-gray-200 backdrop-blur-sm overflow-hidden">
              <span className="relative z-10 text-lg">Pozrite všetky projekty</span>
              <FiArrowRight className="relative z-10 text-2xl group-hover:translate-x-2 transition-transform duration-300" />
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 