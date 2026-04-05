import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqData } from '../data';
import { ChevronDown, HelpCircle, Sparkles, PawPrint } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-stone-50 to-transparent opacity-50" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            Resolvemos tus dudas
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-stone-900 mb-8 tracking-tight">
            Preguntas <span className="text-teal-600 relative">Frecuentes<Sparkles className="absolute -top-6 -right-8 w-8 h-8 text-amber-400 animate-pulse" /></span>
          </h2>
          <p className="text-xl text-stone-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Todo lo que necesitas saber sobre el cuidado de tu mascota en Patitas Felices.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqData.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group rounded-[2rem] border-2 transition-all duration-500 overflow-hidden ${openIndex === idx ? 'bg-white border-teal-500 shadow-2xl shadow-teal-600/10' : 'bg-stone-50 border-stone-50 hover:border-stone-200 hover:bg-white hover:shadow-xl'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-7 text-left flex justify-between items-center focus:outline-none"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${openIndex === idx ? 'bg-teal-600 text-white rotate-12' : 'bg-white text-stone-400 group-hover:text-teal-600 shadow-sm'}`}>
                    <PawPrint className="w-6 h-6" />
                  </div>
                  <span className={`font-black text-xl tracking-tight transition-colors duration-500 ${openIndex === idx ? 'text-stone-900' : 'text-stone-600 group-hover:text-stone-900'}`}>{faq.question}</span>
                </div>
                <div className={`p-2 rounded-xl transition-all duration-500 ${openIndex === idx ? 'bg-teal-50 text-teal-600 rotate-180' : 'bg-white text-stone-300 group-hover:text-stone-600'}`}>
                  <ChevronDown className="w-6 h-6" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-8 ml-16">
                      <div className="h-px bg-stone-100 mb-6" />
                      <p className="text-lg text-stone-600 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 bg-stone-900 rounded-[3rem] text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -mr-32 -mt-32 blur-3xl transition-transform group-hover:scale-110" />
          <h3 className="text-3xl font-black text-white mb-4 relative z-10 tracking-tight">¿Aún tienes dudas?</h3>
          <p className="text-stone-400 mb-8 relative z-10 font-medium">Nuestro equipo está listo para ayudarte con cualquier consulta adicional.</p>
          <button className="px-10 py-5 bg-teal-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl shadow-teal-600/20 hover:bg-teal-700 transition-all hover:scale-105 active:scale-95 relative z-10">
            Contáctanos ahora
          </button>
        </motion.div>
      </div>
    </section>
  );
}
