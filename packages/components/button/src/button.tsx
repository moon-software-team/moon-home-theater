/** Dependencies */
import React from 'react';
import { useButton, UseButtonProps } from './use-button';

/** Alias an interface for the component props */
export interface ButtonProps extends UseButtonProps {}

/** Export the component */
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  /** Use the component hook */
  const { label, getBaseProps, getIconProps, getLabelProps } = useButton({ ...props });

  /** Return the component */
  return (
    <button role='button' {...getBaseProps()}>
      <span {...getLabelProps()}>{label}</span>
    </button>
  );
};

/** Set the display name of the component */
Button.displayName = 'Moon.Button';

/** Export the component as default */
export default Button;
