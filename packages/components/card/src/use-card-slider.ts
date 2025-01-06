/** Dependencies */
import { useMemo, useCallback, ReactElement } from 'react';
import {
  cardSlider,
  CardSliderSlots,
  CardSliderVariantProps,
  SlotsToClasses,
  mapPropsVariants,
  objectToDeps,
  PropGetter,
  dp
} from '@moon/theme';
import Card from './card';

/** Define default props */
interface Props {
  /**
   * The cards children of the slider
   */
  children?: ReactElement<typeof Card> | ReactElement<typeof Card>[];
  /**
   * If the direction is row, the number of card visible in a single row
   * @default 4
   * @min 2
   * @max 8
   */
  itemCount?: number;
  /**
   * Classname or List of classes to change the classNames of the element
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <CardSlider classNames={ {
   *   base:"base-classes"
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<CardSliderSlots>;
}

/** Create the props for the component */
export type UseCardSliderProps = Props & CardSliderVariantProps;

/**
 * Custom hook for the component
 * @param props The props of the component
 * @returns Custom hook designed for the component
 */
export const useCardSlider = (props: UseCardSliderProps) => {
  const [omittedProps, variantProps] = mapPropsVariants(props, cardSlider.variantKeys);

  /** Split the props and set defaults */
  const { classNames, children, itemCount = 4 } = omittedProps;

  /** Get the memo for the slots */
  const slots = useMemo(() => cardSlider(variantProps), [objectToDeps(variantProps)]);

  /** Prepare callbacks function for each slots */
  const getBaseProps = useCallback<PropGetter>(() => {
    return {
      'className': slots.base({ class: classNames?.base }),
      'data-focusable': true
    };
  }, [slots, classNames?.base]);

  const getChildrenProps = useCallback<PropGetter>(() => {
    /** Clamp the item count */
    const count = itemCount < 2 ? 2 : itemCount > 8 ? 8 : itemCount;
    const size = (100 - parseInt(dp(20)) * (count - 1)) / count;

    /** Return the classes */
    return { classNames: { base: `flex-none !w-[${size}%]` }, width: `${size}%` };
  }, [itemCount]);

  /** Return the hook informations */
  return {
    children,

    getBaseProps,
    getChildrenProps
  };
};
