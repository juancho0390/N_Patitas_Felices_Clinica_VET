import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { blogData } from '../data';
import { ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingEmergency from '../components/FloatingEmergency';
import AppointmentModal from '../components/AppointmentModal';
import ClientPortal from '../components/ClientPortal';
import Chatbot from '../components/Chatbot';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const post = blogData.find(p => p.id === id);

  // Find related articles based on category, excluding the current post
  const relatedPosts = blogData
    .filter(p => p.category === post?.category && p.id !== post?.id)
    .slice(0, 3);

  // If not enough related by category, just grab some other recent ones
  if (relatedPosts.length < 3) {
    const additionalPosts = blogData
      .filter(p => p.id !== post?.id && !relatedPosts.find(rp => rp.id === p.id))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...additionalPosts);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!post) {
      navigate('/blog');
    }
  }, [id, post, navigate]);

  if (!post) return null;

  return (
    <div className="bg-[#fafaf9] text-[#292524] font-sans selection:bg-teal-500 selection:text-white min-h-screen flex flex-col">
      <Header 
        onOpenAppointment={() => setIsAppointmentOpen(true)} 
        onOpenPortal={() => setIsPortalOpen(true)}
      />
      
      <main className="flex-grow pt-32 pb-24">
        <article className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link to="/blog" className="inline-flex items-center text-teal-600 font-bold hover:text-teal-800 transition-colors mb-6">
              <ArrowLeft className="w-5 h-5 mr-2" /> Volver al Blog
            </Link>
            
            <div className="flex items-center gap-4 text-stone-500 text-sm font-semibold mb-6">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
              <span className="flex items-center gap-1 text-teal-600 bg-teal-50 px-3 py-1 rounded-full"><Tag className="w-4 h-4" /> {post.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-stone-800 mb-8 leading-tight">
              {post.title}
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-[2rem] overflow-hidden shadow-2xl mb-12 h-[400px] md:h-[500px]"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-lg prose-stone max-w-none prose-headings:font-bold prose-headings:text-stone-800 prose-a:text-teal-600 hover:prose-a:text-teal-700 prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
          />
          
          <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 font-medium">Compartir este artículo:</p>
            <div className="flex gap-4">
              <button className="bg-stone-100 hover:bg-teal-50 text-stone-600 hover:text-teal-600 p-3 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </button>
              <button className="bg-stone-100 hover:bg-teal-50 text-stone-600 hover:text-teal-600 p-3 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </button>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="container mx-auto px-6 mt-24">
            <h2 className="text-3xl font-extrabold text-stone-800 mb-8 text-center">Artículos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost, idx) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-100 transition-all duration-300 flex flex-col"
                >
                  <Link to={`/blog/${relatedPost.id}`} className="flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-teal-700">
                        {relatedPost.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-stone-400 text-xs font-semibold mb-2">{relatedPost.date}</p>
                      <h3 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                        {relatedPost.excerpt}
                      </p>
                      <span className="text-teal-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                        Leer más <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
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
