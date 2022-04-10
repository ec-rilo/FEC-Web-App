import React from 'react';
import styled from 'styled-components';

const StylesContainer = styled.div`
width: 200px;
height: 150px;
display: grid;
margin-top: 10px;
grid-template-columns: repeat(4, 1fr);
grid-auto-rows: auto;
`;

const StyleIcon = styled.div`
width: 34px;
height: 34px;
background-image: ${(props) => `url(${props.style.photos[0].thumbnail_url})`};
background-size: cover;
border-radius: 50%;
background-position: center;
margin-right: 10px;
`;

function StyleSelector({ styles, selectStyle, currentStyleIndex }) {
  if (!styles?.length) return null;
  // console.log(styles[currentStyleIndex]);
  return (
    <div className="size-selector">
      <div style={{
        display: 'flex',
      }}
      >
        <b>Style</b>
        {' '}
        {styles[currentStyleIndex].name}
      </div>
      <StylesContainer>
        {styles.map((style, i) => <StyleIcon style={style} onClick={() => selectStyle(i)} key={i} />)}
      </StylesContainer>
    </div>
  );
}

export default StyleSelector;
