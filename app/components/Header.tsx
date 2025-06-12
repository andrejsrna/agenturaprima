'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { useModal } from '../context/ModalContext';

const navLinks = [
  { name: 'Služby', href: '#sluzby' },
  { name: 'Projekty', href: '#projekty' },
  { name: 'Referencie', href: '#referencie' },
  { name: 'Kontakt', href: '#kontakt' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image src="/images/logo-white.png" alt="Logo" width={200} height={200} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-white/80 hover:text-white transition-colors duration-300 font-semibold">
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button 
                onClick={openModal}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 font-heading"
              >
                Dopytovať ponuku
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-slate-900/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full pt-20">
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-3xl font-bold text-white/80 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-16">
            <button
              onClick={() => {
                openModal();
                setIsOpen(false);
              }}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 font-heading"
            >
              Dopytovať ponuku
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 