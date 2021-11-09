import { createContext, useReducer } from "react";
import quizReducer from "./QuizReducer";

const initialState = { score: 0, currentQuestion: 0 };
export const QuizContext = createContext(initialState);

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
