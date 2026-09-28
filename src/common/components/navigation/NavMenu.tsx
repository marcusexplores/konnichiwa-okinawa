'use client';

import { useEffect, useState } from 'react';
import { NavMenuButton } from './NavMenuButton';
import { NavMenuPanel } from './NavMenuPanel';
import { NavRoute } from './types';

interface NavMenuProps {
  routes: NavRoute[];
  className?: string;
}

export const NavMenu = ({ routes, className }: NavMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Synchronize staggered appearance of menu links when opened
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 250); // Wait for dropdown panel to slide down first

    return () => {
      clearTimeout(timer);
      setShowContent(false);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavMenuButton
        isOpen={isOpen}
        onToggle={handleToggle}
        className={className}
      />
      <NavMenuPanel
        routes={routes}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        showContent={showContent}
      />
    </>
  );
};
