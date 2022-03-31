import React, { useState } from 'react';
import QuestionListEntryAnswer from './QuestionListEntryAnswer';

const QuestionsListEntry = ({ question }) => {
  const [displayLimit, setDisplayLimit] = useState(2); // number of answers to display

  let { question_body: questionBody, answers } = question;

  // comparator to sort questions by "question_helpfulness" property
  const helpfulnessComparator = (a, b) => b.helpfulness - a.helpfulness;
  // TODO: Put answers by seller at the top!
  answers = Object.values(answers).sort(helpfulnessComparator);

  return (
    <div>
      <p>
        <b>Q:</b> {questionBody}
      </p>
      <b>A:</b>
      {answers.map((ans, i) => (
        (i >= displayLimit)
        ? null
        : <QuestionListEntryAnswer answer={ans} key={i} />
      ))}
      {answers.length > displayLimit
        ? <button onClick={() => setDisplayLimit(Number.POSITIVE_INFINITY)}>SEE MORE ANSWERS</button>
        : answers.length && <button onClick={() => setDisplayLimit(2)}>COLLAPSE ANSWERS</button> || null
      }
    </div>
  );
}

export default QuestionsListEntry;
