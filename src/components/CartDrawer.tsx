import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      clearCart();
      setIsCartOpen(false);
    }, 3000);
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
            onClick={() => !isCheckingOut && setIsCartOpen(false)}
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-md z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-[70] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-8 py-6 border-b border-stone-100 flex items-center justify-between bg-white relative z-10">
              <div className="flex items-center gap-4">
                <div className="bg-teal-500 text-white p-3 rounded-2xl shadow-lg shadow-teal-500/20">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-stone-800 tracking-tight">Tu Carrito</h2>
                  <p className="text-xs font-black text-teal-600 uppercase tracking-widest">{items.length} productos seleccionados</p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-3 text-stone-400 hover:text-stone-800 hover:bg-stone-50 rounded-2xl transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 relative">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-stone-100 rounded-full scale-150 blur-2xl opacity-50" />
                    <div className="w-32 h-32 bg-stone-50 rounded-[3rem] flex items-center justify-center relative z-10 border-2 border-stone-100 rotate-6">
                      <ShoppingBag className="w-16 h-16 text-stone-200" />
                    </div>
                  </div>
                  <div className="max-w-xs">
                    <p className="text-2xl font-black text-stone-800 tracking-tight mb-3">Tu carrito está vacío</p>
                    <p className="text-stone-500 font-medium leading-relaxed">¡Agrega algunos productos para empezar a cuidar a tu mejor amigo!</p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="flex items-center gap-3 px-10 py-5 bg-stone-900 text-white font-black rounded-2xl hover:bg-teal-600 transition-all duration-500 shadow-xl hover:-translate-y-1 active:translate-y-0"
                  >
                    Explorar Farmacia
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {items.map((item) => (
                    <motion.div 
                      layout
                      key={item.id} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-6 group"
                    >
                      <div className="w-24 h-24 rounded-[2rem] overflow-hidden bg-stone-50 flex-shrink-0 border-2 border-stone-100 group-hover:border-teal-500/30 transition-colors duration-500 shadow-sm group-hover:shadow-xl">
                        <img
                          src={item.image}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start gap-4">
                            <h3 className="font-black text-stone-800 text-lg leading-tight tracking-tight group-hover:text-teal-600 transition-colors">
                              {item.name}
                            </h3>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-stone-300 hover:text-red-500 transition-all duration-300 p-2 hover:bg-red-50 rounded-xl"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                          <p className="text-teal-600 font-black text-lg mt-2 tracking-tighter">
                            {formatPrice(item.price)}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center bg-stone-50 rounded-xl border border-stone-100 p-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 text-stone-400 hover:text-stone-800 hover:bg-white rounded-lg transition-all duration-300"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-10 text-center font-black text-stone-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 text-stone-400 hover:text-stone-800 hover:bg-white rounded-lg transition-all duration-300"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="text-stone-400 font-black text-xs uppercase tracking-widest">
                            Total: {formatPrice(item.price * item.quantity)}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-stone-100 p-8 bg-stone-50/50 backdrop-blur-md relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex flex-col">
                    <span className="text-stone-400 font-black text-xs uppercase tracking-widest mb-1">Subtotal estimado</span>
                    <span className="text-3xl font-black text-stone-800 tracking-tighter">
                      {formatPrice(cartTotal)}
                    </span>
                  </div>
                  <div className="bg-teal-100 text-teal-600 p-3 rounded-2xl">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>
                
                <button 
                  disabled={isCheckingOut}
                  className={`w-full relative overflow-hidden group py-6 rounded-[2rem] font-black text-xl transition-all duration-500 shadow-2xl ${
                    isCheckingOut 
                    ? 'bg-teal-600 text-white cursor-default' 
                    : 'bg-teal-600 text-white hover:bg-teal-700 hover:-translate-y-1 active:translate-y-0 shadow-teal-600/30'
                  }`}
                  onClick={handleCheckout}
                >
                  <span className={`flex items-center justify-center gap-3 transition-all duration-500 ${isCheckingOut ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'}`}>
                    Proceder al Pago
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                  
                  {isCheckingOut && (
                    <motion.div 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 flex items-center justify-center gap-3"
                    >
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      Procesando...
                    </motion.div>
                  )}
                </button>
                
                <button
                  disabled={isCheckingOut}
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-stone-400 font-black text-xs uppercase tracking-widest py-6 hover:text-stone-800 transition-colors duration-300"
                >
                  Continuar Comprando
                </button>
              </div>
            )}

            {/* Success Overlay */}
            <AnimatePresence>
              {isCheckingOut && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-[80] bg-teal-600 flex flex-col items-center justify-center p-10 text-center text-white"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="bg-white text-teal-600 p-8 rounded-full mb-10 shadow-2xl"
                  >
                    <Heart className="w-20 h-20 fill-current" />
                  </motion.div>
                  <h3 className="text-4xl font-black mb-4 tracking-tight">¡Pedido Exitoso!</h3>
                  <p className="text-teal-100 text-xl font-medium max-w-xs mx-auto leading-relaxed">Estamos preparando todo para que tu peludito reciba lo mejor.</p>
                  <div className="mt-12 flex gap-2">
                    <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
