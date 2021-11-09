import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const Option = ({ answerId, optionId, option }) => {
  const { state, dispatch } = useContext(QuizContext);
  console.log(state.score);

  const handleSelect = (e) => {
    if (e.target.id === answerId) {
      dispatch({
        type: "PICK",
        payload: { ...state, correct: true, checked: true },
      });
    } else {
      dispatch({
        type: "PICK",
        payload: { ...state, correct: false, checked: true },
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
        checked={state.checked}
      />
      <label htmlFor={optionId} id="a_text">
        {option}
      </label>
    </li>
  );
};

export default Option;
