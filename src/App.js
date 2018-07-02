import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { injectGlobal, ThemeProvider } from 'styled-components';

import store from './store';

import theme from './assets/theme';
import AppContainer from './page/AppContainer';

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
          <AppContainer />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
