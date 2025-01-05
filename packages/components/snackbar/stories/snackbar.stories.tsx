/** Dependencies */
import { Meta } from '@storybook/react';
import { snackbar } from '@moon/theme';

/** Import the list of possible icons */
import icons from '@moon/icon/src/icons';

/** Import the component */
import { Snackbar, SnackbarProps } from '../src';

/**
 * Snackbars inform users of a process that an app has performed or will perform.
 * They appear temporarily, towards the bottom of the screen.
 */
export default {
  title: 'Components/Snackbar',
  component: Snackbar,
  argTypes: {
    leadingIcon: {
      control: { type: 'select' },
      options: Object.keys(icons)
    },
    trailingIcon: {
      control: { type: 'select' },
      options: Object.keys(icons)
    }
  },
  decorators: (Snackbar) => (
    <div className='w-full h-280dp border-1dp border-inverse-on-surface rounded-5dp'>
      <Snackbar />
    </div>
  )
} as Meta<typeof Snackbar>;

/** Define the default props */
const defaultProps = {
  ...snackbar.defaultVariants,
  label: 'Single-line snackbar label'
};

/** Define the main template */
const Template = (args: SnackbarProps) => <Snackbar {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps
  }
};

export const LeadingIcon = {
  render: Template,
  args: {
    ...defaultProps,
    leadingIcon: 'check'
  }
};

export const TrailingIcon = {
  render: Template,
  args: {
    ...defaultProps,
    trailingIcon: 'check'
  }
};

export const LeadingAndTrailingIcons = {
  render: Template,
  args: {
    ...defaultProps,
    leadingIcon: 'check',
    trailingIcon: 'check'
  }
};

export const MultiLines = {
  render: Template,
  args: {
    label:
      'The snackbar component is a small message that appears at the bottom of the screen, typically to provide feedback or alerts to the user.',
    leadingIcon: 'check'
  }
};
