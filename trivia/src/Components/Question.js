import React, { useEffect, useState } from "react";
import axios from "axios";

function Question({ categoryURL }) {
  const [questionList, setQuestionList] = useState([]);
  const [userAnswer, setUserAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    console.log(`url: ${categoryURL}`);
    axios.get(categoryURL).then((res) => setQuestionList(res.data.results));
  }, []);
  const defineAnswers = (answer) => {
    setCorrectAnswer(questionList[0].correct_answer);
    setUserAnswer(answer);
    console.log(`userAnswer: ${userAnswer}`);
    console.log(`correctAnswer: ${correctAnswer}`);
    compareAnswer(userAnswer, correctAnswer);
  };

  const compareAnswer = () => {
    {
      userAnswer === correctAnswer
        ? console.log("you are correct!")
        : console.log("nope, that is wrong");
    }
  };
  return (
    <div>
      <h1>Question</h1>
      {questionList.length > 0 && (
        <div>
          <p>{questionList[0].question}</p>
          <div>
            <button
              type="button"
              value={questionList[0].correct_answer}
              onClick={(e) => defineAnswers(e.target.value)}
            >
              {questionList[0].correct_answer}
            </button>

            {questionList[0].incorrect_answers.map((answer) => (
              <button
                type="button"
                value={answer}
                onClick={(e) => defineAnswers(e.target.value)}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
