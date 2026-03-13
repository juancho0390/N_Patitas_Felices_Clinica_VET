import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { heroData } from '../data';
import { ChevronRight, ShieldCheck, Clock, Award } from 'lucide-react';

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
    <section id="inicio" className="relative min-h-screen flex items-center bg-stone-900 overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroData[current].image})` }}
        />
      </AnimatePresence>
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 backdrop-blur-md mb-8"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
            </span>
            <span className="text-teal-100 font-semibold text-sm tracking-wide uppercase">Clínica Veterinaria Especializada</span>
          </motion.div>

          {/* Main Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] text-white drop-shadow-lg">
                {heroData[current].title}
              </h1>
              <p className="text-lg md:text-xl mb-10 text-stone-200 leading-relaxed font-medium max-w-xl drop-shadow-md">
                {heroData[current].description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={onOpenAppointment}
                  className="group bg-amber-500 text-white hover:bg-amber-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-amber-500/25 transition-all duration-300 flex items-center gap-2"
                >
                  Agendar Cita
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="/#contacto" 
                  className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
                >
                  Llamar Urgencias
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/90 to-transparent pt-20 pb-8 hidden md:block">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div className="flex items-center gap-4 text-white">
              <div className="bg-teal-500/20 p-3 rounded-xl backdrop-blur-sm">
                <Award className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <p className="font-bold text-xl">+15 Años</p>
                <p className="text-stone-300 text-sm">De experiencia médica</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="bg-teal-500/20 p-3 rounded-xl backdrop-blur-sm">
                <ShieldCheck className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <p className="font-bold text-xl">+10,000</p>
                <p className="text-stone-300 text-sm">Pacientes recuperados</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="bg-teal-500/20 p-3 rounded-xl backdrop-blur-sm">
                <Clock className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <p className="font-bold text-xl">24/7</p>
                <p className="text-stone-300 text-sm">Atención de urgencias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
