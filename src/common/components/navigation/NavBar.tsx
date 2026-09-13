'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { cn } from '@/src/common/utilities/classname';
import { navItems } from './route';

export const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, 'change', (currentScrollY) => {
    const previousScrollY = lastScrollY.current;
    const scrollDiff = currentScrollY - previousScrollY;
    lastScrollY.current = currentScrollY;

    // scrollDiff measures direction and amount of movement between frames
    // scrollDiff > 0: Scrolling downwards
    // scrollDiff < 0: Scrolling upwards

    if (currentScrollY <= 20) {
      // When scroll is at the top, navbar hides upwards
      setIsVisible(false);
    } else if (scrollDiff > 3) {
      // When scrolling down, navbar hides upwards
      setIsVisible(false);
    } else if (scrollDiff < -3) {
      // When scrolling up, triggers navbar to expand/show
      setIsVisible(true);
    }
  });

  return (
    <motion.div
      initial={false}
      animate={{
        left: '50%',
        x: '-50%',
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        y: { type: 'spring', damping: 20, stiffness: 260 },
        opacity: { duration: 0.25 },
      }}
      className={cn(
        'fixed top-6 z-50',
        !isVisible && 'pointer-events-none',
      )}
    >
      <nav
        className={cn(
          'relative flex h-12 items-center overflow-hidden rounded-full',
          'bg-neutral-900/60 backdrop-blur-xl',
          'border border-white/12',
          'shadow-[0_8px_32px_0_rgba(0,0,0,0.36),inset_0_1px_0_0_rgba(255,255,255,0.15)]',
        )}
      >
        <div className="flex items-center justify-center gap-1 px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap text-neutral-300 transition-colors hover:bg-white/8 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </motion.div>
  );
};
