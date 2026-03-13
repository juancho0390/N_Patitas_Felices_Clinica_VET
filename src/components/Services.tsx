import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '../data';
import { X, ArrowRight } from 'lucide-react';

export default function Services() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-24 md:py-32 bg-stone-50 animated-bg">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-3 block">Especialidades Médicas</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-6">Atención Veterinaria Integral</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Instalaciones de primer nivel y un equipo multidisciplinario dedicado a cubrir todas las necesidades de salud de tu mascota en un solo lugar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl border border-stone-100 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full"
              >
                <div className="bg-teal-50 text-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-stone-800 group-hover:text-teal-700 transition-colors">{service.title}</h3>
                <p className="text-stone-500 mb-6 flex-grow leading-relaxed">{service.description}</p>
                
                <div className="flex items-center text-teal-600 font-semibold text-sm mt-auto group-hover:text-amber-500 transition-colors">
                  <span>Conocer más</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Premium Modal */}
      <AnimatePresence>
        {selected !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-stone-700 shadow-lg hover:bg-amber-500 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div 
                className="h-64 md:h-auto md:w-2/5 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${servicesData[selected].image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent md:hidden" />
              </div>
              
              <div className="flex flex-col p-8 md:p-12 md:w-3/5 overflow-y-auto bg-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-teal-100 text-teal-700 p-3 rounded-xl">
                    {(() => {
                      const SelectedIcon = servicesData[selected].icon;
                      return <SelectedIcon className="w-8 h-8" />;
                    })()}
                  </div>
                  <h3 className="text-3xl font-extrabold text-stone-800">{servicesData[selected].title}</h3>
                </div>
                
                <div 
                  className="prose prose-lg prose-stone max-w-none text-stone-600"
                  dangerouslySetInnerHTML={{ __html: servicesData[selected].detailedDescription }}
                />
                
                <div className="mt-10 pt-8 border-t border-stone-100">
                  <a href="/#contacto" onClick={() => setSelected(null)} className="inline-flex items-center justify-center bg-teal-600 text-white hover:bg-teal-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-teal-600/25 transition-all duration-300 w-full sm:w-auto">
                    Agendar Consulta
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
