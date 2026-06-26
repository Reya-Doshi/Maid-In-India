import logo from '../assets/logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md py-8 border-t border-gray-200 relative z-20 select-none shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-6 h-6 object-contain rounded-full bg-white" onError={(e) => { e.target.style.display = 'none'; }} />
          <span className="font-bold text-gray-900 tracking-widest">MAID IN INDIA</span>
        </div>
        <div className="text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Maid In India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
