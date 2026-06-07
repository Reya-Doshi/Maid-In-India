import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setIsOpen(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Verification', path: '/safety' },
    { name: 'Our Story', path: '/story' },
    { name: 'Book Now', path: '/booking' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md py-4 border-b border-gray-200 transition-all duration-500 shadow-sm select-none">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('/')}>
          <img src="/logo.jpg" alt="Logo" className="w-10 h-10 object-contain rounded-full bg-white group-hover:shadow-[0_0_8px_rgba(138,3,3,0.4)] transition-all" onError={(e) => { e.target.style.display = 'none'; }} />
          <span className="text-gray-900 font-bold text-xl tracking-wider">MAID IN INDIA</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `nav-link transition-all relative ${
                  isActive ? 'text-[#8a0303] font-bold' : 'text-gray-500 hover:text-[#8a0303]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span className={`nav-indicator absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#8a0303] rounded-full ${isActive ? '' : 'hidden'}`}></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <button onClick={() => handleNavClick('/contact')} className="px-6 py-2.5 bg-gray-900 hover:bg-[#8a0303] text-white rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 transform">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-900 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 py-4 flex flex-col gap-4 px-6 shadow-2xl ${isOpen ? 'block' : 'hidden'}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => handleNavClick(link.path)}
            className={({ isActive }) =>
              `text-left text-lg py-2 ${isActive ? 'text-[#8a0303] font-bold' : 'text-gray-600'}`
            }
          >
            {link.name}
          </NavLink>
        ))}
        <button onClick={() => handleNavClick('/contact')} className="mt-2 w-full py-3 bg-[#8a0303] text-white rounded-full font-bold">
          Contact Us
        </button>
      </div>
    </nav>
  );
}
