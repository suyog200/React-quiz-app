import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import QuizCompletedImg from '../assets/quiz-complete.png';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex =  userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, answer];
    });
   },[]
  );


  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);


  if(quizIsComplete) {
    return (
        <div id="summary">
            <img src={QuizCompletedImg} alt="" />
            <h2>Quiz completed</h2>
        </div>
    )
  }

  return (
    <div id="quiz">
        <Question 
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
        />
    </div>
  );
}
