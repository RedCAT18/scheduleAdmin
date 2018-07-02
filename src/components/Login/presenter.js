import React, { Component } from 'react';
import styled from 'styled-components';

import { sizes } from '../../assets/theme';

const Container = styled.div`
  display: block;
  margin: 100px auto;
  background-color: white;
  width: 600px;
  @media screen and (max-width: ${sizes.mediumScale}) {
    width: 100%;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.22);
`;

const Inbox = styled.div`
  border-bottom: 1px solid ${props => props.theme.secondLighterColor};
  padding: 20px;
`;

class Login extends Component {
  render() {
    return (
      <Container>
        <Inbox>
          <p> this is modal </p>
        </Inbox>
      </Container>
    );
  }
}

export default Login;
