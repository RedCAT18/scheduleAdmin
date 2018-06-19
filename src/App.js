import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';

import { injectGlobal, ThemeProvider } from 'styled-components';

import store from './store';

import theme from './assets/theme';
import Header from './components/Header';
import Slide from './components/Slide';

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
          <Fragment>
            <Header />
            <Slide />
          </Fragment>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
