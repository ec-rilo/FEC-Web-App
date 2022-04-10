import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './PhotoModal';

const Photos = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

const ReviewPhotoEntry = ({ photo, setPhotoOnClick, photoOnClick }) => (
  <Photos>
    <div key={photo.id} onClick={() => { setPhotoOnClick(false); }}>
      <Modal
        title="photo"
        content={(
          <img
            style={{width: "650px"}}
            src={photo.url}
            alt="productPhoto"
          />
            )}
        onClose={setPhotoOnClick}
        close={photoOnClick}
      />
      <img
        src={photo.url}
        width="150"
        alt="productPhoto"
      />
    </div>
  </Photos>
);

export default ReviewPhotoEntry;
