/** Dependencies */
import { Meta } from '@storybook/react';
import { backgroundImage } from '@moon/theme';

/** Import the component */
import { BackgroundImage, BackgroundImageProps } from '../src';

/**
 * Background images are combinations of image and gradient.
 */
export default {
  title: 'Components/Background Image',
  component: BackgroundImage,
  argTypes: {
    gradient: {
      control: { type: 'select' },
      options: ['none', 'radial', 'bottom']
    }
  }
} as Meta<typeof BackgroundImage>;

/** Define the default props */
const defaultProps = {
  ...backgroundImage.defaultVariants,
  src: 'https://files.catbox.moe/6nhc8y.png'
};

/** Define the main template */
const Template = (args: BackgroundImageProps) => <BackgroundImage {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
    gradient: 'radial'
  }
};

export const NoGradient = {
  render: Template,
  args: {
    ...defaultProps,
    gradient: 'none'
  }
};

export const RadialGradient = {
  render: Template,
  args: {
    ...defaultProps,
    gradient: 'radial'
  }
};

export const BottomGradient = {
  render: Template,
  args: {
    ...defaultProps,
    gradient: 'bottom'
  }
};
