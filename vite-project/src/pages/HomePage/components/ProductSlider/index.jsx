// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import productImage from "../../../../assets/images/product-image.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination,Navigation } from "swiper/modules";
import Product from "../Product";

export default function ProductSlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Navigation]}
        className="ProductSlider"
      >
        <SwiperSlide>
          <Product
            // key={index}
            width={"300px"}
            styled={true}
            brand={"Spykar"}
            name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
            currentPrice={400.99}
            previousPrice={550.99}
            ratingCount={"3.7"}
            commentCount={"120"}
            image={productImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            // key={index}
            width={"300px"}
            styled={true}
            brand={"Spykar"}
            name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
            currentPrice={400.99}
            previousPrice={550.99}
            ratingCount={"3.7"}
            commentCount={"120"}
            image={productImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            // key={index}
            width={"300px"}
            styled={true}
            brand={"Spykar"}
            name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
            currentPrice={400.99}
            previousPrice={550.99}
            ratingCount={"3.7"}
            commentCount={"120"}
            image={productImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            // key={index}
            brand={"Spykar"}
            width={"300px"}
            styled={true}
            name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
            currentPrice={400.99}
            previousPrice={550.99}
            ratingCount={"3.7"}
            commentCount={"120"}
            image={productImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            // key={index}
            brand={"Spykar"}
            width={"300px"}
            styled={true}
            name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
            currentPrice={400.99}
            previousPrice={550.99}
            ratingCount={"3.7"}
            commentCount={"120"}
            image={productImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            // key={index}
            brand={"Spykar"}
            width={"300px"}
            styled={true}
            name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
            currentPrice={400.99}
            previousPrice={550.99}
            ratingCount={"3.7"}
            commentCount={"120"}
            image={productImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            // key={index}
            brand={"Spykar"}
            width={"300px"}
            styled={true}
            name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
            currentPrice={400.99}
            previousPrice={550.99}
            ratingCount={"3.7"}
            commentCount={"120"}
            image={productImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            // key={index}
            brand={"Spykar"}
            width={"300px"}
            styled={true}
            name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
            currentPrice={400.99}
            previousPrice={550.99}
            ratingCount={"3.7"}
            commentCount={"120"}
            image={productImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            // key={index}
            brand={"Spykar"}
            width={"300px"}
            styled={true}
            name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
            currentPrice={400.99}
            previousPrice={550.99}
            ratingCount={"3.7"}
            commentCount={"120"}
            image={productImage}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
