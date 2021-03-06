import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Nav from './Nav';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: avenir;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  font-size: 1.1rem;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = ({ children }) => (
  <Container>
    <GlobalStyle />
    <Nav />
    <Inner>{children}</Inner>
  </Container>
);

export default Layout;