import { ReactNode } from 'react';
import { cn } from '@/src/common/utilities/classname';

interface PageSectionProps {
  children: ReactNode;
  className?: string;
}

export const PageSection = ({ children, className }: PageSectionProps) => {
  return (
    <div
      className={cn(
        'mx-auto max-w-7xl px-4 py-10',
        'sm:px-6 sm:py-12',
        'md:px-10 md:py-16',
        'lg:px-16 lg:py-24',
        '2xl:px-0',
        className,
      )}
    >
      {children}
    </div>
  );
};
