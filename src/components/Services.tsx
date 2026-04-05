import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '../data';
import { X, ArrowRight, HeartPulse } from 'lucide-react';

export default function Services() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-24 md:py-32 bg-stone-50 animated-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-black text-xs tracking-widest uppercase mb-6 shadow-sm">
            <HeartPulse className="w-4 h-4" />
            Especialidades Médicas
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-stone-800 mb-8 tracking-tight">Atención Veterinaria Integral</h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Instalaciones de primer nivel y un equipo multidisciplinario dedicado a cubrir todas las necesidades de salud de tu mascota en un solo lugar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelected(idx)}
                className="group bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-stone-100 transition-all duration-500 hover:-translate-y-3 cursor-pointer flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150 group-hover:bg-teal-500/10 opacity-50" />
                
                <div className="bg-teal-50 text-teal-600 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-teal-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:rotate-6 group-hover:scale-110 relative z-10">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-stone-800 group-hover:text-teal-600 transition-colors relative z-10 leading-tight">{service.title}</h3>
                <p className="text-stone-500 mb-8 flex-grow leading-relaxed relative z-10 font-medium">{service.description}</p>
                
                <div className="flex items-center text-teal-600 font-black text-sm mt-auto group-hover:text-amber-500 transition-all relative z-10">
                  <span className="tracking-tight">Conocer más</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Premium Modal */}
      <AnimatePresence>
        {selected !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-stone-950/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl bg-white rounded-[3rem] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 backdrop-blur-md text-stone-800 shadow-xl hover:bg-amber-500 hover:text-white transition-all duration-300 hover:rotate-90 active:scale-90"
              >
                <X className="w-8 h-8" />
              </button>
              
              <div className="h-72 md:h-auto md:w-5/12 relative overflow-hidden group">
                <img 
                  src={servicesData[selected].image} 
                  alt={servicesData[selected].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent md:bg-gradient-to-r" />
                <div className="absolute bottom-8 left-8 text-white md:hidden">
                  <h3 className="text-3xl font-black leading-tight">{servicesData[selected].title}</h3>
                </div>
              </div>
              
              <div className="flex flex-col p-10 md:p-16 md:w-7/12 overflow-y-auto bg-white custom-scrollbar">
                <div className="hidden md:flex items-center gap-6 mb-10">
                  <div className="bg-teal-50 text-teal-600 p-5 rounded-3xl shadow-sm">
                    {(() => {
                      const SelectedIcon = servicesData[selected].icon;
                      return <SelectedIcon className="w-10 h-10" />;
                    })()}
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-black text-stone-800 tracking-tight leading-tight">{servicesData[selected].title}</h3>
                </div>
                
                <div 
                  className="prose prose-lg prose-stone max-w-none text-stone-600 prose-headings:text-stone-800 prose-headings:font-black prose-strong:text-teal-700 font-medium leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: servicesData[selected].detailedDescription }}
                />
                
                <div className="mt-12 pt-10 border-t border-stone-100 flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#contacto" 
                    onClick={() => setSelected(null)} 
                    className="inline-flex items-center justify-center bg-teal-600 text-white hover:bg-teal-700 px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-teal-600/20 hover:shadow-teal-600/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 w-full sm:w-auto"
                  >
                    Agendar Consulta
                  </a>
                  <button 
                    onClick={() => setSelected(null)}
                    className="inline-flex items-center justify-center bg-stone-100 text-stone-700 hover:bg-stone-200 px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300 w-full sm:w-auto"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
