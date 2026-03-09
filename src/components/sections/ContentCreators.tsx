import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { MemberCard } from '../ui/MemberCard';
import { CREATORS } from '../../data/constants';

export const ContentCreators: React.FC = () => {
  return (
    <section className="py-10">
      <Container>
        <SectionTitle title="صنّاع المحتوى" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CREATORS.map((creator) => (
            <MemberCard key={creator.id} member={creator} />
          ))}
        </div>
      </Container>
    </section>
  );
};
