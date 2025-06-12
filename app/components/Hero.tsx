'use client';

import { useModal } from '../context/ModalContext';

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-transparent top-0 left-0 right-0 bottom-0 z-1"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500"></div>

      {/* Background Shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl opacity-80 animate-pulse"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large yellow circle - top left */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-300/50 rounded-full blur-2xl animate-pulse"></div>
        
        {/* Large pink circle - right side */}
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-pink-400/40 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Medium blue circle - bottom */}
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-blue-400/45 rounded-full blur-xl animate-pulse delay-500"></div>
        
        {/* Small accent circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-lime-300/60 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-cyan-300/50 rounded-full blur-xl animate-pulse delay-300"></div>
        
        {/* Moving shapes */}
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/20 rounded-full blur-lg animate-bounce"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight font-heading">
            <span className="block">Komplexné</span>
            <span className="block bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
              eventové služby
            </span>
            <span className="block">na mieru</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto font-medium leading-relaxed font-[family-name:var(--font-sans)]">
            Od kultúrnych podujatí cez firemné eventy až po zážitky pre deti – 
            všetko kvalitne, profesionálne a s úsmevom.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={openModal}
              className="group relative px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 hover:bg-yellow-50 border-2 border-transparent hover:border-yellow-300 font-[family-name:var(--font-heading)]"
            >
              <span className="relative z-10">Získajte ponuku</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group px-8 py-4 bg-transparent text-white font-bold text-lg rounded-full border-2 border-white/80 hover:border-yellow-300 hover:bg-white/10 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm font-[family-name:var(--font-heading)]">
              <span className="group-hover:text-yellow-200 transition-colors duration-300">
                Pozrite referencie
              </span>
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="flex justify-center space-x-4 pt-8">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" className="w-full h-12 sm:h-16 lg:h-20 fill-white" preserveAspectRatio="none">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
} 