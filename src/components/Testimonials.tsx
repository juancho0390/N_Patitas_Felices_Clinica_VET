import { motion } from 'motion/react';
import { testimonialsData } from '../data';
import { Star, Quote, MessageSquareHeart } from 'lucide-react';

export default function Testimonials() {
  // Duplicate array for infinite scroll
  const allTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section id="testimonios" className="py-24 md:py-32 bg-stone-50 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-teal-100/40 rounded-full filter blur-[120px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-100/40 rounded-full filter blur-[120px] opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-black text-xs tracking-widest uppercase mb-6 shadow-sm">
            <MessageSquareHeart className="w-4 h-4" />
            Historias Reales
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-stone-800 mb-8 tracking-tight leading-tight">Lo que dicen <span className="text-teal-600">nuestras familias</span></h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-medium">La confianza y felicidad de nuestros pacientes y sus tutores es el mayor reconocimiento a nuestra labor diaria.</p>
        </motion.div>
      </div>

      <div className="testimonial-carousel-container relative w-full z-10">
        <div className="scrolling-wrapper flex w-max py-12">
          {allTestimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -15, scale: 1.02 }}
              className="flex-shrink-0 w-[380px] md:w-[500px] bg-white rounded-[3rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] p-10 md:p-14 mx-6 border border-stone-100 relative group transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-stone-50 rounded-full -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150 group-hover:bg-teal-50" />
              <Quote className="absolute top-10 right-10 w-16 h-16 text-stone-100 group-hover:text-teal-200/40 transition-colors duration-500 relative z-0" />
              
              <div className="flex gap-1 mb-8 relative z-10">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-6 h-6 ${i < testimonial.rating ? 'text-amber-400 fill-current' : 'text-stone-200'} transition-transform duration-500 group-hover:scale-110`} 
                    style={{ transitionDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              
              <p className="text-stone-700 italic text-xl md:text-2xl leading-relaxed mb-12 relative z-10 font-medium tracking-tight">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center mt-auto pt-10 border-t border-stone-100 relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-teal-500 rounded-2xl rotate-6 scale-105 group-hover:rotate-12 transition-transform duration-500" />
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-16 h-16 rounded-2xl mr-6 object-cover border-2 border-white shadow-xl relative z-10"
                  />
                </div>
                <div>
                  <p className="font-black text-xl text-stone-800 tracking-tight leading-none mb-2">{testimonial.name}</p>
                  <div className="inline-block px-3 py-1 rounded-lg bg-teal-50 text-teal-600 text-xs font-black uppercase tracking-widest">
                    Familiar de {testimonial.pet}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
