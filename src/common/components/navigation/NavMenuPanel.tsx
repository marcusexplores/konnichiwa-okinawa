import { useEffect } from 'react';
import Link from 'next/link';
import { cn } from 'tailwind-variants';
import { NavRoute } from './types';

interface NavMenuPanelProps {
  routes: NavRoute[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showContent: boolean;
  className?: string;
}

export const NavMenuPanel = ({
  routes,
  isOpen,
  setIsOpen,
  showContent,
  className,
}: NavMenuPanelProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-40 flex flex-col bg-slate-950/95 px-8 pt-32 backdrop-blur-xl transition-all duration-500 ease-in-out',
        isOpen
          ? 'pointer-events-auto translate-y-0 opacity-150'
          : 'pointer-events-none -translate-y-full opacity-0',
        className,
      )}
    >
      <nav className="mx-auto flex w-full max-w-md flex-col space-y-6 text-center">
        {routes.map((route, index) => (
          <Link
            key={route.name}
            href={route.path}
            onClick={() => {
              setIsOpen(false);
            }}
            style={{
              transitionDelay: `${index * 80}ms`,
            }}
            className={cn(
              'transform text-2xl font-semibold tracking-wide text-slate-200 transition-all duration-300 hover:text-indigo-400 md:text-3xl',
              showContent
                ? 'translate-x-0 opacity-100'
                : 'translate-x-16 opacity-0', // Fades in from the right
            )}
          >
            {route.name}
          </Link>
        ))}
      </nav>

      {/* Footer info inside menu */}
      <div
        style={{ transitionDelay: '400ms' }}
        className={cn(
          'mt-auto pb-16 text-center text-xs text-slate-500 transition-all duration-500',
          showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        )}
      >
        &copy; 2026 MyBrand Inc. All rights reserved.
      </div>
    </div>
  );
};
