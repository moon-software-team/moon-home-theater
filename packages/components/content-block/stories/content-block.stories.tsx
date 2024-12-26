/** Dependencies */
import { Meta } from '@storybook/react';
import { contentBlock } from '@moon/theme';

/** Import the component */
import { ContentBlock, ContentBlockProps } from '../src';
import { Tag } from '@moon/tag';

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

/**
 * A content block can have a description for the content
 * it's link to.
 */
export const WithDescription = {
  render: Template,
  args: {
    ...defaultProps,
    subtitle: 'Secondary • text',
    description:
      'Description offers a more detailed explanation of the content, product, or feature being presented.'
  }
};

/**
 * You can also add some extra information about the content,
 * In this extra you have a text area and some tags.
 */
export const WithExtra = {
  render: Template,
  args: {
    ...defaultProps,
    subtitle: 'Secondary • text',
    extra: {
      tags: ['Label'],
      text: 'Secondary • text'
    }
  }
};

/**
 * You can combine description and extra for more information.
 */
export const WithDescriptionAndExtra = {
  render: Template,
  args: {
    ...defaultProps,
    subtitle: 'Secondary • text',
    description:
      'Description offers a more detailed explanation of the content, product, or feature being presented.',
    extra: {
      tags: ['Label'],
      text: 'Secondary • text'
    }
  }
};

/**
 * You can choose the alignment of the content,
 * there's the left aligned.
 */
export const LeftAligned = {
  render: Template,
  args: {
    ...defaultProps,
    subtitle: 'Secondary • text',
    alignment: 'left'
  }
};

/**
 * You can choose the alignment of the content,
 * there's the centered align.
 */
export const AlignedCenter = {
  render: Template,
  args: {
    ...defaultProps,
    subtitle: 'Secondary • text',
    alignment: 'center'
  }
};

/**
 * You can choose the alignment of the content,
 * there's the right aligned.
 */
export const RightAligned = {
  render: Template,
  args: {
    ...defaultProps,
    subtitle: 'Secondary • text',
    alignment: 'right'
  }
};

/**
 * You can set the tags to be a single `string`.
 */
export const SingleTag = {
  render: Template,
  args: {
    ...defaultProps,
    extra: {
      tags: 'Label'
    }
  }
};

/**
 * You can set the tags to be an array of `string[]`.
 */
export const MultipleTags = {
  render: Template,
  args: {
    ...defaultProps,
    extra: {
      tags: ['Label1', 'Label2']
    }
  }
};

/**
 * You can also directly passes ReactElement through the tags
 * such as one with an icon.
 */
export const TagWithIcon = {
  render: Template,
  args: {
    ...defaultProps,
    extra: {
      tags: <Tag icon='check' label='Label' />
    }
  }
};
