import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { MemberCard } from '../ui/MemberCard';
import { OWNER, FOUNDERS } from '../../data/constants';

export const OwnersFounders: React.FC = () => {
  return (
    <section className="py-10">
      <Container>
        <SectionTitle title="المؤسس والمسؤولين" />
        
        {/* Owner - Center Top */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-3xl">
            <MemberCard member={OWNER} featured={true} />
          </div>
        </div>
        
        {/* Founders - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {FOUNDERS.map((founder) => (
            <MemberCard key={founder.id} member={founder} />
          ))}
        </div>
      </Container>
    </section>
  );
};
