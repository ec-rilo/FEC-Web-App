import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// const DefaultView = styled.img`
// width: 500px;
// height: 100%;
// background-image: ${(props) => `url(${props.image})`};
// background-size: cover;
// background-position: center;
// `;

function MainImage({ image }) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  return (
    <div
      style={{
        height: '600px',
        width: '500px',
        position: 'relative',
        // backgroundSize: 'cover',
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
          // update image size and turn-on magnifier
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
          // close magnifier
          setShowMagnifier(false);
        }}
        alt="img"
      />

      <div
        style={{
          display: showMagnifier ? '' : 'none',
          position: 'absolute',

          // prevent magnifier blocks the mousemove event of img
          pointerEvents: 'none',
          // set size of magnifier
          height: `${600}px`,
          width: `${500}px`,
          transform: 'translateY(-606.5px)',
          // move element center to cursor pos
          // top: `${y - 600 / 2}px`,
          // left: `${x - 500 / 2}px`,
          backgroundImage: `url('${image}')`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'blue',

          // calculate zoomed image size
          backgroundSize: `${imgWidth * 2.5}px ${
            imgHeight * 2.5
          }px`,

          // calculate position of zoomed image.
          backgroundPositionX: `${-x * 2.5 / 1.7}px`,
          backgroundPositionY: `${-y * 2.5 / 1.7}px`,
        }}
      />
    </div>
  );
}

// function MainImage({ image }) {
//   const [[x, y], setXY] = useState([0, 0]);
//   // const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
//   const [style, setStyle] = useState({});
//   const [isZoomed, setIsZoomed] = useState(false);

//   useEffect(() => {
//     if (isZoomed) {
//       zoom();
//     }
//   }, [x, y]);

//   function zoom() {
//     setStyle({
//       // width: `${500 * 1.5}px`,
//       // height: `${600 * 1.5}px`,
//       // backgroundImage: `url(${image})`,
//       backgroundSize: `${600 * 2}px ${
//         500 * 2}px`,
//       // transform: 'scale(2)',
//       backgroundRepeat: 'no-repeat',
//       // backgroundSize: 'cover',
//       // backgroundPosition: 'center',
//       // overflowX: 'hidden',
//       // overflowY: 'hidden',
//       backgroundPositionX: `${-x - 500 / 2}px`,
//       backgroundPositionY: `${-y - 600 / 2}px`,
//     });
//   }

//   function handleMouseMove(e) {
//     const { top, left } = e.currentTarget.getBoundingClientRect();
//     const x = e.pageX - left - window.pageXOffset;
//     const y = e.pageY - top - window.pageYOffset;
//     setXY([x, y]);
//   }

//   return (
//     <DefaultView onClick={() => setIsZoomed((prevZoomed) => !prevZoomed)} onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={() => setIsZoomed(false)} style={style} image={image} />
//   );
// }

export default MainImage;
