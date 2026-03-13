import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { pharmacyData } from '../data';
import { ArrowLeft, Search, ShoppingBag, Star, Filter } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingEmergency from '../components/FloatingEmergency';
import AppointmentModal from '../components/AppointmentModal';
import ClientPortal from '../components/ClientPortal';
import Chatbot from '../components/Chatbot';
import { useCart } from '../context/CartContext';

export default function PharmacyPage() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const { addToCart } = useCart();

  const categories = ['Todos', ...new Set(pharmacyData.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    return pharmacyData.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

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
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-4">Tienda y Farmacia</h1>
                <p className="text-lg text-stone-600 max-w-2xl">
                  Encuentra los mejores productos para el cuidado, nutrición y bienestar de tu mascota.
                </p>
              </div>
            </div>
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
                placeholder="Buscar productos..."
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

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-stone-100 flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden bg-stone-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-800 flex items-center gap-1 shadow-sm">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      {product.rating}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm font-semibold text-teal-600 mb-2">{product.category}</p>
                    <h3 className="text-xl font-bold text-stone-800 mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-stone-500 text-sm mb-6 line-clamp-2 flex-grow">{product.description}</p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                      <span className="text-2xl font-black text-stone-800">{formatPrice(product.price)}</span>
                      <button 
                        onClick={() => addToCart(product)}
                        className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 hover:bg-teal-600 hover:text-white transition-colors shadow-sm"
                        aria-label="Agregar al carrito"
                      >
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-stone-100 mb-6">
                <Search className="w-10 h-10 text-stone-400" />
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-2">No se encontraron productos</h3>
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
