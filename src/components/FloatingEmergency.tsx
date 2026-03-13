import { PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingEmergency() {
  return (
    <motion.a
      href="tel:+576045648273"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-amber-500 text-white p-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-amber-600 transition-colors border-4 border-white"
    >
      <div className="relative">
        <PhoneCall className="w-6 h-6 relative z-10" />
        <span className="absolute inset-0 bg-amber-400 rounded-full animate-ping opacity-75"></span>
      </div>
      <span className="font-extrabold hidden md:block tracking-wide">Urgencias 24/7</span>
    </motion.a>
  );
}
