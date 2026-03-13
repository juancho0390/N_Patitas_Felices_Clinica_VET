import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { teamData } from '../data';
import { Award } from 'lucide-react';

export default function Team() {
  const [hovered, setHovered] = useState(0);

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-3 block">Talento Humano</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-6">Nuestro Equipo Médico</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">Profesionales altamente capacitados, unidos por una vocación inquebrantable: el amor y respeto por los animales.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch min-h-[500px]">
          {/* Interactive Gallery */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[55%] h-[400px] lg:h-[550px] flex rounded-[2rem] overflow-hidden shadow-2xl bg-stone-100"
          >
            {teamData.map((member, idx) => (
              <motion.div
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                animate={{ width: hovered === idx ? '60%' : '10%' }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                className="h-full bg-cover bg-center cursor-pointer relative group border-r border-white/20 last:border-r-0"
                style={{ backgroundImage: `url(${member.image})` }}
              >
                {/* Overlay Gradient */}
                <div className={`absolute inset-0 transition-all duration-500 ${hovered === idx ? 'bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent' : 'bg-stone-900/50 group-hover:bg-stone-900/30'}`} />
                
                {/* Vertical Name (when not hovered) */}
                <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap -rotate-90 origin-bottom-left transition-opacity duration-300 ${hovered === idx ? 'opacity-0' : 'opacity-100'}`}>
                  <span className="text-white font-bold tracking-wider text-sm uppercase">{member.name.split(' ')[1] || member.name}</span>
                </div>

                {/* Info (when hovered) */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-500 delay-100 ${hovered === idx ? 'opacity-100' : 'opacity-0'}`}>
                  <h3 className="text-white font-bold text-2xl mb-1">{member.name}</h3>
                  <p className="text-teal-300 font-medium text-sm">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Details Panel */}
          <div className="w-full lg:w-[45%] p-8 md:p-12 bg-stone-50 rounded-[2rem] flex flex-col justify-center shadow-inner border border-stone-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={hovered}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm text-amber-500">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-extrabold text-stone-800 mb-3">{teamData[hovered].name}</h3>
                <p className="text-xl font-bold text-teal-600 mb-8 pb-6 border-b border-stone-200">{teamData[hovered].specialty}</p>
                <p className="text-stone-600 leading-relaxed text-lg">{teamData[hovered].profile}</p>
                
                <div className="mt-10">
                  <a href="/#contacto" className="inline-flex items-center text-stone-800 font-bold hover:text-teal-600 transition-colors">
                    Solicitar cita con {teamData[hovered].name.split(' ')[1] || 'especialista'}
                    <span className="ml-2 bg-teal-100 p-2 rounded-full">→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
