/** Dependencies */
import { Meta } from '@storybook/react';
import { contentBlock } from '@moon/theme';

/** Import the component */
import { ContentBlock, ContentBlockProps } from '../src';

/**
 * Content blocks help users quickly access information or take action.
 * Choose from various layouts to enhance clarity and engagement.
 */
export default {
  title: 'Components/Content Block',
  component: ContentBlock,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    alignment: {
      control: { type: 'select' },
      options: ['left', 'center', 'right']
    },
    description: {
      control: { type: 'text' }
    },
    extra: {
      control: { type: 'object' }
    }
  }
} as Meta<typeof ContentBlock>;

/** Define the default props */
const defaultProps = {
  ...contentBlock.defaultVariants,
  title: 'Title goes here'
};

/** Define the main template */
const Template = (args: ContentBlockProps) => <ContentBlock {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
    subtitle: 'Secondary • text'
  }
};
