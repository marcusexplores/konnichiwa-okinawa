import { ReactNode } from 'react';
import { cn } from '@/src/common/utilities/classname';

interface PageHeaderProps {
  children: ReactNode;
  className?: string;
}

export const PageHeader = ({ children, className }: PageHeaderProps) => {
  return <div className={cn('mt-24 w-full', className)}>{children}</div>;
};
