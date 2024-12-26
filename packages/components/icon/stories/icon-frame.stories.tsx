/** Dependencies */
import { Meta } from '@storybook/react';
import { icon } from '@moon/theme';

/** Import the component */
import { IconFrame, IconFrameProps } from '../src';
import icons from '../src/icons';

/**
 * Icons guide users through actions and navigation.
 * Select from various icon styles to convey function and focus effectively.
 */
export default {
  title: 'Components/Icon Frame',
  component: IconFrame,
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.keys(icons)
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  }
} as Meta<typeof IconFrame>;

/** Define the default props */
const defaultProps = {
  ...icon.defaultVariants,
  size: 'md',
  name: 'check'
} as IconFrameProps;

/** Define the main template */
const Template = (args: IconFrameProps) => <IconFrame {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps
  }
};
