/** Dependencies */
import { Meta } from '@storybook/react';
import { icon } from '@moon/theme';

/** Import the component */
import { Icon, IconProps } from '../src';
import icons from '../src/icons';

/**
 * Icons guide users through actions and navigation.
 * Select from various icon styles to convey function and focus effectively.
 */
export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'select'
      },
      options: Object.keys(icons)
    }
  }
} as Meta<typeof Icon>;

/** Define the default props */
const defaultProps = {
  ...icon.defaultVariants,
  size: 24,
  name: 'check'
} as IconProps;

/** Define the main template */
const Template = (args: IconProps) => (
  <Icon {...args} classNames={{ base: 'fill-on-background' }} />
);

export const Default = {
  render: Template,
  args: {
    ...defaultProps
  }
};
