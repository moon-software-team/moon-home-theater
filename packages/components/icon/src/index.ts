/** Dependencies */
import Icon from './icon';
import IconFrame from './icon-frame';
import iconList from './icons';

/** Alias type for the icon list */
export type IconNameList = keyof typeof iconList;

/** Export types */
export type { IconProps } from './icon';
export type { IconFrameProps } from './icon-frame';

/** Export hooks */
export { useIcon } from './use-icon';
export { useIconFrame } from './use-icon-frame';

/** Export component */
export { Icon, IconFrame };
