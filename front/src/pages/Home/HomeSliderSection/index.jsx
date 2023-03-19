import { forwardRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper";

import ProductCard from "../../../components/ProductCard";
import Button from "../../../components/Button";
import "../../../index.scss";

const HomeSliderSection = forwardRef(({ heading, subheading, array }, ref) => {
  const productsBlock = array.map((item) => (
    <SwiperSlide key={item.id}>
      <ProductCard {...item} />
    </SwiperSlide>
  ));
  return (
    <section className="home-slider-section">
      <h2 className="home-section-heading">
        {heading} <span className="home-section-subheading">{subheading}</span>
      </h2>
      <Swiper
        ref={ref}
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          270: {
            slidesPerView: 1,
          },
          415: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper slider-container"
      >
        {productsBlock}
      </Swiper>
      <Button className="button black" />
    </section>
  );
});
export default HomeSliderSection;
