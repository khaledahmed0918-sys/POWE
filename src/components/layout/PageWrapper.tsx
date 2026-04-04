import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '../ui/Container';
import { Footer } from './Footer';

interface PageWrapperProps {
  children: React.ReactNode;
  id: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, id }) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen flex flex-col pt-32"
    >
      {/* Page Header (Logo & Title) */}
      <Container className="mb-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full group-hover:bg-red-600/40 transition-all duration-700" />
            <img 
              src="https://i.postimg.cc/Wpddwqtx/IMG-9085.jpg" 
              alt="POWR Logo" 
              className="w-24 md:w-32 h-auto object-contain relative z-10 drop-shadow-[0_0_30px_rgba(220,38,38,0.4)]"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase font-display">
            <span className="text-red-600 text-glow">#POWR</span> CLAN
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full" />
        </motion.div>
      </Container>

      {/* Page Content */}
      <main className="flex-grow pb-24">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};
