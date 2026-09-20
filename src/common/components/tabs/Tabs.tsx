'use client';

import { CSSProperties } from 'react';
import {
  composeRenderProps,
  Tabs as ReactAriaTabs,
  TabsProps,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';

interface TabsStyle extends CSSProperties {
  timelineScope?: string;
}

const tabsStyles = tv({
  base: 'flex gap-4',
  variants: {
    orientation: {
      horizontal: 'flex-col',
      vertical: 'flex-row',
    },
  },
});

export function Tabs(props: TabsProps) {
  return (
    <ReactAriaTabs
      {...props}
      // Define a scroll timeline at the top level of the tabs component
      // so it can be shared between the TabList and TabPanelCarousel.
      style={
        {
          timelineScope: '--scroll',
          ...(props.style as CSSProperties),
        } as TabsStyle
      }
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabsStyles({ ...renderProps, className }),
      )}
    />
  );
}
