import React, { useState } from "react";
import styles from "./Carousel.module.css";
import arrowLeft from '../../assets/images/arrowRightCarousel.svg'
import arrowRight from '../../assets/images/arrowLeftCarousel.svg'
import DevonCard from "../Devonlar/DevonCard/DevonCard.jsx";
import devonlar from "../Devonlar/devonlar.js";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const itemsPerView = 4;

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, devonlar.length - itemsPerView));
    };

    return (
        <div className={styles.carouselContainer}>
            <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handlePrevClick}>
                <img src={arrowRight} alt=""/>
            </button>
            <div className={styles.carouselWrapper}>
                <div
                    className={styles.carouselContent}
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                >
                    {devonlar.map((item) => (
                        <div className={styles.carouselItem} key={item.id}>
                            <DevonCard id={item.id} title={item.title} description={item.description} image={item.image} />
                        </div>
                    ))}
                </div>
            </div>
            <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleNextClick}>
                <img src={arrowLeft} alt="left arrow icon"/>
            </button>
        </div>
    );
};

export default Carousel;
