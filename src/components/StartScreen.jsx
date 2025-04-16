const StartScreen = ({ onStart }) => {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-6">React Quiz Challenge</h1>
        <p className="text-gray-600 mb-8">
          Test your knowledge of React with this quick quiz. Answer all questions to see your final score!
        </p>
        <button
          onClick={onStart}
          className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Start Quiz
        </button>
      </div>
    );
  };
  
  export default StartScreen;
  