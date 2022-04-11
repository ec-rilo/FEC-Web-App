import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function MainImage({ image }) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  return (
    <div
      style={{
        height: '600px',
        width: '550px',
        position: 'relative',
        transform: 'translateX(-40px)',
      }}
    >
      <img
        src={image}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          cursor: `${showMagnifier ? 'zoom-out' : 'zoom-in'}`,
        }}
        onClick={(e) => {
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(!showMagnifier);
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        alt="img"
      />

      <div
        style={{
          display: showMagnifier ? '' : 'none',
          position: 'absolute',
          pointerEvents: 'none',
          height: `${600}px`,
          width: `${550}px`,
          transform: 'translateY(-606.5px)',
          backgroundImage: `url('${image}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${imgWidth * 2.5}px ${
            imgHeight * 2.5
          }px`,
          backgroundPositionX: `${-x * 2.5 / 1.7}px`,
          backgroundPositionY: `${-y * 2.5 / 1.7}px`,
        }}
      />
    </div>
  );
}

export default MainImage;
