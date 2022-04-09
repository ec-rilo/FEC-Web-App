import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import VerticalCarousel from './VerticalCarousel.js';
import MainImage from './MainImage.js';

const ProductImage = styled.div`
width: 500px;
height: 100%;
background-image: ${(props) => `url(${props.image})`};
background-size: cover;
background-position: center;
`;

const LeftArrow = styled.div`
width: 50px;
height: 100%;
background: green;
opacity: 0.5;
transform: translateX(50px);
`;

const RightArrow = styled.div`
width: 50px;
height: 100%;
background: green;
opacity: 0.5;
transform: translateX(-50px);
`;

function ImageGallery({ styles, currentStyleIndex }) {
  const [image, setImage] = useState(0);

  useEffect(() => {
    setImage(0);
  }, [currentStyleIndex]);

  if (!styles?.length) return null;

  return (
    <div className="left-div">
      <VerticalCarousel styles={styles} currentStyleIndex={currentStyleIndex} />
      <LeftArrow onClick={() => image > 0 && setImage((prevImage) => prevImage - 1)} />
      <MainImage image={styles?.[currentStyleIndex]?.photos[image]?.url} />
      <RightArrow onClick={() => image < styles?.[currentStyleIndex]?.photos?.length - 1 && setImage((prevImage) => prevImage + 1)} />
    </div>
  );
}

export default ImageGallery;
