import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { pharmacyData } from '../data';
import { ArrowLeft, Search, ShoppingBag, Star, Info, X, CheckCircle2 } from 'lucide-react';
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

  useEffect(() => {
    const handleOpenAppointment = () => setIsAppointmentOpen(true);
    window.addEventListener('open-appointment-modal', handleOpenAppointment);
    return () => window.removeEventListener('open-appointment-modal', handleOpenAppointment);
  }, []);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<typeof pharmacyData[0] | null>(null);
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
                    
                    {/* Info Overlay Button */}
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center text-teal-600 shadow-lg border border-white/20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-teal-600 hover:text-white"
                      title="Ver detalles"
                    >
                      <Info className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm font-semibold text-teal-600 mb-2">{product.category}</p>
                    <h3 className="text-xl font-bold text-stone-800 mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors cursor-pointer" onClick={() => setSelectedProduct(product)}>{product.name}</h3>
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

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center text-stone-400 hover:text-stone-800 transition-colors shadow-lg border border-stone-100"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full md:w-1/2 h-80 md:h-auto relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden" />
              </div>

              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <div className="px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-[10px] font-black uppercase tracking-widest">
                    {selectedProduct.category}
                  </div>
                  <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    {selectedProduct.rating}
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-stone-900 mb-6 leading-tight">
                  {selectedProduct.name}
                </h3>

                <p className="text-lg text-stone-600 leading-relaxed mb-10 font-medium">
                  {selectedProduct.description}
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3 text-stone-700 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-teal-500" />
                    <span>Garantía de calidad veterinaria</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-700 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-teal-500" />
                    <span>Recomendado por especialistas</span>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between gap-8 pt-8 border-t border-stone-100">
                  <div>
                    <p className="text-stone-400 text-xs font-black uppercase tracking-widest mb-1">Precio</p>
                    <span className="text-3xl font-black text-stone-900 tracking-tighter">
                      {formatPrice(selectedProduct.price)}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="flex-grow bg-teal-600 text-white px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-teal-700 shadow-xl shadow-teal-600/20 transition-all active:scale-95 flex items-center justify-center gap-3"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
