import css from './Devonlar.module.css'
import devonlar from "./devonlar.js";
import DevonCard from "./DevonCard/DevonCard.jsx";

// swiper
import 'swiper/css';
import {SwiperSlide, Swiper} from "swiper/react";

const Devonlar = () => {
    return (
        <div className={css.devonlarSectionWrapper}>
            <div className={css.devonlarTitle}>
                <h2 className={css.devonlarTitleText}>Devonlar</h2>
            </div>
            <div className={css.devonCards}>
                <Swiper slidesPerView={4} spaceBetween={24} breakpoints={{
                    1027: {
                        slidesPerView: 4,
                        spaceBetween: 24
                    },
                    686: {
                        slidesPerView: 3
                    },
                    375: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    }
                }}>
                    {devonlar.map((devon) => (
                        <SwiperSlide key={devon.id}>
                            <DevonCard id={devon.id} title={devon.title} description={devon.description}
                                       image={devon.image}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Devonlar;