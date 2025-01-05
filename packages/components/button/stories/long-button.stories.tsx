/** Dependencies */
import { Meta } from '@storybook/react';
import { longButton } from '@moon/theme';

/** Import the list of possible icons */
import icons from '@moon/icon/src/icons';

/** Import the component */
import { LongButton, LongButtonProps } from '../src';

/**
 * Buttons help users initiate actions or flow.
 * Choose from different types of buttons to inform emphasis.
 */
export default {
  title: 'Components/Long Button',
  component: LongButton,
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons)
    }
  },
  decorators: (LongButton) => (
    <div className='w-280dp ml-auto mr-auto'>
      <LongButton />
    </div>
  )
} as Meta<typeof LongButton>;

/** Define the default props */
const defaultProps = {
  ...longButton.defaultVariants,
  title: 'Title',
  subtitle: 'Subtitle',
  icon: 'check'
};

/** Define the main template */
const Template = (args: LongButtonProps) => <LongButton {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps
  }
};
