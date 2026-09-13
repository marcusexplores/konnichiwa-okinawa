import { ReactNode } from 'react';
import { cn } from '@/src/common/utilities/classname';

interface PageSectionProps {
  children: ReactNode;
  className?: string;
}

export const PageSection = ({ children, className }: PageSectionProps) => {
  return <div className={cn('px-4', className)}>{children}</div>;
};
