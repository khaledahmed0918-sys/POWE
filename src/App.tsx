import React, { useEffect } from 'react';
import { Hero } from './components/sections/Hero';
import { ClanInfo } from './components/sections/ClanInfo';
import { OwnersFounders } from './components/sections/OwnersFounders';
import { ContentCreators } from './components/sections/ContentCreators';
import { POWRSocials } from './components/sections/POWRSocials';
import { Footer } from './components/layout/Footer';

function App() {
  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-red-600/40 selection:text-white font-sans" dir="rtl">
      {/* Dynamic Background Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-atmosphere opacity-40" />
      </div>

      <main className="relative z-10 flex flex-col gap-32 pb-32">
        <Hero />
        <ClanInfo />
        <OwnersFounders />
        <ContentCreators />
        <POWRSocials />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
