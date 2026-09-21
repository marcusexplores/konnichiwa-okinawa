import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '@/src/common/utilities/classname';
import { routes } from '@/src/common/utilities/routes';
import { Poster } from './Poster';
import day1Poster from '@/public/images/poster-day-1.png';
import day2Poster from '@/public/images/poster-day-2.png';
import day11Poster from '@/public/images/poster-day-11.png';

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
            <Link key={item.alt} href={item.link}>
              <div className="w-80 shrink-0 sm:w-120 md:w-150">
                <Poster src={item.src} alt={item.alt} />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const posters = [
  { alt: 'Day 0', src: day1Poster, link: routes.itinerary.day0 },
  { alt: 'Day 1', src: day1Poster, link: routes.itinerary.day1 },
  { alt: 'Day 2', src: day2Poster, link: routes.itinerary.day2 },
  { alt: 'Day 3', src: day2Poster, link: routes.itinerary.day3 },
  { alt: 'Day 4', src: day2Poster, link: routes.itinerary.day4 },
  { alt: 'Day 5', src: day2Poster, link: routes.itinerary.day5 },
  { alt: 'Day 6', src: day2Poster, link: routes.itinerary.day6 },
  { alt: 'Day 7', src: day2Poster, link: routes.itinerary.day7 },
  { alt: 'Day 8', src: day2Poster, link: routes.itinerary.day8 },
  { alt: 'Day 9', src: day2Poster, link: routes.itinerary.day9 },
  { alt: 'Day 10', src: day2Poster, link: routes.itinerary.day10 },
  { alt: 'Day 11', src: day11Poster, link: routes.itinerary.day11 },
  { alt: 'Day 12', src: day11Poster, link: routes.itinerary.day12 },
];
