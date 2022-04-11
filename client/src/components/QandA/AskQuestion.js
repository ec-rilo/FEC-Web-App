import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import AskQuestionModalContent from './AskQuestionModalContent';
import { LinkButton } from '../presentation/Button.styles';

const AskQuestion = ({ productID }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LinkButton style={{ fontSize: '14px', marginBottom: '10px' }} onClick={() => setIsModalOpen(true)}>Ask a question</LinkButton>
      {isModalOpen
        && (
        <Modal
          title="Ask Your Question"
          onClose={() => setIsModalOpen(false)}
          content={(
            <AskQuestionModalContent
              onClose={() => setIsModalOpen(false)}
              productID={productID}
            />
          )}
        />
        )}
    </>
  );
};

AskQuestion.propTypes = {
  productID: PropTypes.number.isRequired,
};

export default AskQuestion;
