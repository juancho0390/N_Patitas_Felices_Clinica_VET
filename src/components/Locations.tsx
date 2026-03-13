import { useState } from 'react';
import { motion } from 'motion/react';
import { locationsData } from '../data';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Locations() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="sedes" className="py-24 md:py-32 bg-stone-100">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-3 block">Nuestra Red</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-6">Encuentra tu Sede Cercana</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">Estamos estratégicamente ubicados para atenderte cuando más nos necesites, con instalaciones modernas y cómodas.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Locations List */}
          <div className="w-full lg:w-1/3 space-y-4">
            {locationsData.map((location, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelected(idx)}
                className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 border-2 ${
                  selected === idx 
                    ? 'border-teal-500 bg-white shadow-xl scale-[1.02]' 
                    : 'border-transparent bg-white/60 hover:bg-white hover:shadow-md'
                }`}
              >
                <h3 className="font-bold text-xl text-stone-800 mb-4 flex items-center gap-2">
                  <MapPin className={`w-5 h-5 ${selected === idx ? 'text-amber-500' : 'text-teal-600'}`} />
                  {location.name}
                </h3>
                <div className="space-y-3 text-stone-600">
                  <p className="flex items-start gap-3">
                    <span className="mt-1 w-4 h-4 rounded-full bg-stone-100 flex items-center justify-center shrink-0" />
                    <span className="text-sm">{location.address}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                    <span className="text-sm font-medium">{location.phone}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                    <span className="text-sm">{location.hours}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map View */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative"
          >
            <div className="absolute inset-0 bg-stone-200 animate-pulse -z-10" />
            <iframe 
              className="w-full h-full border-0"
              src={locationsData[selected].mapSrc}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Floating Info Card on Map */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white">
              <h4 className="font-bold text-stone-800 text-lg mb-1">{locationsData[selected].name}</h4>
              <p className="text-teal-600 font-semibold mb-3">{locationsData[selected].phone}</p>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(locationsData[selected].address)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-stone-900 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-amber-500 transition-colors"
              >
                Cómo llegar
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
