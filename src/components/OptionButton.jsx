const OptionButton = ({ label, isSelected, isCorrect, isAnswered, onClick }) => {
    const getButtonStyles = () => {
      const baseStyle = "p-4 w-full text-left mb-3 border rounded-lg cursor-pointer transition-colors ";
      
      if (!isAnswered) {
        return baseStyle + (isSelected 
          ? "bg-blue-100 border-blue-500" 
          : "hover:bg-gray-100");
      }
      
      if (isCorrect) {
        return baseStyle + "bg-green-100 border-green-500";
      }
      
      if (isSelected && !isCorrect) {
        return baseStyle + "bg-red-100 border-red-500";
      }
      
      return baseStyle + "opacity-70";
    };
  
    return (
      <button
        className={getButtonStyles()}
        onClick={onClick}
        disabled={isAnswered}
      >
        {label}
      </button>
    );
  };
  
  export default OptionButton;