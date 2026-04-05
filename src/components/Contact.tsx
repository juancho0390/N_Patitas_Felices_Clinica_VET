import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, PhoneCall, Mail, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-teal-700 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full filter blur-[120px] -mr-40 -mt-40 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-400/10 rounded-full filter blur-[120px] -ml-40 -mb-40 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-amber-400 font-black text-xs tracking-widest uppercase mb-6 border border-white/10">
            <Sparkles className="w-4 h-4" />
            Estamos para ti
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-tight">Ponte en <span className="text-amber-400">Contacto</span></h2>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed font-medium">¿Tienes alguna pregunta o quieres agendar una cita? Escríbenos. Para urgencias, utiliza nuestras líneas de atención inmediata.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-7xl mx-auto">
          
          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-[3rem] hover:bg-white/15 transition-all duration-500 group shadow-2xl">
              <div className="bg-amber-400 text-teal-900 p-4 rounded-2xl w-fit mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-amber-400/20">
                <PhoneCall className="w-8 h-8" />
              </div>
              <h4 className="font-black text-2xl mb-3 tracking-tight">Línea de Emergencias</h4>
              <p className="text-teal-100 mb-6 font-medium">Disponible 24 horas, 7 días a la semana para casos críticos.</p>
              <p className="text-4xl font-black tracking-tighter text-amber-400">604 564 82 73</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-[3rem] hover:bg-white/15 transition-all duration-500 group shadow-2xl">
              <div className="bg-teal-400 text-teal-900 p-4 rounded-2xl w-fit mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-teal-400/20">
                <Phone className="w-8 h-8" />
              </div>
              <h4 className="font-black text-2xl mb-3 tracking-tight">Citas y Consultas</h4>
              <p className="text-teal-100 mb-6 font-medium">Lunes a Sábado de 8:00 am a 8:00 pm para agendamiento.</p>
              <p className="text-4xl font-black tracking-tighter">604 564 82 74</p>
            </div>

            <div className="flex gap-6 items-center p-8 bg-teal-800/40 rounded-[2rem] border border-white/10 backdrop-blur-md shadow-xl">
              <div className="bg-white/10 p-3 rounded-xl">
                <Mail className="w-6 h-6 text-teal-300 shrink-0" />
              </div>
              <span className="font-black text-lg tracking-tight">contacto@patitasfelices.com</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-white text-stone-800 p-10 md:p-16 rounded-[3.5rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16" />
            
            <h3 className="text-3xl lg:text-4xl font-black text-stone-800 mb-10 tracking-tight relative z-10">Envíanos un <span className="text-teal-600">Mensaje</span></h3>
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-xs font-black text-stone-400 uppercase tracking-widest ml-2">Nombre Completo</label>
                  <input type="text" id="name" required className="w-full px-6 py-5 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all font-bold placeholder:text-stone-300" placeholder="Ej. Juan Pérez" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="phone" className="block text-xs font-black text-stone-400 uppercase tracking-widest ml-2">Teléfono</label>
                  <input type="tel" id="phone" className="w-full px-6 py-5 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all font-bold placeholder:text-stone-300" placeholder="Tu número de contacto" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="email" className="block text-xs font-black text-stone-400 uppercase tracking-widest ml-2">Correo Electrónico</label>
                <input type="email" id="email" required className="w-full px-6 py-5 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all font-bold placeholder:text-stone-300" placeholder="ejemplo@correo.com" />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="subject" className="block text-xs font-black text-stone-400 uppercase tracking-widest ml-2">Asunto</label>
                <select id="subject" className="w-full px-6 py-5 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all font-bold text-stone-700 appearance-none cursor-pointer">
                  <option>Agendar una Cita</option>
                  <option>Consulta General</option>
                  <option>Resultados de Exámenes</option>
                  <option>Información sobre Cirugías</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="block text-xs font-black text-stone-400 uppercase tracking-widest ml-2">Mensaje</label>
                <textarea id="message" rows={4} required className="w-full px-6 py-5 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all resize-none font-bold placeholder:text-stone-300" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>

              <button type="submit" className="w-full bg-amber-500 text-white hover:bg-amber-600 px-10 py-6 rounded-2xl font-black text-xl shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1 active:translate-y-0">
                Enviar Mensaje
                <Send className="w-6 h-6" />
              </button>
            </form>

            {submitted && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-10 text-center"
              >
                <div className="bg-teal-100 text-teal-600 p-6 rounded-full mb-8">
                  <CheckCircle2 className="w-16 h-16" />
                </div>
                <h4 className="text-3xl font-black text-stone-800 mb-4 tracking-tight">¡Mensaje Recibido!</h4>
                <p className="text-lg text-stone-600 font-medium max-w-md">Gracias por confiar en nosotros. Un miembro de nuestro equipo te contactará muy pronto.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-teal-600 font-black uppercase tracking-widest text-sm hover:text-teal-700 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
