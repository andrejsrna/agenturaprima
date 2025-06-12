'use client';

import { useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
  {
    quote: "Spolupráca s Agentúrou Prima bola pre nás kľúčová. Ich kreatívny prístup a profesionálny tím nám pomohli zorganizovať najlepšiu firemnú akciu v histórii našej firmy. Všetko prebehlo hladko a naši zamestnanci boli nadšení.",
    name: "Jana Nováková",
    title: "HR Manažérka, TechCorp",
    imgSrc: "/images/testimonials/avatar1.jpg",
  },
  {
    quote: "Vďaka Agentúre Prima sa náš detský festival stal nezabudnuteľným zážitkom. Program bol skvele pripravený, plný zábavy a interaktívnych prvkov. Deti aj rodičia odchádzali s úsmevom na tvári. Určite odporúčame!",
    name: "Martin Veselý",
    title: "Organizátor, Mesto Hrádok",
    imgSrc: "/images/testimonials/avatar2.jpg",
  },
  {
    quote: "Potrebovali sme zabezpečiť komplexné technické riešenie pre našu konferenciu a Agentúra Prima to zvládla na jednotku. Zvuk, osvetlenie, projekcie - všetko fungovalo bezchybne. Ich tím je skutočne spoľahlivý.",
    name: "Peter Kováč",
    title: "CEO, InnovateX",
    imgSrc: "/images/testimonials/avatar3.jpg",
  },
];

const clientLogos = [
  { src: "/images/clients/logo1.svg", alt: "Client Logo 1" },
  { src: "/images/clients/logo2.svg", alt: "Client Logo 2" },
  { src: "/images/clients/logo3.svg", alt: "Client Logo 3" },
  { src: "/images/clients/logo4.svg", alt: "Client Logo 4" },
  { src: "/images/clients/logo5.svg", alt: "Client Logo 5" },
  { src: "/images/clients/logo6.svg", alt: "Client Logo 6" },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="referencie" className="py-24 bg-gradient-to-br from-white via-cyan-50/20 to-blue-100/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-grid-cyan-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading">
            Čo o nás hovoria{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
              klienti
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans leading-relaxed">
            Vaša spokojnosť je našou najlepšou vizitkou.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 mx-auto rounded-full mt-8 shadow-lg"></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-lg p-8 lg:p-12 border border-white/50 text-center">
                    <p className="text-lg lg:text-xl text-gray-700 font-medium italic mb-8 leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="inline-flex items-center gap-4">
                      <Image
                        src={testimonial.imgSrc}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="rounded-full shadow-md"
                      />
                      <div>
                        <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                        <p className="text-blue-600 font-semibold">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-4 flex justify-center items-center">
             <button onClick={scrollPrev} className="w-12 h-12 bg-white/70 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 transition-all duration-300 transform hover:scale-110 mx-2">
               <FaChevronLeft className="text-blue-600 text-xl" />
              </button>
             <button onClick={scrollNext} className="w-12 h-12 bg-white/70 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 transition-all duration-300 transform hover:scale-110 mx-2">
               <FaChevronRight className="text-blue-600 text-xl" />
              </button>
           </div>
        </div>

        <div className="mt-24">
          <h3 className="text-center text-lg text-gray-600 font-semibold mb-8">
            Dôverujú nám veľké značky aj lokálni partneri
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {clientLogos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <Link href="/referencie" className="group inline-flex items-center gap-3 text-lg font-semibold text-blue-600 hover:text-purple-600 transition-colors duration-300">
            <span>Pozrieť všetky referencie</span>
            <FaChevronRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
} 