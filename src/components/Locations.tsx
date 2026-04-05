import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { locationsData } from '../data';
import { MapPin, Phone, Clock, Navigation, Sparkles, ArrowRight } from 'lucide-react';

export default function Locations() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="sedes" className="py-24 md:py-32 bg-stone-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-teal-200/20 rounded-full filter blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-amber-200/20 rounded-full filter blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-black text-xs tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            Nuestra Red
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-stone-800 mb-8 tracking-tight leading-tight">Encuentra tu <span className="text-teal-600">Sede Cercana</span></h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-medium">Estamos estratégicamente ubicados para atenderte cuando más nos necesites, con instalaciones modernas y cómodas.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Locations List */}
          <div className="w-full lg:w-1/3 space-y-6">
            {locationsData.map((location, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelected(idx)}
                className={`p-8 rounded-[2.5rem] cursor-pointer transition-all duration-500 border-2 relative group overflow-hidden ${
                  selected === idx 
                    ? 'border-teal-500 bg-white shadow-2xl scale-[1.02]' 
                    : 'border-transparent bg-white/60 hover:bg-white hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {selected === idx && (
                  <motion.div 
                    layoutId="active-bg"
                    className="absolute inset-0 bg-teal-50/30 -z-10"
                  />
                )}
                
                <h3 className="font-black text-2xl text-stone-800 mb-6 flex items-center gap-3 tracking-tight">
                  <div className={`p-2 rounded-xl transition-colors duration-500 ${selected === idx ? 'bg-teal-500 text-white' : 'bg-stone-100 text-teal-600'}`}>
                    <MapPin className="w-6 h-6" />
                  </div>
                  {location.name}
                </h3>
                
                <div className="space-y-4 text-stone-600">
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span className="text-sm font-bold leading-tight">{location.address}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-stone-400 shrink-0" />
                    <span className="text-sm font-black text-stone-800">{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-stone-400 shrink-0" />
                    <span className="text-sm font-medium">{location.hours}</span>
                  </div>
                </div>
                
                <div className={`mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all duration-500 ${selected === idx ? 'text-teal-600 opacity-100 translate-x-0' : 'text-stone-400 opacity-0 -translate-x-4'}`}>
                  Sede Seleccionada <Navigation className="w-3 h-3" />
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
            className="w-full lg:w-2/3 min-h-[500px] lg:min-h-full rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white relative group"
          >
            <div className="absolute inset-0 bg-stone-200 animate-pulse -z-10" />
            
            <AnimatePresence mode="wait">
              <motion.iframe 
                key={selected}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full border-0 min-h-[500px] lg:min-h-full"
                src={locationsData[selected].mapSrc}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </AnimatePresence>
            
            {/* Floating Info Card on Map */}
            <motion.div 
              key={`info-${selected}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-8 left-8 right-8 md:right-auto bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/20 max-w-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-teal-500 text-white p-3 rounded-2xl shadow-lg shadow-teal-500/30">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-stone-800 text-xl tracking-tight leading-none mb-2">{locationsData[selected].name}</h4>
                  <p className="text-teal-600 font-black text-sm uppercase tracking-widest">{locationsData[selected].phone}</p>
                </div>
              </div>
              <p className="text-stone-600 font-medium mb-8 text-sm leading-relaxed">{locationsData[selected].address}</p>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(locationsData[selected].address)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-2xl text-sm font-black hover:bg-amber-500 transition-all duration-300 shadow-xl hover:-translate-y-1 active:translate-y-0"
              >
                Cómo llegar ahora
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
