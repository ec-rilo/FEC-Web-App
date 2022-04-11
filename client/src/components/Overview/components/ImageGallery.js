import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import styled from 'styled-components';
import VerticalCarousel from './VerticalCarousel.js';
import MainImage from './MainImage.js';

const LeftArrow = styled.div`
width: 50px;
height: 100%;
display: flex;
justify-content: center;
transform: translateX(10px);
z-index: 1;
`;

const RightArrow = styled.div`
width: 50px;
height: 100%;
display: flex;
justify-content: center;
transform: translateX(-90px);
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
      <LeftArrow onClick={prevImg}>
        {image > 0
          ? (
            <ChevronLeftIcon style={{
              color: 'white',
              cursor: 'pointer',
            }}
            />
          )
          : null}
      </LeftArrow>
      <MainImage image={styles?.[currentStyleIndex]?.photos[image]?.url} />
      <RightArrow onClick={nextImg}>
        { image < styles?.[currentStyleIndex]?.photos?.length - 1
          ? (
            <ChevronRightIcon style={{
              color: 'white',
              cursor: 'pointer',
            }}
            />
          )
          : null}
      </RightArrow>
    </div>
  );
}

export default ImageGallery;
