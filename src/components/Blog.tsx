import { motion } from 'motion/react';
import { blogData } from '../data';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-3 block">Blog Veterinario</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-800">Consejos de Salud</h2>
          </div>
          <Link to="/blog" className="text-teal-600 font-bold hover:text-teal-800 transition-colors flex items-center gap-2">
            Ver todos los artículos <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogData.slice(0, 3).map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/blog/${post.id}`} className="block">
                <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6 shadow-md">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-teal-700">
                    {post.category}
                  </div>
                </div>
                <p className="text-stone-400 text-sm font-semibold mb-3">{post.date}</p>
                <h3 className="text-2xl font-bold text-stone-800 mb-3 group-hover:text-teal-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="text-amber-500 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Leer más <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
