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

function ImageGallery({ styles, currentStyleIndex }) {
  const [image, setImage] = useState(0);

  if (!styles?.length) return null;

  console.log(styles);

  return (
    <div className="left-div">
      <Carousel>
        {styles?.[currentStyleIndex]?.photos?.length > 0
          ? styles?.[currentStyleIndex]?.photos?.map((image, i) => <StyleImg img={image.url} key={i} />)
          : null}
      </Carousel>
      <LeftArrow onClick={() => image > 0 && setImage((prevImage) => prevImage - 1)} />
      <ProductImage image={styles?.[currentStyleIndex]?.photos[image]?.url} />
      <RightArrow onClick={() => image < styles?.[currentStyleIndex]?.photos?.length - 1 && setImage((prevImage) => prevImage + 1)} />
    </div>
  );
}

export default ImageGallery;
