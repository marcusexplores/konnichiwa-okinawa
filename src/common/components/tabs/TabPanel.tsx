import {
  composeRenderProps,
  TabPanel as ReactAriaTabPanel,
  TabPanelProps,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { focusRing } from './utils';

const tabPanelStyles = tv({
  extend: focusRing,
  base: 'box-border w-full shrink-0 snap-start snap-always',
});

export function TabPanel(props: TabPanelProps) {
  return (
    <ReactAriaTabPanel
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabPanelStyles({ ...renderProps, className }),
      )}
    />
  );
}
