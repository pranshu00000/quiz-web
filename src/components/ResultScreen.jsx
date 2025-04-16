import { useQuiz } from '../context/QuizContext';

const ResultScreen = ({ onRestart }) => {
  const { score, totalQuestions, resetQuiz } = useQuiz();
  
  const handleRestart = () => {
    resetQuiz();
    onRestart();
  };
  
  const getResultMessage = () => {
    if (score === totalQuestions) {
      return "Perfect score! Excellent work!";
    } else if (score >= totalQuestions / 2) {
      return "Good job! You passed the quiz.";
    } else {
      return "Try again to improve your score.";
    }
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <div className="my-8">
        <div className="text-5xl font-bold text-blue-600 mb-2">
          {score}/{totalQuestions}
        </div>
        <p className="text-gray-600">{getResultMessage()}</p>
      </div>
      <button
        onClick={handleRestart}
        className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default ResultScreen;
