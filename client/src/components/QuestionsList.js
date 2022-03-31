import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import QuestionsListEntry from './QuestionsListEntry';

const QuestionsList = () => {
  const productID = 65631; // this will obviously need to be passed as a prop/through context
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
    <div>
      Questions and Answers:
      <br />
      {questions?.map((q, i) => <QuestionsListEntry question={q} key={i} />)}
    </div>
  )
}

export default QuestionsList
