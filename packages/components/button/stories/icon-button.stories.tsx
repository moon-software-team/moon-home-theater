/** Dependencies */
import { Meta } from '@storybook/react';
import { iconButton } from '@moon/theme';

/** Import the list of possible icons */
import icons from '@moon/icon/src/icons';

/** Import the component */
import { IconButton, IconButtonProps } from '../src';

/**
 * Buttons help users initiate actions or flow.
 * Choose from different types of buttons to inform emphasis.
 */
export default {
  title: 'Components/Icon Button',
  component: IconButton,
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons)
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    }
  }
} as Meta<typeof IconButton>;

/** Define the default props */
const defaultProps = {
  ...iconButton.defaultVariants,
  icon: 'check'
};

/** Define the main template */
const Template = (args: IconButtonProps) => <IconButton {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps
  }
};
