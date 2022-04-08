import React, { useState } from 'react';
import styled from 'styled-components';

const ProductImage = styled.div`
width: 450px;
height: 100%;
background-image: ${(props) => `url(${props.image})`};
background-size: cover;
background-position: 0% 30%;
`;

const LeftArrow = styled.div`
width: 50px;
height: 100%;
background: green;
`;

const RightArrow = styled.div`
width: 50px;
height: 100%;
background: green;
`;

const Carousel = styled.div`
height: 100%;
width: 150px;
background: purple;
`;

const StyleImg = styled.img`
height: 40px;
width: 100%;
background-image: ${(props) => `url(${props.img})`};
background-size: cover;

`;

function ImageGallery({ style, images }) {
  const [image, setImage] = useState(0);

  return (
    <div className="left-div">
      <Carousel>{images.map((image, i) => <StyleImg img={image.url} key={i} />)}</Carousel>
      <LeftArrow onClick={() => image > 0 && setImage((prevImage) => prevImage - 1)} />
      <ProductImage image={style.photos[image].url} />
      <RightArrow onClick={() => image < images.length - 1 && setImage((prevImage) => prevImage + 1)} />
    </div>
  );
}

export default ImageGallery;
