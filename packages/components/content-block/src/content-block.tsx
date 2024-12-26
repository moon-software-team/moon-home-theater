/** Dependencies */
import React from 'react';
import { useContentBlock, UseContentBlockProps } from './use-content-block';
import { Tag } from '@moon/tag';

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

  /** Utility function to render the tags */
  const renderTags = () => {
    /** If the tags are not set, return */
    if (!extra?.tags) return null;

    /** If the tag is a simple string */
    if (typeof extra.tags === 'string') {
      return <Tag label={extra.tags} />;
    }

    /** If the props is an array */
    if (Array.isArray(extra.tags)) {
      /** Returns a clone of the element or the newly created element */
      return extra.tags.map((tag, index) =>
        typeof tag === 'string' ? (
          <Tag key={index} label={tag} />
        ) : (
          React.cloneElement(tag, { key: index })
        )
      );
    }

    /** Simple react element */
    return extra.tags;
  };

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
          {renderTags()}
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
