/** Dependencies */
import { dp } from './utils';

/** Typography: display */
const typographyDisplay = {
  '.typo-display-lg': {
    fontSize: dp(57),
    fontWeight: '400',
    lineHeight: dp(64),
    letterSpacing: dp(-0.25),
    fontFamilly: 'Roboto, serif'
  },
  '.typo-display-md': {
    fontSize: dp(45),
    fontWeight: '400',
    lineHeight: dp(52),
    letterSpacing: '0',
    fontFamilly: 'Roboto, serif'
  },
  '.typo-display-sm': {
    fontSize: dp(36),
    fontWeight: '400',
    lineHeight: dp(44),
    letterSpacing: '0',
    fontFamilly: 'Roboto, serif'
  }
};

/** Typography: headline */
const typographyHeadline = {
  '.typo-headline-lg': {
    fontSize: dp(32),
    fontWeight: '400',
    lineHeight: dp(40),
    letterSpacing: '0',
    fontFamilly: 'Roboto, serif'
  },
  '.typo-headline-md': {
    fontSize: dp(28),
    fontWeight: '400',
    lineHeight: dp(36),
    letterSpacing: '0',
    fontFamilly: 'Roboto, serif'
  },
  '.typo-headline-sm': {
    fontSize: dp(24),
    fontWeight: '400',
    lineHeight: dp(32),
    letterSpacing: '0',
    fontFamilly: 'Roboto, serif'
  }
};

/** Typography: title */
const typographyTitle = {
  '.typo-title-lg': {
    fontSize: dp(22),
    fontWeight: '400',
    lineHeight: dp(28),
    letterSpacing: '0',
    fontFamilly: 'Roboto, serif'
  },
  '.typo-title-md': {
    fontSize: dp(16),
    fontWeight: '500',
    lineHeight: dp(24),
    letterSpacing: dp(0.15),
    fontFamilly: 'Roboto, serif'
  },
  '.typo-title-sm': {
    fontSize: dp(14),
    fontWeight: '500',
    lineHeight: dp(20),
    letterSpacing: dp(0.1),
    fontFamilly: 'Roboto, serif'
  }
};

/** Typography: label */
const typographyLabel = {
  '.typo-label-lg': {
    fontSize: dp(14),
    fontWeight: '500',
    lineHeight: dp(20),
    letterSpacing: dp(0.1),
    fontFamilly: 'Roboto, serif'
  },
  '.typo-label-md': {
    fontSize: dp(12),
    fontWeight: '500',
    lineHeight: dp(16),
    letterSpacing: dp(0.25),
    fontFamilly: 'Roboto, serif'
  },
  '.typo-label-sm': {
    fontSize: dp(11),
    fontWeight: '500',
    lineHeight: dp(16),
    letterSpacing: dp(0.1),
    fontFamilly: 'Roboto, serif'
  }
};

/** Typography: body */
const typographyBody = {
  '.typo-body-lg': {
    fontSize: dp(16),
    fontWeight: '400',
    lineHeight: dp(24),
    letterSpacing: dp(0.25),
    fontFamilly: 'Roboto, serif'
  },
  '.typo-body-md': {
    fontSize: dp(14),
    fontWeight: '400',
    lineHeight: dp(20),
    letterSpacing: dp(0.25),
    fontFamilly: 'Roboto, serif'
  },
  '.typo-body-sm': {
    fontSize: dp(12),
    fontWeight: '400',
    lineHeight: dp(16),
    letterSpacing: dp(0.2),
    fontFamilly: 'Roboto, serif'
  }
};

/** Export all the typographies */
export const typographies = {
  ...typographyDisplay,
  ...typographyHeadline,
  ...typographyTitle,
  ...typographyLabel,
  ...typographyBody
};
