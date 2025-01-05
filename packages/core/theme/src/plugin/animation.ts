/** Definition of animations keyframes */
export const keyframes = {
  'slide-up': {
    '0%': {
      transform: 'translate(var(--tw-translate-x), 100%)',
      opacity: '0'
    },
    '100%': {
      transform: 'translate(var(--tw-translate-x), 0)',
      opacity: '1'
    }
  }
};

/** Definition of the animations classes */
export const animation = {
  'slide-up': 'slide-up 0.1s ease-out'
};
