import React from 'react';
import styled from 'styled-components';

const StylesContainer = styled.div`
background: blue;
width: 50%;
height: 150px;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-auto-rows: auto;
`;

const StyleIcon = styled.div`
width: 34px;
height: 34px;
background: yellow;
background-image: ${({ src }) => `url(${src})`};
border-radius: 50%;
background-repeat: no-repeat;
`;

function StyleSelector() {
  return (
    <div className="size-selector">
      <StylesContainer>
        <StyleIcon />
        <StyleIcon />
        <StyleIcon />
        <StyleIcon />
        <StyleIcon />
        <StyleIcon />
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
