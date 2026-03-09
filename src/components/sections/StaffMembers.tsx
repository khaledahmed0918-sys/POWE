import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { MemberCard } from '../ui/MemberCard';
import { STAFF } from '../../data/constants';

export const StaffMembers: React.FC = () => {
  return (
    <section className="py-10">
      <Container>
        <SectionTitle title="طاقم الإدارة" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STAFF.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
};
