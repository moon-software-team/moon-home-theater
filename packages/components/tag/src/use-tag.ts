/** Dependencies */
import { useMemo, useCallback } from 'react';
import {
  tag,
  TagSlots,
  TagVariantProps,
  SlotsToClasses,
  mapPropsVariants,
  objectToDeps,
  PropGetter
} from '@moon/theme';

/** Define default props */
interface Props {
  /**
   * The label inside the tag
   */
  label: string;
  /**
   * Classname or List of classes to change the classNames of the element
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Tag classNames={{
   *   base:"base-classes",
   *   text:"text-classes",
   *   icon:"icon-classes"
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<TagSlots>;
}

/** Create the props for the component */
export type UseTagProps = Props & TagVariantProps;

/**
 * Custom hook for the component
 * @param props The props of the component
 * @returns Custom hook designed for the component
 */
export const useTag = (props: UseTagProps) => {
  const [omittedProps, variantProps] = mapPropsVariants(props, tag.variantKeys);

  /** Split the props and set defaults */
  const { label, classNames } = omittedProps;

  /** Get the memo for the slots */
  const slots = useMemo(() => tag(variantProps), [objectToDeps(variantProps)]);

  /** Prepare callbacks function for each slots */
  const getBaseProps = useCallback<PropGetter>(() => {
    return { className: slots.base({ class: classNames?.base }) };
  }, [slots, classNames?.base]);

  const getLabelProps = useCallback<PropGetter>(() => {
    return { className: slots.label({ class: classNames?.label }) };
  }, [slots, classNames?.label]);

  const getIconProps = useCallback<PropGetter>(() => {
    return { className: slots.icon({ class: classNames?.icon }) };
  }, [slots, classNames?.icon]);

  /** Return the hook informations */
  return {
    label,

    getBaseProps,
    getLabelProps,
    getIconProps
  };
};
