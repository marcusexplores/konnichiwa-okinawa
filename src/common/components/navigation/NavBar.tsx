'use client';

import { useRef, useState, useSyncExternalStore } from 'react';
import { PiFlag, PiListLight } from 'react-icons/pi';
import type { Variants } from 'motion/react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { cn } from '@/src/common/utilities/classname';
import { navItems } from './route';

const containerVariants: Variants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: 'auto',
    transition: {
      y: { type: 'spring', damping: 18, stiffness: 250 },
      opacity: { duration: 0.3 },
      type: 'spring',
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.05,
      delayChildren: 0.08,
    },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    width: '3rem',
    transition: {
      type: 'spring',
      damping: 24,
      stiffness: 320,
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
};

const logoVariants: Variants = {
  expanded: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', damping: 15 },
  },
  collapsed: {
    opacity: 0,
    scale: 0.7,
    transition: { duration: 0.15 },
  },
};

const itemVariants: Variants = {
  expanded: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', damping: 15 },
  },
  collapsed: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.15 },
  },
};

const collapsedIconVariants: Variants = {
  expanded: { opacity: 0, scale: 0.7, transition: { duration: 0.2 } },
  collapsed: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 300,
      delay: 0.12,
    },
  },
};

const subscribeSmQuery = (callback: () => void) => {
  const mediaQuery = window.matchMedia('(min-width: 640px)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
};

const getSmSnapshot = () => window.matchMedia('(min-width: 640px)').matches;
const getSmServerSnapshot = () => false;

const useIsSmScreen = () => {
  return useSyncExternalStore(
    subscribeSmQuery,
    getSmSnapshot,
    getSmServerSnapshot,
  );
};

export const NavBar = () => {
  const isSmScreen = useIsSmScreen();
  const [isExpanded, setExpanded] = useState(true);
  const [isSmVisible, setSmVisible] = useState(true);

  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, 'change', (currentScrollY) => {
    const previousScrollY = lastScrollY.current;
    const scrollDiff = currentScrollY - previousScrollY;
    lastScrollY.current = currentScrollY;

    // scrollDiff measures both direction and amount of movement between frames
    // scrollDiff > 0: Scrolling downwards
    // scrollDiff < 0: Scrolling upwards

    if (isSmScreen) {
      // sm screen (640px+) behavior:
      // - navbar always stays in the middle
      // - When scrolling up, triggers navbar to expand/show (opens up horizontally)
      // - When scrolling down, navbar hides upwards (does not collapse)
      if (currentScrollY <= 20) {
        setSmVisible(true);
      } else if (scrollDiff > 3 && currentScrollY > 80) {
        setSmVisible(false);
      } else if (scrollDiff < -3) {
        setSmVisible(true);
      }
    } else {
      // Mobile (< 640px) behavior:
      // - at top: expanded in center
      // - scrolling down: collapse to left
      // - scrolling up (not at top): close/collapse to left
      if (currentScrollY <= 20) {
        setExpanded(true);
      } else if (scrollDiff > 3 && currentScrollY > 80) {
        setExpanded(false);
      } else if (scrollDiff < -3 && currentScrollY > 20) {
        setExpanded(false);
      }
    }
  });

  const handleNavClick = (e: React.MouseEvent) => {
    if (!isSmScreen && !isExpanded) {
      e.preventDefault();
      setExpanded(true);
    }
  };

  const isNavExpanded = isSmScreen || isExpanded;
  const isCentered = isSmScreen || isExpanded;

  return (
    <motion.div
      initial={false}
      animate={{
        left: isCentered ? '50%' : '1.5rem',
        x: isCentered ? '-50%' : '0%',
        y: isSmScreen ? (isSmVisible ? 0 : -100) : 0,
        opacity: isSmScreen ? (isSmVisible ? 1 : 0) : 1,
      }}
      transition={{
        left: {
          type: 'spring',
          damping: 24,
          stiffness: 260,
          delay: !isSmScreen && !isExpanded ? 0.22 : 0,
        },
        x: {
          type: 'spring',
          damping: 24,
          stiffness: 260,
          delay: !isSmScreen && !isExpanded ? 0.22 : 0,
        },
        y: { type: 'spring', damping: 20, stiffness: 260 },
        opacity: { duration: 0.25 },
      }}
      className="fixed top-6 z-50"
    >
      <motion.nav
        layout
        animate={isNavExpanded ? 'expanded' : 'collapsed'}
        variants={containerVariants}
        whileHover={!isNavExpanded ? { scale: 1.08 } : {}}
        whileTap={!isNavExpanded ? { scale: 0.95 } : {}}
        onClick={handleNavClick}
        className={cn(
          'relative flex h-12 items-center overflow-hidden rounded-full',
          'bg-neutral-900/60 backdrop-blur-xl',
          'border border-white/12',
          'shadow-[0_8px_32px_0_rgba(0,0,0,0.36),inset_0_1px_0_0_rgba(255,255,255,0.15)]',
          !isNavExpanded && 'cursor-pointer justify-center',
        )}
      >
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          className="flex shrink-0 items-center pr-2 pl-4 font-semibold text-white/90"
        >
          <PiFlag className="h-6 w-6" />
        </motion.div>

        {/* Navigation Items */}
        <motion.div
          className={cn(
            'flex items-center gap-1 pr-4 sm:gap-4',
            !isNavExpanded && 'pointer-events-none',
          )}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              variants={itemVariants}
              onClick={(e) => e.stopPropagation()}
              className="rounded-full px-2 py-1 text-sm font-medium whitespace-nowrap text-neutral-300 transition-colors hover:bg-white/8 hover:text-white"
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Menu Icon */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            variants={collapsedIconVariants}
            animate={isNavExpanded ? 'expanded' : 'collapsed'}
            className="text-white/90"
          >
            <PiListLight className="h-6 w-6" />
          </motion.div>
        </div>
      </motion.nav>
    </motion.div>
  );
};
