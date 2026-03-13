import { motion } from 'motion/react';
import { testimonialsData } from '../data';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  // Duplicate array for infinite scroll
  const allTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section id="testimonios" className="py-24 md:py-32 bg-stone-50 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-3 block">Historias Reales</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-6">Lo que dicen nuestras familias</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">La confianza y felicidad de nuestros pacientes y sus tutores es el mayor reconocimiento a nuestra labor.</p>
        </motion.div>
      </div>

      <div className="testimonial-carousel-container relative w-full z-10">
        <div className="scrolling-wrapper flex w-max py-8">
          {allTestimonials.map((testimonial, idx) => (
            <div key={idx} className="flex-shrink-0 w-[350px] md:w-[450px] bg-white rounded-[2rem] shadow-xl shadow-stone-200/50 p-8 md:p-10 mx-4 border border-stone-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-stone-100 group-hover:text-teal-50 transition-colors duration-300" />
              
              <div className="flex mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              <p className="text-stone-600 italic text-lg leading-relaxed mb-8 relative z-10">"{testimonial.text}"</p>
              
              <div className="flex items-center mt-auto pt-6 border-t border-stone-100">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-white shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-extrabold text-stone-800">{testimonial.name}</p>
                  <p className="text-sm font-medium text-teal-600">Familiar de {testimonial.pet}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
