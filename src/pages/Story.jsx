import React from 'react';
import { Map, User, Shield, Award, Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Story() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="page-section min-h-screen pt-32 pb-20 bg-transparent relative select-none">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="reveal text-center mb-16">
          <span className="text-[#8a0303] font-bold tracking-widest uppercase text-sm mb-2 block">Who We Are</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">Our Story</h2>
          <div className="w-24 h-1 bg-[#8a0303] mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-8">
            <div className="reveal bg-white border border-gray-200 p-10 rounded-3xl relative overflow-hidden group shadow-lg hover:border-[#8a0303]/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(138,3,3,0.1)] hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8a0303] filter blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
              <h3 className="text-3xl font-black mb-6 text-gray-900 relative z-10">Why it matters</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-4 relative z-10 italic">"We saw a gap: skilled helpers treated as invisible labour. We believed dignity and professionalism could coexist with everyday domestic work."</p>
              <p className="text-gray-600 leading-relaxed text-lg relative z-10">Today we build bridges - between families who need trusted help and helpers who deserve fair, respectful work.</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="reveal bg-gray-50 border border-gray-200 p-8 rounded-2xl hover:border-[#8a0303]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 h-full group" style={{ transitionDelay: '100ms' }}>
                <h4 className="text-gray-900 font-bold text-xl mb-3 flex items-center gap-3"><span className="w-2 h-6 bg-[#8a0303] rounded-full inline-block group-hover:h-8 transition-all"></span> Mission</h4>
                <p className="text-gray-600 leading-relaxed">To elevate household help through thorough verification, meaningful training, and an ethic of respect - so every placement honors human dignity.</p>
              </div>
              <div className="reveal bg-gray-50 border border-gray-200 p-8 rounded-2xl hover:border-[#8a0303]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 h-full group" style={{ transitionDelay: '200ms' }}>
                <h4 className="text-gray-900 font-bold text-xl mb-3 flex items-center gap-3"><span className="w-2 h-6 bg-gray-400 rounded-full inline-block group-hover:bg-[#8a0303] transition-colors"></span> Vision</h4>
                <p className="text-gray-600 leading-relaxed">A world where domestic work is safe, respected, and valued - where helpers have opportunity, and families have peace of mind.</p>
              </div>
            </div>
          </div>

          <div className="reveal bg-white border border-gray-200 p-10 rounded-3xl shadow-lg relative h-full">
            <h3 className="text-2xl font-black text-gray-900 mb-10 flex items-center gap-2">
              <Map className="text-[#8a0303]" /> The Journey
            </h3>
            
            <div className="relative timeline-line pl-10 space-y-12 pb-4">
              <div className="relative group cursor-default">
                <div className="absolute -left-[45px] top-1 w-6 h-6 bg-white border-4 border-gray-300 group-hover:border-[#8a0303] rounded-full z-10 transition-colors duration-300"></div>
                <h4 className="text-2xl font-black text-gray-900 group-hover:text-[#8a0303] transition-colors">2018: The Seed</h4>
                <p className="text-gray-600 mt-2 leading-relaxed">Began as a simple Entrepreneurship Management assignment by two sisters, Kushboo Doshi and Reya Doshi. An idea on a single piece of paper.</p>
              </div>
              <div className="relative group cursor-default">
                <div className="absolute -left-[45px] top-1 w-6 h-6 bg-white border-4 border-gray-400 group-hover:border-[#8a0303] rounded-full z-10 transition-colors duration-300"></div>
                <h4 className="text-2xl font-black text-gray-900 group-hover:text-[#8a0303] transition-colors">2025: The Blueprint</h4>
                <p className="text-gray-600 mt-2 leading-relaxed">Detailed planning phase. Formulation of our rigorous safety protocols, ethical employment models, and establishing our core values.</p>
              </div>
              <div className="relative group cursor-default">
                <div className="absolute -left-[45px] top-1 w-6 h-6 bg-[#8a0303] rounded-full shadow-[0_0_10px_rgba(138,3,3,0.8)] z-10 animate-pulse"></div>
                <h4 className="text-2xl font-black text-[#8a0303]">2026: The Launch</h4>
                <p className="text-gray-600 mt-2 leading-relaxed">Official launch and first successful prototype deployment. Turning purpose into a living service.</p>
                <div className="mt-4 inline-flex items-center gap-2 bg-red-50 text-[#8a0303] px-3 py-1 rounded-full text-xs font-bold border border-red-100">
                  <div className="w-2 h-2 bg-[#8a0303] rounded-full animate-ping"></div> Present Day
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal border-t border-gray-200 pt-16">
          <h3 className="text-3xl font-black mb-10 text-center text-gray-900">Our Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <User />, title: 'Dignity', desc: 'Every person matters.' },
              { icon: <Shield />, title: 'Safety', desc: 'Humane policies first.' },
              { icon: <Award />, title: 'Professionalism', desc: 'Clear expectations.' },
              { icon: <Heart />, title: 'Empathy', desc: 'Human-centred care.' },
            ].map((v, i) => (
              <div key={i} className="p-8 border-t-4 border-transparent hover:border-[#8a0303] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 bg-white shadow-md rounded-xl text-center group">
                <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors">
                  {React.cloneElement(v.icon, { className: 'text-gray-400 group-hover:text-[#8a0303]' })}
                </div>
                <h5 className="text-gray-900 font-bold text-xl mb-2">{v.title}</h5>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
