import React, { useEffect } from 'react';
import { Hero } from './components/sections/Hero';
import { ClanInfo } from './components/sections/ClanInfo';
import { OwnersFounders } from './components/sections/OwnersFounders';
import { StaffMembers } from './components/sections/StaffMembers';
import { ContentCreators } from './components/sections/ContentCreators';
import { POWRSocials } from './components/sections/POWRSocials';
import { Footer } from './components/layout/Footer';

function App() {
  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-x-hidden selection:bg-red-600/40 selection:text-white bg-atmosphere font-sans" dir="rtl">
      {/* Noise overlay for texture */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      <main className="relative z-10 flex flex-col gap-24 pb-24">
        <Hero />
        <ClanInfo />
        <OwnersFounders />
        <StaffMembers />
        <ContentCreators />
        <POWRSocials />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
