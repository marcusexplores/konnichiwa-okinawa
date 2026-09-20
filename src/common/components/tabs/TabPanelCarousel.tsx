'use client';

import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { TabListStateContext } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

interface CarouselStyle extends CSSProperties {
  scrollTimeline?: string;
}

export interface TabPanelCarouselProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function TabPanelCarousel({
  children,
  className,
  style,
  ...props
}: TabPanelCarouselProps) {
  const state = useContext(TabListStateContext);
  const ref = useRef<HTMLDivElement | null>(null);

  // Update the selected tab on scroll end.
  const onScrollEnd = useCallback(() => {
    const el = ref.current;
    if (!el || !state?.collection || !el.offsetWidth) return;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    const item = [...state.collection][index];
    if (item && item.key !== state.selectedKey) {
      state.setSelectedKey(item.key);
    }
  }, [state]);

  // Polyfill for onscrollend in browsers that don't support it (e.g. Safari).
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => {
    const el = ref.current;
    const onScroll = () => {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        onScrollEnd();
      }, 300);
    };

    if (typeof window !== 'undefined' && !('onscrollend' in window)) {
      el?.addEventListener('scroll', onScroll);
      return () => {
        clearTimeout(timeout.current);
        el?.removeEventListener('scroll', onScroll);
      };
    }
  }, [onScrollEnd]);

  // Scroll the selected tab panel into view when tapping on a tab.
  useEffect(() => {
    if (!state?.selectedItem || !ref.current) return;
    const index = state.selectedItem.index;
    if (index === undefined) return;
    const panel = ref.current.children[index] as HTMLElement | undefined;
    if (panel) {
      ref.current.scrollTo({
        left: panel.offsetLeft,
        behavior: 'smooth',
      });
    }
  }, [state?.selectedItem, state?.selectedKey]);

  return (
    <div
      ref={ref}
      className={twMerge(
        'relative flex snap-x snap-mandatory overflow-auto',
        className,
      )}
      style={
        {
          scrollTimeline: '--scroll x',
          scrollbarWidth: 'none',
          ...style,
        } as CarouselStyle
      }
      onScrollEnd={onScrollEnd}
      {...props}
    >
      {children}
    </div>
  );
}
