import { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Services() {
  const revealRef = useScrollReveal();
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section ref={revealRef} className="page-section min-h-screen pt-32 pb-20 bg-transparent flex flex-col justify-center relative overflow-hidden select-none">
      <div className="container mx-auto px-6 mb-12 relative z-10">
        <div className="reveal text-center">
          <span className="text-[#8a0303] font-bold tracking-widest uppercase text-sm mb-2 block">What We Do</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">Services <span className="text-[#8a0303]">We Offer</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Click on any scene below to uncover how we tailor domestic solutions to the unique rhythms of your home.</p>
        </div>
      </div>

      <div className="relative w-full py-10 overflow-hidden bg-white/50 backdrop-blur-sm border-y border-gray-200 z-10 shadow-sm">
        <div className="absolute top-1 left-0 w-full h-2 border-dashed border-b-4 border-gray-300 z-20 opacity-50"></div>
        <div className="absolute bottom-1 left-0 w-full h-2 border-dashed border-t-4 border-gray-300 z-20 opacity-50"></div>
        
        <div className="animate-marquee hover-animation-paused py-6 flex gap-8">
          {[...servicesData, ...servicesData].map((s, i) => (
            <div key={i} className="w-80 flex-shrink-0 mx-4 cursor-pointer" onClick={() => setSelectedService(s)}>
              <div className="h-96 rounded-2xl overflow-hidden relative group border shadow-md bg-gray-200">
                <img src={`/${s.img}`} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 p-8 text-white w-full transition-transform duration-300 group-hover:translate-y-[-5px]">
                  <h3 className="text-2xl font-black drop-shadow-md">{s.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 text-gray-500 hover:text-black">
              &times;
            </button>
            <h3 className="text-3xl font-black text-gray-900 mb-4">{selectedService.title}</h3>
            <p className="text-gray-600">{selectedService.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
