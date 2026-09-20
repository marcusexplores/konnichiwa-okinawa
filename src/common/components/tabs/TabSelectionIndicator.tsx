'use client';

import { CSSProperties, useContext, useId } from 'react';
import { TabListStateContext } from 'react-aria-components';

interface TabSelectionIndicatorStyle extends CSSProperties {
  animationTimeline?: string;
}

export function TabSelectionIndicator() {
  const animationId = useId();
  const state = useContext(TabListStateContext);
  if (!state) return null;

  // Generate keyframes for each tab using CSS anchor positioning.
  const keyframes: string[] = [];
  for (const item of state.collection) {
    keyframes.push(`${Math.round((item.index / (state.collection.size - 1)) * 100)}% {
      top: anchor(--tab-${item.key} start);
      left: anchor(--tab-${item.key} start);
      bottom: anchor(--tab-${item.key} end);
      right: anchor(--tab-${item.key} end);
    }`);
  }

  return (
    <>
      <style>
        {`@keyframes ${animationId} {
          ${keyframes.join('\n\n')}
        `}
      </style>
      <div
        className="absolute z-10 rounded-full bg-white mix-blend-difference transition-[inset] contain-strict forced-color-adjust-none"
        style={
          {
            animationName: animationId,
            animationTimingFunction: 'linear',
            animationTimeline: '--scroll',
            animationFillMode: 'both',
          } as TabSelectionIndicatorStyle
        }
      />
    </>
  );
}
