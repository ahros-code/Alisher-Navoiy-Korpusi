import React from 'react';
import Word from '../Word/Word.jsx'

const Textim = ({ textLine, wordExplanations }) => {
    // Split text line into words
    const words = textLine.split(/\s+/);

    return (
        <p>
            {words.map((word, index) => (
                <Word key={index} word={word} explanations={wordExplanations} />
            ))}
        </p>
    );
};

export default Textim;
