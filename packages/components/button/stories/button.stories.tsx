/** Dependencies */
import { Meta } from '@storybook/react';
import { button } from '@moon/theme';

/** Import the component */
import { Button, ButtonProps } from '../src';

/**
 * Buttons help users initiate actions or flow.
 * Choose from different types of buttons to inform emphasis.
 */
export default {
  title: 'Components/Button',
  component: Button
} as Meta<typeof Button>;

/** Define the default props */
const defaultProps = {
  ...button.defaultVariants,
  label: 'Button'
};

/** Define the main template */
const Template = (args: ButtonProps) => <Button {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps
  }
};
