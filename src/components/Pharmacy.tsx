import { motion } from 'motion/react';
import { ShoppingBag, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pharmacyData } from '../data';
import { useCart } from '../context/CartContext';

export default function Pharmacy() {
  const { addToCart } = useCart();
  const featuredProducts = pharmacyData.slice(0, 4);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="farmacia" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-semibold text-sm mb-6"
            >
              <ShoppingBag className="w-4 h-4" />
              Tienda y Farmacia
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-stone-800 tracking-tight"
            >
              Todo lo que necesitan, <span className="text-teal-600">en un solo lugar</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-stone-600 mt-6"
            >
              Encuentra alimentos medicados, productos de higiene, accesorios y medicamentos con la garantía y recomendación de nuestros especialistas.
            </motion.p>
          </div>
          
          <Link to="/farmacia">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 transition-colors group"
            >
              Ver catálogo completo
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
                <h3 className="text-xl font-bold text-stone-800 mb-4 line-clamp-2">{product.name}</h3>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-black text-stone-800">{formatPrice(product.price)}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 group-hover:bg-teal-600 group-hover:text-white transition-colors"
                  >
                    <ShoppingBag className="w-5 h-5" />
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
            className="md:hidden w-full mt-8 flex items-center justify-center gap-2 py-4 bg-teal-50 text-teal-700 font-bold rounded-2xl"
          >
            Ver catálogo completo
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
