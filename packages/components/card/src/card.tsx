/** Dependencies */
import React from 'react';
import { useCard, UseCardProps } from './use-card';

/** Alias an interface for the component props */
export interface CardProps extends UseCardProps {}

/** Export the component */
const Card: React.FC<CardProps> = (props: CardProps) => {
  /** Use the component hook */
  const {
    children,
    getBaseProps,
    getImageProps,
    getContentBlockProps,
    getScrimProps,
    getContentProps,
    getOverlayProps
  } = useCard({ ...props });

  /** Return the component */
  return (
    <div {...getBaseProps()}>
      <div>
        <div {...getImageProps()} />
        {props.type === 'compact' && <div {...getScrimProps()} />}
      </div>
      {children && (
        <div {...getContentProps()}>{React.cloneElement(children, getContentBlockProps())}</div>
      )}
      {props.type?.includes('classic') && !props.disabled && <div {...getOverlayProps()} />}
    </div>
  );
};

/** Set the display name of the component */
Card.displayName = 'Moon.Card';

/** Export the component as default */
export default Card;
