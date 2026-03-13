import { Stethoscope, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10 border-t-4 border-teal-600">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-teal-600 text-white p-2 rounded-xl">
                <Stethoscope className="h-6 w-6" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Patitas<span className="text-teal-500">Felices</span>
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Medicina veterinaria de excelencia con un trato humano y compasivo. Cuidamos a tu familia como si fuera la nuestra.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-stone-800 p-3 rounded-full hover:bg-teal-600 hover:text-white transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-stone-800 p-3 rounded-full hover:bg-teal-600 hover:text-white transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-stone-800 p-3 rounded-full hover:bg-teal-600 hover:text-white transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="/#inicio" className="hover:text-teal-400 transition-colors">Inicio</a></li>
              <li><a href="/#servicios" className="hover:text-teal-400 transition-colors">Nuestros Servicios</a></li>
              <li><a href="/#farmacia" className="hover:text-teal-400 transition-colors">Tienda y Farmacia</a></li>
              <li><a href="/#quienes-somos" className="hover:text-teal-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="/#sedes" className="hover:text-teal-400 transition-colors">Sedes y Horarios</a></li>
              <li><a href="/#nosotros" className="hover:text-teal-400 transition-colors">Equipo Médico</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>Cl 10 #43a-15, El Poblado<br/>Medellín, Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                <span>+57 604 564 82 74</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                <span>contacto@patitasfelices.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Boletín Informativo</h4>
            <p className="text-stone-400 mb-4">Suscríbete para recibir consejos de salud y noticias sobre nuestras campañas de vacunación.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="bg-stone-800 border border-stone-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
              />
              <button className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-4 rounded-xl transition-colors">
                Suscribirme
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} Clínica Veterinaria Patitas Felices. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-stone-500">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
