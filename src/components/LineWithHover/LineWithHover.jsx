import css from "./LineWithHover.module.css";
import { useContext, useState } from "react";
import { BaytContext } from "../../context/BaytContext.jsx";

const LineWithHover = ({ text, wordExplanations, lineId }) => {
  const [hoveredWord, setHoveredWord] = useState(null);
  const [explanation, setExplanation] = useState("");
  const { selectedBayt } = useContext(BaytContext);

  const words = text.split(" ");

  const handleMouseEnter = (word) => {
    const explanationObj = wordExplanations.find(
      (we) => we.word === word.replace(/[.,!?]/g, ""),
    );

    if (explanationObj) {
      setExplanation(explanationObj.explanation);
    } else {
      setExplanation("Explanation not available");
    }

    setHoveredWord(word);
  };

  const handleMouseLeave = () => {
    setHoveredWord(null);
    setExplanation("");
  };

  return (
    <p>
      <span
        style={
          selectedBayt.byte * 2 == lineId + 1 ||
          selectedBayt.byte * 2 == lineId + 2
            ? {
                backgroundColor: "#FEF08A",
                borderRadius: "9999px",
                padding: "7px",
              }
            : {}
        }
      >
        {words.map((word, index) => (
          <span
            key={index}
            onMouseEnter={() => handleMouseEnter(word)}
            onMouseLeave={handleMouseLeave}
            className={css.text}
          >
            {word}{" "}
            {hoveredWord === word && (
              <span className={css.hoverDiv}>
                <span
                  style={{
                    fontSize: "12px",
                    lineHeight: "24px",
                    color: "#6D93A9",
                  }}
                >
                  Semantik izoh:
                </span>
                {explanation}
              </span>
            )}
          </span>
        ))}
      </span>
    </p>
  );
};

export default LineWithHover;
