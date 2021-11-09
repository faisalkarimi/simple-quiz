const quizReducer = (state, action) => {
  switch (action.type) {
    case "PICK" && "SUBMIT":
      if (state.correct) {
        return {
          ...state,
          score: state.score + 1,
          currentQuestion: state.currentQuestion + 1,
        };
      } else {
        return {
          ...state,
          currentQuestion: state.currentQuestion + 1,
        };
      }
    case "PICK":
      return {
        ...state,
        correct: action.payload.correct,
      };
    case "SUBMIT":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    case "SHOW_SCORE":
      return {
        ...state,
        score: action.payload.score,
        showScore: true,
      };
    case "RESET_SCORE":
      return {
        ...state,
        score: 0,
        currentQuestion: 0,
        showScore: false,
      };
    default:
      return state;
  }
};

export default quizReducer;
