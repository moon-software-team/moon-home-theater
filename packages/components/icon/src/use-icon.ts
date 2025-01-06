/** Dependencies */
import { useMemo, useCallback } from 'react';
import {
  cardSlider,
  IconSlots,
  IconVariantProps,
  SlotsToClasses,
  mapPropsVariants,
  objectToDeps,
  PropGetter
} from '@moon/theme';

/** Define default props */
interface Props {
  /**
   * The size of the icon in DP
   */
  size?: number;
  /**
   * Classname or List of classes to change the classNames of the element
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Icon classNames={{
   *   base:"base-classes"
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<IconSlots>;
}

/** Create the props for the component */
export type UseIconProps = Props & IconVariantProps;

/**
 * Custom hook for the component
 * @param props The props of the component
 * @returns Custom hook designed for the component
 */
export const useIcon = (props: UseIconProps) => {
  const [omittedProps, variantProps] = mapPropsVariants(props, cardSlider.variantKeys);

  /** Split the props and set defaults */
  const { size, classNames } = omittedProps;

  /** Get the memo for the slots */
  const slots = useMemo(() => cardSlider(variantProps), [objectToDeps(variantProps)]);

  /** Prepare callbacks function for each slots */
  const getBaseProps = useCallback<PropGetter>(() => {
    return { className: slots.base({ class: classNames?.base }) };
  }, [slots, classNames?.base]);

  /** Return the hook informations */
  return {
    size,

    getBaseProps
  };
};
