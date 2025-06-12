import Image from 'next/image';
import { FiMail, FiPhone } from 'react-icons/fi';

export default function CTA() {
  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 md:p-16 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Máte projekt?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans leading-relaxed mb-12">
              Sme tu pre vás, pripravení premeniť vaše nápady na skutočnosť. Neváhajte nás kontaktovať.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Contact Card 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left flex items-center gap-6 border border-white/10">
                <Image
                  src="/images/avatars/avatar-female.png"
                  alt="Katarína - Projektová manažérka"
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-orange-400"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white font-heading">Katarína</h3>
                  <p className="text-orange-400 font-semibold mb-3">Projektová manažérka</p>
                  <div className="space-y-2">
                    <a href="mailto:katarina@agenturaprima.sk" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                      <FiMail />
                      <span>katarina@agenturaprima.sk</span>
                    </a>
                    <a href="tel:+421900123456" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                      <FiPhone />
                      <span>+421 900 123 456</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Card 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left flex items-center gap-6 border border-white/10">
                <Image
                  src="/images/avatars/avatar-male.png"
                  alt="Peter - Technický riaditeľ"
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-cyan-400"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white font-heading">Peter</h3>
                  <p className="text-cyan-400 font-semibold mb-3">Technický riaditeľ</p>
                  <div className="space-y-2">
                    <a href="mailto:peter@agenturaprima.sk" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                      <FiMail />
                      <span>peter@agenturaprima.sk</span>
                    </a>
                    <a href="tel:+421900654321" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                      <FiPhone />
                      <span>+421 900 654 321</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 