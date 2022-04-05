import React, { useState } from 'react';
import styled from 'styled-components';

const Carousel = styled.div`
display: flex;
flex-direction: column;
width: 150px;
height: 100%;
background: pink;
`;

const ProductImage = styled.div`
width: 500px;
height: 100%;
background-image: ${(props) => `url(${props.image})`};
background-size: cover;
background-position: 0% 30%;
`;

function ImageGallery({ images }) {
  const [image, setImage] = useState(images[0].url);
  console.log(images);
  return (
    <div className="left-div">
      <Carousel>Images</Carousel>
      <ProductImage image={images[0].url} />
    </div>
  );
}

export default ImageGallery;
