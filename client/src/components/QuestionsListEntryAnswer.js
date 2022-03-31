import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const AnswerText = styled.p`
  padding: 0;
  margin: 2px 0 0;
  font-size: 14px;
`;

const ByLine = styled.p`
  color: #666;
  font-size: 12px;
`;

const QuestionListEntryAnswer = ({ answer }) => {
  let { id, body, date, answerer_name, helpfulness, photos } = answer;
  date = moment(date).format('MMMM dS, yyyy');

  return (
    <>
      {/* {JSON.stringify(answer, null, 2)} */}
      <AnswerText>{body}</AnswerText>
      <ByLine>
        by {answerer_name}, {date} |
        Helpful? <a href="#">Yes</a> ({helpfulness}) |&nbsp;
        <a href="#">Report</a>
      </ByLine>
    </>
  );
};

export default QuestionListEntryAnswer;
