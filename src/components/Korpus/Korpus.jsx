import React, { useState, useEffect } from 'react';
import css from './Korpus.module.css';
import korpus_mock_data from "./korpus_mock_data";
import KorpusCard from "./KorpusCard/KorpusCard";
import useFetch from "../../hooks/useFetch.jsx";

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

    const {data, isLoading, error} = useFetch('https://biryuzikki.uz/api/v1/questions/');
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data || !data.results) {
        return <div>No data available</div>;
    }

    return (
        <div className={css.korpusWrapper}>
            <div className={css.korpusTitle}>
                <h2 className={css.korpusTitleText}>Korpus haqida</h2>
            </div>
            <div className={css.korpusCardsContainer}>
                <div className={css.korpusCards}>
                    {data.results.slice(0, showAll ? data.results.length : (isMobile ? visibleCount : data.results.length)).map((korpusData, index) => (
                        <KorpusCard
                            id={korpusData.id}
                            title={korpusData.question}
                            description={korpusData.short_answer}
                            key={index}
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
