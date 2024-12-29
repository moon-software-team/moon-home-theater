/** Dependencies */
import { useMemo, useCallback } from 'react';
import {
  iconButton,
  IconButtonSlots,
  IconButtonVariantProps,
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
   * <IconButton classNames={{
   *   base:"base-classes",
   *   icon:"icon-classes"
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<IconButtonSlots>;
}

/** Create the props for the component */
export type UseIconButtonProps = Props & IconButtonVariantProps;

/**
 * Custom hook for the component
 * @param props The props of the component
 * @returns Custom hook designed for the component
 */
export const useIconButton = (props: UseIconButtonProps) => {
  const [omittedProps, variantProps] = mapPropsVariants(props, iconButton.variantKeys);

  /** Split the props and set defaults */
  const { classNames } = omittedProps;

  /** Get the memo for the slots */
  const slots = useMemo(() => iconButton(variantProps), [objectToDeps(variantProps)]);

  /** Prepare callbacks function for each slots */
  const getBaseProps = useCallback<PropGetter>(() => {
    return { className: slots.base({ class: classNames?.base }), disabled: props.disabled };
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
