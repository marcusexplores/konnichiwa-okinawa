import {
  composeRenderProps,
  TabList as ReactAriaTabList,
  TabListProps,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';

const tabListStyles = tv({
  base: 'bg-surface mx-auto flex gap-1',
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col items-start',
    },
  },
});

export function TabList<T extends object>(props: TabListProps<T>) {
  return (
    <ReactAriaTabList
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabListStyles({ ...renderProps, className }),
      )}
    />
  );
}
