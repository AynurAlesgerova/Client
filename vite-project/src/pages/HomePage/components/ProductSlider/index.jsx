import { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import productImage from "../../../../assets/images/product-image.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Product from "../Product/index";

export default function ProductSlider() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => (
      <Product
        key={index}
        brand={"Spykar"}
        name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
        currentPrice={400.99}
        previousPrice={550.99}
        ratingCount={"3.7"}
        commentCount={"120"}
        image={productImage}
      />
    ))
  );
  return (
    <>
      <Swiper
       className="swiper2"
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index} className="Slider-product">
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
