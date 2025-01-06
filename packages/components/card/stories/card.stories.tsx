/** Dependencies */
import { Meta } from '@storybook/react';
import { card } from '@moon/theme';

/** Import the component */
import { Card, CardProps } from '../src';
import { ContentBlock } from '@moon/content-block';

/**
 * Cards are the basic building blocks of a TV app. They contain content and actions about a single subject.
 */
export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    type: {
      control: 'select',
      options: ['standard', 'classic', 'compact', 'wide-standard', 'wide-classic']
    },
    ratio: {
      control: 'select',
      options: ['16:9', '1:1', '2:3']
    },
    disabled: {
      control: 'boolean'
    }
  }
} as Meta<typeof Card>;

/** Define the default props */
const defaultProps = {
  ...card.defaultVariants,
  children: <ContentBlock title='Title goes here' subtitle='Secondary • text' />,
  src: 'https://files.catbox.moe/6nhc8y.png'
};

/** Define the main template */
const Template = (args: CardProps) => (
  <div className='w-240dp h-full mx-auto'>
    <Card {...args} />
  </div>
);
const WideTemplate = (args: CardProps) => (
  <div className='w-430dp h-full mx-auto'>
    <Card {...args} />
  </div>
);

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
    type: 'standard'
  }
};

export const Standard = {
  render: Template,
  args: {
    ...defaultProps,
    type: 'standard'
  }
};

export const Classic = {
  render: Template,
  args: {
    ...defaultProps,
    type: 'classic'
  }
};

export const Compact = {
  render: Template,
  args: {
    ...defaultProps,
    type: 'compact'
  }
};

export const WideStandard = {
  render: WideTemplate,
  args: {
    ...defaultProps,
    children: (
      <ContentBlock
        title='Title goes here'
        subtitle='Secondary • text'
        description='Description offers a more detailed explanation of the content, product, or feature being presented.'
      />
    ),
    type: 'wide-standard'
  }
};

export const WideClassic = {
  render: WideTemplate,
  args: {
    ...defaultProps,
    children: (
      <ContentBlock
        title='Title goes here'
        subtitle='Secondary • text'
        description='Description offers a more detailed explanation of the content, product, or feature being presented.'
      />
    ),
    type: 'wide-classic'
  }
};

export const NoContentBlock = {
  render: Template,
  args: {
    ...defaultProps,
    children: undefined,
    type: 'standard'
  }
};
