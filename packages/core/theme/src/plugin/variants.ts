/** Export all variants to add to the plugin */
export const variants = {
  'hocus': ['&:hover', '&:focus', '&:focus-visible'],
  'group-hocus': [
    ':merge(.group):hover &',
    ':merge(.group):focus &',
    ':merge(.group):focus-visible &'
  ],
  'peer-hocus': [
    ':merge(.peer):hover ~ &',
    ':merge(.peer):focus ~ &',
    ':merge(.peer):focus-visible ~ &'
  ]
};
