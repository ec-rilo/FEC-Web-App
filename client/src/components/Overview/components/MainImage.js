import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DefaultView = styled.img`
width: 500px;
height: 100%;
background-image: ${(props) => `url(${props.image})`};
background-size: cover;
background-position: center;
`;

function MainImage({ image }) {
  const [[x, y], setXY] = useState([0, 0]);
  // const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [style, setStyle] = useState({});
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (zoomed) {
      zoom();
    }
  }, [x, y]);

  function zoom() {
    setStyle({
      // width: `${500 * 1.5}px`,
      // height: `${600 * 1.5}px`,
      // backgroundImage: `url(${image})`,
      backgroundSize: `${600 * 2}px ${
        500 * 2}px`,
      backgroundRepeat: 'no-repeat',
      // backgroundSize: 'cover',
      // backgroundPosition: 'center',
      // overflowX: 'hidden',
      // overflowY: 'hidden',
      backgroundPositionX: `${-x * 1.5}px`,
      backgroundPositionY: `${-y * 1.5}px`,
    });
  }

  function handleMouseMove(e) {
    const { top, left } = e.currentTarget.getBoundingClientRect();
    const x = e.pageX - left - window.pageXOffset;
    const y = e.pageY - top - window.pageYOffset;
    setXY([x, y]);
  }

  return (
    <DefaultView onClick={() => setZoomed((prevZoomed) => !prevZoomed)} onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={() => setZoomed(false)} style={style} image={image} />
  );
}

export default MainImage;
