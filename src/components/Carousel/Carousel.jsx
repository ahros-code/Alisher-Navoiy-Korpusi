import React, {useState, useContext} from "react";
import styles from "./Carousel.module.css";
import arrowLeft from '../../assets/images/arrowRightCarousel.svg';
import arrowRight from '../../assets/images/arrowLeftCarousel.svg';
import DevonCard from "../Devonlar/DevonCard/DevonCard.jsx";
import useFetch from "../../hooks/useFetch.jsx";
import {DataContext} from "../../context/DataContext.jsx";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 4;

    const {handleCardClick} = useContext(DataContext);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, (data.devans ? data.devans.length : 0) - itemsPerView));
    };

    const {data, isLoading, error} = useFetch('http://biryuzikki.uz/api/v1/general/');

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data || !data.devans) {
        return <div>No data available</div>;
    }

    return (
        <div className={styles.carouselContainer}>
            <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handlePrevClick}>
                <img src={arrowRight} alt="left arrow icon"/>
            </button>
            <div className={styles.carouselWrapper}>
                <div
                    className={styles.carouselContent}
                    style={{transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`}}
                >
                    {data.devans.map((item) => (
                        <div className={styles.carouselItem} key={item.id}>
                            <DevonCard
                                id={item.id}
                                title={item.name}
                                description={item.desc}
                                image={item.image}
                                onClick={() => handleCardClick(item.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleNextClick}>
                <img src={arrowLeft} alt="right arrow icon"/>
            </button>
        </div>
    );
};

export default Carousel;
