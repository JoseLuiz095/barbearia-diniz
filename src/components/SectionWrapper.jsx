import React, { useState, useEffect, cloneElement } from 'react';
import { useInView } from 'react-intersection-observer';

const SectionWrapper = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

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
