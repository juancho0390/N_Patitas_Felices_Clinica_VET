import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { blogData } from '../data';
import { ArrowRight, ArrowLeft, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingEmergency from '../components/FloatingEmergency';
import AppointmentModal from '../components/AppointmentModal';
import ClientPortal from '../components/ClientPortal';
import Chatbot from '../components/Chatbot';

export default function BlogList() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', ...new Set(blogData.map(post => post.category))];

  const filteredPosts = useMemo(() => {
    return blogData.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-[#fafaf9] text-[#292524] font-sans selection:bg-teal-500 selection:text-white min-h-screen flex flex-col">
      <Header 
        onOpenAppointment={() => setIsAppointmentOpen(true)} 
        onOpenPortal={() => setIsPortalOpen(true)}
      />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link to="/" className="inline-flex items-center text-teal-600 font-bold hover:text-teal-800 transition-colors mb-6">
              <ArrowLeft className="w-5 h-5 mr-2" /> Volver al Inicio
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-4">Blog Veterinario</h1>
            <p className="text-lg text-stone-600 max-w-2xl">
              Consejos, noticias y artículos de interés para el cuidado y bienestar de tus mascotas.
            </p>
          </motion.div>

          {/* Filters and Search */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row gap-4 mb-12"
          >
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-stone-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-2xl font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                      : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group cursor-pointer bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl border border-stone-100 transition-all duration-300 flex flex-col"
                >
                  <Link to={`/blog/${post.id}`} className="flex flex-col h-full">
                    <div className="relative h-64 overflow-hidden">
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
                    <div className="p-8 flex flex-col flex-grow">
                      <p className="text-stone-400 text-sm font-semibold mb-3">{post.date}</p>
                      <h3 className="text-2xl font-bold text-stone-800 mb-3 group-hover:text-teal-600 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-stone-600 leading-relaxed mb-6 flex-grow">
                        {post.excerpt}
                      </p>
                      <span className="text-amber-500 font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                        Leer artículo completo <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-stone-100 mb-6">
                <Search className="w-10 h-10 text-stone-400" />
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-2">No se encontraron artículos</h3>
              <p className="text-stone-500">Intenta con otros términos de búsqueda o selecciona otra categoría.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Todos');
                }}
                className="mt-6 px-6 py-2 bg-stone-200 text-stone-700 font-bold rounded-full hover:bg-stone-300 transition-colors"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <FloatingEmergency />
      <AppointmentModal 
        isOpen={isAppointmentOpen} 
        onClose={() => setIsAppointmentOpen(false)} 
      />
      <ClientPortal 
        isOpen={isPortalOpen} 
        onClose={() => setIsPortalOpen(false)} 
      />
      <Chatbot />
    </div>
  );
}
