/** Dependencies */
import React from 'react';
import { useIconFrame, UseIconFrameProps } from './use-icon-frame';
import icons from './icons';

/** Alias an interface for the component props */
export interface IconFrameProps extends UseIconFrameProps {
  name: keyof typeof icons;
}

/** Export the component */
const IconFrame: React.FC<IconFrameProps> = (props: IconFrameProps) => {
  /** Use the component hook */
  const { getBaseProps, getIconProps } = useIconFrame({ ...props });

  /** Get the icon element from the list */
  const IconElement = icons[props.name];

  /** Return the component */
  return (
    <div role='cell' {...getBaseProps()}>
      {IconElement({ ...getIconProps() })}
    </div>
  );
};

/** Set the display name of the component */
IconFrame.displayName = 'Moon.IconFrame';

/** Export the component as default */
export default IconFrame;
