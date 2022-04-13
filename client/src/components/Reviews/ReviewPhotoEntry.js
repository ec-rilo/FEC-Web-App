import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../Modal';

const Photos = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

const ReviewPhotoEntry = ({ photo }) => {
  const [photoOnClick, setPhotoOnClick] = useState(false);

  return (
    <Photos>
      <div
        role="button"
        key={photo.id}
        onClick={() => { setPhotoOnClick(true); }}
        onKeyPress={() => {}}
        tabIndex="0"
      >
        {(photoOnClick)
          ? (
            <Modal
              title="Photo"
              content={(
                <img
                  style={{ width: '600px' }}
                  src={photo.url}
                  alt="productPhoto"
                />
              )}
              onClose={() => setPhotoOnClick(false)}
            />
          )
          : ''}
        <img
          src={photo.url}
          width="150"
          alt="productPhoto"
        />
      </div>
    </Photos>
  );
};

ReviewPhotoEntry.propTypes = {
  photo: PropTypes.instanceOf(Object).isRequired,
};

export default ReviewPhotoEntry;
