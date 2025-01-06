/** Dependencies */
import React from 'react';
import { useCardSlider, UseCardSliderProps } from './use-card-slider';
import Card, { CardProps } from './card';

/** Alias an interface for the component props */
export interface CardSliderProps extends UseCardSliderProps {}

/** Export the component */
const CardSlider: React.FC<CardSliderProps> = (props: CardSliderProps) => {
  /** Use the component hook */
  const { children, getBaseProps, getChildrenProps } = useCardSlider({ ...props });

  /** Return the component */
  return (
    <div {...getBaseProps()}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<CardProps>(child) && child.type === Card) {
          return React.cloneElement(child, getChildrenProps() as CardProps);
        }
        return child;
      })}
    </div>
  );
};

/** Set the display name of the component */
CardSlider.displayName = 'Moon.CardSlider';

/** Export the component as default */
export default CardSlider;
