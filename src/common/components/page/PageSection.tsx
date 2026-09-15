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
        'px-4 sm:px-6 md:px-10 lg:px-16',
        // 'py-5 sm:py-6 md:py-8 lg:py-10',
        'py-10 sm:py-12 md:py-16 lg:py-24',
        // 'pt-10 sm:pt-12 md:pt-16 lg:pt-20',
        className,
      )}
    >
      {children}
    </div>
  );
};
