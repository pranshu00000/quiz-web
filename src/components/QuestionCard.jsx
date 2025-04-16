import { useQuiz } from '../context/QuizContext';
import OptionButton from './OptionButton';

const QuestionCard = () => {
  const { 
    currentQuestion,
    answerQuestion,
    hasAnsweredCurrent,
    currentAnswerIndex
  } = useQuiz();

  const handleOptionSelect = (optionIndex) => {
    if (!hasAnsweredCurrent()) {
      answerQuestion(optionIndex);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">{currentQuestion.question}</h2>
      
      <div className="space-y-2">
        {currentQuestion.options.map((option, index) => (
          <OptionButton
            key={index}
            label={option}
            isSelected={currentAnswerIndex() === index}
            isCorrect={currentQuestion.correctAnswer === index}
            isAnswered={hasAnsweredCurrent()}
            onClick={() => handleOptionSelect(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;