import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import ReviewCard from "../../../components/ReviewCard";

import { reviews } from "../../../data/reviews.js";

export default function HomeReviews() {
  const reviewsBlock = reviews.map((item) => (
    <SwiperSlide key={item.id}>
      <ReviewCard {...item} />
    </SwiperSlide>
  ));

  return (
    <section className="home-reviews">
      <h2 className="home-reviews-heading">What our customers&nbsp;says</h2>
      <Swiper
        loop={true}
        navigation={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {reviewsBlock}
      </Swiper>
    </section>
  );
}
