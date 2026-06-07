import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Booking() {
  const revealRef = useScrollReveal();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    setError('');
    setSuccess(false);

    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }
    setSuccess(true);
    e.target.reset();
  };

  return (
    <section ref={revealRef} className="page-section min-h-screen pt-32 pb-20 bg-transparent flex flex-col justify-center relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="reveal max-w-4xl mx-auto bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl p-8 md:p-14 shadow-2xl hover:border-[#8a0303]/30 transition-all duration-500">
          <div className="mb-12 text-center select-none">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">Book a Service</h2>
            <p className="text-gray-600 text-lg">Tailor your requirements and let us find the perfect match for your home.</p>
          </div>

          <form className="space-y-8" onSubmit={handleBookingSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest select-none">Service Type</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-[#8a0303] focus:ring-1 focus:ring-[#8a0303] transition-colors shadow-sm cursor-pointer">
                  <option>Cooking</option><option>Cleaning</option><option>Babysitter / Nanny</option><option>Elderly Day Care</option><option>Full-Time Maid</option><option>Part-Time Maid</option><option>Other Services...</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest select-none">Frequency</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-[#8a0303] focus:ring-1 focus:ring-[#8a0303] transition-colors shadow-sm cursor-pointer">
                  <option>Daily</option><option>Weekly</option><option>Monthly (Live-In)</option><option>Hourly Visit</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest select-none">Date</label>
                <input type="date" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-[#8a0303] focus:ring-1 focus:ring-[#8a0303] transition-colors shadow-sm" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest select-none">Time</label>
                <input type="time" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-[#8a0303] focus:ring-1 focus:ring-[#8a0303] transition-colors shadow-sm" />
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest select-none">Your Details</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input type="text" placeholder="Full Name" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-[#8a0303] focus:ring-1 focus:ring-[#8a0303] transition-colors shadow-sm" />
                <input type="tel" name="phone" placeholder="10-Digit Mobile No." required maxLength="10" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-[#8a0303] focus:ring-1 focus:ring-[#8a0303] transition-colors shadow-sm" />
                <input type="email" placeholder="Email Address" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-[#8a0303] focus:ring-1 focus:ring-[#8a0303] transition-colors shadow-sm" />
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm flex items-center gap-2 shadow-sm animate-fade-in">
                <X className="w-5 h-5 text-red-500" /> <span>{error}</span>
              </div>
            )}
            {success && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm flex items-center gap-2 shadow-sm animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Booking Request Successful! Our team will contact you shortly.
              </div>
            )}

            <button type="submit" className="w-full bg-[#8a0303] hover:bg-black text-white font-bold text-xl py-5 rounded-xl transition-all duration-300 mt-8 shadow-[0_8px_20px_rgba(138,3,3,0.3)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] select-none">
              Confirm Booking Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
