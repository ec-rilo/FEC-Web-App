import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './ReviewModal';

const Photos = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

const ReviewPhotoEntry = ({ photo }) => {
  const [photoOnClick, setOnClick] = useState(true);

  return (
    <Photos>
        <div key={photo.id} onClick={() => { setOnClick(false); }}>
          <Modal
            title="photo"
            content={(
              <img
                src={photo.url}
                alt="productPhoto"
              />
            )}
            onClose={setOnClick}
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
};

export default ReviewPhotoEntry;
