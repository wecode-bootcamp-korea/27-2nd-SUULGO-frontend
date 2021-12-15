import { css } from 'styled-components';

const theme = {
  mint: '#00C7AE',
  black: '#323232',
  borderGrey: '#DBDBDB',
  background: '#FAFAFA',
  white: '#FFFFFF',
  vermilion: '#ff7425',
  orange: '#FF9900',
  opacityOrange: 'rgba(242,153,74,0.5)',
  yellow: '#FFD66C',
  grey: 'rgba(196,196,196,0.3)',
  middleGrey: 'rgba(65,65,65,0.4)',
  deepGrey: '#828282',
  lightOrange: 'rgba(255,195,170,0.3)',
  fontColor: '#2D2B2B',
  fontTitle: "'Alata', sans-serif;",
  fontContent: "'Noto Sans KR', sans-serif;",
  // mixin
  flexSet: (justify = 'center', align = 'center') =>
    `display: flex; justify-content: ${justify}; align-items: ${align};`,
  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

export default theme;
