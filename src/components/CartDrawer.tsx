import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2 text-stone-800">
                <ShoppingBag className="w-5 h-5 text-teal-600" />
                <h2 className="text-xl font-bold">Tu Carrito</h2>
                <span className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full text-sm font-medium ml-2">
                  {items.length}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-stone-400 hover:text-stone-600 hover:bg-stone-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-stone-300" />
                  </div>
                  <div>
                    <p className="text-stone-800 font-bold text-lg">Tu carrito está vacío</p>
                    <p className="text-stone-500 mt-1">¡Agrega algunos productos para empezar!</p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 px-6 py-2 bg-teal-50 text-teal-700 font-bold rounded-full hover:bg-teal-100 transition-colors"
                  >
                    Explorar Farmacia
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 bg-white">
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-stone-50 flex-shrink-0 border border-stone-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="font-bold text-stone-800 text-sm leading-tight line-clamp-2">
                              {item.name}
                            </h3>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-stone-400 hover:text-red-500 transition-colors p-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-teal-600 font-bold text-sm mt-1">
                            {formatPrice(item.price)}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center bg-stone-50 rounded-lg border border-stone-200">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1.5 text-stone-500 hover:text-stone-800 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-semibold text-stone-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1.5 text-stone-500 hover:text-stone-800 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-stone-100 p-6 bg-stone-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-stone-500 font-medium">Subtotal</span>
                  <span className="text-2xl font-black text-stone-800">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
                <button 
                  className="w-full bg-teal-600 text-white font-bold py-4 rounded-xl hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20 mb-3"
                  onClick={() => {
                    alert('Funcionalidad de pago en desarrollo');
                    clearCart();
                    setIsCartOpen(false);
                  }}
                >
                  Proceder al Pago
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-stone-500 font-medium py-2 hover:text-stone-800 transition-colors"
                >
                  Seguir Comprando
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
