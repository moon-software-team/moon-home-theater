/** Dependencies */
import React from 'react';
import { useIcon, UseIconProps } from './use-icon';
import icons from './icons';
import { dp } from '@moon/theme';

/** Alias an interface for the component props */
export interface IconProps extends UseIconProps {
  name: keyof typeof icons;
}

/** Export the component */
const Icon: React.FC<IconProps> = (props: IconProps) => {
  /** Use the component hook */
  const { size = 24, getBaseProps } = useIcon({ ...props });

  /** Get the icon element from the list */
  const IconElement = icons[props.name];

  /** Return the component */
  return IconElement({ ...getBaseProps(), width: dp(size), height: dp(size) });
};

/** Set the display name of the component */
Icon.displayName = 'Moon.Icon';

/** Export the component as default */
export default Icon;
