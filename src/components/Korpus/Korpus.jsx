import React, { useState, useEffect } from 'react';
import css from './Korpus.module.css';
import korpus_mock_data from "./korpus_mock_data";
import KorpusCard from "./KorpusCard/KorpusCard";

const Korpus = () => {
    const [visibleCount, setVisibleCount] = useState(3);
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 660);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 660);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleShowItems = () => {
        setShowAll(prevShowAll => !prevShowAll);
        setVisibleCount(showAll ? 3 : korpus_mock_data.length);
    };

    return (
        <div className={css.korpusWrapper}>
            <div className={css.korpusTitle}>
                <h2 className={css.korpusTitleText}>Korpus haqida</h2>
            </div>
            <div className={css.korpusCardsContainer}>
                <div className={css.korpusCards}>
                    {korpus_mock_data.slice(0, showAll ? korpus_mock_data.length : (isMobile ? visibleCount : korpus_mock_data.length)).map((korpusData) => (
                        <KorpusCard
                            id={korpusData.id}
                            title={korpusData.title}
                            description={korpusData.description}
                            key={korpusData.id}
                        />
                    ))}
                </div>
            </div>
            {isMobile && (
                <button className={css.showMoreButton} onClick={toggleShowItems}>
                    {showAll ? 'Kamroq ko’rish' : 'Ko‘proq ko’rish'}
                </button>
            )}
        </div>
    );
};

export default Korpus;
