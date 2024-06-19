import css from './DevonlarTarkibi.module.css';

import DevonlarTarkibiImages from "../DevonlarTarkibiImages/DevonlarTarkibiImages.jsx";
import 'swiper/css';
import {SwiperSlide, Swiper} from "swiper/react";
import {Link} from "react-router-dom";
import Janrlar from "../Janrlar/Janrlar.jsx";
import JanrData from "../JanrData/JanrData.jsx";
import JanrSingleData from "../JanrSingleData/JanrSingleData.jsx";
import useFetch from "../../hooks/useFetch.jsx";

const DevonTarkibi = () => {
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
        <div className={css.devonTarkibi}>
            <h2 className={css.devonTarkibiTitle}>
                Devon tarkibi
            </h2>
            <div className={css.devonlarImages}>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={17}
                >
                    {data.genres.map(item => (
                        <SwiperSlide key={item.ordering_number}>
                            <Link to={`?janr=${item.name}`}>
                                <DevonlarTarkibiImages number={item.counts} name={item.name} />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={css.devonTarkibiDataWrapper}>
                <Janrlar />
                <JanrData />
                <JanrSingleData />
            </div>
        </div>
    )
}

export default DevonTarkibi