import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Calendar, FileText, Activity, LogOut, ChevronRight, Bell } from 'lucide-react';

interface ClientPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientPortal({ isOpen, onClose }: ClientPortalProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('dashboard');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-[#fafaf9] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-stone-200 bg-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-50 text-teal-600 rounded-xl">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-stone-800">Portal de Clientes</h2>
                  <p className="text-sm text-stone-500">Gestiona la salud de tus mascotas</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-stone-400 hover:text-stone-600 hover:bg-stone-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {!isLoggedIn ? (
                <div className="p-8 flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                    <h3 className="text-2xl font-bold text-stone-800 mb-6 text-center">Iniciar Sesión</h3>
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Correo Electrónico</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                          placeholder="tu@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Contraseña</label>
                        <input
                          type="password"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded text-teal-600 focus:ring-teal-500" />
                          <span className="text-stone-600">Recordarme</span>
                        </label>
                        <a href="#" className="text-teal-600 font-medium hover:text-teal-700">¿Olvidaste tu contraseña?</a>
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors shadow-md mt-4"
                      >
                        Ingresar al Portal
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row h-full min-h-[500px]">
                  {/* Sidebar */}
                  <div className="w-full md:w-64 bg-white border-r border-stone-200 p-4 flex flex-col">
                    <div className="flex items-center gap-3 p-3 mb-6 bg-stone-50 rounded-xl">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" alt="User" referrerPolicy="no-referrer" className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <p className="font-bold text-stone-800 text-sm">Ana María G.</p>
                        <p className="text-xs text-stone-500">Cliente Premium</p>
                      </div>
                    </div>
                    
                    <nav className="space-y-1 flex-1">
                      <button
                        onClick={() => setActiveTab('dashboard')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-teal-50 text-teal-700' : 'text-stone-600 hover:bg-stone-50'}`}
                      >
                        <Activity className="w-5 h-5" /> Resumen
                      </button>
                      <button
                        onClick={() => setActiveTab('pets')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'pets' ? 'bg-teal-50 text-teal-700' : 'text-stone-600 hover:bg-stone-50'}`}
                      >
                        <HeartPulse className="w-5 h-5" /> Mis Mascotas
                      </button>
                      <button
                        onClick={() => setActiveTab('appointments')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'appointments' ? 'bg-teal-50 text-teal-700' : 'text-stone-600 hover:bg-stone-50'}`}
                      >
                        <Calendar className="w-5 h-5" /> Citas
                      </button>
                      <button
                        onClick={() => setActiveTab('history')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'history' ? 'bg-teal-50 text-teal-700' : 'text-stone-600 hover:bg-stone-50'}`}
                      >
                        <FileText className="w-5 h-5" /> Historial Médico
                      </button>
                    </nav>

                    <button
                      onClick={handleLogout}
                      className="mt-auto flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-5 h-5" /> Cerrar Sesión
                    </button>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 p-6 bg-[#fafaf9] overflow-y-auto">
                    {activeTab === 'dashboard' && (
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-bold text-stone-800">Hola, Ana María</h3>
                          <button className="p-2 text-stone-400 hover:text-stone-600 bg-white rounded-full shadow-sm border border-stone-100 relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100">
                            <h4 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                              <Calendar className="w-5 h-5 text-teal-600" /> Próxima Cita
                            </h4>
                            <div className="flex items-center gap-4 p-3 bg-stone-50 rounded-xl">
                              <div className="bg-white p-3 rounded-lg shadow-sm text-center min-w-[60px]">
                                <p className="text-xs font-bold text-stone-500 uppercase">Mar</p>
                                <p className="text-xl font-black text-teal-600">15</p>
                              </div>
                              <div>
                                <p className="font-bold text-stone-800">Control Vacunas - Toby</p>
                                <p className="text-sm text-stone-500">10:30 AM • Sede Poblado</p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100">
                            <h4 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                              <Activity className="w-5 h-5 text-amber-500" /> Recordatorios
                            </h4>
                            <ul className="space-y-3">
                              <li className="flex items-center gap-3 text-sm">
                                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                                <span className="text-stone-700">Desparasitación Toby (en 5 días)</span>
                              </li>
                              <li className="flex items-center gap-3 text-sm">
                                <span className="w-2 h-2 bg-stone-300 rounded-full"></span>
                                <span className="text-stone-500">Comprar alimento (Sugerido)</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <h4 className="font-bold text-stone-800 mt-8 mb-4">Tus Mascotas</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-4 cursor-pointer hover:border-teal-200 transition-colors group">
                            <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=150&q=80" alt="Toby" referrerPolicy="no-referrer" className="w-16 h-16 rounded-full object-cover" />
                            <div className="flex-1">
                              <p className="font-bold text-stone-800">Toby</p>
                              <p className="text-xs text-stone-500">Golden Retriever • 3 años</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-stone-300 group-hover:text-teal-500" />
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'pets' && (
                      <div>
                        <h3 className="text-2xl font-bold text-stone-800 mb-6">Mis Mascotas</h3>
                        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
                          <div className="p-6 border-b border-stone-100 flex flex-col md:flex-row gap-6 items-start md:items-center">
                            <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=300&q=80" alt="Toby" referrerPolicy="no-referrer" className="w-32 h-32 rounded-2xl object-cover shadow-md" />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-2xl font-black text-stone-800">Toby</h4>
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Saludable</span>
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                                <div>
                                  <p className="text-stone-500">Especie / Raza</p>
                                  <p className="font-semibold text-stone-800">Perro / Golden Retriever</p>
                                </div>
                                <div>
                                  <p className="text-stone-500">Edad</p>
                                  <p className="font-semibold text-stone-800">3 años, 2 meses</p>
                                </div>
                                <div>
                                  <p className="text-stone-500">Peso</p>
                                  <p className="font-semibold text-stone-800">32.5 kg</p>
                                </div>
                                <div>
                                  <p className="text-stone-500">Microchip</p>
                                  <p className="font-semibold text-stone-800">981020000123456</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-6 bg-stone-50">
                            <h5 className="font-bold text-stone-800 mb-4">Plan de Vacunación</h5>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-stone-200">
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <span className="font-medium text-stone-700">Rabia</span>
                                </div>
                                <span className="text-sm text-stone-500">Aplicada: 10 Ene 2026</span>
                              </div>
                              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-stone-200">
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                  <span className="font-medium text-stone-700">Múltiple (Sextuple)</span>
                                </div>
                                <span className="text-sm text-amber-600 font-medium">Vence: 15 Mar 2026</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'appointments' && (
                      <div>
                        <h3 className="text-2xl font-bold text-stone-800 mb-6">Citas Programadas</h3>
                        <div className="space-y-4">
                          <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="bg-teal-50 p-3 rounded-xl text-center min-w-[70px]">
                                <p className="text-xs font-bold text-teal-600 uppercase">Mar</p>
                                <p className="text-2xl font-black text-teal-700">15</p>
                              </div>
                              <div>
                                <p className="font-bold text-stone-800 text-lg">Control Vacunas - Toby</p>
                                <p className="text-sm text-stone-500 flex items-center gap-1 mt-1">
                                  <Calendar className="w-4 h-4" /> 10:30 AM • Dra. Carolina Rojas
                                </p>
                                <p className="text-sm text-stone-500 flex items-center gap-1 mt-1">
                                  Sede Principal Poblado
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2 w-full sm:w-auto">
                              <button className="flex-1 sm:flex-none px-4 py-2 bg-stone-100 text-stone-600 font-medium rounded-lg hover:bg-stone-200 transition-colors text-sm">Reprogramar</button>
                              <button className="flex-1 sm:flex-none px-4 py-2 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-100 transition-colors text-sm">Cancelar</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'history' && (
                      <div>
                        <h3 className="text-2xl font-bold text-stone-800 mb-6">Historial Médico</h3>
                        <div className="relative border-l-2 border-stone-200 ml-3 space-y-8">
                          <div className="relative pl-6">
                            <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-[9px] top-1 border-4 border-[#fafaf9]"></div>
                            <p className="text-sm font-bold text-teal-600 mb-1">10 Enero 2026</p>
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
                              <h4 className="font-bold text-stone-800">Consulta General y Vacunación</h4>
                              <p className="text-sm text-stone-600 mt-2">Paciente acude para revisión anual. Examen físico sin alteraciones. Se aplica vacuna antirrábica. Peso: 32.5kg.</p>
                              <div className="mt-3 flex gap-2">
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded-md"><FileText className="w-3 h-3" /> Receta.pdf</span>
                              </div>
                            </div>
                          </div>
                          <div className="relative pl-6">
                            <div className="absolute w-4 h-4 bg-stone-300 rounded-full -left-[9px] top-1 border-4 border-[#fafaf9]"></div>
                            <p className="text-sm font-bold text-stone-500 mb-1">15 Agosto 2025</p>
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
                              <h4 className="font-bold text-stone-800">Problema Dermatológico</h4>
                              <p className="text-sm text-stone-600 mt-2">Presenta prurito leve en zona ventral. Se diagnostica dermatitis alérgica por contacto. Se receta champú medicado y crema tópica.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
