import React, { Component } from 'react';
import styled from 'styled-components';

import { sizes } from '../../assets/theme';

const HeaderStyle = styled.div`
  height: 60px;
  background-color: ${props => props.theme.baseColor};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${sizes.mediumScale}) {
    justify-content: space-between;
    padding: 0 20px;
  }
`;

const HeaderContent = styled.div`
  color: ${props => props.theme.secondLighterColor};
  padding: 10px;
  h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 100;
    font-family: ${props => props.theme.nanum};
  }
  @media (max-width: ${sizes.mediumScale}) {
    ${props => {
      if (props.usermenu) return `display: none`;
    }};
  }
`;

class Header extends Component {
  _openModal() {}

  _renderUsermenu(auth, modal) {
    return auth ? (
      <h1>Username</h1>
    ) : (
      <h1 onClick={() => this.props.attemptLogin()}>Login</h1>
    );
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <HeaderStyle>
        <HeaderContent>
          <h1>Site Title</h1>
        </HeaderContent>

        <HeaderContent usermenu>
          {this._renderUsermenu(isLoggedIn)}
        </HeaderContent>
      </HeaderStyle>
    );
  }
}

export default Header;
