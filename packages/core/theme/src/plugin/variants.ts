/** Export all variants to add to the plugin */
export const variants = {
  'hocus': ['&:hover', '&:focus'],
  'group-hocus': [':merge(.group):hover &', ':merge(.group):focus &'],
  'peer-hocus': [':merge(.peer):hover ~ &', ':merge(.peer):focus ~ &']
};
