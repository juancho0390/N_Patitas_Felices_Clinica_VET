import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Calendar, FileText, Activity, LogOut, ChevronRight, Bell, HeartPulse, ShieldCheck, Mail, Lock, Sparkles, PawPrint, Clock, MapPin, Download } from 'lucide-react';

interface ClientPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientPortal({ isOpen, onClose }: ClientPortalProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 1500);
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
            className="absolute inset-0 bg-stone-900/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="relative w-full max-w-5xl bg-[#fafaf9] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-white/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-stone-100 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="p-4 bg-teal-600 text-white rounded-2xl shadow-lg shadow-teal-600/20">
                  <User className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-stone-900 tracking-tight">Portal de Clientes</h2>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-xs font-black uppercase tracking-widest text-stone-400">Acceso Seguro • Patitas Felices</p>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-3 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-2xl transition-all duration-300 relative z-10"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar">
              {!isLoggedIn ? (
                <div className="p-8 sm:p-12 flex flex-col items-center justify-center min-h-[500px] relative">
                  <div className="absolute top-10 left-10 text-teal-100 animate-bounce">
                    <PawPrint className="w-12 h-12 rotate-12" />
                  </div>
                  <div className="absolute bottom-10 right-10 text-amber-100 animate-pulse">
                    <PawPrint className="w-16 h-16 -rotate-12" />
                  </div>

                  <div className="w-full max-w-md bg-white p-10 rounded-[2rem] shadow-xl border border-stone-100 relative z-10">
                    <div className="flex justify-center mb-8">
                      <div className="p-4 bg-amber-50 rounded-2xl">
                        <ShieldCheck className="w-10 h-10 text-amber-600" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-black text-stone-900 mb-2 text-center tracking-tight">¡Bienvenido de nuevo!</h3>
                    <p className="text-stone-500 text-center mb-8 font-medium">Ingresa tus credenciales para acceder</p>
                    
                    <form onSubmit={handleLogin} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-stone-400 ml-1">Correo Electrónico</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-300" />
                          <input
                            type="email"
                            required
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-stone-50 border-2 border-stone-50 focus:bg-white focus:border-teal-500 outline-none transition-all font-bold"
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-stone-400 ml-1">Contraseña</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-300" />
                          <input
                            type="password"
                            required
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-stone-50 border-2 border-stone-50 focus:bg-white focus:border-teal-500 outline-none transition-all font-bold"
                            placeholder="••••••••"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer group">
                          <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-stone-200 text-teal-600 focus:ring-teal-500 transition-all" />
                          <span className="text-stone-600 font-bold group-hover:text-stone-900">Recordarme</span>
                        </label>
                        <a 
                          href="#" 
                          onClick={(e) => e.preventDefault()}
                          className="text-teal-600 font-black uppercase tracking-widest text-[10px] hover:text-teal-700 transition-colors"
                        >
                          ¿Olvidaste tu contraseña?
                        </a>
                      </div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-teal-600 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-600/20 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Ingresar al Portal
                            <ChevronRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                    
                    <div className="mt-8 pt-8 border-t border-stone-100 text-center">
                      <p className="text-stone-500 text-sm font-medium">¿Aún no tienes cuenta? <a href="#" onClick={(e) => e.preventDefault()} className="text-teal-600 font-bold hover:underline">Regístrate aquí</a></p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row h-full min-h-[600px]">
                  {/* Sidebar */}
                  <div className="w-full md:w-72 bg-white border-r border-stone-100 p-8 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-teal-50/50 to-transparent opacity-50" />
                    
                    <div className="flex items-center gap-4 p-4 mb-10 bg-stone-50 rounded-[1.5rem] border border-stone-100 relative z-10">
                      <div className="relative">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" alt="User" referrerPolicy="no-referrer" className="w-12 h-12 rounded-2xl object-cover shadow-sm" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                      </div>
                      <div>
                        <p className="font-black text-stone-900 text-sm tracking-tight">Ana María G.</p>
                        <div className="flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-500" />
                          <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Cliente Premium</p>
                        </div>
                      </div>
                    </div>
                    
                    <nav className="space-y-2 flex-1 relative z-10">
                      {[
                        { id: 'dashboard', icon: Activity, label: 'Resumen' },
                        { id: 'pets', icon: HeartPulse, label: 'Mis Mascotas' },
                        { id: 'appointments', icon: Calendar, label: 'Mis Citas' },
                        { id: 'history', icon: FileText, label: 'Historial Médico' }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all duration-300 ${activeTab === tab.id ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/20 scale-[1.02]' : 'text-stone-500 hover:bg-stone-50 hover:text-stone-900'}`}
                        >
                          <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-white' : 'text-stone-400'}`} />
                          {tab.label}
                        </button>
                      ))}
                    </nav>

                    <button
                      onClick={handleLogout}
                      className="mt-8 flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-black uppercase tracking-widest text-red-500 hover:bg-red-50 transition-all duration-300 relative z-10"
                    >
                      <LogOut className="w-5 h-5" /> Cerrar Sesión
                    </button>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 p-8 sm:p-10 bg-[#fafaf9] overflow-y-auto no-scrollbar">
                    {activeTab === 'dashboard' && (
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                          <div>
                            <h3 className="text-4xl font-black text-stone-900 tracking-tight">¡Hola, Ana María! 👋</h3>
                            <p className="text-stone-500 font-medium mt-1">Hoy es un gran día para cuidar a tus mejores amigos.</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button className="p-4 text-stone-400 hover:text-teal-600 bg-white rounded-2xl shadow-sm border border-stone-100 relative transition-all hover:scale-110">
                              <Bell className="w-6 h-6" />
                              <span className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                            </button>
                            <button 
                              onClick={() => {
                                onClose();
                                window.dispatchEvent(new CustomEvent('open-appointment-modal'));
                              }}
                              className="px-6 py-4 bg-teal-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-all hover:scale-105 active:scale-95"
                            >
                              Nueva Cita
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                            <h4 className="font-black text-stone-900 mb-6 flex items-center gap-3 relative z-10">
                              <div className="p-2 bg-teal-100 text-teal-600 rounded-lg">
                                <Calendar className="w-5 h-5" />
                              </div>
                              Próxima Cita
                            </h4>
                            <div className="flex items-center gap-6 p-6 bg-stone-50 rounded-[1.5rem] border border-stone-100 relative z-10">
                              <div className="bg-white p-4 rounded-2xl shadow-sm text-center min-w-[80px] border border-stone-100">
                                <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">Marzo</p>
                                <p className="text-3xl font-black text-teal-600">15</p>
                              </div>
                              <div>
                                <p className="text-xl font-black text-stone-900 tracking-tight">Control Vacunas • Toby</p>
                                <div className="flex flex-col gap-1 mt-2">
                                  <p className="text-sm text-stone-500 flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-stone-400" /> 10:30 AM
                                  </p>
                                  <p className="text-sm text-stone-500 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-stone-400" /> Sede Poblado
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                            <h4 className="font-black text-stone-900 mb-6 flex items-center gap-3 relative z-10">
                              <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                                <Activity className="w-5 h-5" /> Recordatorios
                              </div>
                            </h4>
                            <div className="space-y-4 relative z-10">
                              {[
                                { label: 'Desparasitación Toby', time: 'en 5 días', color: 'bg-amber-500' },
                                { label: 'Comprar alimento (Sugerido)', time: 'Pronto', color: 'bg-stone-300' }
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl border border-stone-100">
                                  <div className="flex items-center gap-3">
                                    <div className={`w-2 h-2 ${item.color} rounded-full`} />
                                    <span className="text-sm font-bold text-stone-700">{item.label}</span>
                                  </div>
                                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">{item.time}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <h4 className="text-2xl font-black text-stone-900 tracking-tight">Tus Mascotas</h4>
                            <button 
                              onClick={() => setActiveTab('pets')}
                              className="text-teal-600 font-black uppercase tracking-widest text-[10px] hover:text-teal-700 transition-colors"
                            >
                              Ver todas
                            </button>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <motion.div 
                              whileHover={{ y: -5 }}
                              className="bg-white p-6 rounded-[2rem] shadow-sm border border-stone-100 flex items-center gap-6 cursor-pointer hover:border-teal-200 transition-all group"
                            >
                              <div className="relative">
                                <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=150&q=80" alt="Toby" referrerPolicy="no-referrer" className="w-20 h-20 rounded-[1.5rem] object-cover shadow-md transition-transform group-hover:scale-105" />
                                <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-xl shadow-sm border border-stone-100">
                                  <PawPrint className="w-4 h-4 text-teal-600" />
                                </div>
                              </div>
                              <div className="flex-1">
                                <p className="text-xl font-black text-stone-900 tracking-tight">Toby</p>
                                <p className="text-xs font-black uppercase tracking-widest text-stone-400 mt-1">Golden Retriever • 3 años</p>
                                <div className="flex items-center gap-2 mt-3">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                  <span className="text-[10px] font-black uppercase tracking-widest text-green-600">Saludable</span>
                                </div>
                              </div>
                              <div className="p-3 bg-stone-50 rounded-xl group-hover:bg-teal-50 transition-colors">
                                <ChevronRight className="w-5 h-5 text-stone-300 group-hover:text-teal-600" />
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'pets' && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                        <div className="flex items-center justify-between mb-8">
                          <h3 className="text-4xl font-black text-stone-900 tracking-tight">Mis Mascotas</h3>
                          <button className="px-6 py-3 bg-amber-500 text-white font-black uppercase tracking-widest text-[10px] rounded-xl shadow-lg shadow-amber-500/20 hover:bg-amber-600 transition-all active:scale-95">
                            + Añadir Mascota
                          </button>
                        </div>
                        
                        <div className="bg-white rounded-[2.5rem] shadow-sm border border-stone-100 overflow-hidden">
                          <div className="p-8 sm:p-10 border-b border-stone-100 flex flex-col lg:flex-row gap-10 items-start lg:items-center relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-30" />
                            <div className="relative group">
                              <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80" alt="Toby" referrerPolicy="no-referrer" className="w-48 h-48 rounded-[2rem] object-cover shadow-xl transition-transform group-hover:scale-105" />
                              <button className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-stone-100 text-teal-600 hover:text-teal-700 transition-colors">
                                <PawPrint className="w-6 h-6" />
                              </button>
                            </div>
                            <div className="flex-1 relative z-10">
                              <div className="flex items-center justify-between mb-6">
                                <div>
                                  <h4 className="text-5xl font-black text-stone-900 tracking-tight">Toby</h4>
                                  <div className="flex items-center gap-2 mt-2">
                                    <span className="px-4 py-1.5 bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-green-200">Estado: Saludable</span>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <button className="p-3 bg-stone-50 text-stone-400 hover:text-stone-900 rounded-xl transition-colors">
                                    <FileText className="w-5 h-5" />
                                  </button>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                {[
                                  { label: 'Especie / Raza', value: 'Perro / Golden Retriever' },
                                  { label: 'Edad', value: '3 años, 2 meses' },
                                  { label: 'Peso', value: '32.5 kg' },
                                  { label: 'Microchip', value: '981020000123456' }
                                ].map((info, idx) => (
                                  <div key={idx}>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">{info.label}</p>
                                    <p className="font-bold text-stone-800 leading-tight">{info.value}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="p-8 sm:p-10 bg-stone-50/50">
                            <div className="flex items-center justify-between mb-8">
                              <h5 className="text-xl font-black text-stone-900 tracking-tight">Plan de Vacunación</h5>
                              <button className="text-teal-600 font-black uppercase tracking-widest text-[10px] hover:underline">Descargar Carnet</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {[
                                { label: 'Rabia', date: '10 Ene 2026', status: 'Aplicada', color: 'bg-green-500' },
                                { label: 'Múltiple (Sextuple)', date: '15 Mar 2026', status: 'Vence pronto', color: 'bg-amber-500' }
                              ].map((vac, idx) => (
                                <div key={idx} className="flex items-center justify-between p-6 bg-white rounded-[1.5rem] border border-stone-200 shadow-sm transition-all hover:shadow-md">
                                  <div className="flex items-center gap-4">
                                    <div className={`w-3 h-3 ${vac.color} rounded-full shadow-sm`} />
                                    <div>
                                      <span className="font-black text-stone-900 text-sm tracking-tight">{vac.label}</span>
                                      <p className="text-xs font-medium text-stone-500 mt-0.5">{vac.status}: {vac.date}</p>
                                    </div>
                                  </div>
                                  <div className="p-2 bg-stone-50 rounded-lg">
                                    <ShieldCheck className={`w-5 h-5 ${vac.status === 'Aplicada' ? 'text-green-500' : 'text-amber-500'}`} />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'appointments' && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                        <div className="flex items-center justify-between mb-8">
                          <h3 className="text-4xl font-black text-stone-900 tracking-tight">Mis Citas</h3>
                          <button 
                            onClick={() => {
                              onClose();
                              window.dispatchEvent(new CustomEvent('open-appointment-modal'));
                            }}
                            className="px-8 py-4 bg-teal-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-all active:scale-95"
                          >
                            Agendar Nueva Cita
                          </button>
                        </div>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between relative overflow-hidden group transition-all hover:shadow-md">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                            <div className="flex items-center gap-8 relative z-10">
                              <div className="bg-teal-50 p-6 rounded-[2rem] text-center min-w-[100px] border border-teal-100">
                                <p className="text-xs font-black text-teal-600 uppercase tracking-widest mb-1">Marzo</p>
                                <p className="text-4xl font-black text-teal-700">15</p>
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="px-3 py-1 bg-teal-100 text-teal-700 text-[10px] font-black uppercase tracking-widest rounded-full">Confirmada</span>
                                </div>
                                <p className="font-black text-stone-900 text-2xl tracking-tight">Control Vacunas • Toby</p>
                                <div className="flex flex-wrap gap-6 mt-4">
                                  <p className="text-sm font-bold text-stone-500 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-stone-300" /> 10:30 AM
                                  </p>
                                  <p className="text-sm font-bold text-stone-500 flex items-center gap-2">
                                    <User className="w-5 h-5 text-stone-300" /> Dra. Carolina Rojas
                                  </p>
                                  <p className="text-sm font-bold text-stone-500 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-stone-300" /> Sede Poblado
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-3 w-full lg:w-auto relative z-10">
                              <button className="flex-1 lg:flex-none px-6 py-4 bg-stone-100 text-stone-900 font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-stone-200 transition-all active:scale-95">Reprogramar</button>
                              <button className="flex-1 lg:flex-none px-6 py-4 bg-red-50 text-red-600 font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-red-100 transition-all active:scale-95">Cancelar</button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'history' && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                        <div className="flex items-center justify-between mb-10">
                          <h3 className="text-4xl font-black text-stone-900 tracking-tight">Historial Médico</h3>
                          <div className="flex gap-3">
                            <button className="p-3 bg-white text-stone-400 hover:text-stone-900 rounded-xl shadow-sm border border-stone-100 transition-all">
                              <Download className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        <div className="relative border-l-4 border-stone-100 ml-6 space-y-12 pb-10">
                          {[
                            {
                              date: '10 Enero 2026',
                              title: 'Consulta General y Vacunación',
                              content: 'Paciente acude para revisión anual. Examen físico sin alteraciones. Se aplica vacuna antirrábica. Peso: 32.5kg.',
                              files: ['Receta_Toby_2026.pdf'],
                              active: true
                            },
                            {
                              date: '15 Agosto 2025',
                              title: 'Problema Dermatológico',
                              content: 'Presenta prurito leve en zona ventral. Se diagnostica dermatitis alérgica por contacto. Se receta champú medicado y crema tópica.',
                              files: [],
                              active: false
                            }
                          ].map((item, idx) => (
                            <div key={idx} className="relative pl-10 group">
                              <div className={`absolute w-6 h-6 rounded-full -left-[14px] top-1 border-4 border-[#fafaf9] transition-all duration-300 ${item.active ? 'bg-teal-500 scale-125' : 'bg-stone-300'}`}></div>
                              <p className={`text-[10px] font-black uppercase tracking-widest mb-2 transition-colors ${item.active ? 'text-teal-600' : 'text-stone-400'}`}>{item.date}</p>
                              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 transition-all group-hover:shadow-md group-hover:border-teal-100">
                                <h4 className="text-2xl font-black text-stone-900 tracking-tight mb-4">{item.title}</h4>
                                <p className="text-stone-600 font-medium leading-relaxed">{item.content}</p>
                                {item.files.length > 0 && (
                                  <div className="mt-6 flex flex-wrap gap-3">
                                    {item.files.map((file, fIdx) => (
                                      <button key={fIdx} className="inline-flex items-center gap-2 px-4 py-2 bg-stone-50 text-stone-600 text-xs font-bold rounded-xl border border-stone-100 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-100 transition-all">
                                        <FileText className="w-4 h-4" /> {file}
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
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
