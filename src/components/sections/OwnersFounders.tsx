import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { MemberCard } from '../ui/MemberCard';
import { OWNER, FOUNDERS, DEVELOPER } from '../../data/constants';
import { motion } from 'motion/react';

export const OwnersFounders: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[80px] translate-x-1/2 pointer-events-none" />
      
      <Container>
        <SectionTitle title="القيادة والمؤسسون" subtitle="العقول المدبرة خلف نجاح كلان باور" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Owner Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full"
          >
            <MemberCard member={OWNER} featured={true} />
          </motion.div>
          
          {/* CEO Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full"
          >
            <MemberCard member={FOUNDERS[0]} featured={true} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
