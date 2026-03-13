import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, CheckCircle2, Dog, Cat, Rabbit } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      onClose();
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-900/70 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Header */}
            <div className="bg-teal-600 p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-extrabold">Agendar Cita</h3>
                <p className="text-teal-100 text-sm mt-1">Reserva tu espacio en menos de 2 minutos</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Progress Bar */}
            {!submitted && (
              <div className="flex bg-stone-100 h-2">
                <div 
                  className="bg-amber-500 h-full transition-all duration-500 ease-out"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            )}

            {/* Content */}
            <div className="p-8">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-3xl font-extrabold text-stone-800 mb-4">¡Cita Confirmada!</h4>
                  <p className="text-stone-600 text-lg">Hemos enviado los detalles de tu cita a tu correo electrónico. Te esperamos en Patitas Felices.</p>
                </motion.div>
              ) : (
                <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
                  
                  {/* Step 1: Pet & Service */}
                  {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h4 className="text-xl font-bold text-stone-800 mb-6">1. ¿Para quién es la cita?</h4>
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {/* Radio buttons disguised as cards */}
                        <label className="cursor-pointer">
                          <input type="radio" name="petType" className="peer sr-only" defaultChecked />
                          <div className="p-4 rounded-2xl border-2 border-stone-200 peer-checked:border-teal-500 peer-checked:bg-teal-50 hover:bg-stone-50 transition-all text-center">
                            <Dog className="w-8 h-8 mx-auto mb-2 text-stone-600 peer-checked:text-teal-600" />
                            <span className="font-semibold text-stone-700">Perro</span>
                          </div>
                        </label>
                        <label className="cursor-pointer">
                          <input type="radio" name="petType" className="peer sr-only" />
                          <div className="p-4 rounded-2xl border-2 border-stone-200 peer-checked:border-teal-500 peer-checked:bg-teal-50 hover:bg-stone-50 transition-all text-center">
                            <Cat className="w-8 h-8 mx-auto mb-2 text-stone-600 peer-checked:text-teal-600" />
                            <span className="font-semibold text-stone-700">Gato</span>
                          </div>
                        </label>
                        <label className="cursor-pointer">
                          <input type="radio" name="petType" className="peer sr-only" />
                          <div className="p-4 rounded-2xl border-2 border-stone-200 peer-checked:border-teal-500 peer-checked:bg-teal-50 hover:bg-stone-50 transition-all text-center">
                            <Rabbit className="w-8 h-8 mx-auto mb-2 text-stone-600 peer-checked:text-teal-600" />
                            <span className="font-semibold text-stone-700">Exótico</span>
                          </div>
                        </label>
                      </div>

                      <h4 className="text-xl font-bold text-stone-800 mb-4">Tipo de Servicio</h4>
                      <select required className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-stone-700 mb-8">
                        <option value="">Selecciona un servicio...</option>
                        <option value="consulta">Consulta General</option>
                        <option value="vacunacion">Vacunación</option>
                        <option value="spa">Spa y Peluquería</option>
                        <option value="especialista">Cita con Especialista</option>
                      </select>
                    </motion.div>
                  )}

                  {/* Step 2: Date & Time */}
                  {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h4 className="text-xl font-bold text-stone-800 mb-6">2. Selecciona Fecha y Hora</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <label className="block text-sm font-bold text-stone-600 mb-2 flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> Fecha
                          </label>
                          <input type="date" required className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-stone-700" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-stone-600 mb-2 flex items-center gap-2">
                            <Clock className="w-4 h-4" /> Hora Preferida
                          </label>
                          <select required className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-stone-700">
                            <option value="">Selecciona una hora...</option>
                            <option value="morning">Mañana (8:00 AM - 12:00 PM)</option>
                            <option value="afternoon">Tarde (12:00 PM - 4:00 PM)</option>
                            <option value="evening">Noche (4:00 PM - 8:00 PM)</option>
                          </select>
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-bold text-stone-800 mb-4">Sede</h4>
                      <select required className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-stone-700 mb-8">
                        <option value="poblado">Sede Principal Poblado</option>
                        <option value="laureles">Sede Laureles</option>
                        <option value="tesoro">Sede CC El Tesoro</option>
                        <option value="envigado">Sede Viva Envigado</option>
                      </select>
                    </motion.div>
                  )}

                  {/* Step 3: User Info */}
                  {step === 3 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h4 className="text-xl font-bold text-stone-800 mb-6">3. Tus Datos</h4>
                      <div className="space-y-4 mb-8">
                        <div>
                          <label className="block text-sm font-bold text-stone-600 mb-2">Nombre Completo</label>
                          <input type="text" required className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-stone-700" placeholder="Ej. Juan Pérez" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-bold text-stone-600 mb-2">Teléfono</label>
                            <input type="tel" required className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-stone-700" placeholder="Tu número celular" />
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-stone-600 mb-2">Correo Electrónico</label>
                            <input type="email" required className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-stone-700" placeholder="ejemplo@correo.com" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-stone-600 mb-2">Nombre de tu mascota</label>
                          <input type="text" required className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-stone-700" placeholder="Ej. Firulais" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex justify-between items-center pt-6 border-t border-stone-100">
                    {step > 1 ? (
                      <button 
                        type="button" 
                        onClick={handlePrev}
                        className="px-6 py-3 rounded-xl font-bold text-stone-500 hover:bg-stone-100 transition-colors"
                      >
                        Atrás
                      </button>
                    ) : <div></div>}
                    
                    <button 
                      type="submit"
                      className="bg-amber-500 text-white hover:bg-amber-600 px-8 py-3 rounded-xl font-extrabold shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
                    >
                      {step === 3 ? 'Confirmar Cita' : 'Continuar'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
