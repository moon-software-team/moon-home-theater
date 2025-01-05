/** Dependencies */
import React from 'react';
import { useSnackbar, UseSnackbarProps } from './use-snackbar';
import { IconFrame } from '@moon/icon';

/** Alias an interface for the component props */
export interface SnackbarProps extends UseSnackbarProps {}

/** Export the component */
const Snackbar: React.FC<SnackbarProps> = (props: SnackbarProps) => {
  /** Use the component hook */
  const { label, leadingIcon, trailingIcon, getBaseProps, getIconProps, getLabelProps } =
    useSnackbar({ ...props });

  /** Prepare an iconFrame class overide */
  const iconClasses = { base: 'bg-on-surface-variant/80', icon: 'fill-inverse-on-surface' };

  /** Return the component */
  return (
    <div {...getBaseProps()} role='alert'>
      {leadingIcon && <IconFrame name={leadingIcon} {...getIconProps()} />}
      <p {...getLabelProps()}>{label}</p>
      {trailingIcon && <IconFrame name={trailingIcon} {...getIconProps()} />}
    </div>
  );
};

/** Set the display name of the component */
Snackbar.displayName = 'Moon.Snackbar';

/** Export the component as default */
export default Snackbar;
