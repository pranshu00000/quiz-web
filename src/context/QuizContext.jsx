import { createContext, useContext, useState } from 'react';
import { quizData } from '../data/quizData';

const QuizContext = createContext(null);

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
  };

  const answerQuestion = (selectedOptionIndex) => {
    const currentQuestion = quizData[currentQuestionIndex];
    const isCorrect = selectedOptionIndex === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setAnswers([...answers, {
      questionIndex: currentQuestionIndex,
      selectedOption: selectedOptionIndex,
      isCorrect
    }]);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const hasAnsweredCurrent = () => {
    return answers.some(answer => answer.questionIndex === currentQuestionIndex);
  };

  const currentAnswerIndex = () => {
    const answer = answers.find(a => a.questionIndex === currentQuestionIndex);
    return answer ? answer.selectedOption : null;
  };

  const isQuizFinished = () => {
    return currentQuestionIndex === quizData.length - 1 && hasAnsweredCurrent();
  };

  const value = {
    questions: quizData,
    currentQuestionIndex,
    currentQuestion: quizData[currentQuestionIndex],
    score,
    answers,
    answerQuestion,
    nextQuestion,
    hasAnsweredCurrent,
    currentAnswerIndex,
    isQuizFinished,
    resetQuiz,
    totalQuestions: quizData.length
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};
