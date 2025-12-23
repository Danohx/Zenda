import { useEffect, useRef } from 'react';

export const useRevealStagger = (
  selector: string,
  delay = 120
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(
      container.querySelectorAll(selector)
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('is-visible');
          }, index * delay);
        });

        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [selector, delay]);

  return containerRef;
};
