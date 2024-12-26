/** Dependencies */
import Icon from './icon';
import iconList from './icons';

/** Alias type for the icon list */
export type IconNameList = keyof typeof iconList;

/** Export types */
export type { IconProps } from './icon';

/** Export hooks */
export { useIcon } from './use-icon';

/** Export component */
export { Icon };
