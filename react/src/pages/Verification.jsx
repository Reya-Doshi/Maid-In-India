import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Verification() {
  const navigate = useNavigate();
  const revealRef = useScrollReveal();

  const safetySteps = [
    { title: "Identity Verification", desc: "Aadhar, PAN, and address proof verified through official portals." },
    { title: "Criminal Background Check", desc: "Local police verification to ensure a clean record." },
    { title: "Medical Screening", desc: "Basic health checkups to prevent communicable diseases." },
    { title: "Skill Assessment", desc: "Practical tests to match reported skills with actual abilities." },
    { title: "Reference Checks", desc: "Contacting previous employers for behavior and reliability." },
    { title: "Continuous Monitoring", desc: "Ongoing feedback loop and periodic reassessments." }
  ];

  return (
    <section ref={revealRef} className="page-section min-h-screen pt-32 pb-20 bg-transparent relative overflow-hidden select-none">
      <div className="container mx-auto px-6 relative z-10">
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#8a0303] font-bold tracking-widest uppercase text-sm mb-2 block">Our Promise</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">Safety & Verification</h2>
          <div className="w-20 h-1 bg-[#8a0303] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 font-light leading-relaxed">Trust is earned. Our verification process treats helpers with dignity and gives families absolute peace of mind.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {safetySteps.map((step, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl hover:border-[#8a0303] shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-red-50 text-[#8a0303] rounded-full flex items-center justify-center font-black text-xl mb-4 border border-red-100">{i+1}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-20 max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-2xl hover:shadow-[0_20px_40px_rgba(138,3,3,0.3)] hover:-translate-y-1 transition-all duration-500 cursor-pointer" style={{ transitionDelay: '400ms' }}>
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <div className="p-3 bg-red-900/30 rounded-full animate-pulse">
              <ShieldCheck className="w-12 h-12 text-[#ff4b4b]" />
            </div>
            <div>
              <h3 className="text-white font-black text-2xl mb-1">100% Verified Staff</h3>
              <p className="text-gray-400">Every individual passes our rigorous 6-step background protocol.</p>
            </div>
          </div>
          <button onClick={() => navigate('/booking')} className="px-6 py-3 bg-[#8a0303] text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors shadow-md whitespace-nowrap">
            Book Safely Now
          </button>
        </div>
      </div>
    </section>
  );
}
