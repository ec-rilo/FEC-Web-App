import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  color: white;
  border-radius: 3px;
  background-color: #112D4E;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const AskQuestion = () => {
  return (
    <Button>
      Ask a question
    </Button>
  );
}

export default AskQuestion;
