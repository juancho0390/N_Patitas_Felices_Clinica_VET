import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { heroData } from '../data';
import { ChevronRight, ShieldCheck, Clock, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onOpenAppointment: () => void;
}

export default function Hero({ onOpenAppointment }: HeroProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroData.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col bg-stone-900 overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroData[current].image})` }}
        />
      </AnimatePresence>
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/40 to-stone-900/20" />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="flex-grow flex items-center relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl mb-8 shadow-2xl"
            >
              <div className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
              </div>
              <span className="text-white font-black text-[10px] tracking-[0.3em] uppercase">Excelencia Veterinaria 24/7</span>
            </motion.div>

            {/* Main Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] text-white drop-shadow-2xl tracking-tight">
                  {heroData[current].title.split(',').map((part, i, arr) => (
                    <span key={i} className="block">
                      {part.trim()}{i < arr.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </h1>
                <p className="text-xl md:text-2xl mb-12 text-stone-100 leading-relaxed font-medium max-w-2xl drop-shadow-lg opacity-95">
                  {heroData[current].description}
                </p>
                <div className="flex flex-wrap gap-6">
                  <button 
                    onClick={onOpenAppointment}
                    className="group bg-amber-500 text-white hover:bg-amber-600 px-12 py-6 rounded-[2rem] font-black text-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center gap-3"
                  >
                    Agendar Cita
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                  <a 
                    href="#contacto" 
                    className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-xl border border-white/30 px-12 py-6 rounded-[2rem] font-black text-lg transition-all duration-300 hover:-translate-y-1 active:translate-y-0 flex items-center gap-3"
                  >
                    <Heart className="w-6 h-6 text-teal-400 fill-current" />
                    Urgencias
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar - Integrated into flow with padding to avoid overlap */}
      <div className="relative z-10 bg-gradient-to-t from-stone-950/90 to-transparent pt-20 pb-16 hidden lg:block">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-12 border-t border-white/10 pt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 text-white group cursor-default"
            >
              <div className="bg-white/10 p-5 rounded-3xl backdrop-blur-md border border-white/20 group-hover:bg-teal-500/20 group-hover:border-teal-500/30 transition-all duration-500 shadow-xl">
                <Award className="w-8 h-8 text-teal-400" />
              </div>
              <div>
                <p className="font-black text-3xl tracking-tight">+15 Años</p>
                <p className="text-stone-400 text-xs font-black uppercase tracking-[0.2em]">Experiencia Médica</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 text-white group cursor-default"
            >
              <div className="bg-white/10 p-5 rounded-3xl backdrop-blur-md border border-white/20 group-hover:bg-teal-500/20 group-hover:border-teal-500/30 transition-all duration-500 shadow-xl">
                <ShieldCheck className="w-8 h-8 text-teal-400" />
              </div>
              <div>
                <p className="font-black text-3xl tracking-tight">+10,000</p>
                <p className="text-stone-400 text-xs font-black uppercase tracking-[0.2em]">Pacientes Felices</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6 text-white group cursor-default"
            >
              <div className="bg-white/10 p-5 rounded-3xl backdrop-blur-md border border-white/20 group-hover:bg-teal-500/20 group-hover:border-teal-500/30 transition-all duration-500 shadow-xl">
                <Clock className="w-8 h-8 text-teal-400" />
              </div>
              <div>
                <p className="font-black text-3xl tracking-tight">24/7</p>
                <p className="text-stone-400 text-xs font-black uppercase tracking-[0.2em]">Atención de Urgencias</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
