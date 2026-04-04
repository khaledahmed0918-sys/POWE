import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Users, Play, Radio, Newspaper, Info } from 'lucide-react';
import { cn } from '../../utils/cn';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute -top-12 px-3 py-1 bg-red-600 text-white text-[10px] font-bold rounded-lg shadow-xl whitespace-nowrap z-50"
          >
            {label}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-600 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={onClick}
        className={cn(
          "p-3 rounded-2xl transition-all duration-300 relative group",
          isActive 
            ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]" 
            : "text-red-100/40 hover:text-red-500 hover:bg-red-600/10"
        )}
      >
        <Icon size={24} strokeWidth={2.5} />
        {isActive && (
          <motion.div 
            layoutId="nav-glow"
            className="absolute inset-0 bg-red-600 blur-xl opacity-20 rounded-full"
          />
        )}
      </button>
    </div>
  );
};

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'الرئيسية' },
    { id: 'members', icon: Users, label: 'الأعضاء' },
    { id: 'videos', icon: Play, label: 'المقاطع' },
    { id: 'streams', icon: Radio, label: 'البثوث' },
    { id: 'news', icon: Newspaper, label: 'الأخبار' },
    { id: 'about', icon: Info, label: 'عن باور' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-fit">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-2 p-2 rounded-[2.5rem] glass-panel border border-red-600/20 shadow-2xl backdrop-blur-2xl bg-black/40"
      >
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeSection === item.id}
            onClick={() => setActiveSection(item.id)}
          />
        ))}
      </motion.div>
    </nav>
  );
};
