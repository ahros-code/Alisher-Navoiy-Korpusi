import React, { useState } from "react";

const Word = ({ word, explanations }) => {
  const [showExplanation, setShowExplanation] = useState(false);

  const handleMouseEnter = () => {
    setShowExplanation(true);
  };

  const handleMouseLeave = () => {
    setShowExplanation(false);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        textDecoration: "underline",
        cursor: "pointer",
      }}
    >
      {word}
      {showExplanation && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "white",
            padding: "0.5em",
            border: "1px solid black",
          }}
        >
          {explanations[word]}
        </div>
      )}
    </span>
  );
};

export default Word;
