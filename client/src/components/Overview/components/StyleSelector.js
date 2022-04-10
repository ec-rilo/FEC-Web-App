import React from 'react';
import styled from 'styled-components';

const StylesContainer = styled.div`
width: 210px;
height: 100px;
display: grid;
margin-top: 15px;
grid-template-columns: repeat(4, 1fr);
grid-auto-rows: auto;
`;

const StyleIcon = styled.div`
width: 40px;
height: 40px;
background-image: ${(props) => `url(${props.styles.photos[0].thumbnail_url})`};
background-size: cover;
border-radius: 50%;
background-position: center;
margin-right: 10px;

&:hover {
  box-shadow: 0 0 0 3px white, 0 0 0 4px black;
}
`;

function StyleSelector({ styles, selectStyle, currentStyleIndex }) {
  if (!styles?.length) return null;
  // console.log(styles[currentStyleIndex]);
  return (
    <div className="size-selector">
      <div style={{
        display: 'flex',
        fontSize: '14px',
      }}
      >
        <div style={{
          fontWeight: '600',
          marginRight: '10px',
        }}
        >
          Style

        </div>
        {' '}
        {styles[currentStyleIndex].name}
      </div>
      <StylesContainer>
        {styles.map((style, i) => (
          <StyleIcon
            styles={style}
            // onMouseEnter={() => selectStyle(i)}
            onClick={() => selectStyle(i)}
            key={i}
            style={i === currentStyleIndex
              ? { boxShadow: '0 0 0 3px white, 0 0 0 4px black' }
              : null}
          />
        ))}
      </StylesContainer>
    </div>
  );
}

export default StyleSelector;
