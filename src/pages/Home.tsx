import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pharmacy from '../components/Pharmacy';
import About from '../components/About';
import Facilities from '../components/Facilities';
import Locations from '../components/Locations';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingEmergency from '../components/FloatingEmergency';
import AppointmentModal from '../components/AppointmentModal';
import ClientPortal from '../components/ClientPortal';
import Chatbot from '../components/Chatbot';

export default function Home() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  return (
    <div className="bg-[#fafaf9] text-[#292524] font-sans selection:bg-teal-500 selection:text-white">
      <Header 
        onOpenAppointment={() => setIsAppointmentOpen(true)} 
        onOpenPortal={() => setIsPortalOpen(true)}
      />
      <main>
        <Hero onOpenAppointment={() => setIsAppointmentOpen(true)} />
        <Services />
        <Pharmacy />
        <About />
        <Facilities />
        <Locations />
        <Team />
        <Testimonials />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingEmergency />
      <AppointmentModal 
        isOpen={isAppointmentOpen} 
        onClose={() => setIsAppointmentOpen(false)} 
      />
      <ClientPortal 
        isOpen={isPortalOpen} 
        onClose={() => setIsPortalOpen(false)} 
      />
      <Chatbot />
    </div>
  );
}
