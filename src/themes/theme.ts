// Reference: https://github.com/ConsenSys/rimble-ui/blob/master/src/theme.js
// Reference: https://github.com/styled-system/styled-system/blob/master/docs/src/gatsby-plugin-theme-ui/index.js
// Reference Tailwind: https://github.com/system-ui/theme-ui/blob/76207a732fba4da145abf9535f33704b8811546c/packages/preset-tailwind/src/index.ts

import { Theme } from 'styled-system';

export const shadows = {
  xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl:
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  outline: '0 0 0 2px var(--outline-color)',
  none: 'none'
};

export const colors = {
  text: '#3f3d4b',
  background: '#ffffff',
  surface: '#f0f5f9',
  brand: '#f12711',
  accent: '#f5af19',
  muted: '#cccccc',
  gray: '#82817d',
  success: '#28a745',
  danger: '#dc3545',
  hover: '#edf2f7',
  warning: '#ffc107',
  badge: {
    brand: '#ffd2ce',
    danger: '#f5c6cb',
    success: '#c3e6cb',
    accent: '#fff5e0',
  }
};

export const radii = {
  'none': '0',
  'sm': '0.125rem',
  'default': '0.25rem',
  'md': '0.375rem',
  'lg': '0.8rem',
  'full': '9999px',
};

const spacing = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
};

const maxWidth = {
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
};

const ratios = {
  '1': '100%',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
};

export const sizes = {
  ...spacing,
  ...maxWidth,
  ...ratios,
  full: '100%',
  screenHeight: '100vh',
  screenWidth: '100vw',
};

export const space = {
  ...spacing,
};


export const baseFonts = {
  sans:
    '"Ubuntu",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  serif: 'Georgia,Cambria,"Times New Roman",Times,serif',
  mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
};

export const fonts = {
  ...baseFonts,
  body: baseFonts.sans,
  heading: 'inherit'
};

export const fontSizes = [
  '0.75rem',
  '1rem',    // p
  '1.25rem', // h5
  '1.50rem', // h4
  '2.25rem', // h3
  '3.50rem', // h2
  '5.00rem'  // h1
];

export const fontWeights = {
  light: 300,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900,
};

export const lineHeights = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
};

export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em'
};

export const breakpoints = [
  '0', // xs
  '38rem', // sm
  '60rem', // md
  '80rem', // lg
  '120rem' // xl
];

// https://theme-ui.com/theme-spec/
const theme: Theme = {
  shadows,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  fonts,
  colors,
  radii,
  space,
  sizes,
  breakpoints,
};

export default theme;
