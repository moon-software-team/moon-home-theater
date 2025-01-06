/** Dependencies */
import { useMemo, useCallback } from 'react';
import {
  backgroundImage,
  BackgroundImageSlots,
  BackgroundImageVariantProps,
  SlotsToClasses,
  mapPropsVariants,
  objectToDeps,
  PropGetter
} from '@moon/theme';

/** Define default props */
interface Props {
  /**
   * The source for the image of the background
   */
  src: string;
  /**
   * Classname or List of classes to change the classNames of the element
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <BackgroundImage classNames={ {
   *   base:"base-classes",
   *   image:"image-classes",
   *   scrim:"scrim-classes"
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<BackgroundImageSlots>;
}

/** Create the props for the component */
export type UseBackgroundImageProps = Props & BackgroundImageVariantProps;

/**
 * Custom hook for the component
 * @param props The props of the component
 * @returns Custom hook designed for the component
 */
export const useBackgroundImage = (props: UseBackgroundImageProps) => {
  const [omittedProps, variantProps] = mapPropsVariants(props, backgroundImage.variantKeys);

  /** Split the props and set defaults */
  const { classNames, src } = omittedProps;

  /** Get the memo for the slots */
  const slots = useMemo(() => backgroundImage(variantProps), [objectToDeps(variantProps)]);

  /** Prepare callbacks function for each slots */
  const getBaseProps = useCallback<PropGetter>(() => {
    return { className: slots.base({ class: classNames?.base }) };
  }, [slots, classNames?.base]);

  const getScrimProps = useCallback<PropGetter>(() => {
    return {
      className: slots.scrim({ class: classNames?.scrim }),
      style: {
        background:
          props.gradient === 'radial'
            ? 'radial-gradient(110% 200% at 95% -5%, rgba(0, 0, 0, .1) 0%, rgba(0, 0, 0, 1) 70%)'
            : 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)'
      }
    };
  }, [slots, classNames?.scrim]);

  const getImageProps = useCallback<PropGetter>(() => {
    return { className: slots.image({ class: classNames?.image }) };
  }, [slots, classNames?.image]);

  /** Return the hook informations */
  return {
    src,
    gradient: props.gradient,

    getBaseProps,
    getScrimProps,
    getImageProps
  };
};
