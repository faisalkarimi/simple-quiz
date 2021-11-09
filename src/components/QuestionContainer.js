import React, { useContext } from "react";
import Question from "./Question";
import { quizData } from "../questions/questionsAndAnswer";
import { QuizContext } from "../context/QuizContext";

const QuestionContainer = () => {
  const { state, dispatch } = useContext(QuizContext);
  const { currentQuestion } = state;

  const handleNext = () => {
    if (currentQuestion < quizData.length) {
      dispatch({ type: "SUBMIT", payload: { currentQuestion } });
    } else {
      dispatch({
        type: "SHOW_SCORE",
        payload: { ...state, score: state.score },
      });
    }
  };
  return (
    <div className="quiz-container" id="quiz">
      {state.showScore ? (
        <>
          <div className="quiz-header">
            <h2>Your Score is {state.score}</h2>
          </div>
          <button onClick={() => dispatch({ type: "RESET_SCORE" })}>
            Restart Quiz
          </button>
        </>
      ) : currentQuestion < quizData.length ? (
        <>
          <div className="quiz-header">
            <Question
              question={quizData[currentQuestion].question}
              answer={quizData[currentQuestion].correct}
              option_a={quizData[currentQuestion].a}
              option_b={quizData[currentQuestion].b}
              option_c={quizData[currentQuestion].c}
              option_d={quizData[currentQuestion].d}
              id={quizData[currentQuestion].correct}
            />
          </div>
          <button id="submit" onClick={handleNext}>
            Submit
          </button>
        </>
      ) : (
        <>
          <div className="quiz-header">
            <h2>End of Quiz</h2>
          </div>
          <button id="submit" onClick={handleNext}>
            Show Score
          </button>
        </>
      )}
    </div>
  );
};

export default QuestionContainer;
