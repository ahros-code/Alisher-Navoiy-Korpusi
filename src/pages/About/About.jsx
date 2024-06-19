import css from './About.module.css'
import SecondHero from "../../components/SecondHero/SecondHero.jsx";
import useFetch from "../../hooks/useFetch.jsx";
import React from "react";

const About = () => {
    const {data, isLoading, error} = useFetch('http://biryuzikki.uz/api/v1/general/biography/');
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data || !data.biography) {
        return <div>No data available</div>;
    }
    return (
        <>
            <div className={css.secondHeroWrapper}>
                <SecondHero/>
            </div>
            <div className={css.aboutMainSection}>
                <div className={css.secondContainer}>
                    <div className={css.aboutMainSectionText} dangerouslySetInnerHTML={{__html: data.biography}}/>
                </div>
            </div>
        </>
    )
}
export default About;