/** Dependencies */
import React from 'react';
import { useTag, UseTagProps } from './use-tag';
import { Icon, IconNameList } from '@moon/icon';

/** Alias an interface for the component props */
export interface TagProps extends UseTagProps {
  /**
   * The icon of the tag
   */
  icon?: IconNameList;
}

/** Export the component */
const Tag: React.FC<TagProps> = (props: TagProps) => {
  /** Use the component hook */
  const { label, getBaseProps, getIconProps, getLabelProps } = useTag({ ...props });

  /** Return the component */
  return (
    <div role='none' {...getBaseProps()}>
      {props.icon && <Icon name={props.icon} classNames={{ base: getIconProps().className }} />}
      <span {...getLabelProps()}>{label}</span>
    </div>
  );
};

/** Set the display name of the component */
Tag.displayName = 'Moon.Tag';

/** Export the component as default */
export default Tag;
