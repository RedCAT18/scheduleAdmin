import React, { Component } from 'react';
import styled from 'styled-components';

const ImageSlide = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  margin-top: 80px;
`;
const images_lg = [
  '../../assets/images/slide1-lg.jpg',
  '../../assets/images/slide2-lg.jpg',
  '../../assets/images/slide3-.jpg'
];

const images_sm = [
  '../../assets/images/slide1-sm.jpg',
  '../../assets/images/slide2-sm.jpg',
  '../../assets/images/slide3-sm.jpg'
];

class Slide extends Component {
  render() {
    return (
      <ImageSlide>
        <img
          src={require('../../assets/images/slide1-sm.jpg')}
          alt="Slide images"
        />
      </ImageSlide>
    );
  }
}

export default Slide;
