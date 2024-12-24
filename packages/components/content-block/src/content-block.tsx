/** Dependencies */
import React from 'react';
import { useContentBlock, UseContentBlockProps } from './use-content-block';

/** Alias an interface for the component props */
export interface ContentBlockProps extends UseContentBlockProps {}

/** Export the component */
const ContentBlock: React.FC<ContentBlockProps> = (props: ContentBlockProps) => {
  /** Use the component hook */
  const {
    title,
    subtitle,
    description,
    extra,
    getBaseProps,
    getHeadingProps,
    getTitleProps,
    getSubtitleProps,
    getDescriptionProps,
    getExtraProps
  } = useContentBlock({ ...props });

  /** Return the component */
  return (
    <div role='contentinfo' {...getBaseProps()}>
      <div {...getHeadingProps()}>
        <span {...getTitleProps()}>{title}</span>
        {subtitle && <span {...getSubtitleProps()}>{subtitle}</span>}
      </div>
      {description && <span {...getDescriptionProps()}>{description}</span>}
      {extra && (
        <div {...getExtraProps()}>
          {extra.tags && <div></div>}
          {extra.text && <span {...getSubtitleProps()}>{extra.text}</span>}
        </div>
      )}
    </div>
  );
};

/** Set the display name of the component */
ContentBlock.displayName = 'Moon.ContentBlock';

/** Export the component as default */
export default ContentBlock;
