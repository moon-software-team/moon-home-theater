/** Dependencies */
import { ReactElement, useMemo, useCallback } from 'react';
import {
  contentBlock,
  ContentBlockSlots,
  ContentBlockVariantProps,
  SlotsToClasses,
  mapPropsVariants,
  objectToDeps,
  PropGetter
} from '@moon/theme';
import { Tag } from '@moon/tag';

/** Define default props */
interface Props {
  /**
   * Title of the content block
   */
  title: string;
  /**
   * Subtitle of the content block
   */
  subtitle?: string;
  /**
   * Description of the content block
   */
  description?: string;
  /**
   * Show extra data in the content block
   */
  extra?: {
    /**
     * Tags to add in the extra data
     */
    tags?: ReactElement<typeof Tag> | ReactElement<typeof Tag>[] | string | string[];
    /**
     * Similar to `subtitle` for the extra data
     */
    text?: string;
  };
  /**
   * Classname or List of classes to change the classNames of the element
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <ContentBlock classNames={{
   *   base:"base-classes",
   *   heading:"heading-classes"
   *   title:"title-classes",
   *   subtitle:"subtitle-classes",
   *   description:"description-classes",
   *   extra:"extra-classes"
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<ContentBlockSlots>;
}

/** Create the props for the component */
export type UseContentBlockProps = Props & ContentBlockVariantProps;

/**
 * Custom hook for the component
 * @param props The props of the component
 * @returns Custom hook designed for the component
 */
export const useContentBlock = (props: UseContentBlockProps) => {
  const [omittedProps, variantProps] = mapPropsVariants(props, contentBlock.variantKeys);

  /** Split the props and set defaults */
  const { title, subtitle, description, extra, classNames } = omittedProps;

  /** Get the memo for the slots */
  const slots = useMemo(() => contentBlock(variantProps), [objectToDeps(variantProps)]);

  /** Prepare callbacks function for each slots */
  const getBaseProps = useCallback<PropGetter>(() => {
    return { className: slots.base({ class: classNames?.base }) };
  }, [slots, classNames?.base]);

  const getHeadingProps = useCallback<PropGetter>(() => {
    return { className: slots.heading({ class: classNames?.heading }) };
  }, [slots, classNames?.heading]);

  const getTitleProps = useCallback<PropGetter>(() => {
    return { className: slots.title({ class: classNames?.title }) };
  }, [slots, classNames?.title]);

  const getSubtitleProps = useCallback<PropGetter>(() => {
    return { className: slots.subtitle({ class: classNames?.subtitle }) };
  }, [slots, classNames?.subtitle]);

  const getDescriptionProps = useCallback<PropGetter>(() => {
    return { className: slots.description({ class: classNames?.description }) };
  }, [slots, classNames?.description]);

  const getExtraProps = useCallback<PropGetter>(() => {
    return { className: slots.extra({ class: classNames?.extra }) };
  }, [slots, classNames?.extra]);

  /** Return the hook informations */
  return {
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
  };
};
