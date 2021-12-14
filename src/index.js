import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import theme from './styles/theme';

const { Kakao } = window;

Kakao.init(process.env.REACT_APP_JAVASCRIPT_KEY);
Kakao.isInitialized();

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
