import React, { Component } from 'react';
import styled from 'styled-components';
// import theme from '../../assets/theme';

const HeaderStyle = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.baseColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${props => props.theme.secondLighterColor};
  margin: 0;
  padding: 0;
  font-size: 2rem;
`;

class Header extends Component {
  render() {
    return (
      <HeaderStyle>
        <Title>Site Title</Title>
      </HeaderStyle>
    );
  }
}

export default Header;
