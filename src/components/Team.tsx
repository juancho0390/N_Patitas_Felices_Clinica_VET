import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { teamData } from '../data';
import { Award, Users, ArrowRight } from 'lucide-react';

export default function Team() {
  const [hovered, setHovered] = useState(0);

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-black text-xs tracking-widest uppercase mb-6 shadow-sm">
            <Users className="w-4 h-4" />
            Talento Humano
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-stone-800 mb-8 tracking-tight leading-tight">Nuestro <span className="text-teal-600">Equipo Médico</span></h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-medium">Profesionales altamente capacitados, unidos por una vocación inquebrantable: el amor y respeto por los animales.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch min-h-[600px]">
          {/* Interactive Gallery */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[60%] h-[450px] lg:h-[650px] flex rounded-[3rem] overflow-hidden shadow-2xl bg-stone-100 border-4 border-white"
          >
            {teamData.map((member, idx) => (
              <motion.div
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                animate={{ 
                  width: hovered === idx ? '65%' : '11.66%',
                  filter: hovered === idx ? 'grayscale(0%)' : 'grayscale(100%)'
                }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.1 }}
                className="h-full bg-cover bg-center cursor-pointer relative group border-r border-white/30 last:border-r-0 overflow-hidden"
                style={{ backgroundImage: `url(${member.image})` }}
              >
                {/* Overlay Gradient */}
                <div className={`absolute inset-0 transition-all duration-700 ${hovered === idx ? 'bg-gradient-to-t from-stone-950/90 via-stone-900/20 to-transparent' : 'bg-stone-900/40 group-hover:bg-stone-900/20'}`} />
                
                {/* Vertical Name (when not hovered) */}
                <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap -rotate-90 origin-center transition-all duration-500 ${hovered === idx ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
                  <span className="text-white font-black tracking-[0.2em] text-xs uppercase drop-shadow-lg">{member.name.split(' ')[1] || member.name}</span>
                </div>

                {/* Info (when hovered) */}
                <div className={`absolute bottom-0 left-0 right-0 p-10 transition-all duration-700 delay-100 ${hovered === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <motion.div
                    initial={false}
                    animate={{ y: hovered === idx ? 0 : 20 }}
                  >
                    <h3 className="text-white font-black text-3xl mb-2 tracking-tight drop-shadow-xl">{member.name}</h3>
                    <div className="inline-block px-3 py-1 rounded-lg bg-teal-500 text-white text-xs font-black uppercase tracking-widest shadow-lg">
                      {member.specialty}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Details Panel */}
          <div className="w-full lg:w-[40%] p-10 md:p-16 bg-stone-50 rounded-[3rem] flex flex-col justify-center shadow-[inset_0_2px_20px_rgba(0,0,0,0.02)] border border-stone-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-full -mr-24 -mt-24 transition-transform duration-700 group-hover:scale-150" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={hovered}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="bg-white w-20 h-20 rounded-3xl flex items-center justify-center mb-10 shadow-xl text-amber-500 border border-stone-50 group-hover:rotate-12 transition-transform duration-500">
                  <Award className="w-10 h-10" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-stone-800 mb-4 tracking-tight leading-tight">{teamData[hovered].name}</h3>
                <p className="text-xl font-black text-teal-600 mb-10 pb-8 border-b border-stone-200 uppercase tracking-wider text-sm">{teamData[hovered].specialty}</p>
                <p className="text-stone-600 leading-relaxed text-lg font-medium italic">"{teamData[hovered].profile}"</p>
                
                <div className="mt-12">
                  <a 
                    href="#" 
                    className="group inline-flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-stone-100"
                  >
                    <span className="text-stone-800 font-black tracking-tight">
                      Solicitar cita con {teamData[hovered].name.split(' ')[1] || 'especialista'}
                    </span>
                    <div className="bg-teal-500 text-white p-2 rounded-xl group-hover:translate-x-2 transition-transform duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
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
