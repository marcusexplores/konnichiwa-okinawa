import { CSSProperties } from 'react';
import {
  composeRenderProps,
  SelectionIndicator,
  Tab as ReactAriaTab,
  TabProps,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { focusRing } from './utils';

const tabProps = tv({
  extend: focusRing,
  base: 'relative flex cursor-default items-center rounded-full px-3 py-1.5 text-sm font-medium text-gray-900 transition forced-color-adjust-none',
  variants: {
    isDisabled: {
      true: 'selected:text-gray-300 forced-colors:selected:text-[HighlightText] selected:bg-gray-200 forced-colors:selected:bg-[GrayText] text-gray-200 forced-colors:text-[GrayText]',
    },
  },
});

export function Tab(props: TabProps) {
  return (
    <ReactAriaTab
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabProps({ ...renderProps, className: (className || '') + ' tab' }),
      )}
      style={{ anchorName: `--tab-${props.id}` } as CSSProperties}
    >
      {composeRenderProps(props.children, (children) => (
        <>
          {children}
          {/* Graceful fallback in case scroll-timeline is not supported (e.g. Firefox). */}
          <SelectionIndicator className="absolute top-0 left-0 z-10 h-full w-full rounded-full bg-white mix-blend-difference supports-animation-timeline:hidden motion-safe:transition-[translate,width,height]" />
        </>
      ))}
    </ReactAriaTab>
  );
}
