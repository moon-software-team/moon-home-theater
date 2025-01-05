/** Dependencies */
import { useMemo, useCallback } from 'react';
import {
  snackbar,
  SnackbarSlots,
  SnackbarVariantProps,
  SlotsToClasses,
  mapPropsVariants,
  objectToDeps,
  PropGetter
} from '@moon/theme';
import { IconNameList } from '@moon/icon';

/** Define default props */
interface Props {
  /**
   * The content of the snackbar
   */
  label: string;
  /**
   * The leading icon of the snackbar
   */
  leadingIcon?: IconNameList;
  /**
   * The trailing icon of the snackbar
   */
  trailingIcon?: IconNameList;
  /**
   * Classname or List of classes to change the classNames of the element
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Snackbar classNames={ {
   *   base:"base-classes"
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<SnackbarSlots>;
}

/** Create the props for the component */
export type UseSnackbarProps = Props & SnackbarVariantProps;

/**
 * Custom hook for the component
 * @param props The props of the component
 * @returns Custom hook designed for the component
 */
export const useSnackbar = (props: UseSnackbarProps) => {
  const [omittedProps, variantProps] = mapPropsVariants(props, snackbar.variantKeys);

  /** Split the props and set defaults */
  const { classNames, label, leadingIcon, trailingIcon } = omittedProps;

  /** Get the memo for the slots */
  const slots = useMemo(() => snackbar(variantProps), [objectToDeps(variantProps)]);

  /** Prepare callbacks function for each slots */
  const getBaseProps = useCallback<PropGetter>(() => {
    return { className: slots.base({ class: classNames?.base }) };
  }, [slots, classNames?.base]);

  const getLabelProps = useCallback<PropGetter>(() => {
    return { className: slots.label({ class: classNames?.label }) };
  }, [slots, classNames?.label]);

  const getIconProps = useCallback<PropGetter>(() => {
    return {
      size: 'sm',
      classNames: { base: 'bg-on-surface-variant/80', icon: 'fill-inverse-on-surface' }
    };
  }, [slots]);

  /** Return the hook informations */
  return {
    label,
    leadingIcon,
    trailingIcon,

    getBaseProps,
    getLabelProps,
    getIconProps
  };
};
