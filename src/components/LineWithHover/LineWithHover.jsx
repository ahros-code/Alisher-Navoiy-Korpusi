import css from './LineWithHover.module.css';
import {useState} from "react";

const LineWithHover = ({ text, wordExplanations }) => {
    const [hoveredWord, setHoveredWord] = useState(null);
    const [explanation, setExplanation] = useState('');

    // Split text into words
    const words = text.split(' ');

    const handleMouseEnter = (word) => {
        const explanationObj = wordExplanations.find(
            (we) => we.word === word.replace(/[.,]/g, '') // remove punctuation for matching
        );

        if (explanationObj) {
            setExplanation(explanationObj.explanation);
        } else {
            setExplanation('Explanation not available');
        }

        setHoveredWord(word);
    };

    const handleMouseLeave = () => {
        setHoveredWord(null);
        setExplanation('');
    };

    return (
        <p>
            {words.map((word, index) => (
                <span
                    key={index}
                    onMouseEnter={() => handleMouseEnter(word)}
                    onMouseLeave={handleMouseLeave}
                    className={css.text}
                >
          {word}{' '}
                    {hoveredWord === word && (
                        <span className={css.hoverDiv}>
                             <span style={{
                                 fontSize: "12px",
                                 lineHeight: "24px",
                                 color: '#6D93A9'
                             }}>Semantik izoh:</span>
                            {explanation}
            </span>
                    )}
        </span>
            ))}
        </p>
    );
};

export default LineWithHover;