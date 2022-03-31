import React, { useState } from 'react';
import styled from 'styled-components';

const QuestionInput = styled.input`
  width: 100%;
`;

const QuestionSearch = () => {
  const [userQuery, setUserQuery] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for question: '${userQuery}'`);
  };

  const handleInputChange = (e) => {
    let query = e.target.value;
    setUserQuery(query);
    let filter = e.target.value.length > 2
      ? e.target.value
      : '';
    if (filter) {
      console.log(`Filtering results. Looking for '${query}'`);
    }
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <QuestionInput
          type="text"
          value={userQuery}
          onChange={handleInputChange}
          placeholder="Have a question? Search for answers..."
          autoComplete="off"
        />
      </form>
    </div>
  );
}

export default QuestionSearch;
