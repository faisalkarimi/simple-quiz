import React, { useContext } from "react";
import Question from "./Question";
import { quizData } from "../questions/questionsAndAnswer";
import { QuizContext } from "../context/QuizContext";

const QuestionContainer = () => {
  const { state, dispatch } = useContext(QuizContext);
  const { currentQuestion } = state;

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      dispatch({ type: "SUBMIT", payload: { currentQuestion } });
    } else {
      dispatch({ type: "RESET_SCORE" });
    }
  };
  return (
    <div className="quiz-container" id="quiz">
      <div className="quiz-header">
        {
          <Question
            question={quizData[currentQuestion].question}
            answer={quizData[currentQuestion].correct}
            option_a={quizData[currentQuestion].a}
            option_b={quizData[currentQuestion].b}
            option_c={quizData[currentQuestion].c}
            option_d={quizData[currentQuestion].d}
            id={quizData[currentQuestion].correct}
          />
        }
      </div>
      <button id="submit" onClick={handleNext}>
        Submit
      </button>
    </div>
  );
};

export default QuestionContainer;
