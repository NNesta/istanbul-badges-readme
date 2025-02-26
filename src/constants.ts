import { TBadgeStyles } from './types';

export const readmePathConst = './README.md';
export const coveragePathConst = './coverage/coverage-summary.json';
export const hashesConst = {
  coverage: [
    { key: 'branches', value: 'Branches' },
    { key: 'functions', value: 'Functions' },
    { key: 'lines', value: 'Lines' },
    { key: 'statements', value: 'Statements' },
  ],
};
export const coverageUrlConst = (
  alt: string,
  coverage: number,
  color: string,
  badgeStyle: TBadgeStyles,
  customBadgeLogo: string | false,
): string =>
  `https://img.shields.io/badge/${alt}-${coverage}${encodeURI('%')}-${color}.svg?style=${badgeStyle}${
    customBadgeLogo ? `&logo=${customBadgeLogo}` : ''
  }`;
export const badgeStyles: Record<string, TBadgeStyles> = {
  'for-the-badge': 'for-the-badge',
  'flat-square': 'flat-square',
  flat: 'flat',
  plastic: 'plastic',
  default: 'flat',
};
