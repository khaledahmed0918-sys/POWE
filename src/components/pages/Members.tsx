import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { MemberCard } from '../ui/MemberCard';
import { OWNER, FOUNDERS, CREATORS } from '../../data/constants';
import { motion } from 'motion/react';

export const Members: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Founders Section */}
      <section>
        <Container>
          <SectionTitle title="المؤسسون" subtitle="العقول المدبرة خلف نجاح كلان باور" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <MemberCard member={OWNER} featured={true} />
            <MemberCard member={FOUNDERS[0]} featured={true} />
          </div>
        </Container>
      </section>
    </div>
  );
};
