/** Dependencies */
import React from 'react';
import { useLongButton, UseLongButtonProps } from './use-long-button';
import { Icon } from '@moon/icon';

/** Alias an interface for the component props */
export interface LongButtonProps extends UseLongButtonProps {}

/** Export the component */
const LongButton: React.FC<LongButtonProps> = (props: LongButtonProps) => {
  /** Use the component hook */
  const {
    title,
    subtitle,
    icon,
    getBaseProps,
    getContentProps,
    getTitleProps,
    getSubtitleProps,
    getIconProps
  } = useLongButton({
    ...props
  });

  /** Return the component */
  return (
    <div {...getBaseProps()}>
      {icon && (
        <div className='size-20dp'>
          <Icon name={icon} size={20} classNames={{ base: getIconProps().className }} />
        </div>
      )}
      <div {...getContentProps()}>
        <span {...getTitleProps()}>{title}</span>
        {subtitle && <p {...getSubtitleProps()}>{subtitle}</p>}
      </div>
    </div>
  );
};

/** Set the display name of the component */
LongButton.displayName = 'Moon.LongButton';

/** Export the component as default */
export default LongButton;
