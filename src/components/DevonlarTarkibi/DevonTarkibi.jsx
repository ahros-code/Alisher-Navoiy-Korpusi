import React, { useContext } from "react";
import css from "./DevonlarTarkibi.module.css";
import DevonlarTarkibiImages from "../DevonlarTarkibiImages/DevonlarTarkibiImages.jsx";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Janrlar from "../Janrlar/Janrlar.jsx";
import JanrData from "../JanrData/JanrData.jsx";
import JanrSingleData from "../JanrSingleData/JanrSingleData.jsx";
import useFetch from "../../hooks/useFetch.jsx";
import { DataContext } from "../../context/DataContext.jsx";
import { JanrContext } from "../../context/JanrContext.jsx";

const DevonTarkibi = () => {
  const { selectedCardData, isCardLoading } = useContext(DataContext);
  const { data, isLoading, error } = useFetch(
    "https://biryuzikki.uz/api/v1/general/",
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.genres) {
    return <div>No data available</div>;
  }

  const { setSelectedGenre } = useContext(JanrContext);

  return (
    <div className={css.devonTarkibi}>
      <h2 className={css.devonTarkibiTitle}>Devon tarkibi</h2>
      {isCardLoading && (
        <div className={css.loading}>Loading selected card data...</div>
      )}
      <div className={css.devonlarImages}>
        {!isCardLoading && (
          <Swiper slidesPerView={10} spaceBetween={17}>
            {selectedCardData
              ? selectedCardData.genres.map((item) => (
                  <SwiperSlide key={item.ordering_number}>
                    <div onClick={() => setSelectedGenre(item)}>
                      <DevonlarTarkibiImages
                        number={item.counts}
                        name={item.name}
                      />
                    </div>
                  </SwiperSlide>
                ))
              : data.genres.map((item) => (
                  <SwiperSlide key={item.ordering_number}>
                    <div onClick={() => setSelectedGenre(item)}>
                      <DevonlarTarkibiImages
                        number={item.counts}
                        name={item.name}
                      />
                    </div>
                  </SwiperSlide>
                ))}
          </Swiper>
        )}
      </div>
      <div className={css.devonTarkibiDataWrapper}>
        <Janrlar />
        <JanrData />
        <JanrSingleData />
      </div>
    </div>
  );
};

export default DevonTarkibi;
