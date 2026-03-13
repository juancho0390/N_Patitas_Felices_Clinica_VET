import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, PhoneCall, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-teal-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-amber-400 font-bold tracking-wider uppercase text-sm mb-3 block">Estamos para ti</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ponte en Contacto</h2>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">¿Tienes alguna pregunta o quieres agendar una cita? Escríbenos. Para urgencias, utiliza nuestras líneas de atención inmediata.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] hover:bg-white/20 transition-colors duration-300">
              <PhoneCall className="w-10 h-10 text-amber-400 mb-6" />
              <h4 className="font-bold text-2xl mb-2">Línea de Emergencias</h4>
              <p className="text-teal-100 mb-4">Disponible 24 horas, 7 días a la semana.</p>
              <p className="text-3xl font-extrabold tracking-tight">604 564 82 73</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] hover:bg-white/20 transition-colors duration-300">
              <Phone className="w-10 h-10 text-teal-300 mb-6" />
              <h4 className="font-bold text-2xl mb-2">Citas y Consultas</h4>
              <p className="text-teal-100 mb-4">Lunes a Sábado de 8:00 am a 8:00 pm.</p>
              <p className="text-3xl font-extrabold tracking-tight">604 564 82 74</p>
            </div>

            <div className="flex gap-4 items-center p-4 bg-teal-800/50 rounded-2xl border border-teal-600">
              <Mail className="w-6 h-6 text-teal-300 shrink-0" />
              <span className="font-medium">contacto@patitasfelices.com</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-white text-stone-800 p-8 md:p-12 rounded-[2rem] shadow-2xl"
          >
            <h3 className="text-3xl font-extrabold text-stone-800 mb-8">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-stone-600 mb-2">Nombre Completo</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all" placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-stone-600 mb-2">Teléfono</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all" placeholder="Tu número de contacto" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-stone-600 mb-2">Correo Electrónico</label>
                <input type="email" id="email" required className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all" placeholder="ejemplo@correo.com" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-stone-600 mb-2">Asunto</label>
                <select id="subject" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-stone-700">
                  <option>Agendar una Cita</option>
                  <option>Consulta General</option>
                  <option>Resultados de Exámenes</option>
                  <option>Información sobre Cirugías</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-stone-600 mb-2">Mensaje</label>
                <textarea id="message" rows={4} required className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>

              <button type="submit" className="w-full bg-amber-500 text-white hover:bg-amber-600 px-8 py-4 rounded-xl font-extrabold text-lg shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
                Enviar Mensaje
              </button>
            </form>

            {submitted && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-center p-4 rounded-xl bg-teal-50 text-teal-800 border border-teal-200 font-medium"
              >
                ¡Gracias! Tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto contigo muy pronto.
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
