/** Dependencies */
import { useMemo, useCallback } from 'react';
import {
  longButton,
  LongButtonSlots,
  LongButtonVariantProps,
  SlotsToClasses,
  mapPropsVariants,
  objectToDeps,
  PropGetter
} from '@moon/theme';
import { IconNameList } from '@moon/icon';

/** Define default props */
interface Props {
  /**
   * Title for the long button
   */
  title: string;
  /**
   * Optional subtitle for the long button
   */
  subtitle?: string;
  /**
   * The icon of the button
   */
  icon?: IconNameList;
  /**
   * Classname or List of classes to change the classNames of the element
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <LongButton classNames={ {
   *   base:"base-classes"
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<LongButtonSlots>;
}

/** Create the props for the component */
export type UseLongButtonProps = Props & LongButtonVariantProps;

/**
 * Custom hook for the component
 * @param props The props of the component
 * @returns Custom hook designed for the component
 */
export const useLongButton = (props: UseLongButtonProps) => {
  const [omittedProps, variantProps] = mapPropsVariants(props, longButton.variantKeys);

  /** Split the props and set defaults */
  const { classNames, subtitle, title, icon } = omittedProps;

  /** Get the memo for the slots */
  const slots = useMemo(() => longButton(variantProps), [objectToDeps(variantProps)]);

  /** Prepare callbacks function for each slots */
  const getBaseProps = useCallback<PropGetter>(() => {
    return { className: slots.base({ class: classNames?.base }) };
  }, [slots, classNames?.base]);

  const getContentProps = useCallback<PropGetter>(() => {
    return { className: slots.content({ class: classNames?.content }) };
  }, [slots, classNames?.content]);

  const getTitleProps = useCallback<PropGetter>(() => {
    return { className: slots.title({ class: classNames?.title }) };
  }, [slots, classNames?.title]);

  const getSubtitleProps = useCallback<PropGetter>(() => {
    return { className: slots.subtitle({ class: classNames?.subtitle }) };
  }, [slots, classNames?.subtitle]);

  const getIconProps = useCallback<PropGetter>(() => {
    return { className: slots.icon({ class: classNames?.icon }) };
  }, [slots, classNames?.icon]);

  /** Return the hook informations */
  return {
    title,
    subtitle,
    icon,

    getBaseProps,
    getContentProps,
    getTitleProps,
    getSubtitleProps,
    getIconProps
  };
};
