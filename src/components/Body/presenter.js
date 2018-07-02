import React, { Component } from 'react';
import styled from 'styled-components';
import { sizes } from '../../assets/theme';

import mainImage from '../../assets/images/main-img.svg';

const ImageSlide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  img {
    max-width: 700px;
    width: 60%;
    @media screen and (max-width: ${sizes.smallScale}) {
      width: 100%;
    }
  }
`;

const MainSlogan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  h1 {
    font-family: ${props => props.theme.caveat};
    font-size: 5vmax;
    margin: 0;
    font-style: italic;
    text-align: center;
    @media screen and (min-width: ${sizes.largeScale}) {
      font-size: 3.2rem;
    }
  }
`;

const MainButton = styled.button`
  width: 240px;
  background-color: ${props => props.theme.baseColor};
  color: white;
  font-size: 1.5rem;
  font-family: ${props => props.theme.nanum};
  padding: 10px;
  border: none;
  margin-bottom: 80px;
`;

class Body extends Component {
  render() {
    return (
      <ImageSlide>
        <MainSlogan>
          <h1>Want to manage your daylife?</h1>
        </MainSlogan>
        <img src={mainImage} alt="Slide images" />
        <MainButton>Login</MainButton>
      </ImageSlide>
    );
  }
}

export default Body;
