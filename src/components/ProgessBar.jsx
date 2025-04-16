const ProgressBar = ({ current, total }) => {
    const progressPercentage = (current / total) * 100;
    
    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;