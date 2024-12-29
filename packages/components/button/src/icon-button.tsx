/** Dependencies */
import React from 'react';
import { useIconButton, UseIconButtonProps } from './use-icon-button';
import { Icon, IconNameList } from '@moon/icon';

/** Alias an interface for the component props */
export interface IconButtonProps extends UseIconButtonProps {
  /**
   * The icon of the button
   */
  icon: IconNameList;
}

/** Export the component */
const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  /** Use the component hook */
  const { getBaseProps, getIconProps } = useIconButton({ ...props });

  /** Return the component */
  return (
    <button role='button' {...getBaseProps()}>
      <Icon name={props.icon} classNames={{ base: getIconProps().className }} />
    </button>
  );
};

/** Set the display name of the component */
IconButton.displayName = 'Moon.IconButton';

/** Export the component as default */
export default IconButton;
