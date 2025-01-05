/** Dependencies */
import { useMemo, useCallback } from 'react';
import {
  iconFrame,
  IconFrameSlots,
  IconFrameVariantProps,
  SlotsToClasses,
  mapPropsVariants,
  objectToDeps,
  PropGetter
} from '@moon/theme';

/** Define default props */
interface Props {
  /**
   * Classname or List of classes to change the classNames of the element
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <IconFrame classNames={{
   *   base:"base-classes"
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<IconFrameSlots>;
}

/** Create the props for the component */
export type UseIconFrameProps = Props & IconFrameVariantProps;

/**
 * Custom hook for the component
 * @param props The props of the component
 * @returns Custom hook designed for the component
 */
export const useIconFrame = (props: UseIconFrameProps) => {
  const [omittedProps, variantProps] = mapPropsVariants(props, iconFrame.variantKeys);

  /** Split the props and set defaults */
  const { classNames } = omittedProps;

  /** Get the memo for the slots */
  const slots = useMemo(() => iconFrame(variantProps), [objectToDeps(variantProps)]);

  /** Prepare callbacks function for each slots */
  const getBaseProps = useCallback<PropGetter>(() => {
    return { className: slots.base({ class: classNames?.base }), role: 'none' };
  }, [slots, classNames?.base]);

  const getIconProps = useCallback<PropGetter>(() => {
    return { className: slots.icon({ class: classNames?.icon }) };
  }, [slots, classNames?.icon]);

  /** Return the hook informations */
  return {
    getBaseProps,
    getIconProps
  };
};
