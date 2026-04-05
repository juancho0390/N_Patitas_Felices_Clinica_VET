import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Phone, Calendar, Heart } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: '¡Hola! Soy el asistente virtual de Patitas Felices. 🐾 ¿En qué puedo ayudarte hoy?', sender: 'bot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMessage = { 
      id: Date.now(), 
      text: inputValue, 
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = {
        id: Date.now() + 1,
        text: 'Gracias por tu mensaje. Un miembro de nuestro equipo se pondrá en contacto contigo pronto. Si es una urgencia, por favor llama al +57 604 328 7722. 🏥',
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 20 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 z-40 bg-teal-600 text-white p-5 rounded-[2rem] shadow-2xl shadow-teal-600/30 border-4 border-white transition-all duration-300 group"
          >
            <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-amber-500 rounded-full border-2 border-white animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[400px] bg-white rounded-[2.5rem] shadow-2xl border border-stone-100 overflow-hidden flex flex-col h-[600px] max-h-[80vh]"
          >
            {/* Header */}
            <div className="bg-teal-600 p-6 flex items-center justify-between text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-400/20 rounded-full -ml-12 -mb-12 blur-xl" />
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                  <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md border border-white/10">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-teal-600" />
                </div>
                <div>
                  <h3 className="font-black text-lg tracking-tight">Asistente Virtual</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-teal-100">En línea ahora</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 hover:bg-white/10 rounded-2xl transition-all duration-300 relative z-10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-3 bg-stone-50 border-b border-stone-100 flex gap-2 overflow-x-auto no-scrollbar">
              {[
                { 
                  icon: Phone, 
                  label: 'Urgencias', 
                  color: 'bg-red-100 text-red-600',
                  onClick: () => window.location.href = 'tel:+576045648273'
                },
                { 
                  icon: Calendar, 
                  label: 'Citas', 
                  color: 'bg-teal-100 text-teal-600',
                  onClick: () => {
                    setIsOpen(false);
                    // This assumes the parent can handle opening the appointment modal
                    // Since we can't easily pass props up here without a context or global state,
                    // we'll simulate a click on the "Agendar Cita" button if it exists or just close and let user find it.
                    // A better way would be a custom event.
                    window.dispatchEvent(new CustomEvent('open-appointment-modal'));
                  }
                },
                { 
                  icon: Heart, 
                  label: 'Servicios', 
                  color: 'bg-amber-100 text-amber-600',
                  onClick: () => {
                    setIsOpen(false);
                    const element = document.getElementById('servicios');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#servicios';
                    }
                  }
                }
              ].map((action, idx) => (
                <button 
                  key={idx} 
                  onClick={action.onClick}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all hover:scale-105 active:scale-95 ${action.color}`}
                >
                  <action.icon className="w-3.5 h-3.5" />
                  {action.label}
                </button>
              ))}
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-6 overflow-y-auto bg-stone-50/50 space-y-6">
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${msg.sender === 'user' ? 'bg-amber-500 text-white' : 'bg-white text-teal-600 border border-stone-100'}`}>
                      {msg.sender === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div
                        className={`p-4 rounded-[1.5rem] text-sm font-medium leading-relaxed shadow-sm ${
                          msg.sender === 'user'
                            ? 'bg-stone-900 text-white rounded-tr-none'
                            : 'bg-white text-stone-700 border border-stone-100 rounded-tl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className={`text-[10px] font-black text-stone-400 uppercase tracking-widest ${msg.sender === 'user' ? 'text-right mr-1' : 'ml-1'}`}>
                        {msg.time}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-2xl bg-white border border-stone-100 flex items-center justify-center shadow-sm">
                      <Bot className="w-5 h-5 text-teal-600" />
                    </div>
                    <div className="bg-white border border-stone-100 p-4 rounded-[1.5rem] rounded-tl-none flex gap-1.5">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-stone-100 relative">
              <form onSubmit={handleSend} className="flex items-center gap-3">
                <div className="flex-1 relative group">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Escribe un mensaje..."
                    className="w-full pl-6 pr-12 py-4 bg-stone-50 border-2 border-stone-50 focus:bg-white focus:border-teal-500 rounded-2xl text-sm font-bold transition-all outline-none"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-teal-500 transition-colors">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="p-4 bg-teal-600 text-white rounded-2xl hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-teal-600/20 active:scale-95"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
