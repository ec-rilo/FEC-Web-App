import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from './ReviewModal';

const Photos = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

const ReviewPhotoEntry = ({ review }) => {
  const [photoOnClick, setPhotoOnClick] = useState(false);

  return (
    <Photos>
      {review.photos.map((photo) => (
        <div key={photo.id} onClick={() => { setPhotoOnClick(true); }}>
          {/* <Modal
            title="photo"
            content={(
              <img
                src={photo.url}
                alt="productPhoto"
              />
            )}
            onClose={setPhotoOnClick}
            writable={photoOnClick}
          /> */}
          <img
            src={photo.url}
            width="150"
            alt="productPhoto"
          />
        </div>
      ))}
    </Photos>
  );
};

export default ReviewPhotoEntry;
