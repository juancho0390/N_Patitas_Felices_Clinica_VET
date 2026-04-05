import React, { useState, useEffect } from 'react';
import { Menu, X, Stethoscope, UserCircle, ShoppingBag, Heart } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onOpenAppointment: () => void;
  onOpenPortal: () => void;
}

export default function Header({ onOpenAppointment, onOpenPortal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';
  const effectiveIsScrolled = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll for anchors, even from other pages
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (isHomePage) {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
      } else {
        // Let the Link or standard navigation handle it, then the useEffect above will scroll
        setMobileMenuOpen(false);
      }
    }
  };

  const navLinks = [
    { name: 'Inicio', href: '/#inicio' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Farmacia', href: '/farmacia' },
    { name: 'Nosotros', href: '/#quienes-somos' },
    { name: 'Sedes', href: '/#sedes' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${effectiveIsScrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-stone-200/50 py-3' : 'bg-gradient-to-b from-black/60 to-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 group cursor-pointer" 
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <div className={`p-2.5 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${effectiveIsScrolled ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/20' : 'bg-white/20 text-white backdrop-blur-md border border-white/30'}`}>
            <Heart className="h-6 w-6 fill-current" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className={`text-2xl font-black tracking-tight transition-colors duration-300 ${effectiveIsScrolled ? 'text-stone-800' : 'text-white drop-shadow-md'}`}>
              Patitas<span className={effectiveIsScrolled ? 'text-teal-600' : 'text-teal-300'}>Felices</span>
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${effectiveIsScrolled ? 'text-stone-400' : 'text-white/70'}`}>
              Clínica Veterinaria
            </span>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 relative group ${
                effectiveIsScrolled 
                  ? 'text-stone-600 hover:text-teal-600' 
                  : 'text-white/90 hover:text-white drop-shadow-sm'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${effectiveIsScrolled ? 'bg-teal-500' : 'bg-white'}`}></span>
            </Link>
          ))}
          
          <div className="flex items-center pl-6 ml-4 border-l border-stone-300/30 gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2.5 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${
                effectiveIsScrolled ? 'text-stone-600 hover:bg-stone-100' : 'text-white hover:bg-white/20'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm transform translate-x-1 -translate-y-1">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={onOpenPortal}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 ${
                effectiveIsScrolled 
                  ? 'bg-stone-100 text-stone-700 hover:bg-stone-200' 
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20'
              }`}
            >
              <UserCircle className="w-5 h-5" />
              <span>Portal</span>
            </button>
            <button 
              onClick={onOpenAppointment}
              className={`px-7 py-3 rounded-2xl font-black text-sm shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_25px_-5px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ${
                effectiveIsScrolled
                  ? 'bg-amber-500 text-white hover:bg-amber-600'
                  : 'bg-white text-teal-700 hover:bg-stone-50'
              }`}
            >
              Agendar Cita
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button 
            onClick={() => setIsCartOpen(true)}
            className={`relative p-2.5 rounded-full transition-colors duration-300 ${
              effectiveIsScrolled ? 'text-stone-600' : 'text-white'
            }`}
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm transform translate-x-1 -translate-y-1">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className={`p-2.5 rounded-2xl transition-all active:scale-90 ${effectiveIsScrolled ? 'text-stone-800 bg-stone-100' : 'text-white bg-white/20 backdrop-blur-md'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl border-t border-stone-100 py-6 px-6 flex flex-col space-y-2 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-stone-700 font-bold hover:bg-teal-50 hover:text-teal-700 px-5 py-4 rounded-2xl transition-all"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 mt-4 border-t border-stone-100 space-y-4">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full flex items-center justify-center gap-3 text-stone-700 font-bold bg-stone-100 px-6 py-4 rounded-2xl transition-all active:scale-95"
            >
              <UserCircle className="w-6 h-6" />
              <span>Portal Clientes</span>
            </button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="block w-full text-center bg-amber-500 text-white font-black px-6 py-4 rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-95"
            >
              Agendar Cita
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
