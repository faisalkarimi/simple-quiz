import React from "react";
import "./App.css";
import QuestionContainer from "./components/QuestionContainer";
import { QuizProvider } from "./context/QuizContext";

function App() {
  return (
    <QuizProvider>
      <QuestionContainer />
    </QuizProvider>
  );
}

export default App;
