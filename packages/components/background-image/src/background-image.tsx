/** Dependencies */
import React from 'react';
import { useBackgroundImage, UseBackgroundImageProps } from './use-background-image';

/** Alias an interface for the component props */
export interface BackgroundImageProps extends UseBackgroundImageProps {}

/** Export the component */
const BackgroundImage: React.FC<BackgroundImageProps> = (props: BackgroundImageProps) => {
  /** Use the component hook */
  const { src, gradient, getBaseProps, getImageProps, getScrimProps } = useBackgroundImage({
    ...props
  });

  /** Return the component */
  return (
    <div {...getBaseProps()}>
      <div {...getImageProps()} style={{ backgroundImage: `url(${src})` }} />
      {gradient !== 'none' && <div {...getScrimProps()} />}
    </div>
  );
};

/** Set the display name of the component */
BackgroundImage.displayName = 'Moon.BackgroundImage';

/** Export the component as default */
export default BackgroundImage;
