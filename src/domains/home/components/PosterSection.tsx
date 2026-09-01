import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '@/src/common/utilities/classname';
import { Poster } from './Poster';
import day1Poster from '@/public/images/poster-day-1.png';
import day2Poster from '@/public/images/poster-day-2.png';

const posters = [
  { alt: 'Day 1', src: day1Poster },
  { alt: 'Day 2', src: day2Poster },
  { alt: 'Day 3', src: day2Poster },
  { alt: 'Day 4', src: day2Poster },
  { alt: 'Day 5', src: day2Poster },
  { alt: 'Day 6', src: day2Poster },
];

export const PosterSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const updateDistance = () => {
      if (galleryRef.current) {
        setScrollDistance(galleryRef.current.scrollWidth - window.innerWidth);
      }
    };

    updateDistance();
    window.addEventListener('resize', updateDistance);
    return () => window.removeEventListener('resize', updateDistance);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <motion.div
          ref={galleryRef}
          className={cn(
            'flex gap-10 pr-[calc(50vw-140px)] pl-[calc(50vw-140px)]',
            'sm:gap-25 sm:pr-[calc(50vw-170px)] sm:pl-[calc(50vw-170px)]',
            'md:gap-50 md:pr-[calc(50vw-240px)] md:pl-[calc(50vw-240px)]',
          )}
          style={{ x }}
        >
          {posters.map((item) => (
            <div key={item.alt} className="w-80 shrink-0 sm:w-120 md:w-150">
              <Poster src={item.src} alt={item.alt} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
