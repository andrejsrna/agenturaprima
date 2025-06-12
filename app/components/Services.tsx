import { FaBullseye, FaUsers, FaStar } from 'react-icons/fa';

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-yellow-200/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-heading">
            Prečo si vybrať{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              nás
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Service 1 - Komplexnosť */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100/50">
            <div className="text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <FaBullseye className="text-3xl text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-heading group-hover:text-orange-600 transition-colors duration-300">
                Komplexnosť
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed font-[family-name:var(--font-sans)]">
                <span className="font-semibold text-orange-600">Full‑servis</span> od návrhu po realizáciu – eventy, atrakcie, catering, technika…
              </p>
              
              {/* Hover effect decoration */}
              <div className="mt-6 w-0 group-hover:w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full transition-all duration-500"></div>
            </div>
          </div>

          {/* Service 2 - Skúsený tím */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-pink-100/50">
            <div className="text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <FaUsers className="text-3xl text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-heading group-hover:text-pink-600 transition-colors duration-300">
                Skúsený tím
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed font-[family-name:var(--font-sans)]">
                Organizujeme eventy pre firmy, deti i kultúrne projekty – <span className="font-semibold text-pink-600">viac ako 15 rokov praxe</span>
              </p>
              
              {/* Hover effect decoration */}
              <div className="mt-6 w-0 group-hover:w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full transition-all duration-500"></div>
            </div>
          </div>

          {/* Service 3 - Originálne projekty */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-yellow-100/50">
            <div className="text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <FaStar className="text-3xl text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-heading group-hover:text-yellow-600 transition-colors duration-300">
                Originálne projekty
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed font-[family-name:var(--font-sans)]">
                <span className="font-semibold text-yellow-600">Muzikály, hudobné rozprávky</span>, tematické predstavenia pre najmenších
              </p>
              
              {/* Hover effect decoration */}
              <div className="mt-6 w-0 group-hover:w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 font-heading">
              Chcete vedieť viac o našich službách?
            </h3>
            <button className="bg-white text-orange-600 font-bold px-8 py-3 rounded-full hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 shadow-lg font-heading">
              Zobraziť všetky služby
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 