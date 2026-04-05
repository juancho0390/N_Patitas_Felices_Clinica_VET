import { motion } from 'motion/react';
import { facilitiesData } from '../data';
import { LayoutGrid } from 'lucide-react';

export default function Facilities() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-black text-xs tracking-widest uppercase mb-6 shadow-sm">
            <LayoutGrid className="w-4 h-4" />
            Infraestructura
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-stone-800 mb-8 tracking-tight leading-tight">Instalaciones de <span className="text-teal-600">Primer Nivel</span></h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Espacios diseñados pensando en el confort, la higiene y la seguridad clínica de nuestros pacientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {facilitiesData.map((facility, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-[3rem] overflow-hidden group shadow-2xl ${facility.span}`}
            >
              <img 
                src={facility.image} 
                alt={facility.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 right-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-black text-2xl lg:text-3xl drop-shadow-2xl tracking-tight leading-tight">{facility.title}</h3>
                <div className="w-12 h-1.5 bg-teal-500 mt-4 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
