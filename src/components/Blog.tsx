import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { blogData } from '../data';
import { ArrowRight, BookOpen, Calendar, Search, Filter, Share2, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(blogData.map(post => post.category));
    return ['Todos', ...Array.from(cats)];
  }, []);

  const filteredPosts = useMemo(() => {
    return blogData.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleShare = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/blog/${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <section id="blog" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-50 rounded-full blur-[120px] opacity-40 -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-50 rounded-full blur-[100px] opacity-30 -ml-20 -mb-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-teal-100 text-teal-700 font-black text-[10px] tracking-[0.2em] uppercase mb-8 shadow-sm">
              <BookOpen className="w-4 h-4" />
              Blog Veterinario
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-stone-900 tracking-tight leading-[1.1] mb-8">
              Consejos de <span className="text-teal-600">Salud & Bienestar</span>
            </h2>
            <p className="text-xl text-stone-500 font-medium leading-relaxed">
              Descubre artículos escritos por nuestros expertos para mejorar la calidad de vida de tu mascota.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-auto flex flex-col gap-4"
          >
            {/* Search Bar */}
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 group-focus-within:text-teal-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Buscar artículos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full lg:w-80 pl-14 pr-6 py-5 bg-stone-50 border-2 border-stone-100 rounded-[2rem] focus:outline-none focus:border-teal-500 focus:bg-white transition-all font-bold text-stone-800 placeholder:text-stone-400 shadow-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-16"
        >
          <div className="flex items-center gap-3 mr-4 text-stone-400 font-black text-[10px] uppercase tracking-widest">
            <Filter className="w-4 h-4" />
            Filtrar por:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                selectedCategory === cat 
                ? 'bg-teal-600 text-white shadow-xl shadow-teal-600/20 scale-105' 
                : 'bg-stone-50 text-stone-500 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group flex flex-col h-full"
                >
                  <div className="relative h-80 rounded-[3rem] overflow-hidden mb-8 shadow-2xl group-hover:shadow-teal-500/20 transition-all duration-500 bg-stone-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl text-[10px] font-black text-teal-700 shadow-xl border border-white/20 uppercase tracking-[0.2em]">
                      {post.category}
                    </div>

                    {/* Share Button */}
                    <button 
                      onClick={(e) => handleShare(e, post.id)}
                      className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-teal-600 rounded-2xl flex items-center justify-center transition-all duration-300 border border-white/30"
                    >
                      {copiedId === post.id ? <Check className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
                    </button>

                    {/* Date Overlay */}
                    <div className="absolute bottom-8 left-8 flex items-center gap-3 text-white/90 text-[10px] font-black uppercase tracking-[0.2em]">
                      <Calendar className="w-4 h-4 text-teal-400" />
                      {post.date}
                    </div>
                  </div>

                  <div className="flex-grow px-2">
                    <h3 className="text-2xl lg:text-3xl font-black text-stone-900 mb-4 group-hover:text-teal-600 transition-colors leading-tight tracking-tight">
                      {post.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-8 font-medium line-clamp-3 opacity-80">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-auto px-2 pb-2">
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-4 bg-stone-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-600/20 transition-all duration-300 group/btn"
                    >
                      Leer artículo
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-stone-300" />
                </div>
                <h3 className="text-2xl font-black text-stone-800 mb-2">No se encontraron artículos</h3>
                <p className="text-stone-500 font-medium">Intenta con otros términos de búsqueda o categorías.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('Todos'); }}
                  className="mt-8 text-teal-600 font-black uppercase tracking-widest text-xs hover:underline"
                >
                  Limpiar filtros
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Newsletter CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 bg-stone-900 rounded-[4rem] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full -mr-48 -mt-48 blur-[100px] group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full -ml-32 -mb-32 blur-[80px]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Recibe consejos en tu correo</h3>
              <p className="text-stone-400 text-lg font-medium leading-relaxed">Únete a nuestra comunidad y recibe las últimas noticias y consejos para el cuidado de tu mascota.</p>
            </div>
            <form className="w-full lg:w-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Tu correo electrónico"
                className="px-8 py-5 bg-white/10 border-2 border-white/10 rounded-2xl focus:outline-none focus:border-teal-500 text-white font-bold min-w-[300px] transition-all"
              />
              <button className="px-10 py-5 bg-teal-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-teal-700 shadow-xl shadow-teal-600/20 transition-all active:scale-95">
                Suscribirme
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
