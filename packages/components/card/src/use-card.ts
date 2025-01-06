/** Dependencies */
import { useMemo, useCallback, ReactElement } from 'react';
import {
  card,
  CardSlots,
  CardVariantProps,
  SlotsToClasses,
  mapPropsVariants,
  objectToDeps,
  PropGetter
} from '@moon/theme';
import { ContentBlock } from '@moon/content-block';

/** Define default props */
interface Props {
  /**
   * The content block for the information of the card
   */
  children?: ReactElement<typeof ContentBlock>;
  /**
   * Specifies the width of the card
   */
  width?: string;
  /**
   * The source url of the card image
   */
  src: string;
  /**
   * Classname or List of classes to change the classNames of the element
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Card classNames={ {
   *   base:"base-classes",
   *   image:"image-classes",
   *   scrim:"scrim-classes",
   *   content:"content-classes"
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<CardSlots>;
}

/** Create the props for the component */
export type UseCardProps = Props & CardVariantProps;

/**
 * Custom hook for the component
 * @param props The props of the component
 * @returns Custom hook designed for the component
 */
export const useCard = (props: UseCardProps) => {
  const [omittedProps, variantProps] = mapPropsVariants(props, card.variantKeys);

  /** Split the props and set defaults */
  const { classNames, children, src, width } = omittedProps;

  /** Get the memo for the slots */
  const slots = useMemo(() => card(variantProps), [objectToDeps(variantProps)]);

  /** Prepare callbacks function for each slots */
  const getBaseProps = useCallback<PropGetter>(() => {
    return {
      'className': slots.base({ class: classNames?.base }),
      'data-focusable': !props.disabled,
      'style': { width }
    };
  }, [slots, classNames?.base]);

  const getScrimProps = useCallback<PropGetter>(() => {
    return {
      className: slots.scrim({ class: classNames?.scrim }),
      style: { background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)' }
    };
  }, [slots, classNames?.scrim]);

  const getContentProps = useCallback<PropGetter>(() => {
    return { className: slots.content({ class: classNames?.content }) };
  }, [slots, classNames?.content]);

  const getImageProps = useCallback<PropGetter>(() => {
    return {
      className: slots.image({ class: classNames?.image }),
      style: {
        backgroundImage: `url(${src})`
      }
    };
  }, [slots, classNames?.image]);

  /** Overwrite the content block props */
  const getContentBlockProps = useCallback<PropGetter>(() => {
    return {
      ...(props.type?.startsWith('wide')
        ? {
            classNames: {
              base: 'absolute pr-16dp h-[calc(100%-1.6666666667vw*2)] overflow-hidden',
              description: 'overflow-ellipsis'
            }
          }
        : { description: '' }),
      ...(props.disabled && !props.type?.startsWith('wide') ? { subtitle: undefined } : {}),
      size: 'small',
      alignment: props.type === 'standard' ? 'center' : 'left'
    };
  }, [props.type, props.disabled]);

  /** Get overlay props */
  const getOverlayProps = useCallback<PropGetter>(() => {
    return {
      className: `absolute inset-0 group-hocus:inner-border-3dp group-hocus:inner-border-outline ${props.type === 'classic' ? 'rounded-8dp' : 'rounded-12dp'}`
    };
  }, [props.type]);

  /** Return the hook informations */
  return {
    children,

    getBaseProps,
    getScrimProps,
    getImageProps,
    getContentBlockProps,
    getContentProps,
    getOverlayProps
  };
};
