import { motion } from 'motion/react';
import { Target, Eye, Heart, CheckCircle2, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="quienes-somos" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-50 rounded-full -ml-32 -mt-32 opacity-50 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-50 rounded-full -mr-48 -mb-48 opacity-50 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-black text-xs tracking-widest uppercase mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" />
              Nuestra Filosofía
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-stone-800 mb-8 leading-[1.1] tracking-tight">
              Más de 15 años cuidando a los que <span className="text-teal-600">más amas.</span>
            </h2>
            <p className="text-lg md:text-xl text-stone-600 mb-12 leading-relaxed font-medium">
              En Patitas Felices no solo tratamos enfermedades, cuidamos familias. Nuestro compromiso es brindar una atención veterinaria de excelencia, basada en la empatía, la ética y la innovación constante.
            </p>

            <div className="space-y-10">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex gap-6 group"
              >
                <div className="bg-teal-50 text-teal-600 w-16 h-16 rounded-3xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-stone-800 mb-2 tracking-tight">Misión</h3>
                  <p className="text-stone-600 font-medium leading-relaxed">Proporcionar atención veterinaria integral y compasiva, utilizando tecnología de vanguardia y un equipo humano altamente calificado para mejorar y prolongar la calidad de vida de las mascotas.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex gap-6 group"
              >
                <div className="bg-amber-50 text-amber-600 w-16 h-16 rounded-3xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Eye className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-stone-800 mb-2 tracking-tight">Visión</h3>
                  <p className="text-stone-600 font-medium leading-relaxed">Ser la clínica veterinaria líder y de referencia en la región, reconocida por nuestra excelencia médica, innovación constante y por crear un vínculo de confianza duradero.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex gap-6 group"
              >
                <div className="bg-teal-50 text-teal-600 w-16 h-16 rounded-3xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Heart className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-stone-800 mb-2 tracking-tight">Valores</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-2xl border border-stone-100 group-hover:border-teal-200 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0" />
                      <span className="font-bold text-stone-800">Compasión</span>
                    </div>
                    <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-2xl border border-stone-100 group-hover:border-teal-200 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0" />
                      <span className="font-bold text-stone-800">Excelencia</span>
                    </div>
                    <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-2xl border border-stone-100 group-hover:border-teal-200 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0" />
                      <span className="font-bold text-stone-800">Integridad</span>
                    </div>
                    <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-2xl border border-stone-100 group-hover:border-teal-200 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0" />
                      <span className="font-bold text-stone-800">Innovación</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Collage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-6 relative"
          >
            <div className="absolute -inset-10 bg-teal-500/5 rounded-[4rem] -z-10 transform rotate-6 blur-2xl"></div>
            <div className="space-y-6">
              <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80" 
                  alt="Veterinario examinando perro" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="bg-teal-600 text-white p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between h-64 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative z-10">
                  <p className="text-5xl font-black mb-2 tracking-tighter">+15</p>
                  <p className="font-bold text-teal-100 uppercase tracking-widest text-xs">Años de Experiencia</p>
                </div>
                <Heart className="w-16 h-16 text-teal-400/30 self-end relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="bg-amber-500 text-white p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between h-64 relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative z-10">
                  <p className="text-5xl font-black mb-2 tracking-tighter">+10k</p>
                  <p className="font-bold text-amber-100 uppercase tracking-widest text-xs">Pacientes Felices</p>
                </div>
                <Sparkles className="w-16 h-16 text-amber-300/30 self-end relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=600&q=80" 
                  alt="Gato en consulta" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
