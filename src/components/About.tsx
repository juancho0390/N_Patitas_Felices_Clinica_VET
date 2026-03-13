import { motion } from 'motion/react';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="quienes-somos" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-3 block">Nuestra Filosofía</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-6 leading-tight">
              Más de 15 años cuidando a los que más amas.
            </h2>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              En Patitas Felices no solo tratamos enfermedades, cuidamos familias. Nuestro compromiso es brindar una atención veterinaria de excelencia, basada en la empatía, la ética y la innovación constante.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-teal-50 text-teal-600 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">Misión</h3>
                  <p className="text-stone-600">Proporcionar atención veterinaria integral y compasiva, utilizando tecnología de vanguardia y un equipo humano altamente calificado para mejorar y prolongar la calidad de vida de las mascotas.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-amber-50 text-amber-500 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                  <Eye className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">Visión</h3>
                  <p className="text-stone-600">Ser la clínica veterinaria líder y de referencia en la región, reconocida por nuestra excelencia médica, innovación constante y por crear un vínculo de confianza duradero.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-teal-50 text-teal-600 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                  <Heart className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">Valores</h3>
                  <ul className="text-stone-600 space-y-2 mt-3">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-500" /> <span className="font-semibold text-stone-800">Compasión:</span> Trato empático y cariñoso.</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-500" /> <span className="font-semibold text-stone-800">Excelencia:</span> Búsqueda de los más altos estándares.</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-500" /> <span className="font-semibold text-stone-800">Integridad:</span> Honestidad y ética profesional.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Collage */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 relative"
          >
            <div className="absolute -inset-4 bg-teal-50 rounded-[3rem] -z-10 transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80" 
              alt="Veterinario examinando perro" 
              referrerPolicy="no-referrer"
              className="rounded-[2rem] rounded-tr-none shadow-xl object-cover h-64 w-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=600&q=80" 
              alt="Gato en consulta" 
              referrerPolicy="no-referrer"
              className="rounded-[2rem] rounded-bl-none shadow-xl object-cover h-64 w-full mt-12"
            />
            <div className="col-span-2 bg-amber-500 text-white p-8 rounded-[2rem] shadow-xl mt-4 flex items-center justify-between">
              <div>
                <p className="text-4xl font-extrabold mb-1">+10k</p>
                <p className="font-medium text-amber-100">Familias Felices</p>
              </div>
              <Heart className="w-12 h-12 text-amber-200 opacity-50" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
