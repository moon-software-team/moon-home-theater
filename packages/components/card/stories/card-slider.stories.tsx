/** Dependencies */
import { Meta } from '@storybook/react';
import { cardSlider } from '@moon/theme';

/** Import the component */
import { CardSlider, CardSliderProps, Card } from '../src';

/**
 * Cards are the basic building blocks of a TV app. They contain content and actions about a single subject.
 */
export default {
  title: 'Components/Card Slider',
  component: CardSlider,
  argTypes: {
    direction: {
      control: 'select',
      options: ['column', 'row']
    },
    itemCount: {
      control: {
        type: 'number',
        max: 8,
        min: 2
      }
    }
  },
  decorators: (CardSlider) => (
    <div className='w-full h-400dp py-10dp border-1dp border-on-surface/30 px-58dp overflow-hidden'>
      <CardSlider />
    </div>
  )
} as Meta<typeof CardSlider>;

/** Define the default props */
const defaultProps = {
  ...cardSlider.defaultVariants,
  itemCount: 4,
  children: (() => {
    const cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push(<Card src='https://files.catbox.moe/6nhc8y.png' type='standard' />);
    }
    return cards;
  })()
};

/** Define the main template */
const Template = (args: CardSliderProps) => <CardSlider {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps
  }
};
