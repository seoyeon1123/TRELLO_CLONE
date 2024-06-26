import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot, useRecoilValue } from 'recoil'; // useRecoilValue 추가
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { isDarkAtom } from './atoms';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Ownglyph_ryurue-Rg';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405-2@1.0/Ownglyph_ryurue-Rg.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
 
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
    
 
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Ownglyph_ryurue-Rg';
    font-weight: 400;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ThemedApp = () => {
  const isLight = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <ThemedApp />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
