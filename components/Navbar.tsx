import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-mec-dark/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-none group">
          <span className="text-3xl font-bold text-mec-red tracking-tighter">MEC</span>
          <span className="text-[0.6rem] text-mec-red font-bold tracking-widest hidden md:block opacity-90 group-hover:opacity-100 transition-opacity">
            マインドエンジニアリング・コーチング
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="text-sm text-slate-300 hover:text-mec-red transition-colors font-medium tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://mec-manage.vercel.app/apply"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-mec-red text-mec-red hover:bg-mec-red hover:text-white transition-all duration-300 text-sm font-bold rounded-sm"
          >
            TRIAL
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-mec-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <nav className="flex flex-col items-center space-y-8">
             {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="text-xl text-white hover:text-mec-red font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="https://mec-manage.vercel.app/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-mec-red text-white font-bold rounded-sm mt-4"
                onClick={() => setIsOpen(false)}
              >
                TRIALに申し込む
              </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;