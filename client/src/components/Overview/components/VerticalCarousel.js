import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';

const Carousel = styled.div`
height: 100%;
width: 80px;
display: flex;
flex-direction: column;
z-index: 1;
justify-content: space-around;

.current {
  box-shadow: 0 0 0 2px black inset;
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '25px',
          cursor: 'pointer',
        }}
        onClick={prevPhoto}
      >
        <ChevronUpIcon
          style={display > 0
            ? { height: '40px' }
            : { height: '40px', color: '#dcdddb', cursor: 'auto' }}
        />
      </div>
      {styles[currentStyleIndex].photos.map((photo, i) => (
        (i >= display && i <= display + 5)
          ? (<StyleImg className={image === i ? 'current' : ''} onClick={() => setImg(i)} photo={photo.url} key={i} />)
          : null
      ))}
      <div
        onClick={nextPhoto}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '25px',
          cursor: 'pointer',
        }}
      >
        <ChevronDownIcon
          style={display !== length - 6
            ? { height: '40px' }
            : { height: '40px', color: '#dcdddb', cursor: 'auto' }}
        />
      </div>
    </Carousel>
  );
}

export default VerticalCarousel;
