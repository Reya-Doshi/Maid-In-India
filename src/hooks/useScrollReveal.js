import { useEffect, useRef } from 'react';

export function useScrollReveal(options = { threshold: 0.1 }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, options);

    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, [options]);

  return ref;
}
