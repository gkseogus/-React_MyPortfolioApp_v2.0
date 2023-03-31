import { css } from '@emotion/react';

const globalStyles = css`
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    letter-spacing: 0.5px;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ol,
  ul,
  li {
    list-style: none;
  }
`;

export default globalStyles;
