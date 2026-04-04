import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { MemberCard } from '../ui/MemberCard';
import { OWNER, FOUNDERS, CREATORS } from '../../data/constants';
import { motion } from 'motion/react';

export const Members: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Leadership Section */}
      <section>
        <Container>
          <SectionTitle title="القيادة والمؤسسون" subtitle="العقول المدبرة خلف نجاح كلان باور" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <MemberCard member={OWNER} featured={true} />
            <MemberCard member={FOUNDERS[0]} featured={true} />
          </div>
        </Container>
      </section>

      {/* Creators Section */}
      <section>
        <Container>
          <SectionTitle title="صناع المحتوى" subtitle="نخبة المبدعين في العالم العربي" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CREATORS.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <MemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};
