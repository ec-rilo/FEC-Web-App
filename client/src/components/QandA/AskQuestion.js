import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import AskQuestionModalContent from './AskQuestionModalContent';

const Button = styled.button`
  background: transparent;
  color: white;
  border-radius: 3px;
  background-color: #112D4E;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const AskQuestion = ({ productID }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>
        Ask a question
      </Button>
      {isModalOpen
        && (
        <Modal
          title="Ask Your Question"
          content={
            <AskQuestionModalContent onClose={() => setIsModalOpen(false)} productID={productID} />
          }
          onClose={() => setIsModalOpen(false)}
        />
        )}
    </>
  );
};

export default AskQuestion;
