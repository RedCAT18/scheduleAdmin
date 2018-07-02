import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  width: 100%;
  background-color: ${props => props.theme.secondColor};
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FooterContent = styled.div`
  padding: 10px;
  color: ${props => props.theme.secondDarkerColor};
  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <FooterContent>
        <p>First content</p>
      </FooterContent>
      <FooterContent>
        <p>Second content</p>
      </FooterContent>
    </FooterStyle>
  );
};

export default Footer;
