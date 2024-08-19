import React, { useState, useEffect, cloneElement } from 'react';
import { useInView } from 'react-intersection-observer';

// Componente que adiciona classe de visibilidade ao filho quando entra na viewport
const SectionWrapper = ({ children }) => {
  // Hook para detectar quando a seção entra na viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Garante que a animação ocorra apenas uma vez
    threshold: 0.1,    // 10% do componente visível antes de disparar
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // Adiciona classes de visibilidade ao filho
  const childWithProps = cloneElement(children, {
    className: `${children.props.className || ''} ${isVisible ? 'visible' : 'hidden'}`,
  });

  return (
    <div ref={ref}>
      {childWithProps}
    </div>
  );
};

export default SectionWrapper;
