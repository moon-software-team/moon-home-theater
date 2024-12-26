/** Dependencies */
import { Meta } from '@storybook/react';
import { tag } from '@moon/theme';

/** Import the list of possible icons */
import icons from '@moon/icon/src/icons';

/** Import the component */
import { Tag, TagProps } from '../src';

/**
 * Tags categorize content or provide quick context.
 * Choose from different tag styles to highlight key information.
 */
export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default', 'large']
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons)
    }
  }
} as Meta<typeof Tag>;

/** Define the default props */
const defaultProps = {
  ...tag.defaultVariants,
  label: 'Label'
};

/** Define the main template */
const Template = (args: TagProps) => <Tag {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps
  }
};
