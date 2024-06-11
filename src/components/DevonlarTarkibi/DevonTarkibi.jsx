import css from './DevonlarTarkibi.module.css';

// devon images
import chiston from '../../assets/images/devonNames/chiston.svg';
import gazallar from '../../assets/images/devonNames/gazallar.svg';
import lugz from '../../assets/images/devonNames/lugz.svg';
import musaddas from '../../assets/images/devonNames/musaddas.svg';
import mustazod from '../../assets/images/devonNames/mustazod.svg';
import muxammas from '../../assets/images/devonNames/muxammas.svg';
import qasida from '../../assets/images/devonNames/qasida.svg';
import qita from '../../assets/images/devonNames/qita.svg';
import tarjiband from '../../assets/images/devonNames/tarjiband.svg';
import tuyuq from '../../assets/images/devonNames/tuyuq.svg';
import DevonlarTarkibiImages from "../DevonlarTarkibiImages/DevonlarTarkibiImages.jsx";
import 'swiper/css';
import {SwiperSlide, Swiper} from "swiper/react";
import {Link} from "react-router-dom";
import Janrlar from "../Janrlar/Janrlar.jsx";
import JanrData from "../JanrData/JanrData.jsx";
import JanrSingleData from "../JanrSingleData/JanrSingleData.jsx";

const DevonTarkibi = () => {
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
                    <SwiperSlide><Link to={'?janr=gazallar'}><DevonlarTarkibiImages img={mustazod} number={'(160)'}/></Link></SwiperSlide>
                    <SwiperSlide><Link to={'?janr=mustazod'}><DevonlarTarkibiImages img={mustazod} number={'(160)'}/></Link></SwiperSlide>
                    <SwiperSlide><Link to={'?janr=muxammas'}><DevonlarTarkibiImages img={muxammas} number={'(160)'}/></Link></SwiperSlide>
                    <SwiperSlide><Link to={'?janr=musaddas'}><DevonlarTarkibiImages img={musaddas} number={'(160)'}/></Link></SwiperSlide>
                    <SwiperSlide><Link to={'?janr=tarjiband'}><DevonlarTarkibiImages img={tarjiband} number={'(160)'}/></Link></SwiperSlide>
                    <SwiperSlide><Link to={'?janr=qasida'}><DevonlarTarkibiImages img={qasida} number={'(160)'}/></Link></SwiperSlide>
                    <SwiperSlide><Link to={'?janr=qita'}><DevonlarTarkibiImages img={qita} number={'(160)'}/></Link></SwiperSlide>
                    <SwiperSlide><Link to={'?janr=chiston'}><DevonlarTarkibiImages img={chiston} number={'(160)'}/></Link></SwiperSlide>
                    <SwiperSlide><Link to={'?janr=tuyuq'}><DevonlarTarkibiImages img={tuyuq} number={'(160)'}/></Link></SwiperSlide>
                    <SwiperSlide><Link to={'?janr=lugz'}><DevonlarTarkibiImages img={lugz} number={'(160)'}/></Link></SwiperSlide>
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