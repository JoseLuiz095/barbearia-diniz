import React from 'react';
import { useInView } from 'react-intersection-observer';

const SectionWrapper = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // 30% visível antes de acionar o efeito
  });

  return (
    <div ref={ref} className={inView ? 'animate-visible' : 'animate-hidden'}>
      {children}
    </div>
  );
};

export default SectionWrapper;
