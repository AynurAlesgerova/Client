import "swiper/css";
import nikeLogo from "../../assets/images/nike-logo.svg";
import Card from "./components/Card/index";
import appleLogo from "../../assets/images/apple.svg";
import blueMark from "../../assets/images/blue mark.svg";
import computer from "../../assets/images/computer.svg";
import Product from "./components/Product";
import kotonBack from "../../assets/images/kotonn.png";
import kotonLogo from "../../assets/images/koton-logo.svg";
import { useState } from "react";

const HomePage = () => {
  const [mail, setMail] = useState("");
  return (
    <div className="container">
      <section className="brands-section mb-10 ">
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
      <section className="cards flex flex-wrap mb-16 gap-10 px-20">
        <Card
          slogan={true}
          width={"520px"}
          height={"350px"}
          backgroundImg={kotonBack}
          logo={kotonLogo}
          firstDate={"28mart"}
          lastDate={"1aprel"}
        />
        <Card
          slogan={true}
          width={"520px"}
          height={"350px"}
          backgroundImg={kotonBack}
          logo={kotonLogo}
          firstDate={"28mart"}
          lastDate={"1aprel"}
        />
        <Card
          slogan={true}
          width={"520px"}
          height={"350px"}
          backgroundImg={kotonBack}
          logo={kotonLogo}
          firstDate={"28mart"}
          lastDate={"1aprel"}
        />
        <Card
          slogan={true}
          width={"520px"}
          height={"350px"}
          backgroundImg={kotonBack}
          logo={kotonLogo}
          firstDate={"28mart"}
          lastDate={"1aprel"}
        />
      </section>
      <div className="best-seller mb-16">
        <h1 className="font-semibold text-3xl mb-8">Ən çox satan mağazalar</h1>
        <div className="flex  gap-10">
          <div
            className=" py-6 px-4 w-1/3 flex-col rounded-lg"
            style={{ background: "#F7F9FA" }}
          >
            <div className="brand mb-4 flex gap-4">
              <div className="p-4 rounded-full bg-white">
                <img className="brand-img" src={appleLogo} />
              </div>
              <div>
                <div className="name mb-2 flex gap-1 items-center ">
                  <p className="font-semibold text-lg">Apple</p>
                  <img src={blueMark} />
                </div>
                <div className="rating flex gap-2">
                  <p
                    className="px-2  w-1/4 rounded-md bg-emerald-50"
                    style={{ border: "1px solid #179739" }}
                  >
                    9.7
                  </p>
                  <p
                    className="px-2 rounded-md"
                    style={{
                      border: "1px solid #FF6400",
                      backgroundColor: "rgba(255, 100, 0, 0.04)",
                    }}
                  >
                    30.9 izleyici
                  </p>
                </div>
              </div>
            </div>
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
            <div className="brand mb-4 flex gap-4">
              <div className="p-4 rounded-full bg-white">
                <img className="brand-img" src={appleLogo} />
              </div>
              <div>
                <div className="name mb-2 flex gap-1 items-center ">
                  <p className="font-semibold text-lg">Apple</p>
                  <img src={blueMark} />
                </div>
                <div className="rating flex gap-2">
                  <p
                    className="px-2 w-1/4 rounded-md  bg-emerald-50"
                    style={{ border: "1px solid #179739" }}
                  >
                    9.7
                  </p>
                  <p
                    className="px-2 rounded-md"
                    style={{
                      border: "1px solid #FF6400",
                      backgroundColor: "rgba(255, 100, 0, 0.04)",
                    }}
                  >
                    30.9 izleyici
                  </p>
                </div>
              </div>
            </div>
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
            <div className="brand mb-4 flex gap-4">
              <div className="p-4 rounded-full bg-white">
                <img className="brand-img" src={appleLogo} />
              </div>
              <div>
                <div className="name mb-2 flex gap-1 items-center">
                  <p className="font-semibold text-lg">Apple</p>
                  <img src={blueMark} />
                </div>
                <div className="rating flex gap-2">
                  <p
                    className="px-2 w-1/4 rounded-md  bg-emerald-50"
                    style={{ border: "1px solid #179739" }}
                  >
                    9.7
                  </p>
                  <p
                    className="px-2  rounded-md"
                    style={{
                      border: "1px solid #FF6400",
                      backgroundColor: "rgba(255, 100, 0, 0.04)",
                    }}
                  >
                    30.9 izleyici
                  </p>
                </div>
              </div>
            </div>
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
      </div>
      <section className="mb-16 px-10">
        <div className="flex flex-wrap  gap-5">
          <Card
            slogan={"false"}
            width={"370px"}
            height={"320px"}
            backgroundImg={kotonBack}
            logo={kotonLogo}
            firstDate={"20mart"}
            lastDate={"1aprel"}
          />
          <Card
            slogan={"false"}
            width={"370px"}
            height={"320px"}
            backgroundImg={kotonBack}
            logo={kotonLogo}
            firstDate={"28mart"}
            lastDate={"1aprel"}
          />
          <Card
            slogan={"false"}
            width={"370px"}
            height={"320px"}
            backgroundImg={kotonBack}
            logo={kotonLogo}
            firstDate={"28mart"}
            lastDate={"1aprel"}
          />
          <Card
            slogan={"false"}
            width={"370px"}
            height={"320px"}
            backgroundImg={kotonBack}
            logo={kotonLogo}
            firstDate={"28mart"}
            lastDate={"1aprel"}
          />
          <Card
            slogan={"false"}
            width={"370px"}
            height={"320px"}
            backgroundImg={kotonBack}
            logo={kotonLogo}
            firstDate={"28mart"}
            lastDate={"1aprel"}
          />
          <Card
            slogan={"false"}
            width={"370px"}
            height={"320px"}
            backgroundImg={kotonBack}
            logo={kotonLogo}
            firstDate={"28mart"}
            lastDate={"1aprel"}
          />
          <Card
            slogan={"false"}
            width={"370px"}
            height={"320px"}
            backgroundImg={kotonBack}
            logo={kotonLogo}
            firstDate={"28mart"}
            lastDate={"1aprel"}
          />
          <Card
            slogan={"false"}
            width={"370px"}
            height={"320px"}
            backgroundImg={kotonBack}
            logo={kotonLogo}
            firstDate={"28mart"}
            lastDate={"1aprel"}
          />
          <Card
            slogan={"false"}
            width={"370px"}
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
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
