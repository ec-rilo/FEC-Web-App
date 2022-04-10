import React, { useState } from 'react';
import styled from 'styled-components';

const Carousel = styled.div`
height: 100%;
width: 80px;
background: purple;

.current {
  border: 1px solid red
}
`;

const StyleImg = styled.div`
height: 90px;
width: 80px;
background-image: ${(props) => `url(${props.photo})`};
background-size: cover;
background-position: center;
`;

function VerticalCarousel({
  styles, currentStyleIndex, image, selectStyle, setImg,
}) {
  const [display, setDisplay] = useState(0);
  const { length } = styles[currentStyleIndex].photos;

  function nextPhoto() {
    if (display !== length - 6) {
      setDisplay(display === length - 6 ? 0 : display + 1);
    }
  }

  function prevPhoto() {
    if (display > 0) {
      setDisplay(display === 0 ? 0 : display - 1);
    }
  }

  return (
    <Carousel>
      <div onClick={prevPhoto}>arrow</div>
      {styles[currentStyleIndex].photos.map((photo, i) => (
        (i >= display && i <= display + 5)
          ? (<StyleImg className={image === i ? 'current' : ''} onClick={() => setImg(i)} photo={photo.url} key={i} />)
          : null
      ))}
      { styles[currentStyleIndex].photos.length >= 6
        ? <div onClick={nextPhoto}>arrow</div>
        : null}
    </Carousel>
  );
}

export default VerticalCarousel;
