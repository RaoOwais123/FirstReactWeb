import React from 'react';

function Button({ onPress, onclick, label }) {
  // Define a single handler that calls both onClick and onPress if they are provided
  const handleClick = (event) => {
    if (onclick) onclick(event);  // Call the onclick handler if provided
    if (onPress) onPress(event);  // Call the onPress handler if provided
  };

  return (
    <button
      className="btn px-4 bg-purple-400 p-2 text-white rounded font-medium text-center mx-4"
      onClick={handleClick}  // Use the combined handler
    >
      {label}
    </button>
  );
}

export default Button;
