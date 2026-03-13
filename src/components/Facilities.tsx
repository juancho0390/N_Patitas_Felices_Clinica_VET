import { motion } from 'motion/react';
import { facilitiesData } from '../data';

export default function Facilities() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-3 block">Infraestructura</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-6">Instalaciones de Primer Nivel</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Espacios diseñados pensando en el confort, la higiene y la seguridad clínica de nuestros pacientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {facilitiesData.map((facility, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded-[2rem] overflow-hidden group ${facility.span}`}
            >
              <img 
                src={facility.image} 
                alt={facility.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-bold text-2xl drop-shadow-md">{facility.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
