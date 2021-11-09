import React from "react";
import Option from "./Option";

const Question = ({ question, option_a, option_b, option_c, option_d, id }) => {
  return (
    <>
      <h2 id={id}>{question}</h2>
      <ul>
        <Option answerId={id} optionId="a" option={option_a} />
        <Option answerId={id} optionId="b" option={option_b} />
        <Option answerId={id} optionId="c" option={option_c} />
        <Option answerId={id} optionId="d" option={option_d} />
      </ul>
    </>
  );
};

export default Question;
