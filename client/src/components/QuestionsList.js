import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import QuestionsListEntry from './QuestionsListEntry';

const QuestionsTable = styled.table`
  border: none;
  width: 100%;
`;

const QAColumn = styled.col`
  width: 10px;
`;

const QATextColumn = styled.col`
  width: 100%;
`;

const MoreQuestions = styled.td`
  text-align: center;
`;

const QuestionsList = () => {
  const productID = 65633; // this will obviously need to be passed as a prop/through context
  const [questions, setQuestions] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(4); // number of questions to display

  // comparator to sort questions by "question_helpfulness" property
  const helpfulnessComparator = (a, b) => b.question_helpfulness - a.question_helpfulness;

  useEffect(() => {
    axios.get('/qa/questions', { params: { product_id: productID } })
      .then(res => setQuestions(res.data.results.sort(helpfulnessComparator)))
      .catch(err => console.error(`Error getting questions & answers: ${err}`));
  }, []);

  return (
    <table>
      <QAColumn span="1" />
      <QATextColumn span="1" />
      <tbody>
        {questions?.map((q, i) => (
          (i >= displayLimit)
          ? null
          : <QuestionsListEntry question={q} key={i} />
        ))}
        <tr>
          <td colspan="2" style={{textAlign: "center"}}>
            {questions.length > displayLimit
              ? <button onClick={() => setDisplayLimit(Number.POSITIVE_INFINITY)}>MORE ANSWERED QUESTIONS</button>
              : questions.length && <button onClick={() => setDisplayLimit(4)}>COLLAPSE QUESTIONS</button> || null
            }
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default QuestionsList;
