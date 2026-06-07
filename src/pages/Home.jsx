import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ArrowRight, Play, ShieldCheck, GraduationCap, Clock, HeartHandshake } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  const navigate = useNavigate();
  const revealRef = useScrollReveal();
  const [typedText, setTypedText] = useState('');
  
  useEffect(() => {
    const text = "You can love her, you can hate her — but you can't ignore her.";
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={revealRef} className="page-section relative min-h-screen flex flex-col justify-center overflow-x-hidden bg-transparent pt-28 pb-16">
      <div className="container mx-auto px-6 relative z-10 text-center mb-16 mt-12">
        <div className="reveal inline-flex items-center justify-center p-1.5 mb-8 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-default select-none">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-[#8a0303] rounded-full mr-3 shadow-sm flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" /> Premium
          </span>
          <span className="text-xs text-gray-600 pr-3 font-medium tracking-wide">Domestic Care Solutions</span>
        </div>
        
        <h1 className="reveal text-5xl md:text-7xl lg:text-9xl font-black text-gray-900 tracking-tighter mb-6 drop-shadow-sm leading-tight select-none" style={{ transitionDelay: '200ms' }}>
          MAID IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a0303] to-red-600">INDIA</span>
        </h1>

        <p className="reveal text-xl md:text-3xl text-gray-600 font-medium mb-12 h-16 max-w-4xl mx-auto select-none" style={{ transitionDelay: '400ms' }}>
          <span>{typedText}</span><span className="cursor-blink">|</span>
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 select-none" style={{ transitionDelay: '600ms' }}>
          <button onClick={() => navigate('/booking')} className="group relative px-8 py-4 bg-[#8a0303] text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_8px_20px_rgba(138,3,3,0.3)] flex items-center gap-2 w-full sm:w-auto justify-center">
            <div className="absolute inset-0 bg-gray-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            <span className="relative z-10 flex items-center gap-2">
              Book a Service <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button onClick={() => navigate('/services')} className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-300 text-gray-800 font-bold text-lg rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm w-full sm:w-auto justify-center hover:shadow-md">
            <Play className="w-5 h-5 text-[#8a0303]" /> Explore Offerings
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mb-16">
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl p-8 shadow-xl" style={{ transitionDelay: '700ms' }}>
          <div className="text-center border-r border-gray-200 last:border-0 md:last:border-r-0 md:border-r">
            <h4 className="text-4xl font-black text-[#8a0303]">100%</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-2 font-bold">Verified Staff</p>
          </div>
          <div className="text-center border-r border-gray-200 last:border-0 md:last:border-r-0 md:border-r hidden md:block">
            <h4 className="text-4xl font-black text-gray-900">10+</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-2 font-bold">Services</p>
          </div>
          <div className="text-center border-r border-gray-200 last:border-0 md:last:border-r-0 md:border-r hidden md:block">
            <h4 className="text-4xl font-black text-gray-900">24/7</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-2 font-bold">Support</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center text-yellow-400 mb-1 gap-1">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current text-yellow-400/50" />
            </div>
            <h4 className="text-2xl font-black text-gray-900">4.9/5</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 font-bold">User Rating</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-auto select-none">
        <div className="reveal text-center mb-10" style={{ transitionDelay: '800ms' }}>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Why Choose Us</h3>
          <div className="w-16 h-1 bg-[#8a0303] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal" style={{ transitionDelay: '900ms' }}>
          {[
            { icon: <ShieldCheck />, title: 'Trust & Safety', desc: 'Document checks, complete identity verification and face-to-face screening.' },
            { icon: <GraduationCap />, title: 'Professional', desc: 'Regular training, upskilling, and strict quality standards for all helpers.', delay: 'delayed' },
            { icon: <Clock />, title: 'Reliability', desc: 'Immediate replacement policy and dedicated 24×7 client support.' },
            { icon: <HeartHandshake />, title: 'Ethical Work', desc: 'Ethical hiring practices providing fair, respectful terms for our staff.', delay: 'delayed' }
          ].map((feature, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl hover:border-[#8a0303] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(138,3,3,0.15)] transition-all duration-300 group shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -z-10 group-hover:bg-red-100 transition-colors"></div>
              <div className={`w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-[#8a0303] mb-6 group-hover:bg-[#8a0303] group-hover:text-white transition-colors duration-300 shadow-sm animate-float${feature.delay ? '-delayed' : ''}`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
