'use client';

import { useModal } from '../context/ModalContext';
import { FiX, FiSend, FiPhone } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function InquiryModal() {
  const { isModalOpen, closeModal } = useModal();
  const [phone, setPhone] = useState('');
  const [isGdprChecked, setIsGdprChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [closeModal]);
  
  useEffect(() => {
    if (isModalOpen) {
      setIsSubmitted(false);
      setPhone('');
      setIsGdprChecked(false);
    }
  }, [isModalOpen]);

  if (!isModalOpen) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isGdprChecked) {
      alert('Musíte súhlasiť so spracovaním osobných údajov.');
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log({ phone });
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  
  return (
    <div 
      className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-[100] transition-opacity duration-300"
      onClick={closeModal}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md m-4 p-8 sm:p-12 relative transform transition-all duration-300 scale-95"
        onClick={e => e.stopPropagation()}
        style={isModalOpen ? {transform: 'scale(1)', opacity: 1} : {transform: 'scale(0.95)', opacity: 0}}
      >
        <button 
          onClick={closeModal}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors"
        >
          <FiX size={30} />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-heading">Ďakujeme!</h2>
            <p className="text-lg text-gray-600 mb-8">Spojíme sa s vami v čo najkratšom čase.</p>
            <button
              onClick={closeModal}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-lg transition-all text-lg duration-300"
            >
              Zavrieť
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 font-heading">Zanechajte nám číslo</h2>
            <p className="text-lg text-gray-500 mb-10">a my sa vám ozveme!</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <FiPhone className="absolute top-1/2 -translate-y-1/2 left-5 text-gray-400" size={20}/>
                <input 
                  type="tel" 
                  placeholder="Vaše telefónne číslo"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full text-lg pl-14 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300" 
                />
              </div>
              
              <div className="flex items-start text-left pt-2">
                <input 
                  id="gdpr-modal" 
                  type="checkbox"
                  checked={isGdprChecked}
                  onChange={(e) => setIsGdprChecked(e.target.checked)}
                  className="h-5 w-5 text-orange-600 focus:ring-orange-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="gdpr-modal" className="ml-3 text-base text-gray-600">
                  Súhlasím so <a href="/gdpr" target="_blank" className="text-orange-600 hover:underline">spracovaním osobných údajov</a>.
                </label>
              </div>
              
              <button 
                type="submit"
                disabled={!isGdprChecked || isSubmitting}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-lg px-6 py-5 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Odosielam...' : 'Zavolajte mi'}
                {!isSubmitting && <FiSend size={20} />}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
} 