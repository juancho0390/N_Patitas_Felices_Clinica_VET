import { useState, useEffect } from 'react';
import { Menu, X, Stethoscope, UserCircle, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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

  const isHomePage = location.pathname === '/';
  const effectiveIsScrolled = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/#inicio' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Farmacia', href: '/#farmacia' },
    { name: 'Nosotros', href: '/#quienes-somos' },
    { name: 'Sedes', href: '/#sedes' },
    { name: 'Equipo Médico', href: '/#nosotros' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${effectiveIsScrolled ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-stone-200/50 py-3' : 'bg-gradient-to-b from-black/50 to-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className={`p-2 rounded-xl transition-colors duration-300 ${effectiveIsScrolled ? 'bg-teal-50 text-teal-600' : 'bg-white/20 text-white backdrop-blur-md'}`}>
            <Stethoscope className="h-7 w-7" />
          </div>
          <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${effectiveIsScrolled ? 'text-stone-800' : 'text-white drop-shadow-md'}`}>
            Patitas<span className={effectiveIsScrolled ? 'text-teal-600' : 'text-teal-300'}>Felices</span>
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`nav-link px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                effectiveIsScrolled 
                  ? 'text-stone-600 hover:bg-teal-50 hover:text-teal-700' 
                  : 'text-white/90 hover:bg-white/20 hover:text-white drop-shadow-sm'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center pl-4 ml-2 border-l border-stone-300/30 gap-3">
            <button 
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2 rounded-full transition-colors duration-300 ${
                effectiveIsScrolled ? 'text-stone-600 hover:bg-stone-100' : 'text-white hover:bg-white/20'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={onOpenPortal}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                effectiveIsScrolled 
                  ? 'text-stone-600 hover:bg-stone-100' 
                  : 'text-white/90 hover:bg-white/20 drop-shadow-sm'
              }`}
            >
              <UserCircle className="w-5 h-5" />
              <span>Portal Clientes</span>
            </button>
            <button 
              onClick={onOpenAppointment}
              className={`px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${
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
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsCartOpen(true)}
            className={`relative p-2 rounded-full transition-colors duration-300 ${
              effectiveIsScrolled ? 'text-stone-600' : 'text-white'
            }`}
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className={`p-2 rounded-lg transition-colors ${effectiveIsScrolled ? 'text-stone-800 hover:bg-stone-100' : 'text-white hover:bg-white/20'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-stone-100 py-4 px-6 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link block text-stone-700 font-semibold hover:bg-teal-50 hover:text-teal-700 px-4 py-3 rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-stone-100 space-y-3">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full flex items-center justify-center gap-2 text-stone-700 font-semibold hover:bg-stone-50 px-6 py-3 rounded-xl transition-colors border border-stone-200"
            >
              <UserCircle className="w-5 h-5" />
              <span>Portal Clientes</span>
            </button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="block w-full text-center bg-amber-500 text-white font-bold hover:bg-amber-600 px-6 py-3 rounded-xl transition-colors shadow-md"
            >
              Agendar Cita
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
