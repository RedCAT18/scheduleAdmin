import React, { Component } from 'react';
import { Provider } from 'react-redux';

import styled, { injectGlobal, ThemeProvider } from 'styled-components';

import store from './store';

import theme from './assets/theme';
import Header from './components/Header';

injectGlobal`
body {
  padding: 0;
  margin: 0;
}
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
