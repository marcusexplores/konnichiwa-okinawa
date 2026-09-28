import { ReactNode } from 'react';
import { tv } from 'tailwind-variants';
import { PAGE_SECTION_TYPE } from './constants';

interface PageSectionProps {
  children: ReactNode;
  type?: PageSectionType;
  className?: string;
}

export const PageSection = ({
  children,
  type,
  className,
}: PageSectionProps) => {
  return <div className={container({ type, className })}>{children}</div>;
};

type PageSectionType =
  (typeof PAGE_SECTION_TYPE)[keyof typeof PAGE_SECTION_TYPE];

const container = tv({
  base: [
    'mx-auto max-w-7xl',
    'px-4',
    'sm:px-6',
    'md:px-10',
    'lg:px-16',
    '2xl:px-0',
  ],
  variants: {
    type: {
      [PAGE_SECTION_TYPE.STANDARD]: [
        'pt-10',
        'sm:pt-12',
        'md:pt-16',
        'lg:pt-24',
      ],
      [PAGE_SECTION_TYPE.HEADER_BANNER]: ['px-0', 'sm:px-0', 'md:pt-19'],
    },
  },
  defaultVariants: {
    type: PAGE_SECTION_TYPE.STANDARD,
  },
});
