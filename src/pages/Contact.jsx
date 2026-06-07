import { useState } from 'react';
import { PhoneCall, Mail, X, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const revealRef = useScrollReveal();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    setError('');
    setSuccess(false);

    if (!/^\d{10}$/.test(phone)) {
      setError("Phone must be exactly 10 digits.");
      return;
    }
    if (!email.includes('@')) {
      setError("Invalid email address.");
      return;
    }
    
    setSuccess(true);
    e.target.reset();
  };

  return (
    <section ref={revealRef} className="page-section min-h-screen pt-32 pb-20 bg-transparent flex flex-col justify-center relative select-none">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">Get in Touch</h2>
          <p className="text-xl text-gray-600">We're here to help build bridges for your household.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="reveal bg-white/90 backdrop-blur-sm border border-gray-200 p-10 rounded-3xl hover:border-[#8a0303]/50 hover:shadow-[0_20px_40px_rgba(138,3,3,0.1)] hover:-translate-y-2 transition-all duration-300 shadow-lg cursor-default">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center border border-red-100 group-hover:bg-[#8a0303] transition-colors">
                  <PhoneCall className="w-5 h-5 text-[#8a0303] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="text-gray-900 font-bold text-lg group-hover:text-[#8a0303] transition-colors">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center border border-red-100 group-hover:bg-[#8a0303] transition-colors">
                  <Mail className="w-5 h-5 text-[#8a0303] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-900 font-bold text-lg group-hover:text-[#8a0303] transition-colors">contact@maidinindia.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-2">Founders</p>
              <p className="text-gray-900 font-medium">Kushboo Doshi & Reya Doshi</p>
            </div>
          </div>
          
          <div className="reveal bg-white/90 backdrop-blur-sm border border-gray-200 p-10 rounded-3xl hover:border-[#8a0303]/50 hover:shadow-[0_20px_40px_rgba(138,3,3,0.1)] hover:-translate-y-2 transition-all duration-300 shadow-lg" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Request a Callback</h3>
            <form className="space-y-4" onSubmit={handleContactSubmit}>
              <input type="text" placeholder="Your Name" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-[#8a0303] shadow-sm" />
              <input type="tel" name="phone" placeholder="10-Digit Mobile Number" required maxLength="10" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-[#8a0303] shadow-sm" />
              <input type="email" name="email" placeholder="Your Email Address" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-[#8a0303] shadow-sm" />
              <textarea placeholder="How can we help?" rows="3" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-[#8a0303] resize-none shadow-sm"></textarea>
              
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm flex items-center gap-2 shadow-sm animate-fade-in">
                  <X className="w-4 h-4 text-red-500" /> <span>{error}</span>
                </div>
              )}
              {success && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm flex items-center gap-2 shadow-sm animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Request Sent!
                </div>
              )}

              <button type="submit" className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-[#8a0303] transition-colors shadow-md">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
