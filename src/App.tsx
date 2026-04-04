import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { PageWrapper } from './components/layout/PageWrapper';
import { Home } from './components/pages/Home';
import { Members } from './components/pages/Members';
import { Videos } from './components/pages/Videos';
import { Streams } from './components/pages/Streams';
import { News } from './components/pages/News';
import { About } from './components/pages/About';
import { AnimatePresence, motion } from 'motion/react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home setActiveSection={setActiveSection} />;
      case 'members': return <Members />;
      case 'videos': return <Videos />;
      case 'streams': return <Streams />;
      case 'news': return <News />;
      case 'about': return <About />;
      default: return <Home setActiveSection={setActiveSection} />;
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[200]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full animate-pulse" />
          <img 
            src="https://i.postimg.cc/Wpddwqtx/IMG-9085.jpg" 
            alt="POWR Logo" 
            className="w-32 h-auto relative z-10 drop-shadow-[0_0_30px_rgba(220,38,38,0.4)] mix-blend-screen"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-red-600 rounded-full mt-8"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white font-sans" dir="rtl">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <AnimatePresence mode="wait">
        <PageWrapper key={activeSection} id={activeSection}>
          {renderSection()}
        </PageWrapper>
      </AnimatePresence>

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        {/* Glassy Crystalline Base */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[50px]" />
        
        {/* Vibrant Color Spots */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-red-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-red-900/30 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-red-500/10 rounded-full blur-[80px]" />
        
        {/* Shimmer / Noise Effect */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        
        {/* Glass Reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

export default App;
