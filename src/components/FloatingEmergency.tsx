import { PhoneCall, HeartPulse, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingEmergency() {
  return (
    <motion.a
      href="tel:+576045648273"
      initial={{ scale: 0, y: 100, rotate: -20 }}
      animate={{ scale: 1, y: 0, rotate: 0 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-red-600 text-white p-1 rounded-[2rem] shadow-2xl shadow-red-600/30 flex items-center gap-4 hover:bg-red-700 transition-all duration-300 border-4 border-white group"
    >
      <div className="relative p-4 bg-white rounded-[1.8rem] text-red-600 shadow-inner overflow-hidden">
        <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity" />
        <PhoneCall className="w-7 h-7 relative z-10 animate-shake group-hover:scale-110 transition-transform" />
        <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-20 scale-150"></div>
      </div>
      
      <div className="pr-8 py-2">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-4 h-4 text-red-100 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-100">Ayuda Inmediata</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight whitespace-nowrap">Urgencias 24/7</span>
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
        </div>
      </div>

      {/* Tooltip on hover */}
      <div className="absolute -top-12 right-0 bg-stone-900 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
        ¡Llámanos ahora! 📞
      </div>
    </motion.a>
  );
}
