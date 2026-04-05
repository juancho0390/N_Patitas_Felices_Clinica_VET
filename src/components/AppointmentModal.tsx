import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, CheckCircle2, Dog, Cat, Rabbit, ArrowRight, Sparkles, Heart, User, Phone, Mail, PawPrint } from 'lucide-react';

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
    }, 5000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden z-10 flex flex-col my-auto"
          >
            {/* Header */}
            <div className="bg-teal-600 p-8 text-white relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-[-20%] left-[-10%] w-48 h-48 bg-teal-400/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black tracking-tight">Agendar Cita</h3>
                    <p className="text-teal-100 font-medium text-sm mt-1">Tu mascota en las mejores manos</p>
                  </div>
                </div>
                <button 
                  onClick={onClose}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            {!submitted && (
              <div className="flex bg-stone-100 h-2 relative">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  className="bg-amber-500 h-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                />
                <div className="absolute top-0 left-1/3 w-px h-full bg-white/30" />
                <div className="absolute top-0 left-2/3 w-px h-full bg-white/30" />
              </div>
            )}

            {/* Content */}
            <div className="p-10">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="relative mb-10">
                    <div className="absolute inset-0 bg-teal-100 rounded-full scale-150 blur-3xl opacity-50" />
                    <div className="w-24 h-24 bg-teal-500 text-white rounded-[2rem] flex items-center justify-center mx-auto relative z-10 shadow-2xl shadow-teal-500/30 rotate-6">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                  </div>
                  <h4 className="text-4xl font-black text-stone-800 mb-6 tracking-tight">¡Cita Confirmada!</h4>
                  <p className="text-stone-600 text-xl font-medium max-w-md mx-auto leading-relaxed">Hemos enviado los detalles a tu correo. ¡Estamos ansiosos por ver a tu peludito!</p>
                  
                  <div className="mt-12 flex justify-center gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
                  
                  <AnimatePresence mode="wait">
                    {/* Step 1: Pet & Service */}
                    {step === 1 && (
                      <motion.div 
                        key="step1"
                        initial={{ opacity: 0, x: 20 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-black text-sm">1</div>
                            <h4 className="text-2xl font-black text-stone-800 tracking-tight">¿Quién nos visita?</h4>
                          </div>
                          <div className="grid grid-cols-3 gap-6">
                            {[
                              { id: 'dog', label: 'Perro', icon: Dog },
                              { id: 'cat', label: 'Gato', icon: Cat },
                              { id: 'exo', label: 'Exótico', icon: Rabbit }
                            ].map((pet) => (
                              <label key={pet.id} className="cursor-pointer group">
                                <input type="radio" name="petType" className="peer sr-only" defaultChecked={pet.id === 'dog'} />
                                <div className="p-6 rounded-[2rem] border-2 border-stone-100 peer-checked:border-teal-500 peer-checked:bg-teal-50 hover:bg-stone-50 transition-all duration-500 text-center shadow-sm hover:shadow-xl group-active:scale-95">
                                  <pet.icon className="w-10 h-10 mx-auto mb-3 text-stone-400 peer-checked:text-teal-600 group-hover:scale-110 transition-transform duration-500" />
                                  <span className="font-black text-stone-700 text-sm uppercase tracking-widest">{pet.label}</span>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-black text-stone-800 mb-4 flex items-center gap-2 tracking-tight">
                            <Sparkles className="w-5 h-5 text-amber-500" />
                            Tipo de Servicio
                          </h4>
                          <div className="relative">
                            <select required className="w-full px-6 py-5 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:outline-none focus:border-teal-500 text-stone-700 font-bold appearance-none transition-all duration-300">
                              <option value="">Selecciona un servicio...</option>
                              <option value="consulta">Consulta General</option>
                              <option value="vacunacion">Vacunación</option>
                              <option value="spa">Spa y Peluquería</option>
                              <option value="especialista">Cita con Especialista</option>
                            </select>
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                              <ArrowRight className="w-5 h-5 rotate-90" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Date & Time */}
                    {step === 2 && (
                      <motion.div 
                        key="step2"
                        initial={{ opacity: 0, x: 20 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-black text-sm">2</div>
                            <h4 className="text-2xl font-black text-stone-800 tracking-tight">¿Cuándo y dónde?</h4>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-xs font-black text-stone-400 uppercase tracking-widest flex items-center gap-2 ml-2">
                                <Calendar className="w-3 h-3" /> Fecha de visita
                              </label>
                              <input type="date" required className="w-full px-6 py-5 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:outline-none focus:border-teal-500 text-stone-700 font-bold transition-all duration-300" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs font-black text-stone-400 uppercase tracking-widest flex items-center gap-2 ml-2">
                                <Clock className="w-3 h-3" /> Jornada preferida
                              </label>
                              <select required className="w-full px-6 py-5 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:outline-none focus:border-teal-500 text-stone-700 font-bold transition-all duration-300">
                                <option value="">Selecciona jornada...</option>
                                <option value="morning">Mañana (8:00 AM - 12:00 PM)</option>
                                <option value="afternoon">Tarde (12:00 PM - 4:00 PM)</option>
                                <option value="evening">Noche (4:00 PM - 8:00 PM)</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-xs font-black text-stone-400 uppercase tracking-widest flex items-center gap-2 ml-2">
                            Sede de atención
                          </label>
                          <select required className="w-full px-6 py-5 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:outline-none focus:border-teal-500 text-stone-700 font-bold transition-all duration-300">
                            <option value="poblado">Sede Principal Poblado</option>
                            <option value="laureles">Sede Laureles</option>
                            <option value="tesoro">Sede CC El Tesoro</option>
                            <option value="envigado">Sede Viva Envigado</option>
                          </select>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: User Info */}
                    {step === 3 && (
                      <motion.div 
                        key="step3"
                        initial={{ opacity: 0, x: 20 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-black text-sm">3</div>
                            <h4 className="text-2xl font-black text-stone-800 tracking-tight">Tus datos de contacto</h4>
                          </div>
                          <div className="space-y-6">
                            <div className="relative group">
                              <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-300 group-focus-within:text-teal-500 transition-colors" />
                              <input type="text" required className="w-full pl-16 pr-6 py-5 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:outline-none focus:border-teal-500 text-stone-700 font-bold transition-all duration-300" placeholder="Nombre completo del tutor" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="relative group">
                                <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-300 group-focus-within:text-teal-500 transition-colors" />
                                <input type="tel" required className="w-full pl-16 pr-6 py-5 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:outline-none focus:border-teal-500 text-stone-700 font-bold transition-all duration-300" placeholder="Teléfono" />
                              </div>
                              <div className="relative group">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-300 group-focus-within:text-teal-500 transition-colors" />
                                <input type="email" required className="w-full pl-16 pr-6 py-5 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:outline-none focus:border-teal-500 text-stone-700 font-bold transition-all duration-300" placeholder="Correo electrónico" />
                              </div>
                            </div>
                            <div className="relative group">
                              <PawPrint className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-300 group-focus-within:text-teal-500 transition-colors" />
                              <input type="text" required className="w-full pl-16 pr-6 py-5 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:outline-none focus:border-teal-500 text-stone-700 font-bold transition-all duration-300" placeholder="Nombre de tu mascota" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer Actions */}
                  <div className="flex justify-between items-center pt-10 mt-10 border-t border-stone-100">
                    {step > 1 ? (
                      <button 
                        type="button" 
                        onClick={handlePrev}
                        className="px-8 py-4 rounded-2xl font-black text-stone-400 hover:text-stone-800 hover:bg-stone-50 transition-all duration-300 uppercase tracking-widest text-xs"
                      >
                        Atrás
                      </button>
                    ) : <div />}
                    
                    <button 
                      type="submit"
                      className="group relative overflow-hidden bg-amber-500 text-white px-10 py-5 rounded-[1.5rem] font-black text-lg shadow-xl shadow-amber-500/30 hover:bg-amber-600 hover:-translate-y-1 active:translate-y-0 transition-all duration-500"
                    >
                      <span className="flex items-center gap-3">
                        {step === 3 ? 'Confirmar Cita' : 'Continuar'}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Bottom decorative paw */}
            <div className="absolute bottom-[-20px] right-[-20px] opacity-5 pointer-events-none">
              <PawPrint className="w-40 h-40 rotate-12" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
