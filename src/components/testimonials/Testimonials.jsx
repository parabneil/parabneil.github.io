import React from "react";
import "./testimonials.css";
// Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { resumeData } from "../../utils/resume";

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
      <h2 className="section__title">My client says</h2>
      <span className="section__subtitle">Testimonial</span>
      <Swiper
        className="testimonial__container container"
        loop={true}
        grabCursor={true}
        speed={500}
        autoHeight={true}
        spaceBetween={24}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
        }}
        modules={[Pagination]}
      >
        {resumeData.testimonials.map((test) => {
          return (
            <SwiperSlide
              className="testimonial__card"
              key={test.id}
              role="group"
              aria-roledescription="testimonial slide"
            >
              <img
                src={test.image}
                alt={test.name}
                className="testimonial__img"
              />
              <h3 className="testimonial__name">{test.name}</h3>
              <p className="testimonial__description">{test.description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
