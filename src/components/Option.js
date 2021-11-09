import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const Option = ({ answerId, optionId, option }) => {
  const { state, dispatch } = useContext(QuizContext);
  console.log(state.score);
  const handleSelect = (e) => {
    // if (e.target.id === answerId) {
    //   dispatch({
    //     type: "PICK",
    //     payload: { ...state, score: state.score + 1 },
    //   });
    // } else {
    //   dispatch({
    //     type: "PICK",
    //     payload: { ...state },
    //   });
    // }
    // console.log(state.score);
    if (e.target.id === answerId) {
      dispatch({
        type: "PICK",
        payload: { ...state, correct: true },
      });
    } else {
      dispatch({
        type: "PICK",
        payload: { ...state, correct: false },
      });
    }
  };
  return (
    <li>
      <input
        type="radio"
        name="answer"
        id={optionId}
        className="answer"
        onClick={handleSelect}
      />
      <label htmlFor={optionId} id="a_text">
        {option}
      </label>
    </li>
  );
};

export default Option;
