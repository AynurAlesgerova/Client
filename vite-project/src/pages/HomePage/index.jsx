import nikeLogo from "../../assets/images/nike-logo.svg";
import Card from "./components/Card/index";
import computer from "../../assets/images/computer.svg";
import Product from "./components/Product";
import kotonBack from "../../assets/images/kotonnnn.jpeg";
import kotonLogo from "../../assets/images/koton-logo.svg";
import productImage from "../../assets/images/product-image.svg";
import BrandLogoWrapper from "../../components/BrandLogoWrapper/index";
import { useState } from "react";
import apple from "../../assets/images/apple.svg";
import Carousel from "../HomePage/components/Carousel/index";
import ProductSlider from "../HomePage/components/ProductSlider/index";
const HomePage = () => {
  const [mail, setMail] = useState("");
  return (
    <div className="">
      <div style={{ height: "480px" }} className="mb-16">
        <Carousel />
      </div>
      <div className="container">
        <section className="brands-section mb-28 ">
          <h1 className="font-semibold text-2xl mb-10">Brendlər</h1>
          <div className="brands flex flex-wrap gap-6">
            <div className="brand  flex gap-2 px-6 py-4  border-2 border-transparent rounded-xl items-center justify-start bg-gray-100">
              <div className="brand-image-box p-2  rounded-full bg-white">
                <img className="brand-img" src={nikeLogo} />
              </div>
              <p className="brand-name font-medium text-lg">Nike</p>
            </div>
            <div className="brand  flex gap-2 px-6  py-4 border-2 border-transparent rounded-xl items-center justify-start bg-gray-100">
              <div className="brand-image-box p-2  rounded-full bg-white">
                <img className="brand-img" src={nikeLogo} />
              </div>
              <p className="brand-name font-medium text-lg">Nike</p>
            </div>
            <div className="brand flex gap-2 px-6  py-4border-2 border-transparent rounded-xl items-center justify-start bg-gray-100">
              <div className="brand-image-box p-2  rounded-full bg-white">
                <img className="brand-img" src={nikeLogo} />
              </div>
              <p className="brand-name font-medium text-lg">Nike</p>
            </div>
            <div className="brand flex gap-2 px-6 py-4  border-2 border-transparent rounded-xl items-center justify-start bg-gray-100">
              <div className="brand-image-box p-2  rounded-full bg-white">
                <img className="brand-img" src={nikeLogo} />
              </div>
              <p className="brand-name font-medium text-lg">Nike</p>
            </div>
            <div className="brand  flex gap-2 px-6  py-4 border-2 border-transparent rounded-xl items-center justify-start bg-gray-100">
              <div className="brand-image-box p-2  rounded-full bg-white">
                <img className="brand-img" src={nikeLogo} />
              </div>
              <p className="brand-name font-medium text-lg">Nike</p>
            </div>
            <div className="brand  flex gap-2 px-6 py-4 border-2 border-transparent rounded-xl items-center justify-start bg-gray-100">
              <div className="brand-image-box p-2  rounded-full bg-white">
                <img className="brand-img" src={nikeLogo} />
              </div>
              <p className="brand-name font-medium text-lg">Nike</p>
            </div>
            <div className="brand  flex gap-2 px-6 py-4 border-2 border-transparent rounded-xl items-center justify-start bg-gray-100">
              <div className="brand-image-box p-2  rounded-full bg-white">
                <img className="brand-img" src={nikeLogo} />
              </div>
              <p className="brand-name font-medium text-lg">Nike</p>
            </div>
            <div className="brand  flex gap-2 px-6 py-4 border-2 border-transparent rounded-xl items-center justify-start bg-gray-100">
              <div className="brand-image-box p-2  rounded-full bg-white">
                <img className="brand-img" src={nikeLogo} />
              </div>
              <p className="brand-name font-medium text-lg">Nike</p>
            </div>
          </div>
        </section>
        <section className="slider-products mb-20" style={{ height: "500px" }}>
          <p className="font-semibold text-2xl mb-10">Sizə uyğun məhsullar</p>
          <ProductSlider />
        </section>
        <section className="cards flex flex-wrap mb-20 gap-10 mt-20">
          <Card
            slogan={true}
            width={"600px"}
            height={"350px"}
            backgroundImg={kotonBack}
            logo={kotonLogo}
            firstDate={"28mart"}
            lastDate={"1aprel"}
          />
          <Card
            slogan={true}
            width={"600px"}
            height={"350px"}
            backgroundImg={kotonBack}
            logo={kotonLogo}
            firstDate={"28mart"}
            lastDate={"1aprel"}
          />
          <Card
            slogan={true}
            width={"600px"}
            height={"350px"}
            backgroundImg={kotonBack}
            logo={kotonLogo}
            firstDate={"28mart"}
            lastDate={"1aprel"}
          />
          <Card
            slogan={true}
            width={"600px"}
            height={"350px"}
            backgroundImg={kotonBack}
            logo={kotonLogo}
            firstDate={"28mart"}
            lastDate={"1aprel"}
          />
        </section>
        <section className="best-seller mb-20">
          <h1 className="font-semibold text-3xl mb-8">
            Ən çox satan mağazalar
          </h1>
          <div className="flex  gap-10">
            <div
              className=" py-6 px-4 w-1/3 flex-col rounded-lg"
              style={{ background: "#F7F9FA" }}
            >
              <BrandLogoWrapper
                logo={apple}
                brandName={"Apple"}
                ratingCount={"9.7"}
                followerCount={"30.9"}
              />
              <div className="details flex gap-3 items-center justify-between px-3">
                <div className="p-5 bg-white rounded-lg">
                  <img src={computer} />
                </div>
                <div className="p-5 bg-white rounded-lg">
                  <img src={computer} />
                </div>
                <div className="p-5 bg-white rounded-lg">
                  <img src={computer} />
                </div>
              </div>
            </div>
            <div
              className=" py-6 px-4 w-1/3 flex-col rounded-lg"
              style={{ background: "#F7F9FA" }}
            >
              <BrandLogoWrapper
                logo={apple}
                brandName={"Apple"}
                ratingCount={"9.7"}
                followerCount={"30.9"}
              />

              <div className="details flex gap-3 items-center justify-between px-3">
                <div className="p-5 bg-white rounded-lg">
                  <img src={computer} />
                </div>
                <div className="p-5 bg-white rounded-lg">
                  <img src={computer} />
                </div>
                <div className="p-5 bg-white rounded-lg">
                  <img src={computer} />
                </div>
              </div>
            </div>
            <div
              className=" py-6 px-4 w-1/3 flex-col rounded-lg"
              style={{ background: "#F7F9FA" }}
            >
              <BrandLogoWrapper
                logo={apple}
                brandName={"Apple"}
                ratingCount={"9.7"}
                followerCount={"30.9"}
              />

              <div className="details flex gap-3 items-center justify-between px-3">
                <div className="p-5 bg-white rounded-lg">
                  <img src={computer} />
                </div>
                <div className="p-5 bg-white rounded-lg">
                  <img src={computer} />
                </div>
                <div className="p-5 bg-white rounded-lg">
                  <img src={computer} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-20">
          <div className="flex flex-wrap gap-5">
            <Card
              slogan={"false"}
              width={"400px"}
              height={"320px"}
              backgroundImg={kotonBack}
              logo={kotonLogo}
              firstDate={"20mart"}
              lastDate={"1aprel"}
            />
            <Card
              slogan={"false"}
              width={"400px"}
              height={"320px"}
              backgroundImg={kotonBack}
              logo={kotonLogo}
              firstDate={"28mart"}
              lastDate={"1aprel"}
            />
            <Card
              slogan={"false"}
              width={"400px"}
              height={"320px"}
              backgroundImg={kotonBack}
              logo={kotonLogo}
              firstDate={"28mart"}
              lastDate={"1aprel"}
            />
            <Card
              slogan={"false"}
              width={"400px"}
              height={"320px"}
              backgroundImg={kotonBack}
              logo={kotonLogo}
              firstDate={"28mart"}
              lastDate={"1aprel"}
            />
            <Card
              slogan={"false"}
              width={"400px"}
              height={"320px"}
              backgroundImg={kotonBack}
              logo={kotonLogo}
              firstDate={"28mart"}
              lastDate={"1aprel"}
            />
            <Card
              slogan={"false"}
              width={"400px"}
              height={"320px"}
              backgroundImg={kotonBack}
              logo={kotonLogo}
              firstDate={"28mart"}
              lastDate={"1aprel"}
            />
            <Card
              slogan={"false"}
              width={"400px"}
              height={"320px"}
              backgroundImg={kotonBack}
              logo={kotonLogo}
              firstDate={"28mart"}
              lastDate={"1aprel"}
            />
            <Card
              slogan={"false"}
              width={"400px"}
              height={"320px"}
              backgroundImg={kotonBack}
              logo={kotonLogo}
              firstDate={"28mart"}
              lastDate={"1aprel"}
            />
            <Card
              slogan={"false"}
              width={"400px"}
              height={"320px"}
              backgroundImg={kotonBack}
              logo={kotonLogo}
              firstDate={"28mart"}
              lastDate={"1aprel"}
            />
          </div>
        </section>
        <section className="products">
          <h1 className="font-semibold text-3xl mb-10">
            Bu günün populyar məhsulları!
          </h1>
          <div className="tabs mb-10">
            <div className="flex gap-5">
              <div className="flex items-center justify-center px-5 py-2 rounded-3xl border-2">
                Geyim & paltar
              </div>
              <div className="flex items-center justify-center px-5 py-2 rounded-3xl border-2">
                Elektronika
              </div>
              <div className="flex items-center justify-center px-5 py-2 rounded-3xl border-2">
                Ayaqqabı & Çanta
              </div>
              <div className="flex items-center justify-center px-5 py-2 rounded-3xl border-2">
                Ev & Mebel
              </div>
              <div className="flex items-center justify-center px-5 py-2 rounded-3xl border-2">
                Oyuncaq
              </div>
              <div className="flex items-center justify-center px-5 py-2 rounded-3xl border-2">
                Kasmetika
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <Product
              brand={"Spykar"}
              name={
                "Lorem ipsum dolor sit amet consectetur  Dolores praesentium"
              }
              currentPrice={400.99}
              previousPrice={550.99}
              ratingCount={"3.7"}
              commentCount={"120"}
              image={productImage}
            />
            <Product
              brand={"Bershka"}
              name={"Lorem ipsum dolor sit amet consectetu Dolores praesentium"}
              currentPrice={250.99}
              previousPrice={400.99}
              ratingCount={"4.5"}
              commentCount={"100"}
              image={productImage}
            />
            <Product
              brand={"Spykar"}
              name={"Lorem ipsum dol Dolores praesentium Dolores praesentium"}
              currentPrice={220.99}
              previousPrice={190.99}
              ratingCount={"2.5"}
              commentCount={"150"}
              image={productImage}
            />
            <Product
              brand={"Spykar"}
              name={"Lorem ipsum dol Dolores praesentium Dolores praesentium"}
              currentPrice={220.99}
              previousPrice={190.99}
              ratingCount={"3.2"}
              commentCount={"150"}
              image={productImage}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
