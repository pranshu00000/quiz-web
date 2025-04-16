import { useState } from 'react';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import StartScreen from './components/StartScreen';
import { QuizProvider } from './context/QuizContext';

function App() {
  const [gameState, setGameState] = useState('start'); // start, quiz, result

  const startQuiz = () => {
    setGameState('quiz');
  };

  const finishQuiz = () => {
    setGameState('result');
  };

  const restartQuiz = () => {
    setGameState('start');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg">
        <QuizProvider>
          {gameState === 'start' && <StartScreen onStart={startQuiz} />}
          {gameState === 'quiz' && <QuizScreen onFinish={finishQuiz} />}
          {gameState === 'result' && <ResultScreen onRestart={restartQuiz} />}
        </QuizProvider>
      </div>
    </div>
  );
}

export default App;