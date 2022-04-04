import React from 'react';
import styled from 'styled-components';

const StylesContainer = styled.div`
width: auto;
height: 150px;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-auto-rows: auto;
`;

const StyleIcon = styled.div`
width: 34px;
height: 34px;
background-image: ${(props) => `url(${props.style.photos[0].thumbnail_url})`};
background-size: cover;
border-radius: 50%;
background-position: 0% 30%;
margin-right: 10px;
`;

function StyleSelector({ styles, selectStyle }) {
  return (
    <div className="size-selector">
      <StylesContainer>
        {styles.styles.results.map((style, i) => <StyleIcon style={style} onClick={() => selectStyle(style)} key={i} />)}
      </StylesContainer>
    </div>
  );
}

export default StyleSelector;

{ /* <div className="style-btn">style1</div>
<div className="style-btn">style2</div>
<div className="style-btn">style4</div>
<div className="style-btn">style4</div>
<div className="style-btn">style5</div>
<div className="style-btn">style6</div> */ }
