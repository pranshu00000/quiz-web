import { useQuiz } from '../context/QuizContext';
import ProgressBar from './ProgessBar';
import QuestionCard from './QuestionCard';

const QuizScreen = ({ onFinish }) => {
  const { 
    currentQuestionIndex,
    totalQuestions,
    score,
    isQuizFinished,
    nextQuestion,
    hasAnsweredCurrent
  } = useQuiz();

  const handleNextClick = () => {
    if (isQuizFinished()) {
      onFinish();
    } else {
      nextQuestion();
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-500">
            Question {currentQuestionIndex + 1}/{totalQuestions}
          </span>
          <span className="text-sm font-medium text-blue-600">
            Score: {score}
          </span>
        </div>
        <ProgressBar 
          current={currentQuestionIndex + 1} 
          total={totalQuestions} 
        />
      </div>
      
      <QuestionCard />
      
      <button
        onClick={handleNextClick}
        disabled={!hasAnsweredCurrent()}
        className={`mt-6 w-full py-3 px-4 rounded-lg font-medium transition-colors ${
          hasAnsweredCurrent()
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {isQuizFinished() ? "Show Results" : "Next Question"}
      </button>
    </div>
  );
};

export default QuizScreen;
