import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Star, ChevronRight, Sparkles, X, Info, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pharmacyData } from '../data';
import { useCart } from '../context/CartContext';

export default function Pharmacy() {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<typeof pharmacyData[0] | null>(null);
  const featuredProducts = pharmacyData.slice(0, 4);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="farmacia" className="py-24 md:py-32 bg-stone-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-black text-xs tracking-widest uppercase mb-6 shadow-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              Tienda y Farmacia
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-stone-800 tracking-tight leading-tight"
            >
              Todo lo que necesitan, <span className="text-teal-600">en un solo lugar</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-stone-600 mt-8 leading-relaxed font-medium"
            >
              Encuentra alimentos medicados, productos de higiene, accesorios y medicamentos con la garantía y recomendación de nuestros especialistas.
            </motion.p>
          </div>
          
          <Link to="/farmacia" className="group">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-stone-100"
            >
              <span className="text-stone-800 font-black tracking-tight">Ver catálogo completo</span>
              <div className="bg-teal-500 text-white p-2 rounded-xl group-hover:translate-x-2 transition-transform duration-300">
                <ChevronRight className="w-5 h-5" />
              </div>
            </motion.div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group border border-stone-100 flex flex-col h-full relative"
            >
              <div className="relative h-72 overflow-hidden bg-stone-50">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-black text-stone-800 flex items-center gap-2 shadow-xl border border-white/20">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  {product.rating}
                </div>
                
                {/* Info Overlay Button */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="absolute bottom-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-teal-600 shadow-xl border border-white/20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-teal-600 hover:text-white"
                  title="Ver detalles"
                >
                  <Info className="w-6 h-6" />
                </button>

                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              <div className="p-10 flex flex-col flex-grow relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-teal-500" />
                  <p className="text-xs font-black text-teal-600 uppercase tracking-widest">{product.category}</p>
                </div>
                <h3 className="text-2xl font-black text-stone-800 mb-6 line-clamp-2 leading-tight group-hover:text-teal-600 transition-colors">{product.name}</h3>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-stone-50">
                  <span className="text-2xl font-black text-stone-800 tracking-tighter">{formatPrice(product.price)}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-14 h-14 rounded-2xl bg-stone-50 flex items-center justify-center text-stone-700 hover:bg-teal-500 hover:text-white transition-all duration-500 shadow-sm hover:shadow-teal-500/30 hover:-translate-y-1 active:translate-y-0"
                  >
                    <ShoppingBag className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Link to="/farmacia">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:hidden w-full mt-12 flex items-center justify-center gap-3 py-6 bg-white text-stone-800 font-black rounded-[2rem] shadow-xl border border-stone-100"
          >
            Ver catálogo completo
            <ChevronRight className="w-6 h-6 text-teal-500" />
          </motion.button>
        </Link>
      </div>

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
    </section>
  );
}
