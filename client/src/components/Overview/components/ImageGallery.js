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
/* transform: translateX(50px); */
`;

const RightArrow = styled.div`
width: 50px;
height: 100%;
background: green;
opacity: 0.5;
/* transform: translateX(-50px); */
`;

function ImageGallery({ styles, currentStyleIndex }) {
  const [image, setImage] = useState(0);

  useEffect(() => {
    setImage(0);
  }, [currentStyleIndex]);

  if (!styles?.length) return null;

  function prevImg() {
    if (image > 0) {
      setImage((prevImage) => prevImage - 1);
    }
  }

  function nextImg() {
    if (image < styles?.[currentStyleIndex]?.photos?.length - 1) {
      setImage((prevImage) => prevImage + 1);
    }
  }

  function setImg(index) {
    setImage(index);
  }

  return (
    <div className="left-div">
      <VerticalCarousel styles={styles} currentStyleIndex={currentStyleIndex} image={image} setImg={setImg} />
      <LeftArrow onClick={prevImg} />
      <MainImage image={styles?.[currentStyleIndex]?.photos[image]?.url} />
      <RightArrow onClick={nextImg} />
    </div>
  );
}

export default ImageGallery;
