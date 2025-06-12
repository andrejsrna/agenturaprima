import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 2px, transparent 0)`,
          backgroundSize: '60px 60px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <h3 className="text-2xl font-bold font-heading bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent">
                Agentúra Prima
              </h3>
            </Link>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              Komplexné eventové služby na mieru – od kultúrnych podujatí cez firemné eventy až po zážitky pre deti.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded-full flex items-center justify-center">
                <FiFacebook className="text-lg text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded-full flex items-center justify-center">
                <FiInstagram className="text-lg text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded-full flex items-center justify-center">
                <FiYoutube className="text-lg text-white" />
              </a>
            </div>
          </div>

          {/* Internal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wider">
              Rýchle odkazy
            </h4>
            <ul className="space-y-4">
              <li><Link href="/o-nas" className="text-white/60 hover:text-white transition-colors duration-300">O nás</Link></li>
              <li><Link href="/sluzby" className="text-white/60 hover:text-white transition-colors duration-300">Služby</Link></li>
              <li><Link href="/referencie" className="text-white/60 hover:text-white transition-colors duration-300">Referencie</Link></li>
              <li><Link href="/kontakt" className="text-white/60 hover:text-white transition-colors duration-300">Kontakt</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wider">
              Právne informácie
            </h4>
            <ul className="space-y-4">
              <li><Link href="/gdpr" className="text-white/60 hover:text-white transition-colors duration-300">Ochrana osobných údajov (GDPR)</Link></li>
              <li><Link href="/obchodne-podmienky" className="text-white/60 hover:text-white transition-colors duration-300">Obchodné podmienky</Link></li>
              <li><Link href="/cookies" className="text-white/60 hover:text-white transition-colors duration-300">Používanie cookies</Link></li>
            </ul>
          </div>
          
          {/* Billing Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wider">
              Fakturačné údaje
            </h4>
            <div className="text-white/60 space-y-2">
              <p>Agentúra PRIMA s.r.o.</p>
              <p>Stromová 13587/9/A</p>
              <p>831 01 Bratislava</p>
              <p>IČO: 44355548</p>
              <p>DIČ: 2022682948</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} Agentúra Prima. Všetky práva vyhradené.</p>
          <p className="mt-2 text-sm">
            Dizajn a vývoj s ❤️ od <a href="https://andrejsrna.sk" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Andrej Srna</a>
          </p>
        </div>
      </div>
    </footer>
  );
} 