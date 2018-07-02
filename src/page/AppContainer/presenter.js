import React, { Component, Fragment } from 'react';

import Header from '../../components/Header';
import Body from '../../components/Body';
import Footer from '../../components/Footer';

import Login from '../../components/Login';

class AppContainer extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Login />
        <Body />
        <Footer />
      </Fragment>
    );
  }
}

export default AppContainer;
