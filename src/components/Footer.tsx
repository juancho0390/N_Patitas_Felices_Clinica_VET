import React from 'react';
import { Stethoscope, Facebook, Instagram, Twitter, MapPin, Phone, Mail, Heart, ArrowRight, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-400 pt-32 pb-12 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-amber-500 to-teal-500" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-teal-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-4 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-teal-600 text-white p-3 rounded-2xl shadow-lg shadow-teal-900/20 group-hover:rotate-12 transition-transform duration-500">
                <Stethoscope className="h-8 w-8" />
              </div>
              <span className="text-3xl font-black tracking-tighter text-white">
                Patitas<span className="text-teal-500">Felices</span>
              </span>
            </Link>
            <p className="text-lg leading-relaxed font-medium">
              Medicina veterinaria de excelencia con un trato humano y compasivo. Cuidamos a tu familia como si fuera la nuestra desde hace más de 15 años.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="bg-stone-900 p-4 rounded-2xl text-stone-300 hover:bg-teal-600 hover:text-white hover:-translate-y-1 transition-all duration-300 border border-stone-800"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-xl mb-10 tracking-tight flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full" />
              Enlaces Rápidos
            </h4>
            <ul className="space-y-5">
              {[
                { name: 'Inicio', href: '/#inicio' },
                { name: 'Nuestros Servicios', href: '/#servicios' },
                { name: 'Tienda y Farmacia', href: '/farmacia' },
                { name: 'Sobre Nosotros', href: '/#quienes-somos' },
                { name: 'Sedes y Horarios', href: '/#sedes' },
                { name: 'Equipo Médico', href: '/#nosotros' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    onClick={(e) => {
                      if (link.href.startsWith('/#') && window.location.pathname === '/') {
                        e.preventDefault();
                        const id = link.href.replace('/#', '');
                        const element = document.getElementById(id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="flex items-center gap-2 hover:text-teal-400 transition-all duration-300 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="font-bold">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-black text-xl mb-10 tracking-tight flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              Contacto Directo
            </h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4 group">
                <div className="bg-stone-900 p-3 rounded-xl text-teal-500 border border-stone-800 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6 shrink-0" />
                </div>
                <span className="font-medium leading-tight">Cl 10 #43a-15, El Poblado<br/><span className="text-white font-black">Medellín, Colombia</span></span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-stone-900 p-3 rounded-xl text-teal-500 border border-stone-800 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6 shrink-0" />
                </div>
                <span className="font-black text-white text-lg">+57 604 564 82 74</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-stone-900 p-3 rounded-xl text-teal-500 border border-stone-800 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6 shrink-0" />
                </div>
                <span className="font-bold">contacto@patitasfelices.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-black text-xl mb-10 tracking-tight flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full" />
              Únete a la Familia
            </h4>
            <p className="mb-8 leading-relaxed font-medium">Suscríbete para recibir consejos de salud y noticias sobre nuestras campañas.</p>
            <form className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="w-full bg-stone-900 border border-stone-800 text-white px-6 py-5 rounded-2xl focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all font-bold placeholder:text-stone-600"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-teal-600 hover:bg-teal-500 text-white p-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-teal-900/40">
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-stone-600 font-bold uppercase tracking-widest text-center">Sin spam, solo amor perruno 🐾</p>
            </form>
          </div>

        </div>

        <div className="border-t border-stone-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-sm font-bold">
            <span>&copy; {new Date().getFullYear()} Patitas Felices. Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>para tu mejor amigo.</span>
          </div>
          <div className="flex space-x-10 text-sm font-black uppercase tracking-widest">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-teal-500 transition-colors">Privacidad</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-teal-500 transition-colors">Términos</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-teal-500 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
