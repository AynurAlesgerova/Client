// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import background from "../../../../assets/images/carousel-background.svg";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="homepage-carousel"
      >
        <SwiperSlide>
          <div className="flex gap-20 px-10">
            <div className="content w-2/5 p- pl-36 pt-20">
              <p className="text-sm font-medium text-start mb-3 ">
                iPhone 14 Pro Max
              </p>
              <p className="font-semibold text-4xl text-start flex-col justify-center items-center mb-4 w-3/4">
                Performans üçün dizayn edildi.
              </p>
              <p className="text-start text-sm mb-8 font-medium">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking.
              </p>
              <div className=" py-2.5 rounded-md border-2 border-black w-1/4 text-sm  hover:bg-black hover:text-white">
                <button className="font-semibold pl-3">Alış-veriş et</button>
              </div>
            </div>
            <div className="w-2/5 absolute bottom-0 right-20">
              <img src={background} style={{ width: "500px" }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-20 px-10">
            <div className="content w-2/5 p- pl-36 pt-20">
              <p className="text-sm font-medium text-start mb-3 ">
                iPhone 14 Pro Max
              </p>
              <p className="font-semibold text-4xl text-start flex-col justify-center items-center mb-4 w-3/4">
                Performans üçün dizayn edildi.
              </p>
              <p className="text-start text-sm mb-8 font-medium">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking.
              </p>
              <div className=" py-2.5 rounded-md border-2 border-black w-1/4 text-sm  hover:bg-black hover:text-white">
                <button className="font-semibold pl-3">Alış-veriş et</button>
              </div>
            </div>
            <div className="w-2/5 absolute bottom-0 right-20">
              <img src={background} style={{ width: "500px" }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-20 px-10">
            <div className="content w-2/5 p- pl-36 pt-20">
              <p className="text-sm font-medium text-start mb-3 ">
                iPhone 14 Pro Max
              </p>
              <p className="font-semibold text-4xl text-start flex-col justify-center items-center mb-4 w-3/4">
                Performans üçün dizayn edildi.
              </p>
              <p className="text-start text-sm mb-8 font-medium">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking.
              </p>
              <div className=" py-2.5 rounded-md border-2 border-black w-1/4 text-sm  hover:bg-black hover:text-white">
                <button className="font-semibold pl-3">Alış-veriş et</button>
              </div>
            </div>
            <div className="w-2/5 absolute bottom-0 right-20">
              <img src={background} style={{ width: "500px" }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-20 px-10">
            <div className="content w-2/5 p- pl-36 pt-20">
              <p className="text-sm font-medium text-start mb-3 ">
                iPhone 14 Pro Max
              </p>
              <p className="font-semibold text-4xl text-start flex-col justify-center items-center mb-4 w-3/4">
                Performans üçün dizayn edildi.
              </p>
              <p className="text-start text-sm mb-8 font-medium">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking.
              </p>
              <div className=" py-2.5 rounded-md border-2 border-black w-1/4 text-sm  hover:bg-black hover:text-white">
                <button className="font-semibold pl-3">Alış-veriş et</button>
              </div>
            </div>
            <div className="w-2/5 absolute bottom-0 right-20">
              <img src={background} style={{ width: "500px" }} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
