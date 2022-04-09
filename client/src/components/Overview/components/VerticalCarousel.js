import React, { useState } from 'react';
import styled from 'styled-components';

const Carousel = styled.div`
height: 100%;
width: 80px;
background: purple;
`;

const StyleImg = styled.div`
height: 90px;
width: 80px;
background-color: green;
background-image: ${(props) => `url(${props.image})`};
background-size: cover;
background-position: center;
`;

function VerticalCarousel({ styles, currentStyleIndex }) {
  const [current, setCurrent] = useState(0);
  const imgMax = current + 6;

  function nextImg() {
    setCurrent((prevCurrent) => prevCurrent + 1);
  }

  console.log(styles[currentStyleIndex]);

  return (
    <Carousel>
      {styles[currentStyleIndex].photos.slice(current, imgMax).map((image, i) => <StyleImg onClick={() => console.log(i)} image={image.url} key={i} />)}
      { styles[currentStyleIndex].photos.length >= 6
        ? <div onClick={nextImg}>arrow</div>
        : null}
    </Carousel>
  );
}

export default VerticalCarousel;
